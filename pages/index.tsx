import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
		</div>
	);
};

export default Home;
