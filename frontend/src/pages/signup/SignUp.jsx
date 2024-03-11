import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const {loading, signUp} = useSignup();

    const handleSubmit = async(e)=>{
        e.preventDefault();

        await signUp(inputs);

    }

    const handleCheckboxChange = (gender)=>{
        setInputs({...inputs, gender})
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='h-full w-full bg-pink-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-8'>
        <h1 className='text-5xl font-bold text-center text-gray-250'>Sign Up @
            <span className='text-pink-700'> ECHO</span>
        </h1>

        <form className='my-5' onSubmit={handleSubmit}>
            <div>
                <div className="label p-2">
                    <span className="label-text">Full Name:</span>
                </div>
                <input type="text" placeholder="fullName" className="input input-bordered w-full max-w-xs h-10" value={inputs.fullName} onChange={(e) => setInputs({...inputs, fullName: e.target.value})}/>
            </div>

            <div>
                <div className="label p-2">
                    <span className="label-text">Username:</span>
                </div>
                <input type="text" placeholder="username" className="input input-bordered w-full max-w-xs h-10" value={inputs.username} onChange={(e) => setInputs({...inputs, username: e.target.value})} />
            </div>

            <div>
                <div className="label p-2">
                    <span className="label-text">Password:</span>
                </div>
                <input type="password" className="input input-bordered w-full max-w-xs h-10" placeholder='password' value={inputs.password} onChange={(e) => setInputs({...inputs, password: e.target.value})} />
            </div>

            <div>
                <div className="label p-2">
                    <span className="label-text">Confirm Password:</span>
                </div>
                <input type="password" className="input input-bordered w-full max-w-xs h-10" placeholder='confirm password' value={inputs.confirmPassword} onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})} />
            </div>

            <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

            <Link to="/login" className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
            already have an account?
            </Link>
            <div>
                <button className="btn btn-block btn-outline btn-sm mt-5 btn-error" disabled={loading}>{
                    loading ? <span className='loading loading-spinner'></span> : "Sign Up"
                }</button>
            </div>
        </form>
    </div>
</div>
  )
}

export default SignUp