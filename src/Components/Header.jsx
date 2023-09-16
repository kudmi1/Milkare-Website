import { useEffect, useState, useLayoutEffect, useRef } from 'react'
import HamburgerMenu from './HamburgerMenu'
import NavigatorSmall from './NavigatorSmall'
import NavigatorBig from './NavigatorBig'
import Translate from './Translate'
import { useLanguageContext } from '../Providers/LanguageContext'
import HamburgerButton from './HamburgerButton'
import { Link } from 'react-router-dom'

export default function Header({
	setSection,
	headerHeight,
	fontSize,
	isScrollToSection,
}) {
	const [showHamburger, setShowHamburger] = useState(false)
	const [showContactModal, setShowContactModal] = useState(false)
	const [ariaExpanded, setAriaExpanded] = useState(false)
	const [activeLink, setActiveLink] = useState(null)

	const [position, setPosition] = useState(() => {
		const storedPosition = sessionStorage.getItem('underlinePosition')
		return storedPosition !== null ? storedPosition : 0
	})

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

	function handleUnderline(index) {
		const newPosition = index * 100 + '%'
		setPosition(newPosition)
	}

	function handleClick(index, section) {
		handleUnderline(index)
		setSection(section) //нужно как то пофиксить этот код
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
		setShowContactModal((prev) => !prev)
	}

	return (
		<header
			className={`header fixed z-50 flex h-24 w-full flex-col justify-center ${
				ariaExpanded ? 'bg-mainGray' : ''
			} bg-gradient-to-r from-mainGray via-[#292929] to-mainGray opacity-100 lg:h-14 lg:flex-row
			 `}
		>
			<div className='header-standart relative grid h-full w-full max-w-7xl grid-cols-2 items-center justify-between bg-transparent px-6 lg:flex xl:px-0'>
				<Link
					to={'/'}
					className={`header-top effect-shine transition-all duration-500`}
					// onClick={scrollToTop}
					onClick={() => {
						setSection('home')
						setActiveLink('home')
						setPosition(0)
					}}
				>
					<img
						src='./images/Logo.png'
						alt=''
						className={`h-8 transition-all duration-500 lg:h-10`}
					/>
				</Link>
				<NavigatorBig
					isScrollToSection={isScrollToSection}
					activeLink={activeLink}
					setActiveLink={setActiveLink}
					handleClick={handleClick}
				/>
				<div className='hidden lg:block'>
					<Translate />
				</div>

				<HamburgerButton
					toggleHamburger={toggleHamburger}
					ariaExpanded={ariaExpanded}
					setShowContactModal={setShowContactModal}
				/>

				<HamburgerMenu
					hamburgerState={showHamburger}
					setHamburgerState={setShowHamburger}
					setAriaExpanded={setAriaExpanded}
					setShowContactModal={setShowContactModal}
					showContactModal={showContactModal}
				/>
			</div>
			<NavigatorSmall
				isScrollToSection={isScrollToSection}
				handleClick={handleClick}
				activeLink={activeLink}
				setActiveLink={setActiveLink}
			/>
		</header>
	)
}
