import react from "React";


const about: React.FC = ()=> {
	return (
		<div
			id="About"
			class=" sm:justify-start bg-black text-white flex justify-center items-center h-screen pb-10"
		>
			<div class="  flex justify-between px-10  w-full ">
				<div>
					<h1 class="mx-36 text-6xl font-mono flex mr">About Us</h1>
				</div>
				<div className=" flex justify-center">
					<p class="w-1/2 font-mono mx-28 sm:justify-end">
						HugsForBugs is an international community where we play
						CTFs and learn things together. We play around once or
						twice a month or so and aren't super hardcore. No one
						will expect you to stay up all night two nights in a
						row! Our members range from high school students to
						established cybersecurity professionals, complete n00bs
						to professional pen testers. We also hang out, discuss
						the latest 0-day in the news, show off our latest bug
						bounty, and share silly memes.
					</p>
				</div>
			</div>
		</div>
	);
}

export default about;
