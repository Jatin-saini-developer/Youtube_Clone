import React from 'react'
import { RiCloseLine } from "react-icons/ri";
import  { useEffect, useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import store from '../utils/store';
import { nameGenerator } from '../utils/Name_generator';
import { messages_generator } from '../utils/Name_generator'; 

 



const LiveChat = () => {

  let dispatch = useDispatch()

  const chat_message = useSelector((store) => store.chat.messages)
  

  // console.log( chat_message)

    let Display_message =()=>{
    // console.log('hello jatin you are best')
   
  }

  useEffect(()=>{

   let i = setInterval(()=>{
       dispatch(addMessage({
      name: nameGenerator(),
      message:messages_generator()
    }))
    },3000)


return () => clearInterval(i);

  },[])
  

  const [Comments, setComments] = useState('')
  // console.log(Comments);



  return (
    <>
    <div className="w-full max-w-md mx-auto mt-4 p-4 bg-white rounded-xl shadow-lg"> 
        <div className= "flex items-center justify-between bg-amber-500 text-white px-4 py-2 rounded-t-xl">
            <h1 className="font-semibold text-lg">Live Chat</h1>
            <RiCloseLine  className="text-xl cursor-pointer" />
        </div>
        <div className="bg-slate-100 h-72 overflow-y-scroll p-3 space-y-2">
            <ul >

              
              {chat_message?.map((msg, index) => (
            <li key={index}  className="flex items-start gap-2">
            <FaRegUserCircle className="mt-1 text-lg"  />
           <span className="font-semibold mr-2">{msg.name}</span>
            {msg.message}
           </li>
            ))}

            </ul>
        </div>
<form 
onSubmit={(e)=>{ e.preventDefault();
               setComments('')
               dispatch(addMessage({
                name: "Jatin Saini",
                message: Comments
               }))

}} >
<div className="bg-white w-[300px] p-4 rounded-xl shadow-md flex items-center gap-2">
  <input
    type="text"
    name='comment'
    placeholder="Type your message..."
    value={Comments}
    onChange={(e)=>setComments(e.target.value)} 
    className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
  />

  <button

   type='submit'
   className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors duration-200">
   
    Send
  </button>

  
</div>
</form>

    </div>

   
   
    </>
  )
}

export default LiveChat