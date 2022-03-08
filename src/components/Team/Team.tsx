import { AnimatePresence, motion } from "framer-motion";
import Profile from "./Profile";
import "../styles/Team.scss"

const Team: React.FC = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <section className="w-full h-[490vh] sm:h-[200vh]  flex flex-col  bg-[#191a27]">
              <div className="w-full text-center mt-20 p-2 ">
                <h1 className="text-white font-['Inter'] text-5xl font-extrabold">Team</h1>
              </div>
              <div className="w-full text-center  mt-2 mb-4 p-2 sm:mb-0 sm:p-2">
                <h2 className="text-white font-['Inter'] text-2xl opacity-80 font-extralight">
                  These are the fronters of Community
                </h2>
              </div>
	      <div className="w-full  h-5/6 grid grid-cols-1 justify-items-center gap-y-20 sm:grid-rows-3 sm:gap-y-8 sm:grid-cols-3 sm:gap-x-11">
		     <Profile githubLink="https://github.com/MrsMalware" name="3xploiter"  src="https://cdn.discordapp.com/attachments/810603326626201604/949858400668356618/IMG_1413.jpg"/>
		     <Profile githubLink="https://github.com/MrsMalware" name="3xploiter" src="https://cdn.discordapp.com/avatars/706545436831514647/f0e5a8e306034c2b7d54e62675019291.webp?size=240" />
		     <Profile githubLink="https://github.com/MrsMalware" name="3xploiter" src="https://cdn.discordapp.com/attachments/949990378323468329/949991760535384074/uzui.png"/>
		          <Profile githubLink="https://github.com/MrsMalware" name="3xploiter" src="https://cdn.discordapp.com/attachments/810603326626201604/949999935024144414/handgun.jpg"/>
		          <Profile githubLink="https://github.com/MrsMalware" name="3xploiter" src="https://cdn.discordapp.com/attachments/810603326626201604/949999935024144414/handgun.jpg "/>
        		     <Profile githubLink="https://github.com/MrsMalware" name="3xploiter" src="https://cdn.discordapp.com/attachments/810603326626201604/949999935024144414/handgun.jpg "/>
		     <Profile githubLink="https://github.com/MrsMalware" name="3xploiter" src="https://cdn.discordapp.com/attachments/810603326626201604/950284402796142624/1791953.png  "/>
	      </div> 
          </section>



        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Team;
