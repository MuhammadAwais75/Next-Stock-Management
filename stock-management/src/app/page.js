// import React from 'react';
// import Header from './components/Header';

// const Page = () => {
//   return (
//     <>
//       <Header />
//       <div className='container bg-red-50 px-20 py-8'>
//         <h1 className='text-2xl font-bold mb-4'>Add a Product</h1>
//         <h1 className='text-2xl font-bold mb-8'>Display Current Stock</h1>

//         {/* Stock Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-300">
//             <thead>
//               <tr>
//                 <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Product Name</th>
//                 <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Category</th>
//                 <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Quantity</th>
//                 <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Price</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Example Row */}
//               <tr>
//                 <td className="px-6 py-4 border-b border-gray-200 text-gray-700">Product 1</td>
//                 <td className="px-6 py-4 border-b border-gray-200 text-gray-700">Category A</td>
//                 <td className="px-6 py-4 border-b border-gray-200 text-gray-700">10</td>
//                 <td className="px-6 py-4 border-b border-gray-200 text-gray-700">$25</td>
//               </tr>
//               {/* Add more rows as needed */}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Page;

"use client";

import React, { useState } from 'react';
import Header from './components/Header';

const Page = () => {
  // State to manage form inputs and stock items
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState([]);

  // Handle form submission
  const handleAddProduct = (e) => {
    e.preventDefault();

    // Add new product to stock list
    setStock([...stock, { productName, category, quantity, price }]);

    // Clear the form
    setProductName('');
    setCategory('');
    setQuantity('');
    setPrice('');
  };

  return (
    <>
      <Header />
      <div className='container bg-red-50 px-20 py-8 '>
        <h1 className='text-2xl font-bold mb-4'>Add a Product</h1>
        {/* Form to add a product */}
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
              required
            />
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="px-4 py-2 border rounded"
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
        <div className="overflow-x-auto my-6 bg-red-50 px-20">
        <h1 className='text-2xl font-bold mb-8'>Display Current Stock</h1>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Product Name</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Category</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Quantity</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">Price</th>
              </tr>
            </thead>
            <tbody>
              {stock.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    No products added yet.
                  </td>
                </tr>
              ) : (
                stock.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 border-b border-gray-200 text-gray-700">{item.productName}</td>
                    <td className="px-6 py-4 border-b border-gray-200 text-gray-700">{item.category}</td>
                    <td className="px-6 py-4 border-b border-gray-200 text-gray-700">{item.quantity}</td>
                    <td className="px-6 py-4 border-b border-gray-200 text-gray-700">${item.price}</td>
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



 
        
