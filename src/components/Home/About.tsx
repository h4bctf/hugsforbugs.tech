import React, { MutableRefObject, useEffect, useRef } from "react";
import "../styles/About.scss";
import AboutIllust from "../../assets/undraw_software_engineer_re_fyew.svg";
import gsap , {Power3} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);
 const introductionP =   useRef() as MutableRefObject<HTMLParagraphElement>

 useEffect(()=>{

  const introP = gsap.fromTo(introductionP.current,{
    opacity:0,
    y:80,
  },{
    opacity:1,
    duration:0.5 ,
    y:0,
    ease:Power3.easeIn,
    scrollTrigger:{trigger:introductionP.current}

  })

  return(()=>{
    introP.kill()
  })
 },[])

  return (
    <section id="About" className="h-screen w-full bg-[#11121A] flex flex-col ">
  <div className="w-full h-full flex flex-col justify-center sm:justify-center sm:flex sm:items-center">
      <div className="pt-4 h-full flex flex-col justify-evenly align-center  sm:flex-row ">
        <div className="w-full  text-center sm:w-1/4 sm:h-full sm:flex sm:justify-center sm:items-center">
          <h1 className="font-['Poppins'] text-[#fff] text-4xl pt-3 sm:text-5xl">
            About Us
          </h1>
        </div>
        <div className=" flex justify-center w-full items-center  sm:w-1/2 ">
          <p  ref={introductionP} className="text-[#d3d3d3] font-['Poppins'] px-5 sm:px-4 text-left text-lg sm:text-xl">
            HugsForBugs is an international{" "}
            <span className="underline decoration-red-600">community </span>{" "}
            where we compete in{" "}
            <span className="underline decoration-purple-600"> CTFs </span> and
            learn things together. We play around once or twice a month or so
            and aren't super hardcore. No one will expect you to stay up all
            night two nights in a row! Our{" "}
            <span className="underline decoration-blue-600"> members </span>{" "}
            range from high school students to established <span className="underline decoration-orange-500"> cybersecurity
            professionals </span>, complete{" "}
            <span className="underline decoration-lime-500"> n00bs </span> to
            professional pen testers. We also hang out, discuss the latest 0-day
            in the news, show off our latest bug bounty, and share silly memes.
          </p>
        </div>
      </div>
      <div className="w-full h-1/4  flex justify-center  p-4 sm:h-1/2 sm:hidden ">
        <img src={AboutIllust} alt="" className="h-auto w-full max-w-full " />
      </div> 
    </div> 
    </section>
  );
};

export default About;
