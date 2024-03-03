'use client'

import axios from 'axios';
import { useEffect, useState } from 'react';

const Payment = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/pay');
        setProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col md:flex-row h-full md:h-screen">
          {/* Left side (Blue part) */}
          <div className="bg-blue-600 text-white p-20 flex flex-col justify-center items-center md:w-1/2">
            <div className="">
              <div className="flex justify-content">
                <img
                  src={products?.merchant.image_url}
                  alt="Logo"
                  className="h-10 w-10"
                />
                <p className="font-semibold mt-2 mb-12 ml-2 text-lg">
                  {products?.merchant.name}
                </p>
              </div>

              <div className="flex justify-between">
                <h1 className="mb-4">{products?.product.name}</h1>
                <img
                  src={products?.product.image_url}
                  alt={products?.product.name}
                  className="h-16 w-16 rounded-full overflow-hidden mb-2 text-right"
                />
              </div>

              <p className="text-3xl font-semibold mb-4">
                {products?.product.price} {products?.product.currency}
              </p>

              <div className="flex justify-between">
                <p className="mb-4">{products?.product.description}</p>
                <p className="font-semibold mb-4 text-right">
                  {products?.product.price} {products?.product.currency}
                </p>
              </div>

              <hr />

              <div className="flex justify-between">
                <p className="mt-4">Total</p>
                <p className="mt-4 text-right">
                  {products?.product.price} {products?.product.currency}
                </p>
              </div>

              {/* Social media links */}
              <div className="flex justify-center mt-20 text-sm font-medium">
                <a
                  href="https://github.com/prettytoks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-4 hover:text-pink-500"
                >
                  Github
                </a>

                <img
                  className="h-6 w-6"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/telegram/telegram.png"
                  alt="Telegram"
                />

                <a
                  href="https://telegram.me/nextmuggle_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-4 hover:text-pink-500"
                >
                  Telegram
                </a>
           
              </div>
            </div>
          </div>

          {/* Right side (Cream colored part) */}
          <div className="bg-cream p-20 md:w-1/2 flex items-center justify-center">
            {/* Pay with crypto form */}
            <div className="w-full max-w">
              <h2 className="text-purple-900 text-2xl font-semibold mb-2">
                Pay with Crypto
              </h2>

              <select
                id="tokens"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                {products?.tokens.map((token) => (
                  <option key={token.id} value={token.id}>
                    {token.symbol}
                  </option>
                ))}
              </select>

              <div className="mt-4 mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-600 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full border-gray-300 rounded-lg shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <label htmlFor="quantity" className="block mb-2 text-gray-600">
                Quantity
              </label>

              <select
                id="quantity"
                className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                {quantities.map((quantity) => (
                  <option value={quantity}>{quantity}</option>
                ))}
              </select>

              <div className="mt-4 mb-4">
                <label
                  htmlFor="address"
                  className="block text-gray-600 mb-2"
                >
                  Wallet Address
                </label>
                <input
                  type="address"
                  id="address"
                  name="address"
                  className="block w-full border-gray-300 rounded-lg shadow-sm p-2 focus:border-blue-500 focus:ring-blue-500 mb-2"
                />

                <span className="text-sm text-gray-600">
                  Please enter your Arbitrum Wallet Address
                </span>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-14 py-2 rounded-md hover:bg-blue-600"
                >
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
