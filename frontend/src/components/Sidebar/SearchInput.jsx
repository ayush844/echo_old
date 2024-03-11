import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {

  const [search, setSearch] = useState("");

  const {setSelectedConversation} = useConversation();

  const {conversations} = useGetConversations();

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(!search){
      return;
    }

    if(search.length < 3){
      toast.error("search term must be at least 3 character");
      return; 
    }

    const conversation = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");
    }else{
      toast.error("no such user found");
    }


  }


  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2 my-4 mx-2'>
        <input type="text" placeholder='Search..' className='input input-border rounded-full text-pink-700' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button type='submit' className='btn btn-circle text-pink-700'>
            <FaSearch  size={20}/>
        </button>
    </form>
  )
}

export default SearchInput