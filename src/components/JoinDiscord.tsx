const JoinDiscord: React.FC = () => {
  return (
    <>
      <div className="fixed z-50 bottom-10 right-10 h-11 w-1/3 sm:w-40 md:w-48 md:max-h-20">
        <button className="bg-[#5865F2] flex w-full h-full active:bg-[#293188]">
        <a href="https://discord.gg/adq5rQPSsZ" className="h-full w-full flex items-center">
	 <div className="flex justify-center items-center bg-[#ffff] w-1/4 h-full">
            <i className="fa-brands fa-discord text-[#5865F2]"></i>
          </div>
          <h1 className="text-[#ffff] font-sans px-3 py-2 font-2xl font-bold sm:text-base">
            Join Discord
          </h1>	
	</a> 
        </button>
      </div>
    </>
  );
};

export default JoinDiscord;
