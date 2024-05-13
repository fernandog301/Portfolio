'use client'
import Link from 'next/link'
import React from 'react'
import Fernando from "../Assets/Fernando_Gutierrez_04_CSAS6_Headshots (1).jpg";


export default function AboutCompoenent() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#a09f9d]'>
            About
          </p>
          <h2 className='py-4 text-white'>Who I Am</h2>
          <p className='py-2 text-white'>
            I specialize in building responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className='py-2 text-white'>
            
          </p>
          {/* <Link href='/#projects'>
            <p className='py-2 text-white underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link> */}
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img src={Fernando.src} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  )
}
