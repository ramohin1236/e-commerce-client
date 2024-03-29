/* eslint-disable no-undef */
import axios from "axios"
import { base_url, config } from "../../utils/axiosConfig"


const register= async(userData)=>{
    const response = await axios.post(`${base_url}user/register`,userData)
    if(response.data){
        if (response.data) {
            localStorage.setItem("customer", JSON.stringify(response.data));
          }
        return response.data
    }
}
const login= async(userData)=>{
    const response = await axios.post(`${base_url}user/login`,userData,)
    if(response.data){
        localStorage.setItem("customer", JSON.stringify(response.data));
      }
      return response.data;
}
const getUserWishList= async()=>{
    const response = await axios.get(`${base_url}user/wishlist`,config)
    if(response.data){
        return response.data;
      }
    
}
const addToCart= async(cartData)=>{
    const response = await axios.post(`${base_url}user/cart`,cartData,config)
    if(response.data){
        return response.data;
      }
    
}
const getCart= async()=>{
    const response = await axios.get(`${base_url}user/cart`,config)
    if(response.data){
        return response.data;
      }
    
}


const removeProductCart = async(cartItemId)=>{
    const response = await axios.delete(`${base_url}user/delete-product-cart/${cartItemId}`,config)
    if(response.data){
        return response.data;
      }
}
// const updateProductCart = async(cartDetail)=>{
//     const response = await axios.delete(`${base_url}user/delete-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`,config)
//     if(response.data){
//         return response.data;
//       }
// }



export const  authSevice={
    register,
    login,
    getUserWishList,
    addToCart,
    getCart,
    removeProductCart,
   
}