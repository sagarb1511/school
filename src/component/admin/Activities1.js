import React, { useState } from 'react';
import { database } from '../../config/firebase';
import { ref, push } from 'firebase/database';
const Activities1 = () => {
  const [formData, setFormData] = useState({
    competitionName: '',
    description: '',
    image: null
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }

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
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.competitionName) {
      setError('Competition Name is required');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Convert image to base64 for Firebase storage
      let imageBase64 = null;
      if (formData.image) {
        imageBase64 = await convertImageToBase64(formData.image);
      }

      const competitionData = {
        competitionName: formData.competitionName,
        description: formData.description,
        image: imageBase64, // Store base64 string
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      // Save to Firebase under School/activities node
      const activitiesRef = ref(database, 'School/activities');
      await push(activitiesRef, competitionData);

      // Reset form
      setFormData({
        competitionName: '',
        description: '',
        image: null
      });
      setImagePreview(null);
      
      // Reset file input
      const fileInput = document.getElementById('imageUpload');
      if (fileInput) fileInput.value = '';

    } catch (err) {
      setError('Failed to save competition: ' + err.message);
      console.error('Error saving competition:', err);
    } finally {
      setLoading(false);
    }
  };

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-4 md:p-6 ml-0 md:ml-64">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Add Competition</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Fill out the form below to add a new competition to your school activities.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Competition Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Competition Name *
              </label>
              <input
                type="text"
                name="competitionName"
                value={formData.competitionName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter competition name"
              />
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-vertical"
                placeholder="Enter competition description, rules, or details..."
              />
            </div>

            {/* Image Upload Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Competition Image
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
                    <p className="text-xs text-gray-500">PNG, JPG, GIF (MAX. 5MB)</p>
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
                      alt="Competition preview" 
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading ? 'bg-purple-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'
              } text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </div>
              ) : (
                'Add Competition'
              )}
            </button>
          </form>
        </div>

        {/* Preview Section */}
        {(formData.competitionName || imagePreview) && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Competition Preview</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image Preview */}
                {imagePreview && (
                  <div className="md:w-1/3">
                    <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src={imagePreview} 
                        alt="Competition preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                
                {/* Competition Info */}
                <div className={`${imagePreview ? 'md:w-2/3' : 'w-full'}`}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {formData.competitionName || 'Competition Name'}
                  </h3>
                  <p className="text-gray-600">
                    {formData.description || 'Competition description will appear here...'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Activities1;