import img from "../../public/assets/about-img.webp";
import Image from "next/image";

const About=() =>{
    return(
    <div className="bg-[#ecdedb]" id="About">
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-6xl mb-4 font-medium text-[#003152]">
     ABOUT_ME
      </h1>
      <p className="mb-4 leading-relaxed  text-2xl text-[#003152]">
     
            I am a fresh front-End Web Developer,excel to create a website with complete clean code along with interactive
             animation and responsiveness accessible to all users.
      </p>
      <div className="flex w-full md:justify-start justify-center items-end">
    
        <button className="inline-flex text-white bg-[#003152] border-0 py-2 px-2  focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Let's Talk
        </button>
      </div>
      <p className="text-lg mt-2 text-[#003152] mb-8 w-full">
        Contact:111-00-111<br/>
        E-mail:bholoady@gmail.com
      </p>
     
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={img}
        width={400} height={400} ></Image>

      
    </div>
  </div>
</section>
</div>
      
    ) 
}
export default About

