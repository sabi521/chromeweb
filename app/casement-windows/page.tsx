import React from 'react'
import Image from 'next/image'
import casment from "@/assets/images/casment_windows.webp"

const CaseMentWindows = () => {
  return (
    <div>
      <section className="relative mt-32 z-10">
    <div className="w-screen h-[700px] absolute top-0 left-0">
      <Image className="w-full h-full object-cover" src={casment} width={1000} height={1000} alt="background image"/>
    </div>
    <div className="relative z-20 mx-auto max-w-screen-xl px-4 flex h-[700px] justify-center items-center lg:px-8 sm:px-6">
      <div className="max-w-4xl text-center bg-black p-4 rounded-md">
        <h1 className="text-3xl text-white font-extrabold uppercase drop-shadow-2xl sm:text-5xl">
          Casement Windows
        </h1>
      </div>
    </div>
  </section>

  
    </div>
    
  )
}

export default CaseMentWindows
