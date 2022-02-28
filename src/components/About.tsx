import React from "react";
import "./styles/About.scss";
import AboutIllust from "../assets/undraw_software_engineer_re_fyew.svg";

const About: React.FC = () => {
  return (
    <div id="About" className="h-screen w-full bg-[#11121A] flex flex-col ">
  <div className="w-full h-full sm:flex sm:items-center">
      <div className="pt-4 flex flex-col justify-evenly align-center h-3/5 sm:flex-row sm:h-2/5">
        <div className="w-full  text-center sm:w-1/4 sm:h-full sm:flex sm:justify-center sm:items-center">
          <h1 className="font-['Poppins'] text-[#fff] text-4xl pt-3 sm:text-5xl">
            About Us
          </h1>
        </div>
        <div className=" flex justify-center w-full sm:w-1/2 overflow-hidden">
          <p className="text-[#d3d3d3] font-['Poppins'] p-4 text-left text-md sm:text-xl">
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
      <div className="w-full h-1/3  flex justify-center  p-4 sm:h-1/2 sm:hidden ">
        <img src={AboutIllust} alt="" className="h-auto w-full max-w-full " />
      </div> 
    </div> 
    </div>
  );
};

export default About;
