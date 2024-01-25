import axios from "axios"

export const fetchSingleProduct = (id:string):Promise<any>=>{
    return  axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>res.data)
}