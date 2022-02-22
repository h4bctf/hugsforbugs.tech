import react from "React";

const banner: React.FC = () => {
  return (
    <div
      id="Home"
      className="flex justify-center items-center w-full h-full bg-[#0A0A0A]"
    >
      <img
        className="w-full  mx-28 text-8xl m-40 font-mono"
           src="https://readme-typing-svg.herokuapp.com?font=Ubuntu+Mono&color=%2330F726&size=40&center=true&vCenter=true&lines=IT'S+PWN'ING+TIME;PWN+O'+CLOCK"
        alt=""
      />
    </div>
  );
};

export default banner;
