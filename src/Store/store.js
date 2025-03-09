import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "./Client/clientReducer";
import adminReducer from "./Admin/adminReducer"


const store = configureStore({
    reducer:{
      clientReducer,
      adminReducer
    }
})

export default store