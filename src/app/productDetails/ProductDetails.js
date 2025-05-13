import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom'
import { getByIdProduct } from '../../store/slices/productSlice';
import { addToCart } from '../../store/slices/cartSlice';
import { toast } from 'react-toastify';
import { addReview } from '../../store/slices/reviewSlice';


export default function ProductDetails() {

  const product = useSelector((state) => state.ProductsSlice.product);
  const [loading ,setLoading] = useState(true);  
  const [reviewText, setReviewText] =  useState("");

  const params = useParams();
  let dispatch = useDispatch();
  const { id } = params;
 

  useEffect(() => {
   if(id ){
    dispatch(getByIdProduct({id , callBack : (response) => {
      if(response.status === 200){
        setLoading(false)
    }
    else{
      setLoading(false)
    }}}
  )
);
   }
  }, [id ,dispatch]);

  const handleAddToCart = () =>{

    const data = {
      productId : product._id,
      quantity : 1
    }
    // Logic to add the product to the cart
    console.log("Product added to cart:", product);
    dispatch(addToCart({data , callBack : (response) => {
      if(response.status === 200){
        console.log("Product added to cart successfully")
        toast.success("Product added to cart successfully")
      }
      else{
        console.log("Failed to add product to cart")
        toast.error("Failed to add product to cart")
      }
    }}))
 
  }

  const reviewHandler = () =>{
 
    const data = {
    text : reviewText,

    }

    dispatch(addReview({data , id, callBack : (response) => {
      if(response.status === 200){
        console.log("Review added successfully")
        toast.success("Review added successfully")
        dispatch(getByIdProduct({id }))
      }
      else{
        console.log("Failed to add review")
        toast.error("Failed to add review")
      }
    }                           

    })) 
  }


  if(loading)return <p className="text-center text-xl font-semibold">Loading...</p>

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}
          {/* <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={product?.image}
              alt="Product"
              className="w-40 h-auto max-w-md mx-auto rounded-lg shadow-md mb-6"
              id="mainImage"
            />
          </div> */}
          
          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-4">{product?.title}</h2>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">${product.price}</span>
              <span className="text-gray-500 line-through">${(product.price * 1.2).toFixed(2)}</span> {/* For example, if the original price is 20% more */}
            </div>
            <p className="text-gray-700 mb-6">{product.description}</p>

                   

         
            
            <div className="flex space-x-4 mb-6">
              <button onClick={handleAddToCart} 
              className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
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
     

              <textarea value={reviewText} 
               onChange={(e)=>{ setReviewText(e.target.value)
                console.log(e.target.value)}
               }               
               placeholder='Write your review here...'

              />
   
              <button onClick={reviewHandler}>Submit it</button>
               
                 <h3 className="text-lg font-semibold mb-2">Product Reviews</h3>
                      { product.reviews.map((review, index) => (
                     <p key={index} className="text-gray-700 mb-6">{review.text}</p>
                      ))}
                     
             
          </div>
        </div>
      </div>
    </div>
  )
}
