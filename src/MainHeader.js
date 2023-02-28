import React from 'react'
import { RxDoubleArrowRight } from 'react-icons/rx'
import { AiOutlineMenu, AiOutlineArrowRight } from 'react-icons/ai'

export default function MainHeader() {
    return (
        <div className='flex justify-between bg-[#141819] p-4 text-white'>
            <div className='flex space-x-3 '>
                <RxDoubleArrowRight className='w-12 h-8 ' />
                <h1>CONFER</h1>
            </div>
            <div className='hidden'>
                <AiOutlineMenu className='w-12 h-8 ' />
            </div>
            <div>
                <ul className='flex space-x-2'>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">PAGES</a>
                    </li>
                    <li>
                        <a href="#">SPEAKERS</a>
                    </li>
                    <li>
                        <a href="#">BLOG</a>
                    </li>
                    <li>
                        <a href="#">CONTACT</a>
                    </li>
                    <li>
                        <div className='flex bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full'>
                            <span>GET TICKETS</span>
                            <AiOutlineArrowRight />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
