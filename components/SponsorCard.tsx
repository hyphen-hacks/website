import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

export const SponsorCard: FunctionComponent<{
	name: string;
	image: string;
	url: string;
}> = ({ name, image, url }) => (
	<Link href={url} target="_blank" rel="noreferrer">
		<Image src={image} alt={name} className="h-24 w-auto" />
	</Link>
);
