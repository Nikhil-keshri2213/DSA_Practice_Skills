import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductCreate from './ProductCreate';
import ProductEdit from './ProductEdit';
import data from '../../data/data.json';

const ProductPanel = () => {
  const [products, setProducts] = useState(data.products); // Load from JSON
  const [isCreating, setIsCreating] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // CREATE product
  const handleCreate = (newProduct) => {
    setProducts(prev => [...prev, newProduct]);
    setIsCreating(false);
  };

  // EDIT product
  const handleEdit = (updatedProduct) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setEditingProduct(null);
  };

  // DELETE product
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(prev => prev.filter(product => product.id !== id));
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen rounded-lg">
      {/* Header */}
      {!isCreating && !editingProduct && (
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Products</h2>
          <button
            onClick={() => setIsCreating(true)}
            className="px-4 py-1 text-green-500 font-semibold border rounded-md hover:bg-green-500 hover:text-white transition">
            Create +
          </button>
        </div>
      )}

      {/* CREATE PRODUCT FORM */}
      {isCreating && (
        <ProductCreate
          onCreate={handleCreate}
          onCancel={() => setIsCreating(false)}
        />
      )}

      {/* EDIT PRODUCT FORM */}
      {editingProduct && (
        <ProductEdit
          product={editingProduct}
          onSave={handleEdit}
          onCancel={() => setEditingProduct(null)}
        />
      )}

      {/* PRODUCT LIST */}
      {!isCreating && !editingProduct && (
        <div className="space-y-4">
          {products.map((item) => (
            <ProductList
              key={item.id}
              img={item.thumbnail}
              name={item.name}
              brand={item.brand}
              price={item.price}
              category={item.category}
              onEdit={() => setEditingProduct(item)}
              onDelete={() => handleDelete(item.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPanel;
