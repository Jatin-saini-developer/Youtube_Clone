import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../utils/appSlice';
import chatReducer from '../utils/chatSlice'; 



export const store = configureStore({
  reducer: {
    app: appReducer,
    chat: chatReducer
  
  },
})

export default store;