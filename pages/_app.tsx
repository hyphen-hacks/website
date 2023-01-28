import { Space_Mono } from "@next/font/google";
import type { AppProps } from "next/app";

import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../styles/globals.css";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<div className={`flex min-h-screen flex-col ${spaceMono.className}`}>
				<Navbar />
				<div className="flex-1">
					<Component {...pageProps} />
				</div>
				<Footer />
			</div>
		</>
	);
}

export default MyApp;
