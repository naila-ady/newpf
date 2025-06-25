import Link from "next/link";
import React from "react";
import Image from "next/image";
import img from  "../../public/assets/logo.jpeg";
import { IoCloudDownloadOutline } from "react-icons/io5";


 const Navbar=() =>{
    return(
    <div className="bg-[#ecdedb] z-50 sticky top-0">
        <header className="bg-[#ecdedb] body-font z-50 sticky">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-[#588fb4] mb-4 md:mb-0">
           <Image src={img} alt="logo" width={100} height={100} className="w-[70px]"/>
        <span className="ml-3 text-[#d28882] text-2xl">PortFolio</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-sm justify-center">
        <Link href={"/"} className="mr-5 text-[#d28882]  text-1xl hover:text-[#003152]">
        Home</Link>
        <Link href={"#About"} className="mr-5  text-[#d28882]  text-1xl hover:text-[#003152]">
        About-Me</Link>
        <Link href={"#Projects"} className="mr-5  text-[#d28882]  text-1xl hover:text-[#003152]">
        My-Projects</Link>
        <Link href={"#Skills"} className="mr-5  text-[#d28882]  text-1xl hover:text-[#003152]">
        My-Skills</Link>
        <Link href={"#Contact"} className="mr-5  text-[#d28882]  text-1xl hover:text-[#003152]">
        Contact</Link>
      </nav>
     <Link
  href={"https://portfoliocssnxtjs.vercel.app/ "}
 
>
      <button className="inline-flex items-center text-[#d28882] bg-[#74bedb]  border-0 py-1 px-3 mx-0
      focus:outline-none hover:bg- rounded text-base mt-4 md:mt-0 gap-1">
       
        MY_Resume
        <div className="text-2xl text-[#d28882] ">
       <IoCloudDownloadOutline/></div>
       </button>
       </Link>
    </div>
  </header>
  </div>
    ) 
}
export default Navbar
