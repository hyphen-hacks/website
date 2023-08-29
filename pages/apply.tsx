import { NextPage } from "next";
import { FormEvent, useState } from "react";

import { OpenGraph } from "../components/OpenGraph";
import { Check } from "../components/icons/Check";
import { Spinner } from "../components/icons/Spinner";

const Apply: NextPage = () => {
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [applied, setApplied] = useState(false);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		// Stop the form from submitting and refreshing the page.
		event.preventDefault();

		setLoading(true);

		// Get data from the form.
		const data: any = {};
		const inputContainer = document.getElementById("inputContainer")!;
		Array.from(inputContainer.children).forEach(inputBlock => {
			const inputElem = inputBlock.getElementsByTagName("input")[0] || inputBlock.getElementsByTagName("select")[0];
			if (!inputElem.id) return;
			let value: string | boolean = inputElem.checked || inputElem.value;
			if (value === "true" && inputElem.tagName === "SELECT") value = true;
			if (value === "false" && inputElem.tagName === "SELECT") value = false;
			data[inputElem.id] = value;
		});

		// Send the data to the server in JSON format.
		const JSONdata = JSON.stringify(data);

		// API endpoint where we send form data.
		const endpoint = "/api/apply/attendee";

		// Form the request for sending data to the server.
		const options = {
			// The method is POST because we are sending data.
			method: "POST",
			// Tell the server we're sending JSON.
			headers: {
				"Content-Type": "application/json",
			},
			// Body of the request is the JSON data we created above.
			body: JSONdata,
		};

		const response = await fetch(endpoint, options);
		if (!response?.ok) {
			const json = await response.json();
			setError(`Failed to submit: ${json.error}`);
		} else setApplied(true);
		setLoading(false);
	};

	return (
		<div>
			<OpenGraph title="Apply" description="Apply to participate in the Hyphen-Hacks hackathon." />
			<div className="w-full flex">
				<div className="max-w-5xl mx-auto">
					<div className="text-center mx-4 md:mx-0">
						<h1 className="text-7xl md:text-8xl font-extrabold underline decoration-theme-orange">Apply</h1>
						<p className="mt-6 text-xl">
							Because Hyphen-Hacks is a free event, we must limit the number of people who can attend. Please complete
							our short application process to attend Hyphen-Hacks 2023.
						</p>
					</div>
					<div className="my-8">
						<form action="#" method="POST" onSubmit={handleSubmit}>
							{applied ? (
								<div className="overflow-hidden shadow sm:rounded-md text-black bg-white">
									<div className="bg-white px-4 py-5 sm:p-6">
										<div className="flex items-center justify-center gap-7 flex-col sm:flex-row text-center sm:text-left text-green-600">
											<Check className="w-24" />
											<div className="max-w-lg">
												<h1 className="font-extrabold text-2xl">Application Submitted!</h1>
												<p>
													You did it! We&apos;ll send you an email with more information once you&apos;re accepted into
													the event. If you have any questions, don&apos;t hesitate to reach out to us over email at
													support@hyphen-hacks.com
												</p>
											</div>
										</div>
									</div>
								</div>
							) : (
								<div className="overflow-hidden shadow sm:rounded-md text-black bg-white">
									<div className="bg-white px-4 py-5 sm:p-6">
										<div className="grid grid-cols-12 gap-6" id="inputContainer">
											<div className="col-span-12 sm:col-span-5">
												<label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
													First name
												</label>
												<input
													required
													type="text"
													name="firstName"
													id="firstName"
													autoComplete="given-name"
													className="bg-white px-3 py-2 mt-1 block w-full rounded-md shadow-sm outline-none border-2 border-gray-300  focus:border-theme-orange focus:ring-theme-orange sm:text-sm"
												/>
											</div>

											<div className="col-span-12 sm:col-span-5">
												<label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
													Last name
												</label>
												<input
													required
													type="text"
													name="lastName"
													id="lastName"
													autoComplete="family-name"
													className="bg-white px-3 py-2 mt-1 block w-full rounded-md shadow-sm outline-none border-2 border-gray-300  focus:border-theme-orange focus:ring-theme-orange sm:text-sm"
												/>
											</div>

											<div className="col-span-12 sm:col-span-2">
												<label htmlFor="pronouns" className="block text-sm font-medium text-gray-700">
													Pronouns
												</label>
												<input
													required
													type="text"
													name="pronouns"
													id="pronouns"
													className="bg-white px-3 py-2 mt-1 block w-full rounded-md shadow-sm outline-none border-2 border-gray-300 focus:border-theme-orange focus:ring-theme-orange sm:text-sm"
												/>
											</div>

											<div className="col-span-12 sm:col-span-4">
												<label htmlFor="email" className="block text-sm font-medium text-gray-700">
													Email address
												</label>
												<input
													required
													type="text"
													name="email"
													id="email"
													autoComplete="email"
													className="bg-white px-3 py-2 mt-1 block w-full rounded-md shadow-sm outline-none border-2 border-gray-300 focus:border-theme-orange focus:ring-theme-orange sm:text-sm"
												/>
											</div>

											<div className="col-span-12 sm:col-span-4">
												<label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
													Phone number
												</label>
												<input
													required
													type="text"
													name="phoneNumber"
													id="phoneNumber"
													autoComplete="phone"
													className="bg-white px-3 py-2 mt-1 block w-full rounded-md shadow-sm outline-none border-2 border-gray-300 focus:border-theme-orange focus:ring-theme-orange sm:text-sm"
												/>
											</div>

											<div className="col-span-12 sm:col-span-4">
												<label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">
													Birthday
												</label>
												<input
													required
													type="text"
													name="birthDate"
													id="birthDate"
													className="bg-white px-3 py-2 mt-1 block w-full rounded-md shadow-sm outline-none border-2 border-gray-300 focus:border-theme-orange focus:ring-theme-orange sm:text-sm"
												/>
											</div>

											<div className="col-span-12 sm:col-span-8">
												<label htmlFor="school" className="block text-sm font-medium text-gray-700">
													School
												</label>
												<input
													required
													type="text"
													name="school"
													id="school"
													className="bg-white px-3 py-2 mt-1 block w-full rounded-md shadow-sm outline-none border-2 border-gray-300 focus:border-theme-orange focus:ring-theme-orange sm:text-sm"
												/>
											</div>

											<div className="col-span-12 sm:col-span-4">
												<label htmlFor="gradYear" className="block text-sm font-medium text-gray-700">
													Graduation Year
												</label>
												<input
													required
													type="text"
													name="gradYear"
													id="gradYear"
													className="bg-white px-3 py-2 mt-1 block w-full rounded-md shadow-sm outline-none border-2 border-gray-300 focus:border-theme-orange focus:ring-theme-orange sm:text-sm"
												/>
											</div>

											<div className="col-span-12 sm:col-span-4">
												<label htmlFor="wantTeam" className="block text-sm font-medium text-gray-700">
													Do you want to compete with a team?
												</label>
												<select
													required
													id="wantTeam"
													name="wantTeam"
													className="mt-1 block w-full rounded-md border-gray-300 bg-white py-2 px-3 shadow-sm outline-none border-2 focus:border-theme-orange focus:ring-theme-orange sm:text-sm">
													<option selected disabled value="">
														Select
													</option>
													<option value="true">Yes</option>
													<option value="false">No</option>
												</select>
											</div>

											<div className="col-span-12 sm:col-span-4">
												<label htmlFor="hasTeam" className="block text-sm font-medium text-gray-700">
													Do you have a team already?
												</label>
												<select
													required
													id="hasTeam"
													name="hasTeam"
													className="mt-1 block w-full rounded-md border-gray-300 bg-white py-2 px-3 shadow-sm outline-none border-2 focus:border-theme-orange focus:ring-theme-orange sm:text-sm">
													<option selected disabled value="">
														Select
													</option>
													<option value="true">Yes</option>
													<option value="false">No</option>
												</select>
											</div>

											<div className="col-span-12 sm:col-span-4">
												<label htmlFor="teamMembers" className="block text-sm font-medium text-gray-700">
													If so, list your team members here
												</label>
												<input
													type="text"
													name="teamMembers"
													id="teamMembers"
													className="bg-white px-3 py-2 mt-1 block w-full rounded-md shadow-sm outline-none border-2 border-gray-300  focus:border-theme-orange focus:ring-theme-orange sm:text-sm"
												/>
											</div>

											<div className="col-span-12 sm:col-span-4">
												<label htmlFor="hasCodingExperience" className="block text-sm font-medium text-gray-700">
													Do you have coding experience?
												</label>
												<select
													required
													id="hasCodingExperience"
													name="hasCodingExperience"
													className="mt-1 block w-full rounded-md border-gray-300 bg-white py-2 px-3 shadow-sm outline-none border-2 focus:border-theme-orange focus:ring-theme-orange sm:text-sm">
													<option selected disabled value="">
														Select
													</option>
													<option value="true">Yes</option>
													<option value="false">No</option>
												</select>
											</div>

											<div className="col-span-12 sm:col-span-4">
												<label htmlFor="participatedBefore" className="block text-sm font-medium text-gray-700">
													Have you ever joined a hackathon?
												</label>
												<select
													required
													id="participatedBefore"
													name="participatedBefore"
													className="mt-1 block w-full rounded-md border-gray-300 bg-white py-2 px-3 shadow-sm outline-none border-2 focus:border-theme-orange focus:ring-theme-orange sm:text-sm">
													<option selected disabled value="">
														Select
													</option>
													<option value="true">Yes</option>
													<option value="false">No</option>
												</select>
											</div>

											<div className="col-span-12 sm:col-span-4">
												<label htmlFor="shirtSize" className="block text-sm font-medium text-gray-700">
													Shirt Size (adult)
												</label>
												<select
													required
													id="shirtSize"
													name="shirtSize"
													className="mt-1 block w-full rounded-md border-gray-300 bg-white py-2 px-3 shadow-sm outline-none border-2 focus:border-theme-orange focus:ring-theme-orange sm:text-sm">
													<option selected disabled value="">
														Select
													</option>
													<option>XS</option>
													<option>S</option>
													<option>M</option>
													<option>L</option>
													<option>XL</option>
													<option>2XL</option>
													<option>3XL</option>
												</select>
											</div>

											<div className="col-span-12 sm:col-span-6">
												<label htmlFor="allergies" className="block text-sm font-medium text-gray-700">
													Dietary Restrictions
												</label>
												<input
													type="text"
													name="allergies"
													id="allergies"
													className="bg-white px-3 py-2 mt-1 block w-full rounded-md shadow-sm outline-none border-2 border-gray-300  focus:border-theme-orange focus:ring-theme-orange sm:text-sm"
												/>
											</div>

											<div className="col-span-12 sm:col-span-6">
												<label htmlFor="comments" className="block text-sm font-medium text-gray-700">
													Any additional comments?
												</label>
												<input
													type="text"
													name="comments"
													id="comments"
													className="bg-white px-3 py-2 mt-1 block w-full rounded-md shadow-sm outline-none border-2 border-gray-300  focus:border-theme-orange focus:ring-theme-orange sm:text-sm"
												/>
											</div>

											<div className="flex items-center mb-4 col-span-12">
												<input
													required
													id="understandApplication"
													type="checkbox"
													value=""
													className="appearance-none w-5 h-5 text-theme-orange bg-white checked:bg-theme-orange rounded border-2 border-gray-300 checked:border-theme-orange focus:ring-theme-orange"
												/>
												<label htmlFor="understandApplication" className="ml-2 text-sm font-medium text-gray-700">
													Do you understand that this is an application, and does not guarantee official acceptance to
													the event?
												</label>
											</div>
										</div>
									</div>
									<div className="bg-gray-50 px-4 py-3 sm:px-6 flex flex-col sm:flex-row items-center">
										<p className="text-red-500 font-semibold">{error}</p>
										<button
											type="submit"
											className="m-0 sm:ml-auto inline-flex justify-center rounded-sm border border-transparent bg-theme-orange py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-theme-orange/90 focus:outline-none focus:ring-2 focus:ring-theme-orange focus:ring-offset-2"
											disabled={isLoading}>
											<Spinner
												className={`animate-spin mr-2 text-black w-5 h-5 ${isLoading ? "inline-block" : "hidden"}`}
											/>
											{isLoading ? "Applying" : "Apply"}
										</button>
									</div>
								</div>
							)}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Apply;
