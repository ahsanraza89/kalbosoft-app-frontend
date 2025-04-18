import React from 'react'

export default function ProductDetails() {
  return (
    <div>
      <div className="bg-gray-100">
  <div className="container mx-auto px-4 py-8">
    <div className="flex flex-wrap -mx-4">
      {/* Product Images */}
      <div className="w-full md:w-1/2 px-4 mb-8">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Product"
          className="w-full h-auto rounded-lg shadow-md mb-4"
          id="mainImage"
        />
       
      </div>
      {/* Product Details */}
      <div className="w-full md:w-1/2 px-4">
        <h2 className="text-3xl font-bold mb-2">Premium Wireless Headphones</h2>
        
        <div className="mb-4">
          <span className="text-2xl font-bold mr-2">$349.99</span>
          <span className="text-gray-500 line-through">$399.99</span>
        </div>
       
        <p className="text-gray-700 mb-6">
          Experience premium sound quality and industry-leading noise
          cancellation with these wireless headphones. Perfect for music lovers
          and frequent travelers.
        </p>
       
       
        <div className="flex space-x-4 mb-6">
          <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            Add to Cart
          </button>
  
        </div>
      
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
