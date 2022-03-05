import { MutableRefObject, useEffect ,useRef } from 'react';
//@ts-ignore
import VanillaTilt from 'vanilla-tilt';


const Profile = () => {
	const TiltingCard = useRef() as MutableRefObject<HTMLDivElement>;

	useEffect(()=>{
		VanillaTilt.init(TiltingCard.current , {scale:0.9 , glare:true , perspective:500 , speed:1000 , reverse:true})
	},[])
	 
  return (
	 <>
           <div  id="#idk" ref={TiltingCard}  className="h-[22rem] w-4/6 sm:w-3/4 sm:h-[22rem]  bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-50 ">
		  
	   </div>

	 </>
  )
}

export default Profile