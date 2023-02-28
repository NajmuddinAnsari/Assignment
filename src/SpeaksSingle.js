import React from 'react'

export default function SpeaksSingle({src,text}) {
  return (
      <div>
          <div class="p-10">
              <div class="relative w-[500px]">
                  <img src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" />
                  <div class="absolute bottom-0 left-0 right-0 px-4 py-2 ">
                      <h3 class="text-xl text-white font-bold">
                          Hey, I Am The Big Boss</h3>
                      <p class="mt-2 text-sm text-gray-300">Some description text. Some dummy text here. Welcome to KindaCode.com</p>
                  </div>
              </div>
          </div>
      </div>
  )
}
