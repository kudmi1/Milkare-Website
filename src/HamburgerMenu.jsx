import { useEffect } from "react"

export default function HamburgerMenu({ hamburgerState, setHamburgerState }) {
	const handleWindowResize = () => {
		if (window.innerWidth > 640) {
			setHamburgerState(false)
		}
	}

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize)
		return () => {
			window.removeEventListener("resize", handleWindowResize)
		}
	}, [])

	return (
		<div className={`fixed top-0 right-0 left-0 bottom-0 h-screen w-screen bg-[#212121a2] z-40 transition-all duration-300
     ${hamburgerState
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"}
    `} onClick={() => setHamburgerState(false)}>
			<div
				className={`slide-menu fixed top-0 right-[-80vw] w-[80vw] z-50 h-screen bg-[#212121] ${
					hamburgerState
						? "-translate-x-[80vw] opacity-100"
						: "pointer-events-none opacity-0"
				} transition-all duration-300 sm:hidden`}
        onClick={(e) => {
					e.stopPropagation()
				}}
			>
				<button
					className="flex h-16 w-16 items-center justify-center hover:bg-[#303030]"
					onClick={() => setHamburgerState(false)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						className="h-12 w-12"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</div>
	)
}
