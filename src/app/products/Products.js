import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getProducts } from '../../store/slices/productSlice'
import { useNavigate } from 'react-router-dom'
import { ROUTE_NAMES } from '../../constants/routesConstants'
import { toast } from 'react-toastify';
import 'font-awesome/css/font-awesome.min.css';


export default function Products() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const { products } = useSelector((state) => state.ProductsSlice)

  const dispatch = useDispatch()

  const handlerOnclick = (id) => {
    navigate(ROUTE_NAMES.PRODUCTS_DETAILS.replace(':id', id))
  }
  const handlerDelete =(id) => {
    dispatch(deleteProduct({id , callBack: (response) => {
      if(response.status === 200) {
        dispatch(
          getProducts({
            callBack: (response) => { },
          })
        )
      toast.success("Product deleted successfully")
      }
    }}))
  }

  useEffect(() => {
    setLoading(true)
    dispatch(
      getProducts({
        callBack: (response) => {
          if(response.status === 200) {
            setLoading(false)
          }
                  },
      })
    )
  }, [dispatch])

  if (loading) return <p className="text-center text-xl font-semibold">Loading...</p>

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col relative"
          >
           
            <h2 className="text-lg font-semibold mb-1 truncate">{product.title}</h2>
            <p className="text-sm text-gray-600 line-clamp-2 mb-2">{product.description}</p>
            <p className="text-indigo-600 font-bold text-lg mb-4">${product.price}</p>
            <button
              onClick={() => handlerOnclick(product._id)}
              className="mt-auto bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 
              "
            >
              Product Details
            </button>
            <button
              onClick={() => handlerDelete(product._id)}
             className='absolute top-2 right-2  '
            >
             <i className="fa fa-trash mr-2" aria-hidden="true"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
