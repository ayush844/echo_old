import React from 'react'

const LogIn = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='h-full w-full bg-pink-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-8'>
            <h1 className='text-5xl font-bold text-center text-gray-250'>Log In @
                <span className='text-pink-700'> ECHO</span>
            </h1>

            <form className='my-5'>
                <div>
                    <div className="label p-2">
                        <span className="label-text">Username:</span>
                    </div>
                    <input type="text" placeholder="username" className="input input-bordered w-full max-w-xs h-10" />
                </div>

                <div>
                    <div className="label p-2">
                        <span className="label-text">Password:</span>
                    </div>
                    <input type="password" className="input input-bordered w-full max-w-xs h-10" placeholder='password' />
                </div>
                <a href="#" className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
                {"Don't"} have an account?
                </a>
                <div>
                    <button className="btn btn-block btn-outline btn-sm mt-5 btn-secondary">LogIn</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LogIn