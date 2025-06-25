import { FaBattleNet } from "react-icons/fa";


const Skills=() =>{
    return(
    <div className="bg-[#e1ecf3]" id="Skills">
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl  text-6xl font-extrabold text-center title-font text-[#003152] mb-4">
        My Skills
      </h1>
      <p className="text-2xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-[#003152] ">
      Some of the skills I have developed over time as a Front-end web developer are:
      </p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
        <div className="text-2xl text-[#d28882] ">
        <FaBattleNet />
        </div>
          <span className="title-font font-semibold text-[#003152] ml-6">
               HTML3 ,CSS# &
              TypeScript
          </span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
        <div className="text-2xl text-[#d28882] ">
        <FaBattleNet />
        </div>
          <span className="title-font font-semibold text-[#003152] ml-6">
         Git &
          GitHub     
          </span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
        <div className="text-2xl text-[#d28882]">
        <FaBattleNet />
        </div>
          
          <span className="title-font font-semibold text-[#003152]  ml-6">
            Next.js
          Mongo DB</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
        <div className="text-2xl text-[#d28882]">
        <FaBattleNet />
        </div>
          <span className="title-font font-semibold text-[#003152]  ml-6">
          UI , UX and Figma
              
          </span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
        <div className="text-2xl text-[#d28882]">
        <FaBattleNet />
        </div>
          <span className="title-font font-semibold text-[#003152]  ml-6">
            Python</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
        <div className="text-2xl text-[#d28882]">
        <FaBattleNet />
        </div>
          <span className="title-font font-semibold text-[#003152]  ml-6">
           OPenAI AgentSDK</span>
        </div>
      </div>
    </div>
    <button className="flex mx-auto mt-16 text-2xl font-semibold text-[#d28882] bg-cyan-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded">
     My Resume
    </button>
  </div>
</section>





</div>
      
    ) 
}
export default Skills

