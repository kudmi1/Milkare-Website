import { useState, useEffect } from "react"

export default function ToTop() {
	const [showTopBtn, setShowTopBtn] = useState(false)

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 800) {
				setShowTopBtn(true)
			} else {
				setShowTopBtn(false)
			}
		})
	}, [])

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}
	return (
		<div>
			<div
				className={`backdrop-blur-[10px] to-top-btn fixed bottom-8 right-6 md:bottom-12 md:right-12 z-[39] h-12 w-12 md:h-16 md:w-16 rounded-full bg-[#212121d2] transition-colors${
					showTopBtn
						? "pointer-events-auto opacity-100 translate-y-0"
						: "pointer-events-none opacity-0 translate-y-20"
				} ` }
			>
				<button className="flex h-full w-full items-center justify-center effect-shine outline-none bg-none border-none" onClick={goToTop} id="to-top-btn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="#f9ded1"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="#f9ded1"
						className="md:h-8 md:w-8 w-7 h-7"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
						/>
					</svg>
				</button>
			</div>
		</div>
	)
}
