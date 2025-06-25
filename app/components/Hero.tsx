"use client";
import Image from "next/image";
import img from  "../../public/assets/hero-img.webp";
import Typewriter from 'typewriter-effect';
import Link from "next/link";

const Hero=() =>{
    return(
    <div className="">
<section className=" body-font  bg-center  custom-image">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col bg-fixed">
    <Image src={img}  alt="hero" width={100} height={100} 
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bolder text-[#dbaca4]">
        I'm <br/>
                Naila Adnan
        <br className="hidden lg:inline-block"/>
        <Typewriter
  options={{
    strings: ['Full_Stack Developer','UI & UX Designer'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <p className="mb-8 leading-relaxed sm:text-3xl text-3xl font-medium text-[#dbaca4]">
          I am a fresh Full-Stack Developer skilled in building clean, responsive websites with interactive animations. 
          I develop backend logic using Python and integrate intelligent features using OpenAI's AgentSDK.
          My focus is on creating user-friendly, accessible, and AI-powered web applications.
</p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-[#003152] bg-[#dbaca4] border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded text-3xl">
          Lets Talk
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>
     </div>
    ) 
}
export default Hero
  
                
