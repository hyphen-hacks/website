import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

export const SponsorCard: FunctionComponent<{
	name: string;
	image: string | StaticImageData;
	lightBackground?: boolean;
	url: string;
}> = ({ name, image, lightBackground, url }) => (
	<Link href={url} target="_blank" rel="noreferrer">
		<Image src={image} alt={name} className={`h-24 w-auto ${lightBackground ? "bg-white rounded-xl p-2" : ""}`} />
	</Link>
);
