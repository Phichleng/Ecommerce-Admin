import React, { useState } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/Ai';

export default function Dropdown() {

    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <div className='relative flex flex-col items-center w-[340px] h-[340px] rounded-lg'>
            <button onClick={() => setIsOpen((prev) => !prev )} className='bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white'>
            
            Dropdown
            {!isOpen ? (
                <AiOutlineCaretDown className='h-8'/>
            ) : (
                <AiOutlineCaretUp className='h-8'/>
            )}
            </button>

            {isOpen && (
                <div className='bg-blue-400 absolute top-20 flex flex-col items-start w-[340px]'>
                    <h1>Hello</h1>
                    <h1>Hello</h1>
                    <h1>Hello</h1>
                </div>
            )}
        </div>
    </div>
  )
}
