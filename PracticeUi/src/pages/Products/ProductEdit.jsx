import React, { useState, useEffect } from 'react';
import slugify from 'slugify';

const ProductEdit = ({ product, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    brand: '',
    price: '',
    category: '',
    categoryTypeList: [],
    thumbnail: ''
  });

  // Auto-update slug when name changes
  useEffect(() => {
    const generatedSlug = slugify(formData.name, { lower: true, strict: true });
    setFormData(prev => ({ ...prev, slug: generatedSlug }));
  }, [formData.name]);

  // Set initial product data
  useEffect(() => {
    if (product) {
      setFormData({ ...product });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryTypesChange = (e) => {
    const value = e.target.value.split(',').map(item => item.trim());
    setFormData(prev => ({ ...prev, categoryTypeList: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-6 border border-black/50">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Edit Product</h2>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-red-300 hover:bg-red-400 rounded-md"
        >
          Close
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Slug (Read-Only) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Slug</label>
          <input
            type="text"
            name="slug"
            value={formData.slug}
            readOnly
            className="mt-1 w-full p-2 border rounded-md bg-gray-100 text-green-700 font-mono"
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Brand</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded-md"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Price ($)</label>
          <input
            type="number"
            step="0.01"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded-md"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded-md">
            <option value="">Select Category</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        {/* Category Type List */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category Types <span className="text-xs text-gray-500">(comma-separated)</span>
          </label>
          <input
            type="text"
            name="categoryTypeList"
            value={formData.categoryTypeList.join(', ')}
            onChange={handleCategoryTypesChange}
            className="mt-1 w-full p-2 border rounded-md"
          />
        </div>

        {/* Thumbnail */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Thumbnail URL</label>
          <input
            type="text"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            className="mt-1 w-full p-2 border rounded-md"
          />
          {formData.thumbnail && (
            <img
              src={formData.thumbnail}
              alt="Thumbnail Preview"
              className="mt-2 w-24 h-24 object-cover border rounded-md"
            />
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductEdit;
