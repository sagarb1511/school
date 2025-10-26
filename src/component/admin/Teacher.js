import React, { useState } from 'react';
import Dashboard from './dashboard';

const Teacher = () => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    photo: null
  });

  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const teacherPositions = [
    'Class Teacher',
    'Subject Teacher',
    'Principal',
    'Vice Principal',
    'Head of Department',
    'Assistant Teacher',
    'Special Educator',
    'Sports Teacher',
    'Music Teacher',
    'Art Teacher',
    'Other'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Teacher name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    if (!formData.position) {
      newErrors.position = 'Please select a position';
    }

    if (!formData.photo) {
      newErrors.photo = 'Please upload a photo';
    } else if (formData.photo) {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!validTypes.includes(formData.photo.type)) {
        newErrors.photo = 'Please upload a valid image (JPEG, PNG, GIF, WebP)';
      }
      
      if (formData.photo.size > 2 * 1024 * 1024) {
        newErrors.photo = 'Image size must be less than 2MB';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        photo: file
      }));

      if (errors.photo) {
        setErrors(prev => ({
          ...prev,
          photo: ''
        }));
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      console.log('Submitting teacher data:', formData);
      
      // For actual API submission:
      // const submitData = new FormData();
      // submitData.append('name', formData.name);
      // submitData.append('position', formData.position);
      // submitData.append('photo', formData.photo);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      setFormData({
        name: '',
        position: '',
        photo: null
      });
      setPreview(null);
      setErrors({});
      e.target.reset();
      
      alert('Teacher information submitted successfully!');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClear = () => {
    setFormData({
      name: '',
      position: '',
      photo: null
    });
    setPreview(null);
    setErrors({});
  };

  const removePhoto = () => {
    setFormData(prev => ({ ...prev, photo: null }));
    setPreview(null);
  };

  return (
    <div className="flex min-h-screen">
      <Dashboard/>
      <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8 overflow-auto">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Teacher Registration
              </h1>
              <p className="text-gray-600">
                Please fill in the teacher's details below
              </p>
            </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Teacher Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                  errors.name 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
                } ${isSubmitting ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                placeholder="Enter teacher's full name"
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {errors.name}
                </p>
              )}
            </div>

            {/* Position Field */}
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                Position <span className="text-red-500">*</span>
              </label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
                  errors.position 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
                } ${isSubmitting ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                <option value="">Select a position</option>
                {teacherPositions.map((position, index) => (
                  <option key={index} value={position}>
                    {position}
                  </option>
                ))}
              </select>
              {errors.position && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {errors.position}
                </p>
              )}
            </div>

            {/* Photo Upload Field */}
            <div>
              <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-2">
                Profile Photo <span className="text-red-500">*</span>
              </label>
              
              <div className="flex items-center gap-4 flex-wrap">
                <label 
                  htmlFor="photo" 
                  className={`flex items-center gap-2 px-6 py-3 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                    errors.photo 
                      ? 'border-red-300 bg-red-50 hover:bg-red-100' 
                      : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
                  } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium">Choose File</span>
                </label>
                
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                  disabled={isSubmitting}
                />
                
                <span className="text-sm text-gray-600">
                  {formData.photo ? formData.photo.name : 'No file chosen'}
                </span>
              </div>
              
              {errors.photo && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {errors.photo}
                </p>
              )}
              
              <p className="mt-2 text-xs text-gray-500">
                Supported formats: JPEG, PNG, GIF, WebP (Max: 2MB)
              </p>
            </div>

            {/* Photo Preview */}
            {preview && (
              <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-200">
                <p className="text-sm font-medium text-gray-700 mb-4 text-center">
                  Photo Preview
                </p>
                <div className="flex flex-col items-center gap-4">
                  <img 
                    src={preview} 
                    alt="Preview" 
                    className="w-48 h-48 object-cover rounded-lg shadow-md border border-gray-200"
                  />
                  <button 
                    type="button" 
                    onClick={removePhoto}
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Remove Photo
                  </button>
                </div>
              </div>
            )}

            {/* Form Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                type="button" 
                onClick={handleClear}
                disabled={isSubmitting}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Clear Form
              </button>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Register Teacher
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Form Status */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-sm font-medium text-blue-800">Form Status</h3>
                <p className="text-sm text-blue-600 mt-1">
                  {isSubmitting 
                    ? 'Submitting teacher information...' 
                    : Object.keys(errors).length === 0 
                      ? 'All fields are valid and ready for submission' 
                      : 'Please fix the errors above before submitting'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Teacher;