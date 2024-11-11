import Link from "next/link";
import Image from"next/image"; 
import img from "../../public/assets/project-1.jpg";
import img2 from "../../public/assets/project2.png";
import img3 from "../../public/assets/project3.png";


const Project=() =>{
    return(
    <div className="bg-[#003152]" id="Projects">

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-2/3 mx-auto">
      <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
        <Image
          src={img}
          alt="amazon"
          width={100}
          height={100}
            className="w-full object-cover h-full object-center block opacity-35 absolute inset-0"/>
        
        <div className="text-center relative z-10 w-full">
          <h2 className="text-3xl text-[#003152] font-semibold title-font mb-2">
            Amazon Clone
          </h2>
          <p className="leading-relaxed text-[#d28882]" >
               Amazon clone based on only HTML5 & CSS3.
               A Project fully Responsive & Attractive. 
          </p>
          <Link href={"https://amazon-com-one.vercel.app/"}
           className="mt-3 text-indigo-500 inline-flex items-center">
          View Project
           </Link>
        </div>
      </div>
      
      <div className="flex flex-wrap -mx-2">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <Image
          src={img2}
          alt="Static-Resume"
          width={100}
          height={100}
          className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"/>
            <div className="text-center relative z-10 w-full">
              <h2 className="text-3xl text-[#003152] font-semibold title-font mb-2">
                  STATIC RESUME
              </h2>
              <p className="leading-relaxed text-[#d28882]">
                 An Static Resume with Dyanmic pages,
                  </p>
              <Link href={"https://static-resume-9xb1dlyoy-nailaadys-projects.vercel.app"} 
              className="mt-3 text-indigo-500 inline-flex items-center">
                View Project
               </Link>
            </div>
          </div>
           <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <Image
              src={img3}
              alt="govrner website clone"
              width={100}
              height={100}
              className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
              />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-3xl text-[#003152] font-semibold title-font mb-2">
              GIAIC WEBSITE 
              </h2>
              <p className="leading-relaxed text-[#d28882]">
               Clone of GIAIC website  using Next.JS And React Components.
               </p>
               <Link href={"https://newpf-three.vercel.app/"} className="mt-3 text-indigo-500 inline-flex items-center">
                 View Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>




    </div>
      
    ) 
}
export default Project
