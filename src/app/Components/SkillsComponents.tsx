'use client'
import github from "../Assets/github1.png"
import html from "../Assets/html.png"
import JavaScript from "../Assets/javascript.png"
import React from "../Assets/react.png"
import node from "../Assets/node.png"
import tailwind from "../Assets/tailwind.png"
import css from "../Assets/css.png";
import Nextjs from "../Assets/nextjs7685.logowik.com.webp"
import bootStrap from "../Assets/Bootstrap_logo.svg"
import Net from "../Assets/Microsoft_.NET_logo.svg"


const Skills = () => {
    return (
      <div id='skills' className='w-full lg:h-screen '>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
          <p className='text-xl tracking-widest uppercase text-[#a09f9d]'>
            Skills
          </p>
          <h2 className='py-4 text-white'>What I Can Do</h2>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={html.src} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3 className='text-xl tracking-widest uppercase text-[#a09f9d]'>HTML</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={css.src} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3 className='text-xl tracking-widest uppercase text-[#a09f9d]'>CSS</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={JavaScript.src} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3 className='text-xl tracking-widest uppercase text-[#a09f9d]'>JavaScript</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={React.src} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3 className='text-xl tracking-widest uppercase text-[#a09f9d]'>React</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={tailwind.src} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3 className='text-xl tracking-widest uppercase text-[#a09f9d]'>Tailwind</h3>
                </div>
              </div>
            </div>
            
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={github.src} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3 className='text-xl tracking-widest uppercase text-[#a09f9d]'>Github</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={node.src} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3 className='text-xl tracking-widest uppercase text-[#a09f9d]'>node</h3>
                </div>
              </div>
            </div>
            {/*  */}
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={Nextjs.src} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3 className='text-xl tracking-widest uppercase text-[#a09f9d]'>Nextjs</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={bootStrap.src} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3 className='text-xl tracking-widest uppercase text-[#a09f9d]'>bootStrap</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={Net.src} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3 className='text-xl tracking-widest uppercase text-[#a09f9d]'>.Net</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Skills;