import React, { useState } from 'react';
import ProductPanel from '../pages/Products/ProductPanel';
import CategoryPanel from '../pages/Category/CategoryPanel';
import OrderPanel from '../pages/Orders/OrderPanel';
import PaymentPanel from '../pages/Payments/PaymentPanel';

const AdminPanel = () => {
  const [activePanel, setActivePanel] = useState('Products');

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="text-white w-64 p-6 space-y-4 border-black/50 border rounded-lg">
        <div className="text-3xl font-semibold mb-6 bg-white text-black w-full text-center">
          <h2>Shop<span className="text-white bg-black">E</span>ase</h2>
          <p className='text-sm'>Management Portal</p>
        </div>

        <div className="space-y-2">
          <button
            onClick={() => setActivePanel('Products')}
            className="w-full p-2 text-left bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-200">
            Products
          </button>
          
          <button
            onClick={() => setActivePanel('Category')}
            className="w-full p-2 text-left bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-200">
            Categories
          </button>
          
          <button
            onClick={() => setActivePanel('Orders')}
            className="w-full p-2 text-left bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-200">
            Orders
          </button>

          <button
            onClick={() => setActivePanel('Payments')}
            className="w-full p-2 text-left bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-200">
            Payments
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 bg-gray-200">
        <div className="bg-yellow-500 rounded-lg p-4 shadow-lg mb-6">
          <h2 className="text-xl font-bold text-center">Admin Management Portal</h2>
        </div>
        {/* Conditional Rendering for Active Panels */}
        <div className="space-y-6">
          {activePanel === 'Products' && <ProductPanel />}
          {activePanel === 'Category' && <CategoryPanel />}
          {activePanel === 'Orders' && <OrderPanel />}
          {activePanel === 'Payments' && <PaymentPanel />}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
