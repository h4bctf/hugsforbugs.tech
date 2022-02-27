import React from "react";
import "./styles/About.scss";

const About: React.FC = () => {
  return (
    <div id="About" className="h-screen w-full bg-[#11121A]">
      {/* <div className="  flex justify-between px-10  w-full ">
				<div>
					<h1 className="mx-36 text-6xl font-mono flex mr">About Us</h1>
				</div>
				<div className=" flex justify-center">
					<p className="container w-1/2 font-mono mx-28 flex-auto">
						HugsForBugs is an international community where we compete in
						CTFs and learn things together. We play around once or
						twice a month or so and aren't super hardcore. No one
						will expect you to stay up all night two nights in a
						row! Our members range from high school students to
						established cybersecurity professionals, complete n00bs
						to professional pen testers. We also hang out, discuss
						the latest 0-day in the news, show off our latest bug
						bounty, and share silly memes.
					</p>
				</div>
			</div> */}
      <div className="w-full text-center ">
        <h1 className="font-['Poppins'] text-[#fff]">About Us</h1>
      </div>
      <div className="flex justify-center ">
        <p className="text-[#d3d3d3] p-4 text-left ">
          HugsForBugs is an international <span className="underline decoration-red-600">community </span> where we compete in CTFs and
          learn things together. We play around once or twice a month or so and
          aren't super hardcore. No one will expect you to stay up all night two
          nights in a row! Our <span className="underline decoration-blue-600"> members </span> range from high school students to
          established cybersecurity professionals, complete <span className="underline decoration-lime-500"> n00bs </span> to
          professional pen testers. We also hang out, discuss the latest 0-day
          in the news, show off our latest bug bounty, and share silly memes.
        </p>
      </div>
    </div>
  );
};

export default About;
