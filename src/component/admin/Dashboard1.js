import React, { useState, useEffect } from 'react';
import { ref, onValue, remove, update } from 'firebase/database';
import { database } from '../../config/firebase';
import Dashboard from './dashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard1 = () => {
  const [staffData, setStaffData] = useState({
    teaching: [],
    nonTeaching: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeModal, setActiveModal] = useState(null); // 'teaching', 'nonTeaching', 'all'
  const [showPositionModal, setShowPositionModal] = useState(false);
  const [positionModalType, setPositionModalType] = useState(null); // 'teaching', 'nonTeaching'

  useEffect(() => {
    const fetchStaffData = () => {
      try {
        const staffRef = ref(database, 'School/staff');
        
        onValue(staffRef, (snapshot) => {
          const data = snapshot.val();
          console.log('Raw Firebase Data:', data);
          
          if (data) {
            const teachingStaff = [];
            const nonTeachingStaff = [];

            Object.entries(data).forEach(([key, staff]) => {
              const staffWithId = {
                id: key,
                ...staff
              };
              
              if (staff.staffType === 'Teaching') {
                teachingStaff.push(staffWithId);
              } else if (staff.staffType === 'Non-Teaching') {
                nonTeachingStaff.push(staffWithId);
              }
            });

            setStaffData({
              teaching: teachingStaff,
              nonTeaching: nonTeachingStaff
            });
          } else {
            setStaffData({ teaching: [], nonTeaching: [] });
          }
          setLoading(false);
        }, (error) => {
          console.error('Firebase error:', error);
          setError('Failed to fetch data: ' + error.message);
          setLoading(false);
        });
      } catch (err) {
        console.error('General error:', err);
        setError('Error fetching data: ' + err.message);
        setLoading(false);
      }
    };

    fetchStaffData();
  }, []);

  // Delete staff member
  const deleteStaff = async (staffId, staffName) => {
    if (window.confirm(`Are you sure you want to delete ${staffName}?`)) {
      try {
        const staffRef = ref(database, `School/staff/${staffId}`);
        await remove(staffRef);
        toast.success(`${staffName} deleted successfully!`, {
          position: "top-right",
          autoClose: 3000,
        });
      } catch (error) {
        console.error('Error deleting staff:', error);
        toast.error('Failed to delete staff member: ' + error.message, {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
  };

  // Toggle staff status (Active/Inactive)
  const toggleStaffStatus = async (staffId, currentStatus, staffName) => {
    try {
      const staffRef = ref(database, `School/staff/${staffId}`);
      const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
      
      await update(staffRef, {
        status: newStatus
      });
      
      if (newStatus === 'active') {
        toast.success(`✅ ${staffName} has been activated!`, {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        toast.warning(`⚠️ ${staffName} has been deactivated!`, {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error('Error updating staff status:', error);
      toast.error('Failed to update status: ' + error.message, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  // Stats calculation
  const totalTeaching = staffData.teaching.length;
  const totalNonTeaching = staffData.nonTeaching.length;
  const totalStaff = totalTeaching + totalNonTeaching;


  const getUniquePositions = (staffList) => {
    const positionsMap = new Map();
    staffList.forEach(staff => {
      const position = staff.position || 'No Position';
      if (positionsMap.has(position)) {
        positionsMap.set(position, positionsMap.get(position) + 1);
      } else {
        positionsMap.set(position, 1);
      }
    });
    return positionsMap;
  };

  const teachingPositions = getUniquePositions(staffData.teaching);
  const nonTeachingPositions = getUniquePositions(staffData.nonTeaching);
  const totalTeachingPositions = teachingPositions.size;
  const totalNonTeachingPositions = nonTeachingPositions.size;

  // Modal Component
  const StaffModal = ({ type, onClose }) => {
    const staffList = type === 'all' 
      ? [...staffData.teaching, ...staffData.nonTeaching]
      : type === 'teaching' 
        ? staffData.teaching 
        : staffData.nonTeaching;

    const modalTitle = type === 'all' 
      ? 'All Staff Members' 
      : type === 'teaching' 
        ? 'Teaching Staff' 
        : 'Non-Teaching Staff';

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden">
          {/* Modal Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-6 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">{modalTitle}</h2>
                <p className="text-blue-100 mt-1">
                  Total: {staffList.length} staff members
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors text-2xl font-bold"
              >
                ×
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 max-h-[60vh] overflow-auto">
            {staffList.length === 0 ? (
              <div className="text-center py-12">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Staff Members Found</h3>
                <p className="text-gray-600">No staff data available for this category.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">
                        Name
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">
                        Position
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {staffList.map((staff) => (
                      <tr key={staff.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                              {staff.name ? staff.name.charAt(0).toUpperCase() : 'U'}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {staff.name || 'Unknown Name'}
                              </div>
                              <div className="text-sm text-gray-500">
                                {staff.staffType || 'Unknown Type'}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{staff.position || 'No Position'}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => toggleStaffStatus(staff.id, staff.status || 'active', staff.name)}
                            className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                              (staff.status === 'inactive') 
                                ? 'bg-red-100 text-red-800 hover:bg-red-200' 
                                : 'bg-green-100 text-green-800 hover:bg-green-200'
                            }`}
                          >
                            <span className={`w-2 h-2 rounded-full mr-2 ${
                              (staff.status === 'inactive') ? 'bg-red-500' : 'bg-green-500'
                            }`}></span>
                            {(staff.status === 'inactive') ? 'Inactive' : 'Active'}
                          </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => toggleStaffStatus(staff.id, staff.status || 'active', staff.name)}
                              className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center ${
                                (staff.status === 'inactive')
                                  ? 'bg-green-600 text-white hover:bg-green-700'
                                  : 'bg-yellow-600 text-white hover:bg-yellow-700'
                              }`}
                            >
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {(staff.status === 'inactive') ? (
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                ) : (
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                )}
                              </svg>
                              {(staff.status === 'inactive') ? 'Activate' : 'Deactivate'}
                            </button>
                            <button
                              onClick={() => deleteStaff(staff.id, staff.name)}
                              className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
                            >
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                              Delete
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

          {/* Modal Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">
                Showing {staffList.length} of {staffList.length} records
              </span>
              <button
                onClick={onClose}
                className="bg-gray-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Position Modal Component
  const PositionModal = ({ type, onClose }) => {
    const positionsMap = type === 'teaching' ? teachingPositions : nonTeachingPositions;
    const modalTitle = type === 'teaching' ? 'Teaching Positions' : 'Non-Teaching Positions';
    const positions = Array.from(positionsMap.entries()).sort((a, b) => b[1] - a[1]);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
          {/* Modal Header */}
          <div className={`p-6 text-white ${
            type === 'teaching' 
              ? 'bg-gradient-to-r from-blue-600 to-blue-700' 
              : 'bg-gradient-to-r from-green-600 to-green-700'
          }`}>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">{modalTitle}</h2>
                <p className={`mt-1 ${
                  type === 'teaching' ? 'text-blue-100' : 'text-green-100'
                }`}>
                  Total: {positions.length} unique positions
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors text-2xl font-bold"
              >
                ×
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 max-h-[60vh] overflow-auto">
            {positions.length === 0 ? (
              <div className="text-center py-12">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Positions Found</h3>
                <p className="text-gray-600">No position data available for this category.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">
                        #
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">
                        Position Name
                      </th>
                      <th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider border-b">
                        Number of Staff
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {positions.map(([position, count], index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-medium text-gray-900">{index + 1}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white font-semibold text-sm ${
                              type === 'teaching' 
                                ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                                : 'bg-gradient-to-r from-green-500 to-green-600'
                            }`}>
                              {position.charAt(0).toUpperCase()}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {position}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${
                            type === 'teaching'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {count} {count === 1 ? 'staff' : 'staff'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">
                Showing {positions.length} position{positions.length !== 1 ? 's' : ''}
              </span>
              <button
                onClick={onClose}
                className={`px-6 py-2 rounded-lg font-medium text-white transition-colors ${
                  type === 'teaching'
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <>
        <Dashboard/>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 ml-64 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600 text-lg">Loading staff data...</p>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Dashboard/>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 ml-64 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-4">
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="mt-6 text-center text-xl font-semibold text-gray-900">Database Error</h3>
          <p className="mt-2 text-center text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Staff Management Dashboard</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Click on the cards below to view detailed staff information
          </p>
        </div>

        {/* Small Stat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-6xl mx-auto">
          {/* Total Staff Card */}
          <div 
            onClick={() => setActiveModal('all')}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 group-hover:text-gray-700">Total Staff</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{totalStaff}</p>
                <p className="text-xs text-gray-500 mt-2">Click to view all staff</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Teaching Staff Card */}
          <div 
            onClick={() => setActiveModal('teaching')}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 group-hover:text-gray-700">Teaching Staff</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{totalTeaching}</p>
                <p className="text-xs text-gray-500 mt-2">Click to view teaching staff</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Non-Teaching Staff Card */}
          <div 
            onClick={() => setActiveModal('nonTeaching')}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 group-hover:text-gray-700">Non-Teaching Staff</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{totalNonTeaching}</p>
                <p className="text-xs text-gray-500 mt-2">Click to view non-teaching staff</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Positions Card */}
          <div 
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-gray-600 group-hover:text-gray-700">Positions</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="space-y-2">
              <div 
                onClick={() => {
                  setPositionModalType('teaching');
                  setShowPositionModal(true);
                }}
                className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-700 font-medium">Teaching</span>
                  <span className="text-lg font-bold text-blue-900">{totalTeachingPositions}</span>
                </div>
              </div>
              <div 
                onClick={() => {
                  setPositionModalType('nonTeaching');
                  setShowPositionModal(true);
                }}
                className="bg-green-50 hover:bg-green-100 p-3 rounded-lg transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm text-green-700 font-medium">Non-Teaching</span>
                  <span className="text-lg font-bold text-green-900">{totalNonTeachingPositions}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          <p className="text-lg">
            💡 <strong>Click on any card above</strong> to view detailed staff information in a table format with management options.
          </p>
        </div>
        </div>
      </div>

      {/* Render Staff Modal */}
      {activeModal && (
        <StaffModal 
          type={activeModal} 
          onClose={() => setActiveModal(null)} 
        />
      )}

      {/* Render Position Modal */}
      {showPositionModal && positionModalType && (
        <PositionModal 
          type={positionModalType} 
          onClose={() => {
            setShowPositionModal(false);
            setPositionModalType(null);
          }} 
        />
      )}
    </div>
  );
};

export default Dashboard1;