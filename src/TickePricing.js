import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function TickePricing() {
    return (
        <div className='bg-gradient-to-r from-purple-500 to-pink-500 p-12 mt-[-48px] '>
            <div className='text-center mb-12 text-white'>
                <h1>OUR SPEAKINGS</h1>
                <h1 className='text-3xl'>WHO’S SPEAKING</h1>
            </div>
            {/* className='grid grid-rows-2 grid-flow-col gap-4' */}
            <div className='flex space-x-4'>
                <div class=" w-72 h-[400px]  relative bg-purple-600 ">
                    <span className='bg-[#DF42B1] p-1 absolute top-0 left-20'>1 DAY PASS</span>
                    <div className='text-center'>
                        <img src="https://preview.colorlib.com/theme/confer/img/core-img/p1.png.webp" alt="avatar" />
                        <div>
                            <span>$</span>
                            <h1>59</h1>
                        </div>
                    </div>
                </div>
                <div class=" w-72 h-72  relative bg-purple-600 ">
                    <div >
                        <img src="https://preview.colorlib.com/theme/confer/img/core-img/p2.png.webp" alt="avatar" />
                        <div>
                            <span>$</span>
                            <h1>59</h1>
                        </div>
                    </div>
                </div>
                <div class=" w-72 h-72  relative bg-purple-600 ">
                    <div>
                        <img src="https://preview.colorlib.com/theme/confer/img/core-img/p3.png.webp" alt="avatar" />
                        <div>
                            <span>$</span>
                            <h1>59</h1>
                        </div>
                    </div>
                </div>
            </div>
            <button className='flex p-3 ring-2 ring-white text-white   mt-3 rounded-full ml-auto mr-auto space-x-1'>
                <h1>VIEW ALL SPEAKERS</h1>
                <AiOutlineArrowRight />
            </button>

        </div>
    )
}
