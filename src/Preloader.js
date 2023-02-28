import React from 'react'
import { ColorRing } from 'react-loader-spinner'


export default function Preloader() {
  return (
      <div className='min-h-screen border bg-gradient-to-r from-indigo-500 '>
          <div className=' mt-[20%] mb-[25%] mr-[25%] ml-[50%]'>
              <  ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
              />
          </div>
      </div>
  )
}
