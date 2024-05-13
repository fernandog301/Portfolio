"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Fernando from "../Assets/Fernando_Gutierrez_04_CSAS6_Headshots (1).jpg";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import linkedin from "../Assets/LinkedIn_logo_initials.webp";
import github from "../Assets/github1.png";
import Contact from "../Assets/contact-us-image.webp";
import resume from "../Assets/resume@2x.webp";
import AboutCompoenent from "./AboutCompoenent";
import ProjectsComponents from "./ProjectsComponents";
import Skills from "./SkillsComponents";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../utils/cn";
import Fern from "../Assets/IMG_0464.jpg";
import ContactComponents from "./ContactComponents";

export default function HomeComponent() {
  const [showScroll, setShowScroll] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="bg-black h-[100px] flex justify-between items-start  text-white px-[50px] py-[20px]">
        <div>
          <h1 className=" text-[30px]">Fernando Gutierrez</h1>

        </div>
          <div className="hidden lg:block">
            <div className=" flex gap-x-[50px]  text-[30px]">
              <a href="#about">about</a> 
              <a href="#contact">contact</a>
              <a href="#skills">skills</a>
              <a href="#projects">projects</a>
            </div>
          </div>
      </div>
      <div>
        {isOpen ? (
          <div className="bg-black p-10">
            <div className="flex flex-col gap-y-[20px]  text-white text-[30px]">
              <a href="#about">about</a>
              <a href="#skills">skills</a>
              <a href="#projects">projects</a>
              <a href="#contact">contact</a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="block lg:hidden">
        <button className="focus:outline-none" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div>
        <div id="home" className="w-full h-screen text-center md:mt-20">
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
            <h1 className="py-4 text-white">
              Hi, I&#39;m <span className="text-[#a09f9d]">Fernando</span>
            </h1>
            <p className="uppercase text-sm tracking-widest mt-4 text-white">
              LET&#39;S BUILD SOMETHING TOGETHER
            </p>
          </h1>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/fernando-gutierrez-18022a2a0/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <img src={linkedin.src} className="w-6" />
              </div>
            </a>
            <a
              href="https://github.com/fernandog301"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <img src={github.src} className="w-6" />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <img src={Contact.src} className="w-6" />
              </div>
            </Link>
            <Link href="https://docs.google.com/document/d/1fYM2SY4oAVH5eZ121qtuX-g3mDYmqvKcJvy5yb4zr8g/edit?usp=sharing">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <img src={resume.src} className="w-6" />
              </div>
            </Link>
          </div>
          <AboutCompoenent />
        </div>
      </div>
      <Skills />

      <div className="pb-5">
        <ProjectsComponents />
      </div>

      <div>
        <ContactComponents />
      </div>
    </>
  );
}
