import { useEffect, useState, useLayoutEffect, useRef } from 'react'
import HamburgerMenu from './HamburgerMenu'
import NavigatorSmall from './NavigatorSmall'
import NavigatorBig from './NavigatorBig'
import Translate from './Translate'
import { useLanguageContext } from '../Providers/LanguageContext'
import HamburgerButton from './HamburgerButton'

export default function Header({
	setSection,
	headerHeight,
	fontSize,
	isScrollToSection,
}) {
	const [showHamburger, setShowHamburger] = useState(false)
	const [ariaExpanded, setAriaExpanded] = useState(false)
	const [position, setPosition] = useState(() => {
		// Retrieve the stored position from sessionStorage
		const storedPosition = sessionStorage.getItem('underlinePosition')
		return storedPosition ? storedPosition : '0'
	})
	const [selectedLink, setSelectedLink] = useState(null)

	useLayoutEffect(() => {
		let underlines = document.querySelectorAll('.underline-animation')
		for (let i = 0; i < underlines.length; i++) {
			underlines[i].style.transform = `translate3d(${position}, 0, 0)`
		}
	}, [position])

	useEffect(() => {
		// Store the position in sessionStorage
		sessionStorage.setItem('underlinePosition', position)
	}, [position])

	function ul(index) {
		const newPosition = index * 100 + '%'
		setPosition(newPosition)
	}

	function handleClick(index, section) {
		ul(index)
		setSection(section)
		setSelectedLink(index)
	}

	const handleWindowResize = () => {
		if (window.innerWidth > 1024) {
			setShowHamburger(false)
			setAriaExpanded(false)
		}
	}

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize)
		return () => {
			window.removeEventListener('resize', handleWindowResize)
		}
	}, [])

	function toggleHamburger() {
		setShowHamburger((prev) => !prev)
		setAriaExpanded((prev) => !prev)
	}

	return (
		<header
			className={`header fixed z-50 flex h-24 w-full flex-col justify-center ${
				ariaExpanded ? 'bg-mainGray' : ''
			} bg-gradient-to-r from-mainGray via-[#292929] to-mainGray opacity-100 lg:flex-row ${headerHeight}
			 `}
		>
			<div className='header-standart relative grid h-full w-full max-w-7xl grid-cols-2 items-center justify-between bg-transparent px-6 lg:grid-cols-3 xl:px-0'>
					<a
						href='#'
						className={`header-top effect-shine transition-all duration-500`}
					>
						<img src="./images/Logo.png" alt="" className={`h-8 ${fontSize} transition-all duration-500`}/>
					</a>
				<NavigatorBig
					isScrollToSection={isScrollToSection}
					selectedLink={selectedLink}
					handleClick={handleClick}
				/>
				<div className='hidden lg:block'>
					<Translate />
				</div>

				<HamburgerButton
					toggleHamburger={toggleHamburger}
					ariaExpanded={ariaExpanded}
				/>

				<HamburgerMenu
					hamburgerState={showHamburger}
					setHamburgerState={setShowHamburger}
					setAriaExpanded={setAriaExpanded}
				/>
			</div>
			<NavigatorSmall
				selectedLink={selectedLink}
				isScrollToSection={isScrollToSection}
				handleClick={handleClick}
			/>
		</header>
	)
}
