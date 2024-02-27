import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
			<div className='w-10 rounded-full'>
				<img alt='Tailwind CSS chat bubble component' src="https://avatar.iran.liara.run/public/boy?username=ayush" />
			</div> 
		</div>
		<div className={`chat-bubble text-white bg-pink-700 pb-2`}>Hi, what's up?</div>
		<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>23:53</div>
    </div>
  )
}

export default Message