import React, { useState, useEffect } from 'react';
import { ref, onValue, remove, set } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { database, storage } from '../../config/firebase';
import Dashboard from './dashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeeStructure = () => {
  const [feeStructureData, setFeeStructureData] = useState({});
  const [selectedCourse, setSelectedCourse] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  const courses = ['BSC Computer Science', 'BSC', 'BA', 'BCom', 'BCA'];

  useEffect(() => {
    const fetchFeeStructureData = () => {
      try {
        const feeRef = ref(database, 'School/feeStructure');
        
        onValue(feeRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            setFeeStructureData(data);
          } else {
            setFeeStructureData({});
          }
          setLoading(false);
        }, (error) => {
          console.error('Fee structure fetch error:', error);
          setLoading(false);
        });
      } catch (err) {
        console.error('Error fetching fee structure:', err);
        setLoading(false);
      }
    };

    fetchFeeStructureData();
  }, []);

  // Upload PDF for fee structure
  const uploadFeeStructurePDF = async () => {
    if (!selectedCourse || !pdfFile) {
      toast.error('Please select a course and upload a PDF file', {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setUploading(true);
    try {
      // Create a unique file name
      const fileName = `${selectedCourse.replace(/\s+/g, '_')}_${Date.now()}.pdf`;
      
      // Create storage reference
      const storageReference = storageRef(storage, `fee-structures/${fileName}`);
      
      // Upload file to Firebase Storage
      await uploadBytes(storageReference, pdfFile);
      
      // Get download URL
      const downloadURL = await getDownloadURL(storageReference);
      
      // Save metadata to Firebase Realtime Database
      const feeRef = ref(database, `School/feeStructure/${selectedCourse}`);
      await set(feeRef, {
        courseName: selectedCourse,
        fileName: fileName,
        downloadURL: downloadURL,
        storagePath: `fee-structures/${fileName}`,
        uploadDate: new Date().toISOString(),
        fileSize: pdfFile.size
      });

      toast.success(`✅ Fee structure PDF uploaded successfully for ${selectedCourse}!`, {
        position: "top-right",
        autoClose: 3000,
      });

      // Reset form
      setSelectedCourse('');
      setPdfFile(null);
      setUploading(false);
    } catch (error) {
      console.error('Error uploading PDF:', error);
      toast.error('Failed to upload PDF: ' + error.message, {
        position: "top-right",
        autoClose: 3000,
      });
      setUploading(false);
    }
  };

  // Delete fee structure PDF
  const deleteFeeStructurePDF = async (courseName) => {
    if (window.confirm(`Are you sure you want to delete fee structure for ${courseName}?`)) {
      try {
        const feeData = feeStructureData[courseName];
        
        // Delete from Firebase Realtime Database first (this should always succeed)
        const feeRef = ref(database, `School/feeStructure/${courseName}`);
        await remove(feeRef);
        
        // Try to delete from Firebase Storage if storage path exists
        // But don't fail the entire operation if storage deletion fails
        if (feeData && feeData.storagePath) {
          try {
            const storageReference = storageRef(storage, feeData.storagePath);
            await deleteObject(storageReference);
            console.log('Storage file deleted successfully:', feeData.storagePath);
          } catch (storageError) {
            console.warn('Storage file already deleted or not found:', storageError.message);
            // Don't show error to user for storage issues, just log it
          }
        }
        
        toast.success(`✅ Fee structure deleted successfully for ${courseName}!`, {
          position: "top-right",
          autoClose: 3000,
        });
      } catch (error) {
        console.error('Error deleting fee structure:', error);
        toast.error('Failed to delete fee structure: ' + error.message, {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
  };

  if (loading) {
    return (
      <>
        <Dashboard/>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 ml-64 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600 text-lg">Loading fee structure data...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Dashboard/>
      <div className="ml-64 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 pt-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Fee Structure Management</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Upload and manage fee structure PDFs for different courses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Upload New Fee Structure
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">
                    Select Course
                  </label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                  >
                    <option value="">Choose a course...</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">
                    Upload PDF File
                  </label>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setPdfFile(e.target.files[0])}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                  />
                  {pdfFile && (
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Selected:</strong> {pdfFile.name}
                      </p>
                      <p className="text-sm text-blue-600">
                        <strong>Size:</strong> {(pdfFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  )}
                </div>

                <button
                  onClick={uploadFeeStructurePDF}
                  disabled={uploading || !selectedCourse || !pdfFile}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    uploading || !selectedCourse || !pdfFile
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 shadow-lg'
                  }`}
                >
                  {uploading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Uploading...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      Upload PDF
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Existing Fee Structures */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Existing Fee Structures
              </h2>
              
              {Object.keys(feeStructureData).length === 0 ? (
                <div className="text-center py-12">
                  <svg className="w-20 h-20 mx-auto text-gray-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">No Fee Structures Found</h3>
                  <p className="text-gray-600">No fee structure PDFs have been uploaded yet.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {Object.entries(feeStructureData).map(([course, data]) => (
                    <div key={course} className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                            🎓 {data.courseName}
                          </h3>
                          <div className="space-y-1">
                            <p className="text-sm text-gray-600">
                              <strong>File:</strong> {data.fileName}
                            </p>
                            <p className="text-sm text-gray-500">
                              <strong>Uploaded:</strong> {new Date(data.uploadDate).toLocaleDateString()} at {new Date(data.uploadDate).toLocaleTimeString()}
                            </p>
                            <p className="text-sm text-gray-500">
                              <strong>Size:</strong> {(data.fileSize / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2 ml-4">
                          <button
                            onClick={() => window.open(data.downloadURL, '_blank')}
                            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            View
                          </button>
                          <button
                            onClick={() => {
                              const link = document.createElement('a');
                              link.href = data.downloadURL;
                              link.download = data.fileName;
                              link.click();
                            }}
                            className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors flex items-center"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download
                          </button>
                          <button
                            onClick={() => deleteFeeStructurePDF(course)}
                            className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors flex items-center"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-900">{Object.keys(feeStructureData).length}</div>
                <div className="text-sm text-blue-700 font-medium">Total Courses</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-3xl font-bold text-green-900">
                  {Object.values(feeStructureData).reduce((total, data) => total + (data.fileSize / 1024 / 1024), 0).toFixed(2)} MB
                </div>
                <div className="text-sm text-green-700 font-medium">Total Storage Used</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-900">{courses.length}</div>
                <div className="text-sm text-purple-700 font-medium">Available Courses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;
