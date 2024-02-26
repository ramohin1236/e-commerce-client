/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authSevice } from "./userService";
import { toast } from "react-toastify";


export const registerUser =createAsyncThunk(
    "auth/login", 
    async(userData,thunkAPI)=>{
    try{
        return await authSevice.register(userData)
    }catch(error){
     return thunkAPI.rejectWithValue(error)
    }
})

export const loginUser =createAsyncThunk("auth/register", async(userData,thunkAPI)=>{
    try{
        return await authSevice.login(userData)
    }catch(error){
     return thunkAPI.rejectWithValue(error)
    }
})
export const getUserProductWishlist =createAsyncThunk("auth/userwishlist", async(thunkAPI)=>{
    try{
        return await authSevice.getUserWishList()
    }catch(error){
     return thunkAPI.rejectWithValue(error)
    }
})
export const addToCart =createAsyncThunk("auth/cart/add", async(cartData,thunkAPI)=>{
    try{
        return await authSevice.addToCart(cartData)
    }catch(error){
     return thunkAPI.rejectWithValue(error)
    }
})

const getCustomerfromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

const initialState={
    user: getCustomerfromLocalStorage,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const authSlice = createSlice({
name: "auth",
initialState:initialState,
reducers:{},
extraReducers:(builder)=>{
    builder
    .addCase(registerUser.pending,(state)=>{
         state.isLoading=true
    }).addCase(registerUser.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.isError=false;
        state.isSuccess=true;
        state.createUser = action.payload;
        if(state.isSuccess === true){
            toast.info("User created successfully")
        }
    }).addCase(registerUser.rejected,(state,action)=>{
          state.isLoading=false;
          state.isError= true;
          state.message= action.error;
          if(state.isError === true){
            toast.error(action.error)
        }
    })
    .addCase(loginUser.pending,(state)=>{
        state.isLoading=true
   }).addCase(loginUser.fulfilled,(state,action)=>{
       state.isLoading=false;
       state.isError=false;
       state.isSuccess=true;
       state.user = action.payload;
     
       if(state.isSuccess === true){
        localStorage.setItem("token", action.payload.token)
           toast.info("User Loggedin successfully!")
       }
   }).addCase(loginUser.rejected,(state,action)=>{
         state.isLoading=false;
         state.isError= true;
         state.message= action.error;
         if(state.isError === true){
           toast.error(action.error)
       }
   })
   .addCase(getUserProductWishlist.pending,(state)=>{
    state.isLoading=true;
})
.addCase(getUserProductWishlist.fulfilled,(state,action)=>{
   state.isLoading=false;
   state.isError=false;
   state.isSuccess=true;
   state.wishlist= action.payload;
   state.message = "Wishlist Products Featched Successfully!"
  
}).addCase(getUserProductWishlist.rejected,(state,action)=>{
     state.isLoading=false;
     state.isError= true;
     state.isSuccess= false;
     state.message= action.error;
     
})
   .addCase(addToCart.pending,(state)=>{
    state.isLoading=true;
})
.addCase(addToCart.fulfilled,(state,action)=>{
   state.isLoading=false;
   state.isError=false;
   state.isSuccess=true;
   state.cartProduct= action.payload;
   state.message = "Cart Products Featched Successfully!"
  
}).addCase(addToCart.rejected,(state,action)=>{
     state.isLoading=false;
     state.isError= true;
     state.isSuccess= false;
     state.message= action.error;
     
})
}
})


export default authSlice.reducer;
