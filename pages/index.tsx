import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import BridgeGraphic from "../assets/images/bridge.png";
import CommunityImage from "../assets/images/community.jpg";
import GrowImage from "../assets/images/grow.jpg";
import LearnImage from "../assets/images/learn.jpg";
import MissionImage from "../assets/images/mission.jpg";
import sponsorHCB from "../assets/images/sponsors/hack-club-bank.svg";
import sponsorWolfram from "../assets/images/sponsors/wolfram.svg";
import { FAQQuestion } from "../components/FAQQuestion";
import { SponsorCard } from "../components/SponsorCard";

const Home: NextPage = () => {
	return (
		<div>
			<div className="w-full flex relative">
				{/* <div className="text-[20rem] font-bold hidden sm:block absolute -z-20 right-10 -top-10 opacity-10 text-black">
					2023
				</div> */}
				<div className="hidden sm:block absolute -z-20 right-0 opacity-50 w-3/5 animate-float">
					<Image src={BridgeGraphic} alt="Hyphen-Hacks bridge graphic" />
				</div>
				<main className="max-w-5xl mx-8 mt-4 sm:mx-24 sm:mt-20">
					<div className="flex flex-col items-center sm:items-start text-center sm:text-left">
						<h1 className="text-4xl sm:text-8xl font-bold">Hyphen-Hacks</h1>
						<div className="w-20 sm:w-40 border-t-theme-orange border-t-4 my-8"></div>
						<p className="text-lg sm:text-3xl font-bold leading-relaxed">
							24-hour in-person programming competition for Bay Area students with opportunities for all levels of
							experience
						</p>
						<p className="text-md sm:text-2xl mt-4 md:mt-8">September 30th at Lick-Wilmerding High School</p>
					</div>
					<div className="flex gap-8 mt-12 font-bold text-md sm:text-xl uppercase justify-center sm:justify-start">
						<Link
							className="border-theme-orange border-4 bg-theme-orange px-5 py-2 text-black hover:opacity-80 transition-opacity rounded-sm"
							href="/apply">
							Register
						</Link>
						<Link
							className="border-theme-orange border-4 box-border px-5 py-2 hover:bg-theme-orange/40 transition-colors rounded-sm"
							href="/volunteer">
							Volunteer
						</Link>
					</div>
				</main>
			</div>

			<div className="mt-8 sm:mt-56 mx-8 sm:mx-24" id="about">
				<div className="sm:grid grid-cols-5 gap-24 items-center mt-24">
					<div className="col-span-3">
						<h2 className="font-bold text-3xl sm:text-4xl my-4">Mission</h2>
						<p className="text-lg sm:text-2xl">
							Hyphen-Hacks is an annual 24-hour hackathon aimed at high school students from around the Bay Area with
							diverse backgrounds and skill levels. We hope to create a space where all students are inspired to learn
							new skills while collaborating on new inventions.
						</p>
					</div>
					<div className="col-span-2 rounded-lg overflow-hidden mt-4">
						<Image className="object-cover" src={MissionImage} alt="The Hyphen-Hacks 2020 team" />
					</div>
				</div>

				<div className="sm:grid grid-cols-5 gap-24 items-center mt-24">
					<div className="col-span-2 rounded-lg overflow-hidden mt-4">
						<Image className="object-cover" src={LearnImage} alt="The Hyphen-Hacks 2020 team" />
					</div>
					<div className="col-span-3">
						<h2 className="font-bold text-3xl sm:text-4xl my-4">Learn</h2>
						<p className="text-lg sm:text-2xl">
							At Hyphen-Hacks, you will get the opportunity to receive mentorship from industry professionals, take
							classes ranging from beginner topics to advanced techniques, and meet like-minded students from around the
							Bay Area.
						</p>
					</div>
				</div>

				<div className="sm:grid grid-cols-5 gap-24 items-center mt-20">
					<div className="col-span-3">
						<h2 className="font-bold text-3xl sm:text-4xl my-4">Community</h2>
						<p className="text-lg sm:text-2xl">
							We strive to foster a strong, inclusive community. Whether this is your first time programming or your
							tenth hackathon, we want you to feel included and supported.
						</p>
					</div>
					<div className="col-span-2 rounded-lg overflow-hidden mt-4">
						<Image className="object-cover" src={CommunityImage} alt="The Hyphen-Hacks 2020 team" />
					</div>
				</div>

				<div className="sm:grid grid-cols-5 gap-24 items-center mt-24">
					<div className="col-span-2 rounded-lg overflow-hidden mt-4">
						<Image className="object-cover" src={GrowImage} alt="The Hyphen-Hacks 2020 team" />
					</div>
					<div className="col-span-3">
						<h2 className="font-bold text-3xl sm:text-4xl my-4">Grow</h2>
						<p className="text-lg sm:text-2xl">
							Hyphen-Hacks will stretch your skills and imagination, pushing you to achieve what you never dreamed to be
							possible. Our open, supportive atmosphere will provide a platform for you to create amazing products.
						</p>
					</div>
				</div>
			</div>

			{/* <div className="mt-8 sm:mt-36 mx-8 sm:mx-24" id="faq">
				<h2 className="font-bold text-3xl sm:text-4xl my-4">Prizes</h2>
			</div> */}

			<div className="mt-8 sm:mt-36 mx-8 sm:mx-24" id="faq">
				<h2 className="font-bold text-3xl sm:text-4xl my-4 decoration-theme-orange underline">Sponsors</h2>
				<p className="text-lg">
					Interested in sponsoring the event? Please email us at{" "}
					<Link
						className="text-theme-orange hover:underline"
						href="mailto:finance@hyphen-hacks.com"
						target="_blank"
						rel="noreferrer">
						finance@hyphen-hacks.com
					</Link>
				</p>
				<div className="my-8">
					<h3 className="font-bold text-2xl">Special Sponsors</h3>
					<div className="flex flex-row my-4">
						<SponsorCard image={sponsorWolfram} name="Wolfram" url="https://wolfram.com" />
					</div>
				</div>
				<div className="my-8">
					<h3 className="font-bold text-2xl">Made Possible By</h3>
					<div className="flex flex-row my-4">
						<SponsorCard image={sponsorHCB} name="Hack Club Bank" url="https://bank.hackclub.com/hyphen-hacks" />
					</div>
				</div>
			</div>

			<div className="mt-8 sm:mt-36 mx-8 sm:mx-24" id="faq">
				<h2 className="font-bold text-3xl sm:text-4xl my-4 decoration-theme-orange underline">FAQs</h2>
				<FAQQuestion
					question="What is a hackathon?"
					answer="A hackathon is an event that usually lasts for 24 hours but can go for as long as 3 days. During this confined period, engineers, computer scientists, and designers work together to build a project from scratch, often with very little sleep. The goal of a hackathon is not to build a polished product, but to hack something together and learn new ways of solving problems. Projects created are judged by professionals and peers to win thousands of dollars in prizes!"
				/>
				<FAQQuestion
					question="Who can participate?"
					answer="Anyone who is enrolled in a high school between the 9th and 12th grades in the Bay Area may participate in Hyphen-Hacks."
				/>
				<FAQQuestion
					question="Where will it take place?"
					answer="Hyphen-Hacks 2023 will take place at Lick-Wilmerding High School at 755 Ocean Ave San Francisco, CA 94112. The hackathon will be fully in-person."
				/>
				<FAQQuestion
					question="Do I need prior programming knowledge to participate?"
					answer="Not at all! We are open to students with any programming experience. Hackathons are actually a great way to learn to code, as you build upon your skills from peers, workshops, and challenges within your project. We’ll be hosting multiple workshops to help you get started and explore a range of new topics."
				/>
				<FAQQuestion
					question="What is the theme?"
					answer="The theme will be announced at the beginning of the hackathon! There may or may not be hints hidden in this website."
				/>
				<FAQQuestion
					question="What are the prizes?"
					answer="We're still coordinating prizes, and they'll be added to this website at a later date."
				/>
			</div>

			<div className="mt-8 sm:mt-36 mx-8 sm:mx-24" id="contact">
				<h2 className="font-bold text-3xl sm:text-4xl my-4 decoration-theme-orange underline">Contact</h2>
				<p className="text-lg sm:text-2xl my-4">
					We are located at Lick-Wilmerding High School:{" "}
					<Link
						className="text-theme-orange hover:underline"
						href="https://goo.gl/maps/amhJtWweU4NdneSi8"
						target="_blank"
						rel="noreferrer">
						755 Ocean Ave San Francisco, CA 94112
					</Link>
				</p>
				<p className="text-lg sm:text-2xl my-4">
					We welcome your input! For general inquiries please email{" "}
					<Link
						className="text-theme-orange hover:underline"
						href="mailto:support@hyphen-hacks.com"
						target="_blank"
						rel="noreferrer">
						support@hyphen-hacks.com
					</Link>
				</p>
				<p className="text-lg sm:text-2xl my-4">
					Interested in sponsoring us? Please email us at{" "}
					<Link
						className="text-theme-orange hover:underline"
						href="mailto:finance@hyphen-hacks.com"
						target="_blank"
						rel="noreferrer">
						finance@hyphen-hacks.com
					</Link>
				</p>
			</div>

			<div className="mt-24 mb-12 sm:mt-36 sm:mb-24 mx-8 sm:mx-24" id="contact">
				<div className="text-center">
					<h1 className="text-5xl md:text-8xl font-extrabold">Hack With Us!</h1>
					<div className="mt-12">
						<Link
							className="bg-theme-orange text-black px-6 py-3 hover:opacity-80 transition-opacity rounded-sm font-bold text-lg uppercase"
							href="/apply">
							Register
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
