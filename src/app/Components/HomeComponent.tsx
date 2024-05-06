"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Fernando from "../Assets/Fernando_Gutierrez_04_CSAS6_Headshots (1).jpg";
import React from "react";
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
import Fern from "../Assets/IMG_0464.jpg"
import ContactComponents from "./ContactComponents";

export default function HomeComponent() {
  return (
    <>
      <div className="mx-auto ">
        <Navbar fluid rounded>
          <NavbarBrand src={Link} href="#">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Fernando Gutierrez
            </span>
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse>
            <NavbarLink
              href="https://www.linkedin.com/in/fernando-gutierrez-18022a2a0/"
              target="_blank"
            >
              LinkedIn
            </NavbarLink>
            <NavbarLink href="https://github.com/fernandog301" target="_blank">
              GitHub
            </NavbarLink>
            <NavbarLink
              href="https://docs.google.com/document/d/1fYM2SY4oAVH5eZ121qtuX-g3mDYmqvKcJvy5yb4zr8g/edit?usp=sharing"
              target="_blank"
            >
              Resume
            </NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </div>
      <div>
        <div>
          <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

            <Boxes className=""/>
            <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
              <h1 className="py-4 text-white">
                Hi, I&#39;m{" "}
                <span className="text-[#a09f9d]">Fernando Gutierrez</span>
              </h1>
              <p className="uppercase text-sm tracking-widest mt-4 text-white">
                LET&#39;S BUILD SOMETHING TOGETHER
              </p>
              
              
            </h1>

            <p className="py-4 text-center mt-2 text-neutral-300 relative z-20 sm:max-w-[70%] m-auto"></p>
          </div>
        </div>
        <div id="home" className="w-full h-screen text-center md:mt-20">
          <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
              <img
                className="h-[400px] md:h-[500px] lg:h-[600px] pl-5 md:pl-10 mx-auto"
                src={Fern.src}
                alt="Fernando"
              />
              {/* </div> */}

              <h1 className="py-2 text-white">A full-stack Web Developer</h1>
              <p className="py-4 text-white sm:max-w-[70%] m-auto">
                My primary focus revolves around crafting dynamic and responsive
                front-end web applications while seamlessly integrating robust
                back-end technologies. I dedicate myself to enhancing user
                experiences through intuitive interfaces and efficient data
                handling mechanisms. Additionally, I continually hone my skills
                to ensure that the solutions I deliver are not only visually
                captivating but also functionally robust.
              </p>
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
            </div>
          </div>
        </div>
        <AboutCompoenent />
        <Skills />
      </div>

      <div className="pb-5">
        <ProjectsComponents />
      </div>

      <div>
        <ContactComponents/>
        </div>
    </>
  );
}
