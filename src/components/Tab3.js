import React from 'react'
import { TfiTimer } from 'react-icons/tfi'
import { BiMapAlt } from 'react-icons/bi'
import { AiOutlineArrowRight } from 'react-icons/ai'


export default function Tab3() {
    return (
        <div className=' ml-5 '>
            <div class="flex items-center space-x-4  m-5 p-5 ring-1 ring-slate-400 rounded-lg hover:rounded-lg  hover:ring-pink-500">
                <img class="h-20 w-20 rounded-full object-cover" src="https://preview.colorlib.com/theme/confer/img/bg-img/10.jpg" alt="profile" />
                <div>
                    <h2 class="text-lg font-semibold">Crop Insurance Conference</h2>
                    <h2><span className='text-gray-400'>by</span>Amanda Hudson <span className='text-gray-400'>/ Ceo of Confer</span></h2>
                </div>
                <div>
                    <div className='flex space-x-3'>
                        <TfiTimer className='text-[#B8317A]' />
                        <h1>12-14 Jan 2019</h1>
                    </div>
                    <div className='flex space-x-3'>
                        <BiMapAlt className='text-[#B8317A]' />
                        <h1> Mountain Resort, Phoenix, USA</h1>
                    </div>
                </div>
                <div>
                    <button className='flex p-3   bg-gradient-to-r from-purple-500 to-pink-500 mt-3 rounded-full ml-auto mr-auto space-x-1'>
                        <h1>VIEW ALL SPEAKERS</h1>
                        <AiOutlineArrowRight />
                    </button>
                </div>
            </div>
            <div class="flex items-center space-x-4 m-5 p-5 ring-1 ring-slate-400 rounded-lg hover:rounded-lg  hover:ring-pink-500">
                <img class=" h-20 w-20 rounded-full object-cover" src="https://preview.colorlib.com/theme/confer/img/bg-img/10.jpg" alt="profile" />
                <div>
                    <h2 class="text-lg font-semibold">Crop Insurance Conference</h2>
                    <h2><span className='text-gray-400'>by</span>Amanda Hudson <span className='text-gray-400'>/ Ceo of Confer</span></h2>
                </div>
                <div>
                    <div className='flex space-x-3'>
                        <TfiTimer className='text-[#B8317A]' />
                        <h1>12-14 Jan 2019</h1>
                    </div>
                    <div className='flex space-x-3'>
                        <BiMapAlt className='text-[#B8317A]' />
                        <h1> Mountain Resort, Phoenix, USA</h1>
                    </div>
                </div>
                <div>
                    <button className='flex p-3   bg-gradient-to-r from-purple-500 to-pink-500 mt-3 rounded-full ml-auto mr-auto space-x-1'>
                        <h1>VIEW ALL SPEAKERS</h1>
                        <AiOutlineArrowRight />
                    </button>
                </div>
            </div>
            <div class="flex items-center space-x-4 m-5 p-5 ring-1 ring-slate-400 rounded-lg hover:rounded-lg  hover:ring-pink-500">
                <img class=" h-20 w-20 rounded-full object-cover" src="https://preview.colorlib.com/theme/confer/img/bg-img/10.jpg" alt="profile" />
                <div>
                    <h2 class="text-lg font-semibold">Crop Insurance Conference</h2>
                    <h2><span className='text-gray-400'>by</span>Amanda Hudson <span className='text-gray-400'>/ Ceo of Confer</span></h2>
                </div>
                <div>
                    <div className='flex space-x-3'>
                        <TfiTimer className='text-[#B8317A]' />
                        <h1>12-14 Jan 2019</h1>
                    </div>
                    <div className='flex space-x-3'>
                        <BiMapAlt className='text-[#B8317A]' />
                        <h1> Mountain Resort, Phoenix, USA</h1>
                    </div>
                </div>
                <div>
                    <button className='flex p-3   bg-gradient-to-r from-purple-500 to-pink-500 mt-3 rounded-full ml-auto mr-auto space-x-1'>
                        <h1>VIEW ALL SPEAKERS</h1>
                        <AiOutlineArrowRight />
                    </button>
                </div>
            </div>
        </div>

    )
}
