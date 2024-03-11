import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogIn = () => {
    const [loading, setLoading] = useState(false);
    const {authUser, setAuthUser} = useAuthContext();

    const login = async (username, password) => {
        console.log(username, password);
        const success = handleInputError(username, password)

        if(!success){
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/auth/login", {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username, password})
            })            

            const data = await res.json();

            if(data.error){
                throw new Error(data.error);
            }

            toast.success("logged in successfully");

            localStorage.setItem("chat-user", JSON.stringify(data));


            setAuthUser(data);

        } catch (error) {
            console.log("hereeee");
            toast.error(error.message);
        }finally{
            setLoading(false);
        }

    }

    return {loading, login}
}

export default useLogIn


const handleInputError = (username, password)=>{
    if(!username, !password){
        console.log("hello", username, password)
        toast.error("please fill all the fields properly");
        return false;
    }

    return true;
}