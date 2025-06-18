import React, { useEffect, useState } from 'react';
import { BsLayoutTextSidebar } from 'react-icons/bs';
import { IoSearch } from 'react-icons/io5';
import { FaMicrophone, FaPlus } from 'react-icons/fa';
import { CiBellOn } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../constants/Contants';


const Header = () => {

  const dispactch = useDispatch()


  const toggleHandler = () => {
    dispactch(toggleMenu())
  }




  const [SearchQuery, setSearchQuery] = useState("")
  const [Suggestions, setSuggestion] = useState([])

    const [showSuggestions, setshowSuggestions] = useState(false)


  
  const getSearchApi = async () =>{

   const data = await fetch(YOUTUBE_SEARCH_API + SearchQuery);
   const json = await data.json();
   setSuggestion(json[1])
   
  }

   useEffect(()=>{
    
    const Timer = setTimeout(() => { getSearchApi()}, 200);

    return () => {
      clearTimeout(Timer)
    }


    },[SearchQuery])



  return (
    <div className="flex items-center  justify-between px-4 py-2 bg-white text-black shadow-md" >
      
      {/* Left Section - Menu + Logo */}
      <div className="flex items-center gap-4">
        <BsLayoutTextSidebar className="text-2xl cursor-pointer"
         onClick={toggleHandler}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube"
          className="h-6"
        />
        <span className="text-xs text-gray-400">IN</span>
      </div>


      {/* Middle Section - Search Bar */}

      <div>
          <div className="flex items-center flex-1 max-w-2xl mx-4">
        <input
          type="search"
          placeholder="Search"
          value={SearchQuery}
          onChange={(e) => {setSearchQuery(e.target.value)}}
            onFocus={() => setshowSuggestions(true)}
            onBlur={() => setshowSuggestions(false)}
          className="w-full py-2 px-4 rounded-l-full bg-[#f1f1f1] border border-gray-300 text-black focus:outline-none"
        />
        <button className="px-4 py-3 bg-gray-200 rounded-r-full border border-gray-300 ">
          <IoSearch className="text-white" />
        </button>

        <button className="ml-4 p-2 rounded-full bg-gray-200">
          <FaMicrophone />
        </button>

      </div>

              {/* seach bar suggestions */}
              
     {showSuggestions && <div className='fixed w-[40%] bg-white border border-gray-300  shadow-md rounded-md z-10 '>
        <ul>
        {Suggestions.map((s) => (
          <li key={s} className='px-3 py-0.5 shadow-amber-100'>
            {s}
          </li>
        ))}     
        </ul>

      </div>}
      </div>
    
      {/* Right Section - Create */}
      <div>
        <button className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full  hover:bg-gray-300">
          <FaPlus />
          <span>Create</span>
        </button>
      </div>

      <div>
        <button className=' px-4 py-2 text-3xl  text-black '><CiBellOn/> </button>
      </div>
    </div>
  );
};

export default Header;
