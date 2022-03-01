const JoinDiscord: React.FC = () => {
  return (
    <>
    <section className="h-[80vh] sm:h-[70vh] w-full bg-[#11121A] flex items-center content-center justify-center ">
      <div className="w-10/12 h-4/5 sm:w-9/12 sm:h-[90%] flex flex-col justify-evenly items-center  rounded-3xl  bg-gradient-to-tr from-[#1d5399] to-[#6ca7f0]">
        <div className="w-10/12 h-11 flex justify-center text-center ">
          <h1 className="text-[#ffff] text-3xl sm:text-5xl font-['Inter'] font-extrabold">Join our Discord Community with 100+ Expert Hackers </h1>
        </div>
        <div className="w-9/12 sm:w-3/5 h-10 flex justify-center content-center text-center mt-4">
          <h2 className="text-[#ffff] sm:text-lg opacity-80">Get support in dedicated channels , explore new ideas and work in Team in CTF's</h2>
        </div>
        <div className="w-[40%] h-[2.9rem] sm:w-[25%] sm:h-14">
          <button className="w-full h-full bg-[#fff] rounded-xl hover:opacity-80">
            <a href="https://discord.gg/VNBzbsbfVK" className="w-full h-full">
              <div className="flex justify-evenly items-center ">
                <div>
                  <i className="fa-brands fa-discord fa-xl text-[#5865F2] "></i>
                </div>
                <div>
                  <h1 className="text-[#5865F2] test-xl sm:text-2xl font-bold">Join Discord</h1>
                </div>
              </div>
            </a>
          </button>
        </div>
      </div>
      </section> 
    </>
  );
};
export default JoinDiscord;
