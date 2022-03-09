import "../styles/Profile.scss"
//@ts-ignore
import VanillaTilt from "vanilla-tilt";

interface ProfileProps {
  src: string;
  name: string;
  githubLink: string;
  description:string
}

const Profile = (props: ProfileProps) => {
//   const TiltingCard = useRef() as MutableRefObject<HTMLDivElement>;

//   useEffect(() => {
//     VanillaTilt.init(TiltingCard.current, {
//       scale: 0.99,
//       glare: true,
//       speed: 1000,
//       reverse: true,
//     });
//   }, []);

  return (
    <>
      <div className="Card" >
      <div className="Front" >
      <img
          loading="lazy"
          className="teamMemPic"
          src={props.src}
          alt=""
        />
        <h1 className="text-white font-['Poppins'] text-3xl font-bold sm:text-xl ">
          {props.name}
        </h1>
     </div> 

        <div className="back">
          <p className=" text-[#111111ec] font-['Montserrat'] text-lg font-light opacity-80 ">
       {props.description} 
          </p>
          
          <button>
		  <a
              href={props.githubLink}
              rel="noreferrer"
              target="_blank"
              className="cursor-pointer"
            >
              <i className="fa-3x fa-brands fa-github"></i>
            </a> </button> 
         
        </div>
	<div className="background">
	</div>
      </div>
    </>
  );
};

export default Profile;
