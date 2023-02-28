import React from 'react'
import { ColorRing } from 'react-loader-spinner'


export default function Preloader() {
    return (
        <div className='min-h-screen border bg-gradient-to-r from-purple-500 to-pink-500 '>
            <div className=' mt-[20%] mb-[25%] mr-[25%] ml-[50%]'>
                <  ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#FFFFFF', '#FFFFFF', '#FFFFFF', '#9647B2', '#9D337D']}
                />
            </div>
        </div>
    )
}
