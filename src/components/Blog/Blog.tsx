import { AnimatePresence , motion } from "framer-motion";

const Blog = () => {
  return (
	  <>
	  <AnimatePresence>
		  <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
			  <section className="w-full h-screen bg-[#11121A] flex justify-center items-center">
				  <h1 className="text-white text-5xl font-['Inter'] font-extrabold ">New Blogs Will be Out SOON!!</h1>
			  </section>
		  </motion.div>
	  </AnimatePresence>
	  </>   
  )
}

export default Blog;