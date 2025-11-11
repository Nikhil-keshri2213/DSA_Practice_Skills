import React from 'react'
import ProductEdit from './ProductEdit';

const ProductList = ({ img, name, brand,price, category ,onEdit, onDelete }) => {

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg border border-black/50 rounded-lg p-4 space-y-4 md:space-y-0 md:space-x-6 cursor-pointer" onClick={onEdit}>
      {/* Image */}
      <img
        src={img}
        alt={name}
        className="w-20 h-20 object-cover rounded-md border border-gray-300"
      />
      
      {/* Product Details */}
      <div className="flex flex-col justify-evenly flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{brand}</p>
        <p className="text-lg font-bold text-gray-900">{`$${price.toFixed(2)}`}</p>
      </div>
      
      <div className="flex flex-col justify-evenly flex-1">
        <p className="text-base text-gray-600">{category}</p>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 items-center">
        <button className="px-4 py-1 text-blue-500 font-semibold border rounded-md hover:bg-blue-500 hover:text-white" onClick={onEdit}>Edit</button>
        <button className="px-4 py-1 text-red-500 font-semibold border rounded-md hover:bg-red-500 hover:text-white" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ProductList;
