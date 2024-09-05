
"use client";

import React, { useState } from 'react';
import Header from './components/Header';

const Page = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();

    // Validate inputs
    if (parseFloat(quantity) <= 0 || parseFloat(price) <= 0) {
      alert('Quantity and Price must be greater than zero.');
      return;
    }

    // Add new product to stock list
    setStock([...stock, { productName, category, quantity, price: parseFloat(price).toFixed(2) }]);

    // Clear the form
    setProductName('');
    setCategory('');
    setQuantity('');
    setPrice('');
  };

  // Filtered stock based on search term and selected category
  const filteredStock = stock.filter((item) =>
    item.productName.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || item.category === selectedCategory)
  );

  return (
    <>
      <Header />

        {/* Search Section */}
        <div className="container bg-red-50 max-w-[1050px] mx-auto  mt-8 p-4">
        <h1 className="text-2xl font-bold mb-4  ">Search a Product</h1>
        <div  className='flex' >
          <input
            type="text"
            placeholder="Search by Product Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border rounded w-full "
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded"
          >
            <option value="">All Categories</option>
            {Array.from(new Set(stock.map((item) => item.category))).map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          </div>
        
      </div>


      <div className="container bg-red-50 max-w-[1050px] p-4 mt-8 mx-auto">
        <h1 className="text-2xl font-bold mb-4">Add a Product</h1>
        <form className="mb-8" onSubmit={handleAddProduct}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="px-4 py-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2 border rounded"
              required
            />
            <input
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="px-4 py-2 border rounded"
              min="1"
              required
            />
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="px-4 py-2 border rounded"
              min="0.01"
              step="0.01"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Product
          </button>
        </form>
      </div>

    

      {/* Stock Table */}
      <div className="container bg-red-50 max-w-[1050px] p-4 mt-8 mx-auto">
        <h1 className="text-2xl font-bold mb-8">Display Current Stock</h1>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                Product Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                Category
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                Quantity
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredStock.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No products match your search.
                </td>
              </tr>
            ) : (
              filteredStock.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 border-b border-gray-200 text-gray-700">
                    {item.productName}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-gray-700">
                    {item.category}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-gray-700">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-gray-700">
                    ${item.price}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        </div>
      
    </>
  );
};

export default Page;
