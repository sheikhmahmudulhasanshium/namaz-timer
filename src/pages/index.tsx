import React from 'react'
//import { motion } from 'framer-motion'
//import { Stagger, fadeInUp, routeFading } from '../../animations'
//import Image from 'next/image'

export default function index()  {
  return (
    <div className='flex flex-col justify-center my-3 text-2xl text-gray-900 font-kaushan dark:text-slate-200 ' >
        <div className='flex items-center justify-center gap-2 py-2 mx-4 mt-3 rounded-2xl dark:bg-green-950'>
          
          <h1>Namaz Timer App</h1>
       </div>
       <div className="flex-col justify-center w-full h-screen my-4 bg-no-repeat bg-contain rounded-2xl  dark:opacity-100 opacity-90 dark:bg-[url('/images/sheikh-zayed-grand-mosque-abu-dhabi-wallpaper-preview.jpg')] bg-[url('/images/mosque-abu-dhabi-grand-muslim.jpg')]">
           <div className='flex flex-col items-center justify-center py-2 my-6'>
           <h1>بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
                <h2 className='p-2 text-6xl'>Wakt</h2> 
                <div className='flex gap-4 p-4 py-8 text-base bg-opacity-50 bg-slate-500 hover:dark:text-green-500 hover:text-green-900 rounded-xl'>
                  {/**https://timeapi.io/swagger/index.html */}
                    <h1>Hour:   1</h1>
                    <h1>Minute:  1</h1>
                    <h1>Second:   1</h1>
                  
                </div>
 
                <div className='flex gap-4 py-4 text-base hover:dark:text-green-500 hover:text-green-950'>
                  {/**https://timeapi.io/swagger/index.html */}
                    <h1>Day:   1</h1>
                    <h1>Month:  1</h1>
                    <h1>Year:   1</h1>
                  
                </div>
                <div className='flex gap-4 py-4 text-base hover:dark:text-green-500 hover:text-green-950'>
                  {/**https://timeapi.io/swagger/index.html */}
                    <h1>Day Of Week:   1</h1>
                    <h1>Timezone:  1</h1>
                    <h1>Coordinate:   1</h1>
                  
                </div>
 
           </div>   
       </div>
      
  </div>
  )
}
//export default index
