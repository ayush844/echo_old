import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
    const [loading, setLoading] = useState(false);

    const {authUser, setAuthUser} = useAuthContext();

    const signUp = async ({fullName, username, password, confirmPassword, gender}) => {
        const success = handleInputError({fullName, username, password, confirmPassword, gender})

        if(!success){
            console.log("hello1")
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/auth/signup", {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({fullName, username, password, confirmPassword, gender})
            })

            const data = await res.json();

            if(data.error){
                throw new Error(data.error)
            }

            toast.success("signed up successfully");

            localStorage.setItem("chat-user", JSON.stringify(data));

            setAuthUser(data);

        } catch (error) {
            toast.error(error);
        }finally{
            setLoading(false);
        }

    }

    return {loading, signUp};

}

export default useSignup


const handleInputError = ({fullName, username, password, confirmPassword, gender})=>{
    if(!fullName, !username, !password, !confirmPassword, !gender){
        toast.error("please fill all the fields properly");
        return false;
    }

    if(password !== confirmPassword){
        toast.error("passwords do not match");
        return false;
    }

    if(password.length < 6){
        toast.error("passwords must be atleast 6 character");
        return false;
    }

    return true;
}