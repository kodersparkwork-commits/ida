import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../api';

export default function AdminVideoLibrary() {
    const navigate = useNavigate();
    const [folders, setFolders] = useState([]);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedFolder, setSelectedFolder] = useState(null);

    // Form states
    const [newFolderName, setNewFolderName] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [videoTitle, setVideoTitle] = useState('');
    const [embedTag, setEmbedTag] = useState('');

    useEffect(() => {
        fetchFolders();
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const res = await API.get('/api/courses');
            setCourses(res.data.courses || []);
        } catch (err) {
            console.error("Failed to fetch courses", err);
        }
    };

    const fetchFolders = async () => {
        try {
            const res = await API.get('/api/video-folders');
            setFolders(res.data);
            setLoading(false);
        } catch (err) {
            console.error(err);
            alert('Failed to load folders');
            setLoading(false);
        }
    };

    const handleCreateFolder = async (e) => {
        e.preventDefault();
        try {
            await API.post('/api/video-folders', {
                name: newFolderName,
                courseId: selectedCourse || null
            });
            setNewFolderName('');
            setSelectedCourse('');
            fetchFolders();
            alert('Folder created!');
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.message || 'Failed to create folder');
        }
    };

    const handleDeleteFolder = async (id) => {
        if (!confirm('Are you sure you want to delete this folder and all its videos?')) return;
        try {
            await API.delete(`/api/video-folders/${id}`);
            if (selectedFolder?._id === id) setSelectedFolder(null);
            fetchFolders();
        } catch (err) {
            console.error(err);
            alert('Failed to delete folder');
        }
    };

    const handleAddVideo = async (e) => {
        e.preventDefault();
        if (!selectedFolder) return;
        try {
            const res = await API.post(`/api/video-folders/${selectedFolder._id}/videos`, {
                title: videoTitle,
                embedTag
            });

            // Update local state
            const updatedFolder = res.data;
            setFolders(prev => prev.map(f => f._id === updatedFolder._id ? updatedFolder : f));
            setSelectedFolder(updatedFolder);

            // Reset form
            setVideoTitle('');
            setEmbedTag('');
            alert('Video added!');
        } catch (err) {
            console.error(err);
            alert('Failed to add video');
        }
    };

    const handleDeleteVideo = async (videoId) => {
        if (!confirm('Delete this video?')) return;
        try {
            const res = await API.delete(`/api/video-folders/${selectedFolder._id}/videos/${videoId}`);
            const updatedFolder = res.data;
            setFolders(prev => prev.map(f => f._id === updatedFolder._id ? updatedFolder : f));
            setSelectedFolder(updatedFolder);
        } catch (err) {
            console.error(err);
            alert('Failed to delete video');
        }
    };

    if (loading) return <div className="p-10 text-center">Loading...</div>;

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">Video Library Management</h1>
                    <button
                        onClick={() => navigate('/admin')}
                        className="text-slate-600 hover:text-cyan-600 transition-colors"
                    >
                        ← Back to Dashboard
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Col: Folders List & Create */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Create Folder */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <h2 className="text-lg font-bold text-slate-800 mb-4">Create New Folder</h2>
                            <form onSubmit={handleCreateFolder} className="space-y-3">
                                <input
                                    type="text"
                                    placeholder="Folder Name (e.g., Orthodontics)"
                                    value={newFolderName}
                                    onChange={e => setNewFolderName(e.target.value)}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
                                    required
                                />
                                <select
                                    value={selectedCourse}
                                    onChange={e => setSelectedCourse(e.target.value)}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none bg-white"
                                >
                                    <option value="">-- Assign to Course (Optional) --</option>
                                    {courses.map(course => (
                                        <option key={course._id} value={course._id}>
                                            {course.title}
                                        </option>
                                    ))}
                                </select>
                                <button type="submit" className="w-full btn-brand py-2">Create Folder</button>
                            </form>
                        </div>

                        {/* Folder List */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="p-4 bg-slate-50 border-b border-slate-200">
                                <h2 className="font-bold text-slate-700">All Folders</h2>
                            </div>
                            <div className="divide-y divide-slate-100 max-h-[600px] overflow-y-auto">
                                {folders.length === 0 && <p className="p-4 text-slate-400 text-center text-sm">No folders created yet.</p>}
                                {folders.map(folder => (
                                    <div
                                        key={folder._id}
                                        className={`p-4 hover:bg-slate-50 cursor-pointer transition-colors flex justify-between items-center group ${selectedFolder?._id === folder._id ? 'bg-cyan-50 border-l-4 border-cyan-500' : ''}`}
                                        onClick={() => setSelectedFolder(folder)}
                                    >
                                        <div>
                                            <p className={`font-semibold ${selectedFolder?._id === folder._id ? 'text-cyan-800' : 'text-slate-700'}`}>
                                                {folder.name}
                                                {folder.courseId && (
                                                    <span className="ml-2 text-[10px] uppercase tracking-wider bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded border border-slate-200">
                                                        {folder.courseId.title}
                                                    </span>
                                                )}
                                            </p>
                                            <p className="text-xs text-slate-400">{folder.videos?.length || 0} videos</p>
                                        </div>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleDeleteFolder(folder._id); }}
                                            className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity p-2"
                                            title="Delete Folder"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Col: Manage Selected Folder */}
                    <div className="lg:col-span-2">
                        {selectedFolder ? (
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                    <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <span className="text-cyan-600">📂</span>
                                        Manage Videos: {selectedFolder.name}
                                    </h2>

                                    {/* Edit Folder Settings */}
                                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6">
                                        <h3 className="font-semibold text-slate-700 text-sm uppercase tracking-wide mb-3">Folder Settings</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs text-slate-500 mb-1">Folder Name</label>
                                                <div className="flex gap-2">
                                                    <input
                                                        type="text"
                                                        value={selectedFolder.name}
                                                        onChange={e => setSelectedFolder({ ...selectedFolder, name: e.target.value })}
                                                        className="flex-1 px-3 py-1.5 border border-slate-300 rounded text-sm focus:ring-1 focus:ring-cyan-500 outline-none"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-xs text-slate-500 mb-1">Assigned Course</label>
                                                <select
                                                    value={selectedFolder.courseId?._id || selectedFolder.courseId || ''}
                                                    onChange={e => setSelectedFolder({ ...selectedFolder, courseId: e.target.value || null })}
                                                    className="w-full px-3 py-1.5 border border-slate-300 rounded text-sm focus:ring-1 focus:ring-cyan-500 outline-none bg-white"
                                                >
                                                    <option value="">-- No Course Assigned --</option>
                                                    {courses.map(course => (
                                                        <option key={course._id} value={course._id}>
                                                            {course.title}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mt-3 text-right">
                                            <button
                                                onClick={async () => {
                                                    try {
                                                        const res = await API.put(`/api/video-folders/${selectedFolder._id}`, {
                                                            name: selectedFolder.name,
                                                            courseId: selectedFolder.courseId
                                                        });
                                                        setFolders(prev => prev.map(f => f._id === res.data._id ? res.data : f));
                                                        setSelectedFolder(res.data); // Update with populated data
                                                        alert('Folder updated successfully!');
                                                    } catch (err) {
                                                        console.error(err);
                                                        alert('Failed to update folder details');
                                                    }
                                                }}
                                                className="px-4 py-1.5 bg-cyan-600 text-white text-xs font-bold rounded hover:bg-cyan-700 transition-colors"
                                            >
                                                Save Changes
                                            </button>
                                        </div>
                                    </div>

                                    {/* Add Video Form */}
                                    <form onSubmit={handleAddVideo} className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-8 space-y-4">
                                        <h3 className="font-semibold text-slate-700 text-sm uppercase tracking-wide">Add New Video</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input
                                                type="text"
                                                placeholder="Video Title"
                                                value={videoTitle}
                                                onChange={e => setVideoTitle(e.target.value)}
                                                className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
                                            />
                                            <input
                                                type="text"
                                                placeholder="Embed Tag (<iframe>...</iframe>)"
                                                value={embedTag}
                                                onChange={e => setEmbedTag(e.target.value)}
                                                className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors text-sm font-medium">
                                            Add Video to Folder
                                        </button>
                                    </form>

                                    {/* Video List */}
                                    <h3 className="font-bold text-slate-800 mb-4">Videos in this Folder ({selectedFolder.videos?.length || 0})</h3>
                                    <div className="space-y-4">
                                        {selectedFolder.videos?.length === 0 && <p className="text-slate-400 italic">No videos added yet.</p>}
                                        {selectedFolder.videos?.map(video => (
                                            <div key={video._id} className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col sm:flex-row gap-4">
                                                {/* Mini Preview (Render the iframe scaled down or just a placeholder) */}
                                                <div className="w-full sm:w-48 aspect-video bg-black rounded flex items-center justify-center overflow-hidden relative">
                                                    <div
                                                        className="absolute inset-0 pointer-events-none transform scale-50 origin-top-left w-[200%] h-[200%]"
                                                        dangerouslySetInnerHTML={{ __html: video.embedTag }}
                                                    />
                                                    <div className="absolute inset-0 bg-transparent" /> {/* Prevent interaction in preview */}
                                                </div>

                                                <div className="flex-1 flex flex-col justify-between">
                                                    <div>
                                                        <h4 className="font-bold text-slate-800">{video.title}</h4>
                                                        <p className="text-xs text-slate-400 mt-1">Added: {new Date(video.createdAt).toLocaleDateString()}</p>
                                                        <div className="mt-2 text-xs text-slate-500 font-mono bg-slate-50 p-1 rounded truncate max-w-md">
                                                            {video.embedTag.substring(0, 50)}...
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 flex justify-end">
                                                        <button
                                                            onClick={() => handleDeleteVideo(video._id)}
                                                            className="text-red-500 hover:text-red-700 text-sm font-medium"
                                                        >
                                                            Remove Video
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-white p-12 rounded-xl shadow-sm border border-slate-200 text-center text-slate-400">
                                <div className="text-6xl mb-4">📂</div>
                                <p className="text-lg">Select a folder to manage its videos</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
