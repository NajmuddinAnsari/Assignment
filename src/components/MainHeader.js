import React from 'react'
import { RxDoubleArrowRight } from 'react-icons/rx'
import {  AiOutlineArrowRight } from 'react-icons/ai'

export default function MainHeader() {
    return (
        // <div className='flex justify-around bg-[#141819] p-4 text-white'>
        //     <div className='flex space-x-3 items-center'>
        //         <RxDoubleArrowRight className='w-12 h-8 ' />
        //         <h1>CONFER</h1>
        //     </div>
        //     <div className='hidden'>
        //         <AiOutlineMenu className='w-12 h-8 ' />
        //     </div>
        //     <div>
        //         <ul className='  flex justify-around items-center ' >
        //             <li className=''>
        //                 <a href="https://www.google.com/search?q=react+icons&oq=react+&aqs=chrome.0.69i59l2j69i57j69i60l5.1184j0j7&sourceid=chrome&ie=UTF-8">Home</a>
        //             </li>
        //             <li>
        //                 <a href="https://www.google.com/search?q=react+icons&oq=react+&aqs=chrome.0.69i59l2j69i57j69i60l5.1184j0j7&sourceid=chrome&ie=UTF-8">PAGES</a>
        //             </li>
        //             <li>
        //                 <a href="https://www.google.com/search?q=react+icons&oq=react+&aqs=chrome.0.69i59l2j69i57j69i60l5.1184j0j7&sourceid=chrome&ie=UTF-8">SPEAKERS</a>
        //             </li>
        //             <li>
        //                 <a href="https://www.google.com/search?q=react+icons&oq=react+&aqs=chrome.0.69i59l2j69i57j69i60l5.1184j0j7&sourceid=chrome&ie=UTF-8">BLOG</a>
        //             </li>
        //             <li>
        //                 <a href="https://www.google.com/search?q=react+icons&oq=react+&aqs=chrome.0.69i59l2j69i57j69i60l5.1184j0j7&sourceid=chrome&ie=UTF-8">CONTACT</a>
        //             </li>
        //             <li>
        //                 <div className='flex space-x-1 items-center bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full'>
        //                     <span>GET TICKETS</span>
        //                     <AiOutlineArrowRight />
        //                 </div>
        //             </li>
        //         </ul>
        //     </div>
        // </div>
        //backg

        <div className='mb-5 bg-[#141819] text-white '>
            <div className='flex justify-around p-3'>
                <div className='flex justify-center items-center'>
                    <RxDoubleArrowRight className='w-12 h-8 ' />
                    <h1>CONFER</h1>
                </div>
                {/* <ul className='flex'>
                    <li>
                        <a href="#">sdkfj;dkf</a>
                    </li>
                    <li>
                        <a href="#">sdkfj;dkf</a>
                    </li>
                    <li>
                        <a href="#">sdkfj;dkf</a>
                    </li>
                </ul> */}
                <div className='flex space-x-7 items-center'>
                    <a href="https://www.google.com/search?q=react+icons&oq=react+&aqs=chrome.0.69i59l2j69i57j69i60l5.1184j0j7&sourceid=chrome&ie=UTF-8">Home</a>
                    <a href="https://www.google.com/search?q=react+icons&oq=react+&aqs=chrome.0.69i59l2j69i57j69i60l5.1184j0j7&sourceid=chrome&ie=UTF-8">PAGES</a>
                    <a href="https://www.google.com/search?q=react+icons&oq=react+&aqs=chrome.0.69i59l2j69i57j69i60l5.1184j0j7&sourceid=chrome&ie=UTF-8">SPEAKERS</a>
                    <a href="https://www.google.com/search?q=react+icons&oq=react+&aqs=chrome.0.69i59l2j69i57j69i60l5.1184j0j7&sourceid=chrome&ie=UTF-8">BLOG</a>
                    <a href="https://www.google.com/search?q=react+icons&oq=react+&aqs=chrome.0.69i59l2j69i57j69i60l5.1184j0j7&sourceid=chrome&ie=UTF-8">CONTACT</a>
                    <div className='flex space-x-1 items-center bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full'>
                       <span>GET TICKETS</span>
                       <AiOutlineArrowRight />
                   </div>

                </div>
            </div>
        </div>
    )
}
