// utils/generateToken.js
const jwt = require('jsonwebtoken');

function generateToken(user) {
  return jwt.sign(
    { id: user._id, email: user.email, isAdmin: user.isAdmin || false },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
}

module.exports = generateToken;
