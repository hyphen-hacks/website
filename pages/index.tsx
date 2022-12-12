import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import CommunityImage from "../assets/images/community.jpg";
import GrowImage from "../assets/images/grow.jpg";
import LearnImage from "../assets/images/learn.jpg";
import MissionImage from "../assets/images/mission.jpg";

const Home: NextPage = () => {
	return (
		<div>
			<div className="container w-full flex">
				<div className="text-[20rem] font-bold hidden sm:block absolute -z-10 right-10 opacity-10 text-black">2023</div>
				<main className="max-w-5xl mx-8 mt-4 sm:mx-24 sm:mt-20">
					<div className="flex flex-col items-center sm:items-start text-center sm:text-left">
						<h1 className="text-4xl sm:text-8xl font-bold">Hyphen-Hacks</h1>
						<div className="w-20 sm:w-40 border-t-theme-orange border-t-4 my-8"></div>
						<p className="text-lg sm:text-3xl font-bold leading-relaxed">
							24-hour programming competition for Bay Area students with opportunities for all levels of experience
						</p>
						<p className="text-md sm:text-2xl mt-4 md:mt-8">March 11th & 12th at Lick-Wilmerding High School</p>
					</div>
					<div className="flex gap-8 mt-12 font-bold text-md sm:text-xl uppercase justify-center sm:justify-start">
						<Link
							className="border-theme-orange border-4 bg-theme-orange px-5 py-2 text-black hover:opacity-80 transition-opacity rounded-sm"
							href="/apply">
							Apply
						</Link>
						<Link
							className="border-theme-orange border-4 box-border px-5 py-2 hover:bg-theme-orange/40 transition-colors rounded-sm"
							href="/apply">
							Volunteer
						</Link>
					</div>
				</main>
			</div>

			<div className="mt-8 sm:mt-36 mx-8 sm:mx-24">
				<div className="sm:grid grid-cols-5 gap-24 items-center mt-24">
					<div className="col-span-3">
						<h2 className="font-bold text-4xl my-4">Mission</h2>
						<p className="text-2xl">
							Hyphen-Hacks is an annual 24-hour hackathon aimed at high school students from around the Bay Area with
							diverse backgrounds and skill levels. We hope to create a space where all students are inspired to learn
							new skills while collaborating on new inventions.
						</p>
					</div>
					<div className="col-span-2 shrink">
						<Image className="object-cover" src={MissionImage} alt="The Hyphen-Hacks 2020 team" />
					</div>
				</div>

				<div className="sm:grid grid-cols-5 gap-24 items-center mt-24">
					<div className="col-span-2">
						<Image className="object-cover" src={LearnImage} alt="The Hyphen-Hacks 2020 team" />
					</div>
					<div className="col-span-3">
						<h2 className="font-bold text-4xl my-4">Learn</h2>
						<p className="text-2xl">
							At Hyphen-Hacks, you will get the opportunity to receive mentorship from industry professionals, take
							classes ranging from beginner topics to advanced techniques, and meet like-minded students from around the
							Bay Area.
						</p>
					</div>
				</div>

				<div className="sm:grid grid-cols-5 gap-24 items-center mt-24">
					<div className="col-span-3">
						<h2 className="font-bold text-4xl my-4">Community</h2>
						<p className="text-2xl">
							We strive to foster a strong, inclusive community. Whether this is your first time programming or your
							tenth hackathon, we want you to feel included and supported.
						</p>
					</div>
					<div className="col-span-2">
						<Image className="object-cover" src={CommunityImage} alt="The Hyphen-Hacks 2020 team" />
					</div>
				</div>

				<div className="sm:grid grid-cols-5 gap-24 items-center mt-24">
					<div className="col-span-2">
						<Image className="object-cover" src={GrowImage} alt="The Hyphen-Hacks 2020 team" />
					</div>
					<div className="col-span-3">
						<h2 className="font-bold text-4xl my-4">Grow</h2>
						<p className="text-2xl">
							Hyphen-Hacks will stretch your skills and imagination, pushing you to achieve what you never dreamed to be
							possible. Our open, supportive atmosphere will provide a platform for you to create amazing products.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
