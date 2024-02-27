import React from 'react'

const Conversation = () => {
  return (
    <>
      <div className='flex gap-4 items-center hover:bg-pink-700 rounded p-2 py-1 cursor-pointer'>

        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://avatar.iran.liara.run/public/boy?username=ayush" />
          </div>
        </div>

        <div className='flex flex-1 '>
 						<p className='font-bold text-gray-200'>Ayush Sharma</p>
 				</div>

      </div>

      <div className='divider my-0 py-0 h-1' />

    </>
  )
}

export default Conversation