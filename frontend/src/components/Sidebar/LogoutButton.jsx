import React from 'react'
import { FiLogOut } from "react-icons/fi";
import useLogOut from '../../hooks/useLogOut';

const LogoutButton = () => {

  const {loading, logout} = useLogOut();

  return (
    <div className='mt-auto pt-2'><FiLogOut className='w-6 h-6 cursor-pointer text-pink-700' onClick={logout}/></div>
  )
}

export default LogoutButton