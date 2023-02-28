import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function Card() {
    return (
        <div className='bg-gradient-to-r from-purple-500 to-pink-500 p-12 '>
            <div className='text-center mb-12 text-white'>
                <h1>OUR SPEAKINGS</h1>
                <h1 className='text-3xl'>WHO’S SPEAKING</h1>
            </div>
            <div className='grid grid-rows-2 grid-flow-col gap-4'>
                <div class="bg-cover bg-center w-72 h-72  relative bg-purple-600 ">
                    <img src="https://plus.unsplash.com/premium_photo-1673757121126-cbf64f316bab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Background" class="w-full h-full absolute inset-0 object-cover" />
                    <div class="absolute bottom-0 left-0 right-0 px-4 py-2  text-white">
                        <p class="text-2xl">Albert Barnes</p>
                        <p className='text-[#AC42AA]'>Founder</p>
                    </div>
                </div>
                <div class="bg-cover bg-center w-72 h-72  relative bg-purple-600 ">
                    <img src="https://images.unsplash.com/photo-1677538498823-4020461a852d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Background" class="w-full h-full absolute inset-0 object-cover" />
                    <div class="absolute bottom-0 left-0 right-0 px-4 py-2  text-white">
                        <p class="text-2xl">One line of text</p>
                        <p className='text-[#AC42AA]'>Founder</p>
                    </div>
                </div>
                <div class="bg-cover bg-center w-72 h-72  relative bg-purple-600 ">
                    <img src="https://images.unsplash.com/photo-1677541829506-2084c4bba14c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80" alt="Background" class="w-full h-full absolute inset-0 object-cover" />
                    <div class="absolute bottom-0 left-0 right-0 px-4 py-2  text-white">
                        <p class="text-2xl">One line of text</p>
                        <p className='text-[#AC42AA]'>Founder</p>
                    </div>
                </div>
                <div class="bg-cover bg-center w-72 h-72  relative bg-purple-600 ">
                    <img src="https://images.unsplash.com/photo-1677537946795-e5558b7f4601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="Background" class="w-full h-full absolute inset-0 object-cover" />
                    <div class="absolute bottom-0 left-0 right-0 px-4 py-2  text-white">
                        <p class="text-2xl">One line of text</p>
                        <p className='text-[#AC42AA]'>Founder</p>
                    </div>
                </div>
                <div class="bg-cover bg-center w-72 h-72  relative bg-purple-600 ">
                    <img src="https://images.unsplash.com/photo-1677537946795-e5558b7f4601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="Background" class="w-full h-full absolute inset-0 object-cover" />
                    <div class="absolute bottom-0 left-0 right-0 px-4 py-2  text-white">
                        <p class="text-2xl">One line of text</p>
                        <p className='text-[#AC42AA]'>Founder</p>
                    </div>
                </div>
                <div class="bg-cover bg-center w-72 h-72  relative bg-purple-600 ">
                    <img src="https://images.unsplash.com/photo-1677537946795-e5558b7f4601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="Background" class="w-full h-full absolute inset-0 object-cover" />
                    <div class="absolute bottom-0 left-0 right-0 px-4 py-2  text-white">
                        <p class="text-2xl">One line of text</p>
                        <p className='text-[#AC42AA]'>Founder</p>
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
