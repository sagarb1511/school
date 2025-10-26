import React, { useState } from 'react';
import Sidebar from './dashboard';
import { database, storage } from '../../config/firebase';
import { ref as dbRef, set } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Gallery = () => {
  const [formData, setFormData] = useState({
    category: '',
    description: '',
    images: []
  });

  const [previewUrls, setPreviewUrls] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        
        reader.onloadend = () => {
          setFormData(prev => ({
            ...prev,
            images: [...prev.images, file]
          }));
          
          setPreviewUrls(prev => [...prev, reader.result]);
        };
        
        reader.readAsDataURL(file);
      }
    });
    
    e.target.value = '';
  };

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
    
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
  };

  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      const imageUrls = [];

      // Upload all images to Firebase Storage
      for (let i = 0; i < formData.images.length; i++) {
        const image = formData.images[i];
        const timestamp = Date.now();
        const imageRef = storageRef(storage, `gallery/${formData.category}/${timestamp}_${image.name}`);
        
        // Upload image
        await uploadBytes(imageRef, image);
        
        // Get download URL
        const downloadURL = await getDownloadURL(imageRef);
        imageUrls.push(downloadURL);
      }

      // Prepare gallery data
      const galleryData = {
        category: formData.category,
        description: formData.description,
        images: imageUrls,
        createdAt: new Date().toISOString(),
        imageCount: imageUrls.length
      };

      // Save to Firebase Database under School/Gallery/{category}
      const galleryRef = dbRef(database, `School/Gallery/${formData.category}`);
      await set(galleryRef, galleryData);

      toast.success(`✅ Gallery "${formData.category}" uploaded successfully!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      // Reset form
      setFormData({
        category: '',
        description: '',
        images: []
      });
      setPreviewUrls([]);
      
    } catch (error) {
      console.error('Error uploading gallery:', error);
      toast.error('❌ Error uploading gallery. Please try again.', {
        position: "top-right",
        autoClose: 4000,
      });
    } finally {
      setUploading(false);
    }
  };


  return (
    <div className="flex min-h-screen">
      <ToastContainer />
      <Sidebar/>
      <div className="flex-1 ml-64 bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8 overflow-y-auto h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            {/* Header */}
            <div className="mb-8 border-b pb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    Gallery Management
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Upload and organize your gallery images
                  </p>
                </div>
              </div>
            </div>
      
            <form onSubmit={handleSubmit}>
              {/* Category */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  Category *
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:border-indigo-400"
                  placeholder="e.g., Sports, Events, Campus"
                />
              </div>

              {/* Description */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:border-indigo-400 resize-none"
                  placeholder="Describe this gallery category..."
                />
              </div>

              {/* Image Upload */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  Upload Images *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-400 transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                  />
                </div>
                <p className="mt-2 text-xs text-gray-500">📷 Select multiple images (JPG, PNG, GIF)</p>
              </div>

              {/* Image Previews */}
              {previewUrls.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Selected Images
                    </h3>
                    <span className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-medium">
                      {previewUrls.length} {previewUrls.length === 1 ? 'image' : 'images'}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {previewUrls.map((url, index) => (
                      <div key={index} className="relative group rounded-lg overflow-hidden border-2 border-gray-200 hover:border-indigo-400 transition-all duration-200">
                        <img
                          src={url}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-32 object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-7 h-7 flex items-center justify-center shadow-lg transition-all duration-200 transform hover:scale-110"
                          title="Remove image"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-6 border-t">
                <button
                  type="submit"
                  disabled={!formData.category || formData.images.length === 0 || uploading}
                  className={`w-full px-6 py-4 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-3 shadow-lg ${
                    !formData.category || formData.images.length === 0 || uploading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 transform hover:scale-[1.02] active:scale-[0.98]'
                  }`}
                >
                  {uploading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Uploading 😁...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      <span>Upload Gallery</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
          
          {/* Info Card */}
          
        </div>
      </div>
    </div>
  );
};

export default Gallery;