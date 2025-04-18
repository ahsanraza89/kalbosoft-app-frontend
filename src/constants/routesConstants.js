import Login from "../app/login/Login";
import Signup from "../app/signup/Signup";
import Home from "../app/home/Home";
import Contact from "../app/contact/Contact";
import Products from "../app/products/Products";
import ProductDetails from "../app/productDetails/ProductDetails";
export const ROUTE_NAMES = {
    LOGIN : "/login" ,
    SIGNUP : "/signup" ,
    HOME : "/",
    CONTACT : "/contact",
    PRODUCTS : "/products",
    PRODUCTS_DETAILS : "/product-details/:id",
    
}

export const PUBLIC_ROUTE = [
    {
        path : ROUTE_NAMES.LOGIN,
       element : Login
    },

    {
        path : ROUTE_NAMES.SIGNUP,
       element : Signup
    },
]


export const PRIVATE_ROUTES = [
    {
        path : ROUTE_NAMES.CONTACT,
       element : Contact,
       role: ["admin", "user"]
    },
    {
        path : ROUTE_NAMES.HOME,
       element : Home,
       role: ["admin"]
    },
    {
        path : ROUTE_NAMES.PRODUCTS,
       element : Products,
       role: ["admin"]
     
    },
    {
        path : ROUTE_NAMES.PRODUCTS_DETAILS,
       element : ProductDetails,
       role: ["admin"]
    }

]
