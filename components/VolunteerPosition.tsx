import Link from "next/link";
import { FunctionComponent } from "react";

export const VolunteerPosition: FunctionComponent<{
	title: string;
	description: string;
	buttonText: string;
	buttonLink: string;
}> = ({ title, description, buttonText, buttonLink }) => (
	<div>
		<h2 className="font-bold text-xl underline decoration-theme-orange">{title}</h2>
		<p>{description}</p>
		<Link
			className="bg-theme-orange px-4 py-2 text-black hover:opacity-80 transition-opacity rounded-sm inline-block mt-2"
			href={buttonLink}>
			{buttonText} -&gt;
		</Link>
	</div>
);
