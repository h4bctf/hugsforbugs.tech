import Banner from "./Banner";
import About from "./About";
import { AnimatePresence, motion } from "framer-motion";
import JoinDiscord from "../JoinDiscord";

const HomePage = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
          <Banner />
          <About />
          <JoinDiscord/>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default HomePage;
