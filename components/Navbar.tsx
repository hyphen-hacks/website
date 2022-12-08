import Link from "next/link";
import { FunctionComponent, useState} from "react";

import { Logo } from "./Logo";

export const Navbar: FunctionComponent = () => {
	const [open, setOpen] = useState(false);

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

			<div className={"flex flex-col justify-start items-end sm:hidden px-4 py-3 absolute right-0 h-screen "+ (open ? "bg-theme-shadow":"")}>
				<div className="right-0">
					<button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:opacity-50 " aria-controls="mobile-menu" aria-expanded="false" onClick={() => {setOpen(!open)}}>			
						{open ? 
						<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
						: 
						<svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
							<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
						}
					</button>
				</div>
				{open && <div className="flex flex-col items-end">
							<Link href="#about" className="hover:opacity-80 transition-opacity p-2">
								About
							</Link>
							<Link href="#faq" className="hover:opacity-80 transition-opacity p-2">
								FAQ
							</Link>
							<Link href="#contact" className="hover:opacity-80 transition-opacity p-2">
								Contact
							</Link>
							<Link
								className="bg-theme-orange px-6 py-3 text-black hover:opacity-80 transition-opacity rounded-sm p-3 my-2"
								href="/apply">
								Apply
							</Link>
				</div>}
			</div>
		</div>
	);
};
