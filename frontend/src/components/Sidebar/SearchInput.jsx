import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2 my-4 mx-2'>
        <input type="text" placeholder='Search..' className='input input-border rounded-full text-pink-700' />
        <button type='submit' className='btn btn-circle text-pink-700'>
            <FaSearch  size={20}/>
        </button>
    </form>
  )
}

export default SearchInput