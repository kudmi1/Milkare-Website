import { useEffect, useState, useLayoutEffect, useRef } from "react"
import HamburgerMenu from "./HamburgerMenu"

export default function Header({ section, setSection, headerHeight }) {
	const [showHamburger, setShowHamburger] = useState(false)
	const [position, setPosition] = useState(() => {
		// Retrieve the stored position from localStorage
		const storedPosition = localStorage.getItem("underlinePosition")
		return storedPosition ? storedPosition : "0"
	})

	useLayoutEffect(() => {
		let underlines = document.querySelectorAll(".underline-animation")
		for (let i = 0; i < underlines.length; i++) {
			underlines[i].style.transform = `translate3d(${position}, 0, 0)`
		}
	}, [position])

	useEffect(() => {
		// Store the position in localStorage
		localStorage.setItem("underlinePosition", position)
	}, [position])

	function ul(index) {
		const newPosition = index * 100 + "%"
		setPosition(newPosition)
	}

	function handleClick(index, section) {
		ul(index)
		setSection(section)
	}

	function toggleHamburger() {
		setShowHamburger((prev) => !prev)
	}
	const milkareSize = `"lg:text-4xl" : "lg:text-5xl"`

	return (
		<header
			className={`header fixed z-50 flex h-12 w-full justify-center 
			 bg-gradient-to-tr from-[#212121d2] to-[#212121] opacity-100 backdrop-blur-[10px] transition-all duration-700 ${headerHeight}
			 `}
		>
			<div className="header-standart grid h-full w-full max-w-7xl grid-cols-2 items-center justify-between bg-transparent px-0 sm:px-6 md:grid-cols-3 xl:px-0 ">
				<div className="mx-6 sm:mx-0 md:justify-center ">
					<a
						href="#"
						className={`header-top effect-shine text-3xl transition-all duration-500 ${milkareSize}`}
					>
						milkare
					</a>
				</div>
				<nav className="mynav black sticky bottom-0 left-0 z-[100] flex h-full items-center justify-center">
					<div
						className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-0 block h-1 w-1/3 rounded-full transition-transform duration-200`}
					></div>
					<div
						className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-0 block h-1 w-1/3 rounded-full transition-transform duration-200`}
					></div>
					<div
						className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-0 block h-1 w-1/3 rounded-full transition-transform duration-200`}
					></div>
					<a
						href="#gallery"
						className="gallery-link header-item effect-shine z-10 inline-block w-1/3 cursor-pointer px-4 text-center"
						onClick={() => handleClick(0, "gallery")}
					>
						Gallery
					</a>
					<a
						href="#price"
						className="price-link header-item effect-shine z-10 inline-block w-1/3 cursor-pointer px-4 text-center"
						onClick={() => handleClick(1, "price")}
					>
						Price
					</a>
					<a
						href="#info"
						className="info-link header-item effect-shine z-10 inline-block w-1/3 cursor-pointer px-4 text-center"
						onClick={() => handleClick(2, "info")}
					>
						Info
					</a>
				</nav>

				<div className="language-block hidden items-center justify-end md:flex">
					<button className="language-item effect-shine language-eng mr-8 text-xl transition-all duration-500">
						Eng
					</button>
					<button className="language-item effect-shine language-rus text-xl transition-all duration-500">
						Rus
					</button>
				</div>
				{showHamburger ? null : (
					<div className="flex h-full items-center justify-end px-6 sm:px-0 md:hidden">
						<button
							onClick={toggleHamburger}
							className="hamburger-btn effect-shine"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="h-8 w-8"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						</button>
					</div>
				)}
				<HamburgerMenu
					hamburgerState={showHamburger}
					setHamburgerState={setShowHamburger}
				/>
			</div>
		</header>
	)
}
