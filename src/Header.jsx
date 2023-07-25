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
	}

	return (
		<div >
			<header
				className={`header fixed z-50 flex h-24 w-full flex-col justify-center bg-gradient-to-tr
			 from-mainGrayTransparent to-mainGray opacity-100 backdrop-blur-[10px] transition-all duration-700 md:flex-row ${headerHeight}
			 `}
			>
				<div className='header-standart relative grid h-full w-full max-w-7xl grid-cols-2 items-center justify-between bg-transparent px-0 sm:px-6 md:grid-cols-3 xl:px-0'>
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
					{showHamburger ? null : (
						<div className='flex h-full items-center justify-end px-6 sm:px-0 md:hidden'>
							<button
								onClick={toggleHamburger}
								className='hamburger-btn effect-shine'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className='h-8 w-8'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
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
