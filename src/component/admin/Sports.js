import React, { useState } from 'react'
import Sidebar from './dashboard';
import { database, storage } from '../../config/firebase';
import { ref, set } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sports = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    sportName: '',
    image: null,
    description: ''
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file
      });

      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.teamName || !formData.sportName) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      let imageUrl = '';
      
      // Upload image to Firebase Storage if exists
      if (formData.image) {
        const imageRef = storageRef(storage, `sports/${formData.sportName}/${Date.now()}_${formData.image.name}`);
        const snapshot = await uploadBytes(imageRef, formData.image);
        imageUrl = await getDownloadURL(snapshot.ref);
      }
      
      // Create new team data
      const newTeam = {
        teamName: formData.teamName,
        sportName: formData.sportName,
        image: imageUrl,
        description: formData.description,
        createdAt: new Date().toISOString()
      };
      
      // Save to Firebase under School/sports/{sportName}
      await set(ref(database, `School/sports/${formData.sportName}`), newTeam);
      
      toast.success('Sports team added successfully!');
      
      // Reset form
      setFormData({
        teamName: '',
        sportName: '',
        image: null,
        description: ''
      });
      setImagePreview(null);
      
      // Reset file input
      const fileInput = document.getElementById('imageUpload');
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      console.error('Error adding team:', error);
      toast.error('Failed to add team. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeImage = () => {
    setFormData({
      ...formData,
      image: null
    });
    setImagePreview(null);
    const fileInput = document.getElementById('imageUpload');
    if (fileInput) fileInput.value = '';
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Sidebar/>
      {/* Main Content Area - Right Side */}
      <div className="ml-64 flex-1 p-6 overflow-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Add Sports Team</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below to add a new sports team to your collection.
          </p>
        </div>

      <div className="max-w-4xl mx-auto">
        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Team Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Team Name *
              </label>
              <input
                type="text"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter team name"
              />
            </div>

            {/* Sport Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sport Name *
              </label>
              <input
                type="text"
                name="sportName"
                value={formData.sportName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter sport name"
              />
            </div>

            {/* Image Upload Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Team Image
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF (MAX. 10MB)</p>
                  </div>
                  <input 
                    id="imageUpload"
                    type="file" 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
              
              {/* Image Preview */}
              {imagePreview && (
                <div className="mt-4">
                  <div className="relative inline-block">
                    <img 
                      src={imagePreview} 
                      alt="Team preview" 
                      className="h-32 w-32 object-cover rounded-lg border border-gray-300"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors duration-200"
                    >
                      ×
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Description Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical"
                placeholder="Enter team description, history, or achievements..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Adding Team...' : 'Add Team'}
            </button>
          </form>
        </div>

        {/* Preview Section */}
        {(formData.teamName || imagePreview) && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Team Preview</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image Preview */}
                {imagePreview && (
                  <div className="md:w-1/3">
                    <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src={imagePreview} 
                        alt="Team preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                
                {/* Team Info */}
                <div className={`${imagePreview ? 'md:w-2/3' : 'w-full'}`}>
                  {formData.sportName && (
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                      {formData.sportName}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {formData.teamName || 'Team Name'}
                  </h3>
                  <p className="text-gray-600">
                    {formData.description || 'Team description will appear here...'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default Sports