import React, { useState } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Sample data
  const statsData = [
    { title: 'Total Users', value: '12,842', change: '+12%', icon: '👥', color: 'bg-blue-500' },
    { title: 'Revenue', value: '$48,521', change: '+8%', icon: '💰', color: 'bg-green-500' },
    { title: 'Orders', value: '1,254', change: '+5%', icon: '📦', color: 'bg-purple-500' },
    { title: 'Growth', value: '32.5%', change: '+2.1%', icon: '📈', color: 'bg-orange-500' }
  ];
  
  const recentOrders = [
    { id: '#ORD-7841', customer: 'John Smith', date: '12 Nov 2023', amount: '$128.50', status: 'Completed' },
    { id: '#ORD-7840', customer: 'Sarah Johnson', date: '11 Nov 2023', amount: '$85.20', status: 'Pending' },
    { id: '#ORD-7839', customer: 'Michael Brown', date: '11 Nov 2023', amount: '$214.99', status: 'Completed' },
    { id: '#ORD-7838', customer: 'Emily Davis', date: '10 Nov 2023', amount: '$47.50', status: 'Shipped' },
    { id: '#ORD-7837', customer: 'Robert Wilson', date: '10 Nov 2023', amount: '$92.75', status: 'Completed' }
  ];
  
  const topProducts = [
    { name: 'Wireless Headphones', sales: 342, revenue: '$12,847' },
    { name: 'Smart Watch', sales: 298, revenue: '$14,352' },
    { name: 'Laptop Backpack', sales: 264, revenue: '$7,912' },
    { name: 'Bluetooth Speaker', sales: 187, revenue: '$5,235' },
    { name: 'Phone Case', sales: 521, revenue: '$3,645' }
  ];

  const activityData = [
    { icon: '👤', text: 'John Doe registered a new account', time: '2 hours ago' },
    { icon: '📦', text: 'Order #ORD-7841 was completed', time: '5 hours ago' },
    { icon: '💰', text: 'New payment of $249.99 received', time: 'Yesterday' },
    { icon: '📊', text: 'Monthly report has been generated', time: '2 days ago' }
  ];

  // Chart data for the bar chart
  const chartData = [65, 80, 70, 90, 60, 85, 75];
  const chartLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile menu button */}
      <button 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-600 text-white"
      >
        ☰
      </button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-64 bg-gradient-to-b from-blue-600 to-blue-400 text-white
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-blue-500">
            <h2 className="text-2xl font-bold">AdminPanel</h2>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {[
                { id: 'dashboard', label: '📊 Dashboard' },
                { id: 'users', label: '👥 Users' },
                { id: 'products', label: '📦 Products' },
                { id: 'orders', label: '🛒 Orders' },
                { id: 'analytics', label: '📈 Analytics' },
                { id: 'settings', label: '⚙️ Settings' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveTab(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`
                      w-full text-left px-4 py-3 rounded-lg transition-all duration-200
                      ${activeTab === item.id 
                        ? 'bg-white bg-opacity-20 text-white font-medium' 
                        : 'hover:bg-white hover:bg-opacity-10'
                      }
                    `}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* User info at bottom */}
          <div className="p-4 border-t border-blue-500">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="font-bold">A</span>
              </div>
              <div>
                <p className="font-medium">Admin User</p>
                <p className="text-blue-200 text-sm">admin@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="px-6 py-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="mb-4 lg:mb-0">
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <p className="text-gray-600">Welcome back, Admin! Here's what's happening today.</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full lg:w-64"
                  />
                  <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                    <span className="text-xl">🔔</span>
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>
                  
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      A
                    </div>
                    <span className="hidden lg:block font-medium">Admin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsData.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="mt-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {stat.change}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">from last week</span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts and Data Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Revenue Chart */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 3 months</option>
                </select>
              </div>
              
              <div className="h-64 flex flex-col">
                <div className="flex-1 flex items-end space-x-2 pb-4">
                  {chartData.map((value, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg transition-all duration-300 hover:opacity-80"
                        style={{ height: `${value}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  {chartLabels.map((label, index) => (
                    <span key={index} className="text-xs text-gray-500">{label}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {activityData.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800">{activity.text}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Orders */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View All →
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                      <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                      <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentOrders.map((order, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="py-3 text-sm font-medium text-gray-900">{order.id}</td>
                        <td className="py-3 text-sm text-gray-600">{order.customer}</td>
                        <td className="py-3 text-sm text-gray-600">{order.date}</td>
                        <td className="py-3 text-sm text-gray-600">{order.amount}</td>
                        <td className="py-3">
                          <span className={`
                            inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                            ${order.status === 'Completed' ? 'bg-green-100 text-green-800' : ''}
                            ${order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                            ${order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : ''}
                          `}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Top Products */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Top Products</h3>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View All →
                </button>
              </div>
              
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{product.name}</p>
                      <p className="text-xs text-gray-500">{product.sales} sales</p>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">
                      {product.revenue}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
