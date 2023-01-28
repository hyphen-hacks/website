import Link from "next/link";
import { FunctionComponent } from "react";

import { Logo } from "./Logo";

export const Footer: FunctionComponent = () => {
	return (
		<div className="mt-12">
			<div className="bg-black px-12 pt-12 pb-8">
				<div className="flex">
					<div className="flex items-center">
						<Logo className="w-10 h-10" />
						<span className="text-lg sm:text-2xl font-bold uppercase ml-4">
							Hyphen-Hacks 2023 &gt; March 11th @ LWHS
						</span>
					</div>
					<div className="flex items-center gap-6 ml-auto uppercase font-bold">
						<Link
							className="bg-theme-orange px-6 py-3 text-black hover:opacity-80 transition-opacity rounded-sm"
							href="/apply">
							Register
						</Link>
						<Link
							className="bg-theme-orange px-6 py-3 text-black hover:opacity-80 transition-opacity rounded-sm"
							href="/volunteer">
							Volunteer
						</Link>
						<Link
							className="bg-theme-orange px-6 py-3 text-black hover:opacity-80 transition-opacity rounded-sm"
							href="mailto:support@hyphen-hacks.com">
							Contact Us
						</Link>
					</div>
				</div>
				<div className="text-left mt-8">
					<span className="text-sm font-bold">
						Developed by{" "}
						<Link
							className="underline decoration-theme-orange hover:opacity-90"
							href="https://thijs.gg"
							target="_blank"
							rel="noreferrer">
							Thijs Simonian
						</Link>{" "}
						and{" "}
						<Link
							className="underline decoration-theme-orange hover:opacity-90"
							href="https://github.com/athenajq"
							target="_blank"
							rel="noreferrer">
							Athena Jiang-Qin
						</Link>
						. Website is open source on{" "}
						<Link
							className="underline decoration-theme-orange hover:opacity-90"
							href="https://github.com/hyphen-hacks/website"
							target="_blank"
							rel="noreferrer">
							GitHub
						</Link>
						.
					</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
