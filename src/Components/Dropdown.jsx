import { useEffect, useState, useRef } from "react"

export default function Dropdown() {
	const [activeDropdown, setActiveDropdown] = useState(null)
	const dropdownRef = useRef(null)

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

	return (
		<div>
			<nav className="hidden h-full md:block">
				<ul
					className={`headerBot flex h-full items-center justify-evenly transition-all duration-300`}
				>
					<li
						className="dropdown relative inline text-center"
						data-dropdown
						ref={dropdownRef}
					>
						<button
							className="dropdown-btn header-item contact flex transition-all duration-300"
							data-dropdown-button
						>
							Info
							<img
								src="images/chevron.png"
								alt=""
								className="chevron pointer-events-none"
							/>
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
		</div>
	)
}
