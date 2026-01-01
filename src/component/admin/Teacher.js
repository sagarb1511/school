
import React, { useState, useEffect } from 'react';
import Dashboard from './dashboard';
import { database, storage } from '../../config/firebase';
import { ref, set, push, remove, onValue } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Teacher = () => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    photo: null,
    staffType: '', // New field for teaching/non-teaching
    gender: '' // New field for gender (Male/Female)
  });

  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamic positions management
  const [teachingPositions, setTeachingPositions] = useState([]);
  const [nonTeachingPositions, setNonTeachingPositions] = useState([]);
  const [newPosition, setNewPosition] = useState('');
  const [newPositionType, setNewPositionType] = useState('Teaching');
  const [showAddPosition, setShowAddPosition] = useState(false);
  const [showManageModal, setShowManageModal] = useState(false);
  const [staffList, setStaffList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingStaffId, setEditingStaffId] = useState(null);

  // Load positions and staff from Firebase on component mount
  useEffect(() => {
    // Reference to teaching positions
    const teachingRef = ref(database, 'School/positions/teaching');
    const nonTeachingRef = ref(database, 'School/positions/nonTeaching');
    const staffRef = ref(database, 'School/staff');

    // Listen for teaching positions
    const unsubscribeTeaching = onValue(teachingRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const positionsArray = Object.values(data);
        setTeachingPositions(positionsArray);
      } else {
        setTeachingPositions([]);
      }
    });

    // Listen for non-teaching positions
    const unsubscribeNonTeaching = onValue(nonTeachingRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const positionsArray = Object.values(data);
        setNonTeachingPositions(positionsArray);
      } else {
        setNonTeachingPositions([]);
      }
    });

    // Listen for staff members
    const unsubscribeStaff = onValue(staffRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const staffArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key]
        }));
        setStaffList(staffArray);
      } else {
        setStaffList([]);
      }
    });

    // Cleanup listeners on unmount
    return () => {
      unsubscribeTeaching();
      unsubscribeNonTeaching();
      unsubscribeStaff();
    };
  }, []);

  // All positions combined
  const allPositions = [...teachingPositions, ...nonTeachingPositions];

  // Determine staff type based on position
  const getStaffType = (position) => {
    if (teachingPositions.includes(position)) {
      return 'Teaching';
    } else if (nonTeachingPositions.includes(position)) {
      return 'Non-Teaching';
    }
    return '';
  };

  // Add new position
  const handleAddPosition = async () => {
    if (!newPosition.trim()) {
      toast.error('Please enter a position name');
      return;
    }

    // Check if position already exists
    if (allPositions.includes(newPosition.trim())) {
      toast.warning('This position already exists');
      return;
    }

    try {
      const positionName = newPosition.trim();
      const positionType = newPositionType === 'Teaching' ? 'teaching' : 'nonTeaching';
      
      // Get current positions to determine next serial number
      const positionsRef = ref(database, `School/positions/${positionType}`);
      
      // Get existing data to calculate next sr.no
      onValue(positionsRef, async (snapshot) => {
        const data = snapshot.val();
        let nextSrNo = 1;
        
        if (data) {
          // Find the highest serial number
          const existingNumbers = Object.keys(data).map(key => parseInt(key)).filter(num => !isNaN(num));
          if (existingNumbers.length > 0) {
            nextSrNo = Math.max(...existingNumbers) + 1;
          }
        }
        
        // Save position with serial number as key
        const newPositionRef = ref(database, `School/positions/${positionType}/${nextSrNo}`);
        await set(newPositionRef, positionName);
        
        setNewPosition('');
        toast.success(`Position "${positionName}" added successfully`);
      }, { onlyOnce: true });
      
    } catch (error) {
      console.error('Error adding position:', error);
      toast.error('Failed to add position. Please try again.');
    }
  };

  // Delete position
  const handleDeletePosition = async (position, type) => {
    if (window.confirm(`Are you sure you want to delete "${position}"?`)) {
      try {
        const positionType = type === 'Teaching' ? 'teaching' : 'nonTeaching';
        const positionsRef = ref(database, `School/positions/${positionType}`);
        
        // Find and delete the position from Firebase
        onValue(positionsRef, async (snapshot) => {
          const data = snapshot.val();
          if (data) {
            // Find the key for this position
            const positionKey = Object.keys(data).find(key => data[key] === position);
            if (positionKey) {
              const positionRef = ref(database, `School/positions/${positionType}/${positionKey}`);
              await remove(positionRef);
              
              // Clear position from form if it was selected
              if (formData.position === position) {
                setFormData(prev => ({ ...prev, position: '' }));
              }
              toast.success('Position deleted successfully');
            }
          }
        }, { onlyOnce: true });
      } catch (error) {
        console.error('Error deleting position:', error);
        toast.error('Failed to delete position. Please try again.');
      }
    }
  };

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

    // Photo validation: only required when adding new staff OR when editing but no existing photo
    if (!editMode && !formData.photo) {
      newErrors.photo = 'Please upload a photo';
    } else if (formData.photo) {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!validTypes.includes(formData.photo.type)) {
        newErrors.photo = 'Please upload a valid image (JPEG, PNG, GIF, WebP)';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => {
      const updatedData = {
        ...prev,
        [name]: value
      };

      // Automatically determine staff type when position changes
      if (name === 'position' && value) {
        updatedData.staffType = getStaffType(value);
      }

      return updatedData;
    });

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleStaffTypeChange = (e) => {
    const staffType = e.target.value;
    setFormData(prev => ({
      ...prev,
      staffType,
      position: '' // Reset position when staff type changes
    }));
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
      // Prepare final data with staff type
      const staffType = formData.staffType || getStaffType(formData.position);
      
      // Sanitize name for Firebase key (remove special characters, replace spaces with underscores)
      const sanitizedName = formData.name.trim().replace(/[.#$[\]]/g, '').replace(/\s+/g, '_');
      
      // Upload photo to Firebase Storage (if new photo is uploaded)
      let photoURL = '';
      if (formData.photo) {
        const imageRef = storageRef(storage, `School/staff/${sanitizedName}/${formData.photo.name}`);
        await uploadBytes(imageRef, formData.photo);
        photoURL = await getDownloadURL(imageRef);
      } else if (editMode && editingStaffId) {
        // Keep existing photo if in edit mode and no new photo uploaded
        const existingStaff = staffList.find(s => s.id === editingStaffId);
        photoURL = existingStaff?.photoURL || '';
      }
      
      const staffData = {
        name: formData.name,
        position: formData.position,
        staffType: staffType,
        gender: formData.gender,
        photoURL: photoURL,
        status: 'active'
      };

      // Save to Firebase Database
      const dbRef = ref(database, `School/staff/${editMode ? editingStaffId : sanitizedName}`);
      await set(dbRef, staffData);

      console.log('Staff data saved successfully:', staffData);
      
      // Show success message
      toast.success(editMode ? 'Staff updated successfully!' : 'Staff added successfully!');
      
      // Reset form
      setFormData({
        name: '',
        position: '',
        photo: null,
        staffType: '',
        gender: ''
      });
      setPreview(null);
      setErrors({});
      setEditMode(false);
      setEditingStaffId(null);
      e.target.reset();
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(`Error ${editMode ? 'updating' : 'submitting'} form. Please try again.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (staff) => {
    setEditMode(true);
    setEditingStaffId(staff.id);
    setFormData({
      name: staff.name,
      position: staff.position,
      photo: null,
      staffType: staff.staffType,
      gender: staff.gender
    });
    setPreview(staff.photoURL || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    toast.info('Editing mode activated. Update the details and submit.');
  };

  const handleDelete = async (staff) => {
    if (window.confirm(`Are you sure you want to delete ${staff.name}?`)) {
      try {
        const dbRef = ref(database, `School/staff/${staff.id}`);
        await remove(dbRef);
        toast.success('Staff deleted successfully!');
      } catch (error) {
        console.error('Error deleting staff:', error);
        toast.error('Failed to delete staff. Please try again.');
      }
    }
  };

  const handleClear = () => {
    setFormData({
      name: '',
      position: '',
      photo: null,
      staffType: '',
      gender: ''
    });
    setPreview(null);
    setErrors({});
    setEditMode(false);
    setEditingStaffId(null);
  };

  const removePhoto = () => {
    setFormData(prev => ({ ...prev, photo: null }));
    setPreview(null);
  };

  // Get positions based on selected staff type
  const getFilteredPositions = () => {
    if (formData.staffType === 'Teaching') {
      return teachingPositions;
    } else if (formData.staffType === 'Non-Teaching') {
      return nonTeachingPositions;
    }
    return allPositions;
  };

  return (
    <div className="flex min-h-screen">
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
      <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8 overflow-auto">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            {/* Header with Manage Positions Button */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {editMode ? 'Edit Staff Member' : 'Teacher Registration'}
                  </h1>
                  <p className="text-gray-600">
                    {editMode ? 'Update the staff member details below' : 'Please fill in the teacher\'s details below'}
                  </p>
                  {editMode && (
                    <div className="mt-2 px-3 py-2 bg-blue-100 border border-blue-200 rounded-lg text-blue-800 text-sm inline-flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Editing Mode Active
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setShowManageModal(true)}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Manage Positions
                </button>
              </div>
            </div>

            {/* Manage Positions Modal */}
            {showManageModal && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowManageModal(false)}>
                <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
                  {/* Modal Header */}
                  <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-t-2xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <h2 className="text-2xl font-bold">Manage Positions</h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowManageModal(false)}
                      className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Modal Body */}
                  <div className="p-6">

                    {/* Add Position Form */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">Add New Position</h3>
                        <button
                          type="button"
                          onClick={() => setShowAddPosition(!showAddPosition)}
                          className="px-4 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-lg text-sm font-medium transition-colors"
                        >
                          {showAddPosition ? 'Cancel' : 'Add Position'}
                        </button>
                      </div>

                      {showAddPosition && (
                        <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border-2 border-indigo-200">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="md:col-span-1">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Staff Type
                              </label>
                              <select
                                value={newPositionType}
                                onChange={(e) => setNewPositionType(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                              >
                                <option value="Teaching">Teaching</option>
                                <option value="Non-Teaching">Non-Teaching</option>
                              </select>
                            </div>
                            <div className="md:col-span-2">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Position Name
                              </label>
                              <div className="flex gap-2">
                                <input
                                  type="text"
                                  value={newPosition}
                                  onChange={(e) => setNewPosition(e.target.value)}
                                  onKeyPress={(e) => e.key === 'Enter' && handleAddPosition()}
                                  placeholder="Enter position name"
                                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <button
                                  type="button"
                                  onClick={handleAddPosition}
                                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                                >
                                  Add
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Display Positions */}
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Positions</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Teaching Positions */}
                        <div>
                          <h4 className="text-sm font-semibold text-green-700 mb-2 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v6l9-5-9-5-9 5 9 5z" />
                            </svg>
                            Teaching Positions ({teachingPositions.length})
                          </h4>
                          {teachingPositions.length === 0 ? (
                            <p className="text-sm text-gray-500 italic p-2 bg-white rounded border border-gray-200">No teaching positions added yet</p>
                          ) : (
                            <div className="space-y-2">
                              {teachingPositions.map((position, index) => (
                                <div key={index} className="flex items-center justify-between p-2 bg-white rounded border border-gray-200">
                                  <span className="text-sm text-gray-700">{position}</span>
                                  <button
                                    type="button"
                                    onClick={() => handleDeletePosition(position, 'Teaching')}
                                    className="text-red-600 hover:text-red-800 p-1"
                                    title="Delete position"
                                  >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Non-Teaching Positions */}
                        <div>
                          <h4 className="text-sm font-semibold text-blue-700 mb-2 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                            </svg>
                            Non-Teaching Positions ({nonTeachingPositions.length})
                          </h4>
                          {nonTeachingPositions.length === 0 ? (
                            <p className="text-sm text-gray-500 italic p-2 bg-white rounded border border-gray-200">No non-teaching positions added yet</p>
                          ) : (
                            <div className="space-y-2">
                              {nonTeachingPositions.map((position, index) => (
                                <div key={index} className="flex items-center justify-between p-2 bg-white rounded border border-gray-200">
                                  <span className="text-sm text-gray-700">{position}</span>
                                  <button
                                    type="button"
                                    onClick={() => handleDeletePosition(position, 'Non-Teaching')}
                                    className="text-red-600 hover:text-red-800 p-1"
                                    title="Delete position"
                                  >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="sticky bottom-0 bg-gray-50 p-4 rounded-b-2xl border-t border-gray-200 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setShowManageModal(false)}
                      className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Staff Name <span className="text-red-500">*</span>
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
                  placeholder="Enter staff member's full name"
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

              {/* Staff Type Field */}
              <div>
                <label htmlFor="staffType" className="block text-sm font-medium text-gray-700 mb-2">
                  Staff Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => handleStaffTypeChange({ target: { value: 'Teaching' } })}
                    className={`p-4 border-2 rounded-lg text-center transition-all ${
                      formData.staffType === 'Teaching'
                        ? 'border-green-500 bg-green-50 text-green-700 shadow-md'
                        : 'border-gray-300 bg-gray-50 text-gray-700 hover:border-green-400 hover:bg-green-25'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v6l9-5-9-5-9 5 9 5z" />
                    </svg>
                    <span className="font-medium">Teaching Staff</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => handleStaffTypeChange({ target: { value: 'Non-Teaching' } })}
                    className={`p-4 border-2 rounded-lg text-center transition-all ${
                      formData.staffType === 'Non-Teaching'
                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md'
                        : 'border-gray-300 bg-gray-50 text-gray-700 hover:border-blue-400 hover:bg-blue-25'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                    <span className="font-medium">Non-Teaching Staff</span>
                  </button>
                </div>
                
                {/* Display current staff type */}
                {formData.staffType && (
                  <div className={`mt-3 p-3 rounded-lg text-center font-medium ${
                    formData.staffType === 'Teaching' 
                      ? 'bg-green-100 text-green-800 border border-green-200'
                      : 'bg-blue-100 text-blue-800 border border-blue-200'
                  }`}>
                    Selected: {formData.staffType} Staff
                    {formData.position && ` - ${formData.position}`}
                  </div>
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
                  disabled={isSubmitting || allPositions.length === 0}
                >
                  <option value="">
                    {allPositions.length === 0 ? 'No positions available - Please add positions above' : 'Select a position'}
                  </option>
                  {formData.staffType && getFilteredPositions().length > 0 && (
                    <optgroup label={`${formData.staffType} Positions`}>
                      {getFilteredPositions().map((position, index) => (
                        <option key={index} value={position}>
                          {position}
                        </option>
                      ))}
                    </optgroup>
                  )}
                  {!formData.staffType && allPositions.map((position, index) => (
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

              {/* Gender Field */}
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, gender: 'Male' }))}
                    className={`p-4 border-2 rounded-lg text-center transition-all ${
                      formData.gender === 'Male'
                        ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md'
                        : 'border-gray-300 bg-gray-50 text-gray-700 hover:border-blue-400'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="font-medium">Male (Mr.)</span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, gender: 'Female' }))}
                    className={`p-4 border-2 rounded-lg text-center transition-all ${
                      formData.gender === 'Female'
                        ? 'border-pink-500 bg-pink-50 text-pink-700 shadow-md'
                        : 'border-gray-300 bg-gray-50 text-gray-700 hover:border-pink-400'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="font-medium">Female (Miss)</span>
                  </button>
                </div>
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
                  Supported formats: JPEG, PNG, GIF, WebP
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={editMode ? "M5 13l4 4L19 7" : "M12 4v16m8-8H4"} />
                      </svg>
                      {editMode ? 'Update Staff' : 'Register Staff'}
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Form Status */}
         
          </div>

          {/* Staff List Table */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Staff Members</h2>
            
            {staffList.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="text-lg">No staff members added yet</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Sr. No.
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Photo
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Position
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Staff Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Gender
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {staffList.map((staff, index) => (
                      <tr key={staff.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <img 
                            src={staff.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(staff.name)}&background=random&color=fff&size=100`}
                            alt={staff.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                            onError={(e) => {
                              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(staff.name)}&background=random&color=fff&size=100`;
                            }}
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {staff.gender === 'Male' ? 'Mr. ' : staff.gender === 'Female' ? 'Miss ' : ''}{staff.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {staff.position}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            staff.staffType === 'Teaching' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {staff.staffType}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            staff.gender === 'Male' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-pink-100 text-pink-800'
                          }`}>
                            {staff.gender}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {staff.status || 'Active'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleEdit(staff)}
                              className="text-blue-600 hover:text-blue-900 p-2 hover:bg-blue-50 rounded-lg transition-colors"
                              title="Edit"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                            <button
                              onClick={() => handleDelete(staff)}
                              className="text-red-600 hover:text-red-900 p-2 hover:bg-red-50 rounded-lg transition-colors"
                              title="Delete"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;