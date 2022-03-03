import { AnimatePresence , motion} from "framer-motion"

const Team = () => {
  return (
	 <>
	<AnimatePresence>
		<motion.div initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}}>
			
		</motion.div>
	</AnimatePresence> 

	 </>
)
}

export default Team