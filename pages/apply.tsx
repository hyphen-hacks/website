import { NextPage } from "next";

const Apply: NextPage = () => {
	return (
		<div>
			<div className="w-full flex">
				<div className="max-w-5xl mx-auto">
					<div className="text-center">
						<h1 className="text-8xl font-extrabold  underline decoration-theme-orange">Apply</h1>
						<p className="mt-6 text-xl">
							Because Hyphen-Hacks is a free event, we must limit the number of people who can attend. Please complete
							our short application process to attend Hyphen-Hacks 2023.
						</p>
					</div>
					<div className="my-8">
						<form action="#" method="POST">
							<div className="overflow-hidden shadow sm:rounded-md text-black">
								<div className="bg-white px-4 py-5 sm:p-6">
									<div className="grid grid-cols-6 gap-6">
										<div className="col-span-6 sm:col-span-3">
											<label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
												First name
											</label>
											<input
												type="text"
												name="first-name"
												id="first-name"
												autoComplete="given-name"
												className="bg-white px-3 py-2 mt-1 block w-full rounded-md shadow-sm outline-none border-2 border-gray-300  focus:border-theme-orange focus:ring-theme-orange sm:text-sm"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
												Last name
											</label>
											<input
												type="text"
												name="last-name"
												id="last-name"
												autoComplete="family-name"
												className="bg-white px-3 py-2 mt-1 block w-full rounded-md shadow-sm outline-none border-2 border-gray-300  focus:border-theme-orange focus:ring-theme-orange sm:text-sm"
											/>
										</div>

										<div className="col-span-6 sm:col-span-2">
											<label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
												Email address
											</label>
											<input
												type="text"
												name="email-address"
												id="email-address"
												autoComplete="email"
												className="bg-white px-3 py-2 mt-1 block w-full rounded-md shadow-sm outline-none border-2 border-gray-300 focus:border-theme-orange focus:ring-theme-orange sm:text-sm"
											/>
										</div>

										<div className="col-span-6 sm:col-span-2">
											<label htmlFor="birthday" className="block text-sm font-medium text-gray-700">
												Birthday
											</label>
											<input
												type="text"
												name="birthday"
												id="birthday"
												className="bg-white px-3 py-2 mt-1 block w-full rounded-md shadow-sm outline-none border-2 border-gray-300 focus:border-theme-orange focus:ring-theme-orange sm:text-sm"
											/>
										</div>

										<div className="col-span-6 sm:col-span-2">
											<label htmlFor="gender" className="block text-sm font-medium text-gray-700">
												Gender
											</label>
											<select
												id="gender"
												name="gender"
												autoComplete="gender"
												className="mt-1 block w-full rounded-md border-gray-300 bg-white py-2 px-3 shadow-sm outline-none border-2 focus:border-theme-orange focus:ring-theme-orange sm:text-sm">
												<option selected disabled>
													Select
												</option>
												<option>Male</option>
												<option>Female</option>
												<option>Other</option>
												<option>Prefer not to say</option>
											</select>
										</div>

										<div className="col-span-6 sm:col-span-4">
											<label htmlFor="school" className="block text-sm font-medium text-gray-700">
												School
											</label>
											<input
												type="text"
												name="school"
												id="school"
												className="bg-white px-3 py-2 mt-1 block w-full rounded-md shadow-sm outline-none border-2 border-gray-300 focus:border-theme-orange focus:ring-theme-orange sm:text-sm"
											/>
										</div>

										<div className="col-span-6 sm:col-span-2">
											<label htmlFor="graduation-year" className="block text-sm font-medium text-gray-700">
												Graduation Year
											</label>
											<input
												type="text"
												name="graduation-year"
												id="graduation-year"
												className="bg-white px-3 py-2 mt-1 block w-full rounded-md shadow-sm outline-none border-2 border-gray-300 focus:border-theme-orange focus:ring-theme-orange sm:text-sm"
											/>
										</div>

										<div className="col-span-6">
											<label htmlFor="why-attend" className="block text-sm font-medium text-gray-700">
												Why would you like to attend Hyphen-Hacks?
											</label>
											<input
												type="text"
												name="why-attend"
												id="why-attend"
												className="bg-white px-3 py-2 mt-1 block w-full rounded-md shadow-sm outline-none border-2 border-gray-300  focus:border-theme-orange focus:ring-theme-orange sm:text-sm"
											/>
										</div>

										<div className="col-span-6">
											<label htmlFor="software-experience" className="block text-sm font-medium text-gray-700">
												What experience do you have with coding?
											</label>
											<input
												type="text"
												name="software-experience"
												id="software-experience"
												className="bg-white px-3 py-2 mt-1 block w-full rounded-md shadow-sm outline-none border-2 border-gray-300  focus:border-theme-orange focus:ring-theme-orange sm:text-sm"
											/>
										</div>

										<div className="col-span-6">
											<label htmlFor="hackathon-experience" className="block text-sm font-medium text-gray-700">
												Have you participated in a hackathon before?
											</label>
											<input
												type="text"
												name="hackathon-experience"
												id="hackathon-experience"
												className="bg-white px-3 py-2 mt-1 block w-full rounded-md shadow-sm outline-none border-2 border-gray-300  focus:border-theme-orange focus:ring-theme-orange sm:text-sm"
											/>
										</div>

										<div className="col-span-6 sm:col-span-2">
											<label htmlFor="laptop" className="block text-sm font-medium text-gray-700">
												Do you have a laptop?
											</label>
											<select
												id="laptop"
												name="laptop"
												className="mt-1 block w-full rounded-md border-gray-300 bg-white py-2 px-3 shadow-sm outline-none border-2 focus:border-theme-orange focus:ring-theme-orange sm:text-sm">
												<option selected disabled>
													Select
												</option>
												<option>Yes</option>
												<option>No, I need one for the event</option>
											</select>
										</div>

										<div className="col-span-6 sm:col-span-2">
											<label htmlFor="accommodations" className="block text-sm font-medium text-gray-700">
												Do you need accommodations?
											</label>
											<select
												id="accommodations"
												name="accommodations"
												className="mt-1 block w-full rounded-md border-gray-300 bg-white py-2 px-3 shadow-sm outline-none border-2 focus:border-theme-orange focus:ring-theme-orange sm:text-sm">
												<option selected disabled>
													Select
												</option>
												<option>No</option>
												<option>Yes</option>
											</select>
										</div>

										<div className="col-span-6">
											<label htmlFor="hackathon-experience" className="block text-sm font-medium text-gray-700">
												Any additional comments?
											</label>
											<input
												type="text"
												name="hackathon-experience"
												id="hackathon-experience"
												className="bg-white px-3 py-2 mt-1 block w-full rounded-md shadow-sm outline-none border-2 border-gray-300  focus:border-theme-orange focus:ring-theme-orange sm:text-sm"
											/>
										</div>
									</div>
								</div>
								<div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
									<button
										type="submit"
										className="inline-flex justify-center rounded-md border border-transparent bg-theme-orange py-2 px-4 text-sm font-medium text-black shadow-sm hover:bg-theme-orange/90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
										Apply
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Apply;
