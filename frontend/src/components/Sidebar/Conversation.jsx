import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({conversation, lastIdx}) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  const {onlineUsers} = useSocketContext();

  const isOnline = onlineUsers.includes(conversation._id)

  return (
    <>
      {/* <div className={`flex gap-4 items-center hover:bg-pink-700 rounded p-2 py-1 cursor-pointer ${isSelected?"bg-pink-700":"" }`} onClick={()=>console.log("hello")}> */}

      <div className={`flex gap-4 items-center hover:bg-pink-700 rounded p-2 py-1 cursor-pointer ${isSelected?"bg-pink-700":"" }`} onClick={()=>setSelectedConversation(conversation)}>


        <div className={`avatar ${isOnline ? "online" : "offline"}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} />
          </div>
        </div>

        <div className='flex flex-1 '>
 						<p className='font-bold text-gray-200'>{conversation.fullName}</p>
 				</div>

      </div>

      {!lastIdx && <div className='divider my-0 py-0 h-1' />}
      

    </>
  )
}

export default Conversation