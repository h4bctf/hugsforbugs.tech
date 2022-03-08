import "../styles/Profile.scss"
//@ts-ignore
import VanillaTilt from "vanilla-tilt";

interface ProfileProps {
  src: string;
  name: string;
  githubLink: string;
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
        <h1 className="text-white font-['Inter'] font-3xl font-extrabold ">
          {props.name}
        </h1>
     </div> 

        <div className="hidden">
          <h3 className="text-white opacity-95 font-['Montserrat']">
            {props.name} is lead hacker at h4b Iste facere aperiam assumenda
            nemo voluptate est sit, repellat vitae repudiandae
          </h3>
          <div>
            {" "}
            <a
              href={props.githubLink}
              rel="noreferrer"
              target="_blank"
              className="cursor-pointer"
            >
              <i className="text-[#f5f5f5] fa-2x fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
