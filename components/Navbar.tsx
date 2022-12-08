import Link from "next/link";
import { FunctionComponent } from "react";

import { Logo } from "./Logo";

export const Navbar: FunctionComponent = () => {
	return (
		<div className="flex">
			<div className="px-6 py-8 md:px-12 md:py-9 flex items-center w-full">
				<Link href="/" className="flex items-center mx-auto sm:mx-0">
					<Logo className="w-10 h-10" />
					<span className="text-lg sm:text-2xl font-bold uppercase ml-4">Hyphen-Hacks 2023</span>
				</Link>

				<div className="ml-auto hidden sm:flex items-center">
					<div className="items-center font-bold text-xl uppercase gap-12 flex">
						<Link href="#about" className="hover:opacity-80 transition-opacity">
							About
						</Link>
						<Link href="#faq" className="hover:opacity-80 transition-opacity">
							FAQ
						</Link>
						<Link href="#contact" className="hover:opacity-80 transition-opacity">
							Contact
						</Link>
						<Link
							className="bg-theme-orange px-6 py-3 text-black hover:opacity-80 transition-opacity rounded-sm"
							href="/apply">
							Apply
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
