import { NextPage } from "next";
import Link from "next/link";

import { OpenGraph } from "../components/OpenGraph";
import { VolunteerPosition } from "../components/VolunteerPosition";

const Volunteer: NextPage = () => {
	return (
		<div>
			<OpenGraph
				title="Volunteer"
				description="Volunteers are a key part of Hyphen-Hacks. Volunteers get free meals and Hyphen-Hacks swag! If you need
								service hours, the Hyphen-Hacks team can sign off on your time commitment."
			/>
			<div className="w-full flex">
				<div className="max-w-5xl mx-auto">
					<div className="text-center mx-4 md:mx-0">
						<h1 className="text-7xl md:text-8xl font-extrabold underline decoration-theme-orange">Volunteer</h1>
						<div className="mt-6 text-xl">
							<p className="mt-2">
								Volunteers are a key part of Hyphen-Hacks. Volunteers get free meals and Hyphen-Hacks swag! If you need
								service hours, the Hyphen-Hacks team can sign off on your time commitment. Volunteer positions are
								listed below:
							</p>
						</div>
					</div>
					<div className="my-8">
						<div className="overflow-hidden shadow sm:rounded-md text-black bg-white">
							<div className="bg-white px-4 py-5 sm:p-6 flex flex-col gap-8">
								<VolunteerPosition
									title="Programming Mentor"
									description="As a mentor, you will create meaningful connections with high school students interested in
										programing. You will travel from team to team, assisting students with questions they may have about
										the process of software development."
									buttonText="Contact Us"
									buttonLink="mailto:volunteer@hyphen-hacks.com"
								/>
								<VolunteerPosition
									title="Event Volunteer"
									description="As a volunteer, you will assist the Hyphen-Hacks team in preparing meals, directing attendees, and monitoring spaces. Volunteering is a great way for you to support Hyphen-Hacks without any prior knowledge."
									buttonText="Contact Us"
									buttonLink="mailto:volunteer@hyphen-hacks.com"
								/>
								<VolunteerPosition
									title="Other"
									description="Want to volunteer in a way not listed here? Let us know!"
									buttonText="Contact Us"
									buttonLink="mailto:volunteer@hyphen-hacks.com"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Volunteer;
