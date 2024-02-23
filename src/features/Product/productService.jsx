/* eslint-disable no-undef */
import axios from "axios"
import { base_url, config } from "../../utils/axiosConfig"



// (`${base_url}products/wishlist`,{prodId},config)
const addToWishList = async(prodId)=>{
    const response = await axios.put(`${base_url}products/wishlist`,{prodId},config)
    if(response.data){
        return response.data
    }
}
const getProducts= async()=>{
    const response = await axios.get(`${base_url}products`,)
    if(response.data){
        return response.data
    }
}



export const  productService={
    getProducts,
    addToWishList
}