import { useEffect, useState, useLayoutEffect, useRef } from 'react'
import HamburgerMenu from './HamburgerMenu'
import NavigatorSmall from './NavigatorSmall'
import NavigatorBig from './NavigatorBig'
import Translate from './Translate'

export default function Header({
	section,
	setSection,
	headerHeight,
	fontSize,
	isScrollToSection,
	language,
	setLanguage,
	content,
}) {
	const [showHamburger, setShowHamburger] = useState(false)
	const [ariaExpanded, setAriaExpanded] = useState(false)
	const [position, setPosition] = useState(() => {
		// Retrieve the stored position from localStorage
		const storedPosition = localStorage.getItem('underlinePosition')
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
		// Store the position in localStorage
		localStorage.setItem('underlinePosition', position)
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

	function toggleHamburger() {
		setShowHamburger((prev) => !prev)
		setAriaExpanded(prev => !prev)
	}

	return (
		<div>
			<header
				className={`header fixed z-50 flex h-24 w-full flex-col justify-center bg-gradient-to-tr
			 from-mainGrayTransparent to-mainGray opacity-100 backdrop-blur-[10px] transition-all duration-700 lg:flex-row ${headerHeight}
			 `}
			>
				<div className='header-standart relative grid h-full w-full max-w-7xl grid-cols-2 items-center justify-between bg-transparent px-0 sm:px-6 lg:grid-cols-3 xl:px-0'>
					<div className='mx-6 sm:mx-0 md:justify-center'>
						<a
							href='#'
							className={`header-top effect-shine text-3xl transition-all duration-500 ${fontSize} text-mainText`}
						>
							milkare
						</a>
					</div>
					<NavigatorBig
						section={section}
						isScrollToSection={isScrollToSection}
						selectedLink={selectedLink}
						handleClick={handleClick}
						language={language}
						content={content}
					/>

					<Translate language={language} setLanguage={setLanguage} />
					
						<div className='flex h-full items-center justify-end px-6 sm:px-0 lg:hidden z-[100]'>
							<button
								onClick={toggleHamburger}
								className='hamburger-btn effect-shine flex'
								aria-controls='primary-navigation'
								aria-expanded={ariaExpanded}
								id="hamburger-btn"
							>
								<svg className='hamburger fill-mainText' viewBox='0 0 100 100' width={30}>
									<rect className='line top-bar' width={80} height={7} x={10} y={27} rx={5}></rect>
									<rect className='line middle-bar' width={80} height={7} x={10} y={50} rx={5}></rect>
									<rect className='line bottom-bar' width={80} height={7} x={10} y={73} rx={5}></rect>
								</svg>
							</button>
						</div>
				
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
					language={language}
					content={content}
				/>
			</header>
		</div>
	)
}
