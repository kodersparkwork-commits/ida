const Razorpay = require('razorpay');
const crypto = require('crypto');
const Course = require('../models/Course');
const Enrollment = require('../models/Enrollment');

// Initialize Razorpay
console.log("Razorpay Key ID:", process.env.RAZORPAY_KEY_ID);
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Create Order
exports.createOrder = async (req, res, next) => {
    try {
        const { courseId, currency = 'INR' } = req.body;

        // Find course to get price
        let course;
        // Check if courseId is ObjectId or slug
        if (courseId.match(/^[0-9a-fA-F]{24}$/)) {
            course = await Course.findById(courseId);
        } else {
            course = await Course.findOne({ slug: courseId });
        }

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        let amount;
        if (currency === 'INR') {
            amount = course.price_usd * 85 * 100; // Convert USD to INR (approx 85) and then to paise
        } else {
            amount = course.price_usd * 100; // USD cents
        }

        const options = {
            amount: Math.round(amount),
            currency: currency,
            receipt: `receipt_order_${Date.now()}`,
            notes: {
                courseId: course._id.toString(),
                userId: req.user._id.toString()
            }
        };

        const order = await razorpay.orders.create(options);
        res.json(order);

    } catch (error) {
        console.error("Razorpay Order Error:", error);
        res.status(500).json({ message: 'Something went wrong with payment initialization' });
    }
};

// Verify Payment
exports.verifyPayment = async (req, res, next) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, courseId } = req.body;

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest('hex');

        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {
            // Payment successful, enroll user
            let course;
            if (courseId.match(/^[0-9a-fA-F]{24}$/)) {
                course = await Course.findById(courseId);
            } else {
                course = await Course.findOne({ slug: courseId });
            }

            if (!course) return res.status(404).json({ message: 'Course not found for enrollment' });

            // Check if already enrolled
            const existingEnrollment = await Enrollment.findOne({
                user_id: req.user._id,
                course_id: course._id
            });

            if (existingEnrollment) {
                return res.json({ message: "Payment successful, already enrolled", success: true });
            }

            const enrollment = new Enrollment({
                user_id: req.user._id,
                course_id: course._id,
                enrolled_at: new Date(),
                payment_id: razorpay_payment_id
            });

            await enrollment.save();

            res.json({
                message: "Payment successful and User enrolled",
                success: true,
                enrollmentId: enrollment._id
            });

        } else {
            res.status(400).json({
                message: "Invalid signature",
                success: false
            });
        }

    } catch (error) {
        console.error("Payment Verification Error:", error);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
};
