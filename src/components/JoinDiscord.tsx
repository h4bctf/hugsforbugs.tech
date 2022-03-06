
import { MutableRefObject, useEffect, useRef } from "react";
import gsap ,{Power3} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const JoinDiscord: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger)
  const JoinDiscordCont = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(()=>{
  const joinAnimation =  gsap.fromTo(JoinDiscordCont.current,{    
      duration:0.5,
      y:85,
      opacity:0
    },{
      y:0,
      opacity:1,
      ease:Power3.easeIn,
     scrollTrigger: {trigger: JoinDiscordCont.current}, 
    }) 

    return(()=>{
      joinAnimation.kill()
    })

  },[])


  return (
    <>
  <section className="h-[80vh] overflow-hidden sm:h-[70vh] w-full bg-[#11121A] flex items-center content-center justify-center ">
      <div ref={JoinDiscordCont} className="w-10/12 h-[66%] sm:w-9/12 sm:h-[90%] flex flex-col justify-evenly items-center  rounded-3xl  bg-gradient-to-tr from-[#1d5399] to-[#6ca7f0]">
        <div className="w-10/12  flex justify-center text-center ">
          <h1 className="text-[#ffff] text-3xl sm:text-5xl font-['Inter'] font-extrabold">Join our Discord Community with 100+ Expert Hackers </h1>
        </div>
        <div className="w-9/12 sm:w-3/5  flex justify-center content-center text-center ">
          <h2 className="text-[#ffff] text-lg sm:text-xl opacity-80">Get support in dedicated channels , explore new ideas and work in Team in CTF's</h2>
        </div>
        <div className="w-[50%] h-[2.9rem] sm:w-[24%]  sm:h-14 ">
          <button className="w-full h-full bg-[#fff] rounded-xl hover:opacity-80">
            <a href="https://discord.gg/VNBzbsbfVK" className="w-full h-full">
              <div className="flex justify-evenly items-center ">
                <div>
                  <i className="fa-brands fa-discord fa-xl text-[#5865F2] "></i>
                </div>
                <div>
                  <h1 className="text-[#5865F2] test-xl sm:text-2xl font-bold">Join Discord</h1>
                </div>
              </div>
            </a>
          </button>
        </div>
      </div>
      </section> 
    </>
  );
};
export default JoinDiscord;
