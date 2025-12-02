import React, { useEffect, useState } from 'react';
import API from '../../api';
import { useNavigate, useParams } from 'react-router-dom';

export default function AdminCourseForm() {
  const { id } = useParams(); // id for editing
  const [title, setTitle] = useState('');
  const [short_description, setShortDescription] = useState('');
  const [description, setDescription] = useState('');
  const [price_usd, setPriceUsd] = useState(0);
  const [thumbnail, setThumbnail] = useState(null);

  // ⭐ NEW — Videos State
  const [videos, setVideos] = useState([{ title: '', video_url: '' }]);

  const navigate = useNavigate();

  // ⭐ Load existing course when editing
  useEffect(() => {
    if (id) {
      (async () => {
        const { data } = await API.get(`/api/admin/courses/${id}`);
        const c = data.course || data;

        setTitle(c.title);
        setShortDescription(c.short_description || '');
        setDescription(c.description || '');
        setPriceUsd(c.price_usd || 0);

        // Load previous videos
        if (c.videos && c.videos.length > 0) {
          setVideos(c.videos);
        }
      })();
    }
  }, [id]);

  const handleFile = (e) => {
    setThumbnail(e.target.files[0]);
  };

  // ⭐ Handle Video Change
  const handleVideoChange = (index, field, value) => {
    const newVideos = [...videos];
    newVideos[index][field] = value;
    setVideos(newVideos);
  };

  // ⭐ Add New Video Field
  const addVideo = () => {
    setVideos([...videos, { title: '', url: '' }]);
  };

  // ⭐ Remove a Video Field
  const removeVideo = (index) => {
    const newVideos = videos.filter((_, i) => i !== index);
    setVideos(newVideos);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append('title', title);
      form.append('short_description', short_description);
      form.append('description', description);
      form.append('price_usd', price_usd);
  
      if (thumbnail) form.append('thumbnail', thumbnail);
  
      // Append video URLs from manual input
      form.append('videos', JSON.stringify(videos.filter(v => v.url).map(v => ({ title: v.title, url: v.url }))));
  
      // Append uploaded files
      const videoFiles = document.querySelector('input[name="videos"]').files;
      for (let file of videoFiles) {
        form.append('videos', file); // matches multer.array('videos')
      }
  
      if (id) {
        await API.put(`/api/admin/courses/${id}`, form, { headers: { 'Content-Type': 'multipart/form-data' } });
      } else {
        await API.post('/api/admin/courses', form, { headers: { 'Content-Type': 'multipart/form-data' } });
      }
  
      navigate('/admin');
    } catch (err) {
      console.error(err);
      alert('Save failed');
    }
  };
  

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4">{id ? 'Edit Course' : 'Add Course'}</h1>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
          
          {/* Title */}
          <input 
            value={title} 
            onChange={(e)=>setTitle(e.target.value)} 
            placeholder="Title" required 
            className="w-full px-3 py-2 border rounded" 
          />

          {/* Short Description */}
          <input 
            value={short_description} 
            onChange={(e)=>setShortDescription(e.target.value)} 
            placeholder="Short description" 
            className="w-full px-3 py-2 border rounded" 
          />

          {/* Full Description */}
          <textarea 
            value={description} 
            onChange={(e)=>setDescription(e.target.value)} 
            placeholder="Description" 
            className="w-full px-3 py-2 border rounded" 
            rows="6" 
          />

          {/* Price */}
          <input 
            type="number" 
            value={price_usd} 
            onChange={(e)=>setPriceUsd(e.target.value)} 
            placeholder="Price USD" 
            className="w-full px-3 py-2 border rounded" 
          />

          {/* Thumbnail */}
          <input type="file" onChange={handleFile} accept="image/*" />

          {/* ⭐ VIDEOS SECTION */}
          <div className="border p-4 rounded">
            <h2 className="font-bold mb-3">Course Videos</h2>

            {videos.map((video, index) => (
              <div key={index} className="border p-3 rounded mb-3 space-y-2">

                <input
                  value={video.title}
                  onChange={(e) => handleVideoChange(index, "title", e.target.value)}
                  placeholder="Video Title"
                  className="w-full px-3 py-2 border rounded"
                />

               <input
                value={video.video_url}
                onChange={(e) => handleVideoChange(index, "video_url", e.target.value)}
                placeholder="Video URL"
                className="w-full px-3 py-2 border rounded"
               />


                <button 
                  type="button"
                  onClick={() => removeVideo(index)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Remove Video
                </button>
              </div>
            ))}

            <button 
              type="button" 
              onClick={addVideo}
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              + Add Another Video
            </button>
          </div>

          {/* Save + Cancel Buttons */}
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleSubmit}>Save</button>
            <button type="button" onClick={() => navigate('/admin')} className="px-4 py-2 border rounded">
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
