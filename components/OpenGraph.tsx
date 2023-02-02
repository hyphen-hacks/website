import Head from "next/head";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

export const OpenGraph: FunctionComponent<{ title?: string; description?: string }> = ({
	title = "24-hour hackathon for high school students",
	description = "Hyphen-Hacks is an annual 24-hour hackathon aimed at high school students from around the Bay Area with diverse backgrounds and skill levels.",
}) => {
	const url = `https://hyphen-hacks.com{router.asPath}`;

	return (
		<>
			<Head>
				<title>{`Hyphen-Hacks | ${title}`}</title>
				<meta key="description" name="description" content={description} />
				<meta key="theme-color" name="theme-color" content="#E09116" />
				<meta key="format-detection" name="format-detection" content="telephone=no" />

				{/* Twitter */}
				<meta name="twitter:card" content="summary" key="twitter-card" />

				{/* Open Graph */}
				<meta property="og:url" content={url} key="og-url" />
				<meta property="og:image" content="/favicon-256x256.png" key="og-image" />
				<meta property="og:title" content={`Hyphen-Hacks | ${title}`} key="og-title" />
				<meta property="og:description" content={description} key="og-desc" />
				<meta property="og:locale" content="en_US" key="og-locale" />
			</Head>
		</>
	);
};
