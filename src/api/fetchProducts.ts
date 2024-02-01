

import axios from "axios"

export const fetchProducts = ():Promise<any>=>{
    return  axios.get('https://fakestoreapi.com/products').then((res)=>res.data)
}