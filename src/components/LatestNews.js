import React from 'react'
import { BsArrowRightCircle } from 'react-icons/bs'

export default function LatestNews() {
    return (
        <div className='bg-gradient-to-r from-purple-500 to-pink-500 p-12'>
            <div className='text-center mb-12 text-white '>
                <h1>OUR BLOG</h1>
                <h1 className='text-3xl'>LATEST NEWS</h1>
            </div>
            <div className='flex space-x-6  '>

                <div class="flex justify-center relative">
                    <div
                        class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                        <a href="#!">
                            <img
                                class="rounded-t-lg"
                                src="https://preview.colorlib.com/theme/confer/img/bg-img/18.jpg"
                                alt="" />
                        </a>
                        <div class="p-6">
                            <h5
                                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                Street Food Convention
                            </h5>
                            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                Street Food Convention will showcase products like Packed food, beef and lamb, street food.
                            </p>
                            
                            <BsArrowRightCircle className='w-12 h-12 absolute -bottom-5 left-36 cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white'/>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center relative">
                    <div
                        class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                        <a href="#!">
                            <img
                                class="rounded-t-lg"
                                src="https://preview.colorlib.com/theme/confer/img/bg-img/19.jpg"
                                alt="" />
                        </a>
                        <div class="p-6">
                            <h5
                                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                Tedx Moscow Conference
                            </h5>
                            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                Street Food Convention will showcase products like Packed food, beef and lamb, street food.
                            </p>
                            
                            <BsArrowRightCircle className='w-12 h-12 absolute -bottom-5 left-36 cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white' />
                        </div>
                    </div>
                </div>
                <div class="flex justify-center relative">
                    <div
                        class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                        <a href="#!">
                            <img
                                class="rounded-t-lg"
                                src="https://preview.colorlib.com/theme/confer/img/bg-img/20.jpg"
                                alt="" />
                        </a>
                        <div class="p-6">
                            <h5
                                class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                Card title
                            </h5>
                            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                Street Food Convention will showcase products like Packed food, beef and lamb, street food.
                            </p>
                            
                            <BsArrowRightCircle className='w-12 h-12 absolute -bottom-5 left-36 cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
