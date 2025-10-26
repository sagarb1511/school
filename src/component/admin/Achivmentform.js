import React, { useState, useEffect } from 'react';
import Sidebar from './dashboard';
import { database } from '../../config/firebase';
import { ref, set, get, onValue, remove, update } from 'firebase/database';
import { uploadBytes, getDownloadURL, ref as storageRef } from 'firebase/storage';
import { storage } from '../../config/firebase';
const AchievementForm = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    photoUrl: ''
  });
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle photo upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      if (file.type.startsWith('image/')) {
        setPhotoFile(file);

        const reader = new FileReader();
        reader.onloadend = () => {
          setPhotoPreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please select a valid image file');
      }
    }
  };

  // Remove photo
  const removePhoto = () => {
    setPhotoFile(null);
    setPhotoPreview('');
    setFormData(prev => ({
      ...prev,
      photoUrl: ''
    }));
  };

  // Upload image to Firebase Storage and get URL
  const uploadImage = async (file) => {
    try {
      const storageReference = storageRef(storage, `achievements/${Date.now()}_${file.name}`);
      await uploadBytes(storageReference, file);
      const downloadURL = await getDownloadURL(storageReference);
      return downloadURL;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  // Fetch achievements from Firebase
  useEffect(() => {
    const achievementsRef = ref(database, 'School/Achievement');
    
    const unsubscribe = onValue(achievementsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert object to array and include the key as id for React rendering
        const achievementsList = Object.entries(data).map(([key, value]) => ({
          id: key, // Still keep id for React key prop
          key: key, // Store the key for reference
          ...value
        }));
        setAchievements(achievementsList);
      } else {
        setAchievements([]);
      }
      setLoading(false);
    }, (error) => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Add or update achievement by name
  const handleAddAchievement = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !photoFile) {
      alert('Please fill achievement name and upload photo');
      return;
    }

    // Create a URL-friendly key from the achievement name
    const achievementKey = formData.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    try {
      setLoading(true);
      
      // Upload image and get URL
      const photoUrl = await uploadImage(photoFile);
      
      const achievementData = {
        name: formData.name,
        description: formData.description || '',
        photoUrl: photoUrl,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        updatedAt: new Date().toISOString()
      };

      // Save to Firebase using achievement name as key
      const achievementRef = ref(database, `School/Achievement/${achievementKey}`);
      
      // Check if achievement with this name already exists
      const snapshot = await get(achievementRef);
      const exists = snapshot.exists();
      
      if (exists && !window.confirm('An achievement with this name already exists. Do you want to update it?')) {
        setLoading(false);
        return;
      }
      
      // Set or update the achievement
      await set(achievementRef, achievementData);
      
      // Reset form
      setFormData({
        name: '',
        description: '',
        photoUrl: ''
      });
      setPhotoFile(null);
      setPhotoPreview('');
      
      // Show success message
      alert(`Achievement ${exists ? 'updated' : 'added'} successfully!`);
    } catch (error) {
      console.error('Error saving achievement:', error);
      alert('Failed to save achievement. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Delete achievement by name
  const deleteAchievement = async (name) => {
    if (window.confirm('Are you sure you want to delete this achievement?')) {
      try {
        setLoading(true);
        // Create the same key as used for storage
        const achievementKey = name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
          
        const achievementRef = ref(database, `School/Achievement/${achievementKey}`);
        await remove(achievementRef);
      } catch (error) {
        console.error('Error deleting achievement:', error);
        alert('Failed to delete achievement. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  // Clear all achievements
  const clearAllAchievements = async () => {
    if (achievements.length > 0 && window.confirm('Are you sure you want to delete all achievements? This action cannot be undone.')) {
      try {
        setLoading(true);
        // Get all achievements first to delete their associated images
        const achievementsRef = ref(database, 'School/Achievement');
        const snapshot = await get(achievementsRef);
        
        if (snapshot.exists()) {
          // Delete each achievement one by one to ensure cleanup
          const updates = {};
          Object.keys(snapshot.val()).forEach(key => {
            updates[`School/Achievement/${key}`] = null;
          });
          
          // Perform a multi-path update to remove all achievements
          await update(ref(database), updates);
        }
      } catch (error) {
        console.error('Error clearing achievements:', error);
        alert('Failed to clear achievements. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  if (loading && achievements.length === 0) {
    return (
      <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Sidebar/>
        <div className="flex-1 ml-64 p-8 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading achievements...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Sidebar/>
      <div className="flex-1 ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Achievement Manager
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Add and manage your achievements with photos, names, and descriptions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Achievement Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="mr-3">🏆</span>
                Add New Achievement
              </h2>
              
              <form onSubmit={handleAddAchievement} className="space-y-6">
                {/* Achievement Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Achievement Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Enter achievement name (e.g., Employee of the Month)"
                  />
                </div>

                {/* Achievement Description Field */}
                <div>
                  <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                    Achievement Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="4"
                    disabled={loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 placeholder-gray-400 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Describe your achievement (optional)"
                  />
                </div>

                {/* Photo Upload Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Achievement Photo *
                  </label>
                  
                  {!photoPreview ? (
                    <div className="border-3 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-blue-400 transition duration-200 bg-gray-50">
                      <input
                        type="file"
                        id="photo"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                        disabled={loading}
                      />
                      <label
                        htmlFor="photo"
                        className={`${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 cursor-pointer'} text-white px-8 py-4 rounded-xl transition duration-200 inline-flex items-center font-semibold`}
                      >
                        <span className="mr-2">📷</span>
                        {loading ? 'Uploading...' : 'Choose Photo'}
                      </label>
                      <p className="text-gray-500 mt-3 text-sm">
                        PNG, JPG, JPEG up to 5MB
                      </p>
                    </div>
                  ) : (
                    <div className="relative inline-block">
                      <div className="relative group">
                        <img
                          src={photoPreview}
                          alt="Preview"
                          className="w-72 h-48 object-cover rounded-xl shadow-lg border-2 border-blue-200"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-200 rounded-xl flex items-center justify-center">
                          <button
                            type="button"
                            onClick={removePhoto}
                            className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 transition duration-200 opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                      <p className="text-green-600 text-sm mt-2 font-medium">
                        ✓ Photo selected. Click the image to remove.
                      </p>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!formData.name || !photoFile || loading}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-xl hover:from-green-600 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition duration-200 font-bold text-lg shadow-lg transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Adding...
                    </>
                  ) : (
                    '🎉 Add Achievement'
                  )}
                </button>
              </form>
            </div>

            {/* Achievements List */}
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <span className="mr-3">📜</span>
                  My Achievements
                  <span className="ml-3 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {achievements.length}
                  </span>
                </h2>
                
                {achievements.length > 0 && (
                  <button
                    onClick={clearAllAchievements}
                    disabled={loading || achievements.length === 0}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 text-sm font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Clearing...
                      </>
                    ) : (
                      'Clear All'
                    )}
                  </button>
                )}
              </div>
              
              {achievements.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📝</div>
                  <p className="text-gray-500 text-lg mb-2">No achievements yet</p>
                  <p className="text-gray-400">Add your first achievement using the form</p>
                </div>
              ) : (
                <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={achievement.id} 
                      className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition duration-200 bg-gradient-to-r from-white to-blue-50"
                    >
                      <div className="flex space-x-4">
                        {/* Achievement Photo */}
                        <div className="flex-shrink-0">
                          <img
                            src={achievement.photoUrl}
                            alt={achievement.name}
                            className="w-20 h-20 object-cover rounded-lg border-2 border-blue-200"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = 'https://via.placeholder.com/80?text=No+Image';
                            }}
                          />
                        </div>
                        
                        {/* Achievement Details */}
                        <div className="flex-grow">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-gray-800">
                              {achievement.name}
                            </h3>
                            <button
                              onClick={() => deleteAchievement(achievement.id)}
                              disabled={loading}
                              className="text-red-500 hover:text-red-700 transition duration-200 p-1 rounded-full hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed"
                              title="Delete achievement"
                            >
                              {loading ? (
                                <svg className="animate-spin h-4 w-4 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                              ) : (
                                '🗑️'
                              )}
                            </button>
                          </div>
                          
                          {achievement.description && (
                            <p className="text-gray-600 mb-2 text-sm">
                              {achievement.description}
                            </p>
                          )}
                          
                          <div className="flex justify-between items-center text-xs text-gray-500">
                            <span>#{index + 1}</span>
                            <span>Added on {achievement.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Statistics */}
              {achievements.length > 0 && (
                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">{achievements.length}</p>
                      <p className="text-sm text-blue-500">Total Achievements</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">
                        {achievements.filter(a => a.description).length}
                      </p>
                      <p className="text-sm text-green-500">With Description</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Tips */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <h3 className="font-semibold text-yellow-800 mb-2 flex items-center">
              💡 Quick Tips
            </h3>
            <ul className="text-yellow-700 text-sm space-y-1">
              <li>• Achievement name and photo are required</li>
              <li>• Description is optional but recommended</li>
              <li>• You can remove photos before submitting</li>
              <li>• Click the trash icon to delete individual achievements</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementForm;