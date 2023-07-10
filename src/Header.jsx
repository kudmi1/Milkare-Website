import { useEffect, useState, useRef } from "react"
import HamburgerMenu from "./HamburgerMenu"

export default function Header() {
	const [prevScrollPos, setPrevScrollPos] = useState(0)
	const [show, setShow] = useState(true)
	const [activeDropdown, setActiveDropdown] = useState(null)
	const dropdownRef = useRef(null)
	const [showHamburger, setShowHamburger] = useState(false)

	function toggleHamburger() {
		setShowHamburger((prev) => !prev)
	}

	useEffect(() => {
		function handleDocumentClick(e) {
			const isDropdownButton = e.target.matches("[data-dropdown-button]")
			if (!isDropdownButton && e.target.closest("[data-dropdown]") !== null)
				return

			let currentDropdown

			if (isDropdownButton) {
				currentDropdown = e.target.closest("[data-dropdown]")
				setActiveDropdown(currentDropdown)
				currentDropdown.classList.toggle("active")
			}

			document
				.querySelectorAll("[data-dropdown].active")
				.forEach((dropdown) => {
					if (dropdown === currentDropdown) return
					dropdown.classList.remove("active")
				})
		}

		document.addEventListener("click", handleDocumentClick)

		return () => {
			document.removeEventListener("click", handleDocumentClick)
		}
	}, [])

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [prevScrollPos])

	const handleScroll = () => {
		const currentScrollPos = window.pageYOffset
		if (prevScrollPos > currentScrollPos) {
			setShow(true)
		} else if (prevScrollPos > 560) {
			setShow(false)
			if (dropdownRef.current && !show) {
				dropdownRef.current.classList.remove("active")
			}
		}

		setPrevScrollPos(currentScrollPos)
	}
	// const headerHeight = prevScrollPos > 128 ? "h-20" : "h-32"

	return (
		<header
			className={`header fixed z-50 flex h-20 w-full
			 justify-center bg-gradient-to-tr from-[#212121d2] to-[#212121] opacity-100 backdrop-blur-[10px] transition-all duration-700
      ${show ? "top-0" : "-top-40 h-20"}`}
		>
			<div className="header-standart grid w-full max-w-7xl grid-cols-2 items-center justify-between bg-transparent px-0 sm:grid-cols-3 sm:px-6 lg:px-0">
				<nav className="hidden sm:block">
					<ul
						className={`headerBot  flex items-center justify-between
        transition-all duration-300`}
					>
						<li className="header-item about transition-all duration-300">
							<a href="http://яваскрипт.укр/%D0%BC%D0%B5%D0%BD%D1%8E">About</a>
						</li>
						<li className="header-item offer transition-all duration-300">
							<a href="http://яваскрипт.укр/%D0%BC%D0%B5%D0%BD%D1%8E">Work</a>
						</li>
						<li className="dropdown relative " data-dropdown ref={dropdownRef}>
							<button
								className="dropdown-btn header-item contact flex transition-all duration-300"
								data-dropdown-button
							>
								Contact
								<img src="images/chevron.png" alt="" className="chevron" />
							</button>
							<div className="dropdown-menu flex flex-col rounded-lg bg-gradient-to-tr from-[#212121d2] to-[#212121] p-3 shadow-sm shadow-black backdrop-blur-[10px] ">
								<a
									href="https://www.instagram.com/milkareart/"
									target={"_blank"}
									rel="noreferrer"
									className="contact-link"
								>
									Instagram
								</a>
								<a
									href="https://twitter.com/milkareart"
									target={"_blank"}
									rel="noreferrer"
									className="contact-link"
								>
									Twitter
								</a>
								<a
									href="https://mail.google.com/mail/?view=cm&fs=1&to=milkareart@gmail.com"
									target={"_blank"}
									rel="noreferrer"
									className="contact-link"
								>
									Gmail
								</a>
							</div>
						</li>
					</ul>
				</nav>
				<div className="flex items-center justify-center">
					<a
						href="#"
						className={`header-top ${
							// prevScrollPos > 128 ? "text-5xl" : "text-7xl"
							prevScrollPos > 128 ? "text-5xl" : "text-5xl"
						} transition-all duration-500`}
					>
						milkare
						{/* <img src="icons/Logo.svg" alt="" className="logo-milkare"/> */}
					</a>
				</div>

				<div className="language-block hidden items-center justify-end sm:flex">
					<button className="language-item language-eng mr-8 text-xl transition-all duration-500">
						Eng
					</button>
					<button className="language-item language-rus text-xl transition-all duration-500">
						Rus
					</button>
				</div>
				{showHamburger ? null : (
					<div className="hamburger-btn flex h-full items-center justify-end px-6 sm:hidden">
						<button onClick={toggleHamburger}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="h-12 w-12"
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
