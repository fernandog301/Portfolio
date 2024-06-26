'use client'
// import React from 'react'
import Link from 'next/link'
// import React from 'react'
import Image from 'next/image'



const ProjectsIteams = (props: {title: string, backgroundImg: string, tech: string, projectUrl: string}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
    <img className='rounded-xl group-hover:opacity-10 w-25' src={props.backgroundImg} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{props.title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{props.tech}</p>
        <Link href={props.projectUrl}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
    </div>
 </div>
  )
}

export default ProjectsIteams
