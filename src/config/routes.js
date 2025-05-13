
export const PRODUCTS_ROUTES = {
    
    CREATE : "/products/create" ,
    GET: "/products/get",
    GET_BY_ID: "/products/get/:id",
    DELETE : "/products/delete/:id",
}

export const AUTH_ROUTES = {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
  
}

export const CART_ROUTES = {
    ADD_TO_CART : "/cart/add",
    GET_CART : "/cart/get",
    REMOVE_FROM_CART : "/cart/remove/:id",
    QUANTITY_UPDATE : "/cart/quantity/:id",
    DELETE_CART : "/cart/delete/:id",

}

export const REVIEW_ROUTES = {
    ADD_REVIEW : "/review/:id",
    
}