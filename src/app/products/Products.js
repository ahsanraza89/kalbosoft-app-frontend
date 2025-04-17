import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/slices/productSlice'

export default function Products() {
  const {products , loading , error} = useSelector((state) => state.ProuctsSlice)   

    const dispatch = useDispatch()
  
    useEffect(() => {
       dispatch(getProducts())
    }, [dispatch ])
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  return (
    <>
     <h1 className='text-3xl font-bold'>Products</h1>
   {
    products.map((product )=>{
      return (
        <div key={product.id} style={{ border: '1px solid black', margin: '10px' }}>
          <h1>{product.title}</h1>
          <p>{product.description }</p>
          <p>{product.price}</p>
          {/* <img src={product.image} alt="" /> */}
           </div>
      )
    })
   }
    </>
  )
}
