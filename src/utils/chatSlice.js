import { createSlice } from "@reduxjs/toolkit";
import reducer from "./appSlice";

let chatSlice = createSlice({
    name : "chat",
    initialState: {
        messages : []
    },

 reducers:{
  addMessage : (slice, action)  => {
    slice.messages.push(action.payload)
  }
}

});


export default chatSlice.reducer;
export const {addMessage} = chatSlice.actions