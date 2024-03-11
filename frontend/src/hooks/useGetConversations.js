import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversation] = useState([]);

    useEffect(()=>{
        const getConversation = async ()=>{
            setLoading(true);
            try {
                const res = await fetch('/api/user')
                const data = await res.json();

                if(data.error){
                    throw new Error(data.error)
                }
                
                setConversation(data)
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }finally{
                setLoading(false)
            }
        }

        getConversation();
    }, [])

    return {loading, conversations}
}

export default useGetConversations