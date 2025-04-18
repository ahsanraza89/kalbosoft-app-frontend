import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/slices/productSlice'
import { useNavigate } from 'react-router-dom';
import { ROUTE_NAMES } from '../../constants/routesConstants';

export default function Products() {
  const [loading , setLoading] = useState(false);
  const navigate = useNavigate();

  const {products  } = useSelector((state) => state.ProuctsSlice)   
   
    const dispatch = useDispatch();

    const handlerOnclick = (id) => {
      navigate(ROUTE_NAMES.PRODUCTS_DETAILS.replace(':id', id));
      
    }

  
    useEffect(() => {
      setLoading(true);
       dispatch(getProducts({ callBack:(response) => {
          if(response.status === 200){
            alert("Products fetched successfully");
          }else{
            alert("Error fetching products")
          }
         setLoading(false)
       }
      }))
    }, [dispatch ])
    if (loading) return <p>Loading...</p>;
    
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
          <img src={product.image} alt="" />
          <button onClick={()=>handlerOnclick(product.id)}>Product Details</button>
           </div>

      )
    })
   }
  
    </>
  )
}
