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
          <section className="w-full h-[315vh] sm:h-[150vh]  flex flex-col  bg-[#191a27]">
              <div className="w-full text-center mt-20 p-2 ">
                <h1 className="text-white font-['Inter'] text-5xl font-extrabold">Team</h1>
              </div>
              <div className="w-full text-center  mt-2 mb-4 p-2 sm:mb-0 sm:p-2">
                <h2 className="text-white font-['Inter'] text-2xl opacity-80 font-extralight">
                  These are the fronters of Community
                </h2>
              </div>
	      <div className="w-full  h-5/6 grid grid-cols-1 justify-items-center grid-rows-5 gap-y-16 sm:grid-rows-2 sm:gap-y-8 sm:grid-cols-3 sm:gap-x-11">
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
