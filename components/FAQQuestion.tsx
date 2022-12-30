import { FunctionComponent, useRef, useState } from "react";

export const FAQQuestion: FunctionComponent<{ question: string; answer: string }> = ({ question, answer }) => {
	const collapseElement = useRef<HTMLDivElement>(null);
	const [isOpened, setOpened] = useState(false);

	function collapseCommand() {
		const elem = collapseElement.current;
		if (!elem) return;
		if (elem.clientHeight) {
			elem.style.height = "0";
			setOpened(false);
		} else {
			elem.style.height = elem.scrollHeight + "px";
			setOpened(true);
		}
	}

	return (
		<div className="my-6">
			<div className="flex items-center cursor-pointer" onClick={() => collapseCommand()}>
				<div className="mr-4">
					{isOpened ? (
						<svg width="21" height="3" viewBox="0 0 21 3" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1 3C0.447715 3 0 2.55228 0 2V1C0 0.447715 0.447715 0 1 0H20C20.5523 0 21 0.447715 21 1V2C21 2.55228 20.5523 3 20 3H1Z"
								fill="#F8BE4E"
							/>
						</svg>
					) : (
						<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M9 12H1C0.447715 12 0 11.5523 0 11V10C0 9.44771 0.447715 9 1 9H9V1C9 0.447715 9.44772 0 10 0H11C11.5523 0 12 0.447715 12 1V9H20C20.5523 9 21 9.44771 21 10V11C21 11.5523 20.5523 12 20 12H12V20C12 20.5523 11.5523 21 11 21H10C9.44772 21 9 20.5523 9 20V12Z"
								fill="#FCAB32"
							/>
						</svg>
					)}
				</div>
				<h1 className="text-lg sm:text-2xl text-theme-orange font-bold">{question}</h1>
			</div>
			<div
				className="h-0 overflow-hidden transition-[height] duration-300 text-lg sm:text-xl mt-2"
				ref={collapseElement}>
				{answer}
			</div>
		</div>
	);
};
