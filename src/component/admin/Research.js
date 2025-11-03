import React, { useState } from 'react';
import { ref, set, onValue, remove } from 'firebase/database';
import { database } from '../../config/firebase';

const Research = () => {
  const [formData, setFormData] = useState({
    publicationType: 'Research Paper',
    headingName: '',
    authorsName: '',
    publishedIn: '',
    image: null,
    pdf: null
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [pdfPreview, setPdfPreview] = useState(null);
  const [submittedData, setSubmittedData] = useState([]);
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

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (file.type !== 'application/pdf') {
        setError('Please upload a PDF file');
        return;
      }

      setFormData({
        ...formData,
        pdf: file
      });

      setPdfPreview({
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + ' MB'
      });
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.headingName || !formData.authorsName || !formData.publishedIn) {
      setError('Heading Name, Authors Name, and Published In are required');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Convert image to base64 for Firebase storage
      let imageBase64 = null;
      if (formData.image) {
        imageBase64 = await convertFileToBase64(formData.image);
      }

      // Convert PDF to base64 for Firebase storage
      let pdfBase64 = null;
      if (formData.pdf) {
        pdfBase64 = await convertFileToBase64(formData.pdf);
      }

      const researchData = {
        publicationType: formData.publicationType,
        headingName: formData.headingName,
        authorsName: formData.authorsName,
        publishedIn: formData.publishedIn,
        image: imageBase64, // Store base64 string
        pdf: pdfBase64, // Store PDF as base64 string
        pdfName: formData.pdf ? formData.pdf.name : null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      // Create a sanitized key from heading name
      const sanitizedKey = formData.headingName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      
      // Save to Firebase under School/research node using headingName as key
      const researchRef = ref(database, `School/research/${sanitizedKey}`);
      await set(researchRef, researchData);

      // Reset form
      setFormData({
        publicationType: 'Research Paper',
        headingName: '',
        authorsName: '',
        publishedIn: '',
        image: null,
        pdf: null
      });
      setImagePreview(null);
      setPdfPreview(null);
      
      // Reset file inputs
      const imageInput = document.getElementById('imageUpload');
      if (imageInput) imageInput.value = '';
      const pdfInput = document.getElementById('pdfUpload');
      if (pdfInput) pdfInput.value = '';

    } catch (err) {
      setError('Failed to save research: ' + err.message);
      console.error('Error saving research:', err);
    } finally {
      setLoading(false);
    }
  };

  const convertFileToBase64 = (file) => {
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

  const removePdf = () => {
    setFormData({
      ...formData,
      pdf: null
    });
    setPdfPreview(null);
    const pdfInput = document.getElementById('pdfUpload');
    if (pdfInput) pdfInput.value = '';
  };

  // Fetch data from Firebase
  React.useEffect(() => {
    const researchRef = ref(database, 'School/research');
    
    const unsubscribe = onValue(researchRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const researchArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setSubmittedData(researchArray);
      } else {
        setSubmittedData([]);
      }
    }, (error) => {
      setError('Failed to fetch research: ' + error.message);
      console.error('Error fetching data:', error);
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  const deleteResearch = async (researchId) => {
    if (window.confirm('Are you sure you want to delete this research?')) {
      try {
        const researchRef = ref(database, `School/research/${researchId}`);
        await remove(researchRef);
      } catch (err) {
        setError('Failed to delete research: ' + err.message);
        console.error('Error deleting research:', err);
      }
    }
  };

  return (
    <div className="ml-64 min-h-screen bg-gradient-to-br from-green-50 to-teal-100 p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Add Research Publication</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Fill out the form below to add a new research publication to your school's research database.
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
            {/* Publication Type Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Publication Type *
              </label>
              <select
                name="publicationType"
                value={formData.publicationType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white"
              >
                <option value="Research Paper">Research Paper</option>
                <option value="Book">Book</option>
                <option value="Others">Others</option>
              </select>
            </div>

            {/* Heading Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Research Title / Heading Name *
              </label>
              <input
                type="text"
                name="headingName"
                value={formData.headingName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter research title or heading name"
              />
            </div>

            {/* Authors Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Authors Name *
              </label>
              <input
                type="text"
                name="authorsName"
                value={formData.authorsName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter authors name (comma separated for multiple authors)"
              />
            </div>

            {/* Published In Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Published In *
              </label>
              <input
                type="text"
                name="publishedIn"
                value={formData.publishedIn}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter journal name, conference, or publication venue"
              />
            </div>

            {/* Image Upload Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Research Image / Cover Photo
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
                      alt="Research preview" 
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

            {/* PDF Upload Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Research PDF Document
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload PDF</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PDF files accepted</p>
                  </div>
                  <input 
                    id="pdfUpload"
                    type="file" 
                    className="hidden" 
                    accept="application/pdf"
                    onChange={handlePdfChange}
                  />
                </label>
              </div>
              
              {/* PDF Preview */}
              {pdfPreview && (
                <div className="mt-4">
                  <div className="relative inline-block bg-blue-50 px-4 py-3 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-3">
                      <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                      </svg>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800 text-sm">{pdfPreview.name}</p>
                        <p className="text-xs text-gray-500">{pdfPreview.size}</p>
                      </div>
                      <button
                        type="button"
                        onClick={removePdf}
                        className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors duration-200"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
              } text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
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
                'Add Research Publication'
              )}
            </button>
          </form>
        </div>

        {/* Preview Section */}
        {(formData.headingName || imagePreview || pdfPreview) && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Research Preview</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image Preview */}
                {imagePreview && (
                  <div className="md:w-1/3">
                    <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src={imagePreview} 
                        alt="Research preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                
                {/* Research Info */}
                <div className={`${imagePreview ? 'md:w-2/3' : 'w-full'}`}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {formData.headingName || 'Research Title'}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-700">
                      <span className="font-semibold">Authors:</span> {formData.authorsName || 'Authors name will appear here...'}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Published In:</span> {formData.publishedIn || 'Publication venue will appear here...'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Submitted Research List */}
        {submittedData.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Research Publications ({submittedData.length})
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {submittedData.map((research) => (
                <div key={research.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-200 border border-gray-200">
                  <div className="flex flex-col h-full">
                    {/* Research Image */}
                    {research.image && (
                      <div className="mb-4">
                        <img 
                          src={research.image} 
                          alt={research.headingName}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                    )}
                    
                    {/* Research Info */}
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-gray-800 mb-3">{research.headingName}</h4>
                      
                      <div className="space-y-2 mb-4">
                        <div>
                          <span className="font-semibold text-gray-700 text-sm">Authors:</span>
                          <p className="text-gray-600 text-sm">{research.authorsName}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700 text-sm">Published In:</span>
                          <p className="text-gray-600 text-sm">{research.publishedIn}</p>
                        </div>
                      </div>
                      
                      <p className="text-xs text-gray-500">
                        Added: {new Date(research.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    
                    {/* PDF Download Button */}
                    {research.pdf && (
                      <div className="mt-3 mb-3">
                        <a
                          href={research.pdf}
                          download={research.pdfName || 'research.pdf'}
                          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm transition-colors duration-200 w-full justify-center"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                          </svg>
                          Download PDF
                        </a>
                      </div>
                    )}
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-4">
                      <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm transition-colors duration-200">
                        Edit
                      </button>
                      <button 
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-sm transition-colors duration-200"
                        onClick={() => deleteResearch(research.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {submittedData.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No research publications added yet. Start by adding your first research above!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Research;
