import { AnimatePresence, motion } from "framer-motion";
import Profile from "./Profile";
import "../styles/Team.scss"

const Team = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <section className="w-full h-[380vh] overflow-hidden flex flex-col  bg-[#191a27]">
              <div className="w-full text-center mt-20">
                <h1 className="text-white font-['Inter'] text-5xl font-extrabold">Team</h1>
              </div>
              <div className="w-full text-center mt-4">
                <h2 className="text-white font-['Inter'] text-2xl opacity-80 font-extralight">
                  These are the fronters of Community
                </h2>
              </div>
	      <div className="w-full  grid grid-cols-1 ">
		     <Profile />
		     <Profile />
		     <Profile />
		     <Profile />
		     <Profile />
	      </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Team;
