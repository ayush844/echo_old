import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogIn from '../../hooks/useLogIn';

const LogIn = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {loading, login} = useLogIn();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(username, password)
        await login(username, password);
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='h-full w-full bg-pink-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-8'>
            <h1 className='text-5xl font-bold text-center text-gray-250'>Log In @
                <span className='text-pink-700'> ECHO</span>
            </h1>

            <form className='my-5' onSubmit={handleSubmit}>
                <div>
                    <div className="label p-2">
                        <span className="label-text">Username:</span>
                    </div>
                    <input type="text" placeholder="username" className="input input-bordered w-full max-w-xs h-10" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </div>

                <div>
                    <div className="label p-2">
                        <span className="label-text">Password:</span>
                    </div>
                    <input type="password" className="input input-bordered w-full max-w-xs h-10" placeholder='password'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <Link to="/signup" className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
                {"Don't"} have an account?
                </Link>
                <div>
                    <button className="btn btn-block btn-outline btn-sm mt-5 btn-error" disabled={loading}>{
                        loading ? <span className='loading loading-spinner'></span> : "Log In"
                    }</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LogIn