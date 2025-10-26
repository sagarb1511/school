import React, { useState } from 'react';
import Sidebar from './dashboard';
import { database, storage } from '../../config/firebase';
import { ref as dbRef, set } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiUpload, FiTrash2, FiPlus, FiImage, FiInfo } from 'react-icons/fi';

const Activity = () => {
  const [activities, setActivities] = useState([]);
  const [formData, setFormData] = useState({
    heading: '',
    description: '',
    image: null
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    
    if (file && file.type.startsWith('image/')) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove image
  const removeImage = () => {
    setFormData(prev => ({
      ...prev,
      image: null
    }));
    setImagePreview(null);
  };

  // Add new activity
  const handleAddActivity = async (e) => {
    e.preventDefault();
    
    if (!formData.heading || !formData.image) {
      toast.error('❌ Please add heading and image');
      return;
    }

    setUploading(true);

    try {
      // Upload image to Firebase Storage
      const timestamp = Date.now();
      const imageRef = storageRef(storage, `activities/${formData.heading}/${timestamp}_${formData.image.name}`);
      
      // Upload image
      await uploadBytes(imageRef, formData.image);
      
      // Get download URL
      const downloadURL = await getDownloadURL(imageRef);

      // Prepare activity data
      const activityData = {
        heading: formData.heading,
        description: formData.description,
        image: downloadURL,
        createdAt: new Date().toISOString(),
        timestamp: new Date().toLocaleString()
      };

      // Save to Firebase Database under School/Activity/{heading}
      const activityRef = dbRef(database, `School/Activity/${formData.heading}`);
      await set(activityRef, activityData);

      toast.success(`✅ Activity "${formData.heading}" uploaded successfully!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      // Reset form
      setFormData({
        heading: '',
        description: '',
        image: null
      });
      setImagePreview(null);
      
    } catch (error) {
      console.error('Error uploading activity:', error);
      toast.error('❌ Error uploading activity. Please try again.', {
        position: "top-right",
        autoClose: 4000,
      });
    } finally {
      setUploading(false);
    }
  };

  // Delete activity
  const deleteActivity = (id) => {
    setActivities(prev => prev.filter(activity => activity.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Sidebar />
      
      <div className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Activities Manager</h1>
              {/* <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <FiPlus className="mr-2 h-4 w-4" />
                View All Activities
              </button> */}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          {/* Activity Form Card */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                <FiPlus className="inline-block mr-2 h-5 w-5 text-indigo-600" />
                Add New Activity
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Fill in the details below to add a new activity
              </p>
            </div>
            
            <div className="px-4 py-5 sm:p-6">
              <form onSubmit={handleAddActivity} className="space-y-6">
                {/* Heading Field */}
                <div>
                  <label htmlFor="heading" className="block text-sm font-medium text-gray-700 mb-1">
                    Activity Title <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="text"
                      id="heading"
                      name="heading"
                      value={formData.heading}
                      onChange={handleInputChange}
                      required
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md h-10 border"
                      placeholder="e.g., Sports Day, Annual Function"
                    />
                  </div>
                </div>

                {/* Description Field */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                      placeholder="Enter a detailed description of the activity..."
                      value={formData.description}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Activity Image <span className="text-red-500">*</span>
                  </label>
                  
                  {!imagePreview ? (
                    <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <FiImage className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="image"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input 
                              id="image" 
                              name="image" 
                              type="file" 
                              className="sr-only" 
                              onChange={handleImageUpload}
                              accept="image/*"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 5MB
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-2">
                      <div className="relative group">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="h-48 w-full object-cover rounded-md shadow-sm border border-gray-200"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-200 flex items-center justify-center rounded-md">
                          <button
                            type="button"
                            onClick={removeImage}
                            className="opacity-0 group-hover:opacity-100 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-200 transform hover:scale-110"
                            title="Remove image"
                          >
                            <FiTrash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

               

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={uploading}
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 ${uploading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {uploading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Uploading...
                      </>
                    ) : (
                      <>
                        <FiUpload className="-ml-1 mr-2 h-5 w-5" />
                        Upload Activity
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Activity;
