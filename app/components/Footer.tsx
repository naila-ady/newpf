import Image from "next/image";
import img from "../../public/assets/logo.jpeg";
import {FaSquareFacebook } from "react-icons/fa6";
import {FaSquareWhatsapp } from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa6";
import {FaInstagramSquare} from "react-icons/fa";
import Link from "next/link";
 
 const Footer=() =>{
    return(
    <div>
<div className="bg-[#ecdedb]">
<footer className="body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-[#d28882]">
    <Image src={img} alt="logo" width={100} height={100} className="w-[50px] bg-[#003152]"/>
      <span className="ml-3 text-xl">WEB DEVOPS</span>
    </a>
    <p className="text-xl text-[#d28882] sm:ml-4 sm:pl-4 sm:border-l-2 sm:py-2 sm:mt-0 mt-4">
      © 2024 naila adnan 
    </p>
    <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-3 ">
        <div className="text-3xl">
      <Link href={"#"} className="ml-3 text-[#4869b2]">
      <FaSquareFacebook/>
      </Link>
      </div>
      <div className="text-3xl">
      <Link  href={"#"} className="ml-3 text-blue-300">
        <FaLinkedin/>
      </Link>
        </div>
        <div className="text-3xl">
      <Link href={"#"} className="ml-3 text-green-400">
      <FaSquareWhatsapp />
      </Link>
      </div>
      <div className="text-3xl">
      <Link href={"#"} className="ml-3 text-[#8a3ab9]">
      <FaInstagramSquare />
      </Link>
      </div>    
  </div>
  </div>
</footer>
</div>
 </div>
    )
}
export default Footer