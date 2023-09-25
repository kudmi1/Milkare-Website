import { useEffect, useState, useLayoutEffect, useRef } from 'react'
import HamburgerMenu from './HamburgerMenu'
import NavigatorSmall from './NavigatorSmall'
import NavigatorBig from './NavigatorBig'
import Translate from './Translate'
import HamburgerButton from './HamburgerButton'
import { Link } from 'react-router-dom'

export default function Header({ page, setPage }) {
	const [showHamburger, setShowHamburger] = useState(false)
	const [showContactModal, setShowContactModal] = useState(false)
	const [ariaExpanded, setAriaExpanded] = useState(false)

	const [position, setPosition] = useState(() => {})

	useEffect(() => {
		switch (page) {
			case 'home':
				setPosition(0 * 100 + '%')
				break
			case 'gallery':
				setPosition(1 * 100 + '%')
				break
			case 'price':
				setPosition(1 * 100 + '%')
				break
			case 'info':
				setPosition(2 * 100 + '%')
				break
			default:
				setPage(0 * 100 + '%')
		}
	}, [page])

	useLayoutEffect(() => {
		let underlines = document.querySelectorAll('.underline-animation')
		for (let i = 0; i < underlines.length; i++) {
			underlines[i].style.transform = `translate3d(${position}, 0, 0)`
		}
	}, [position])

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

	const scrollToTop = () => {
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}, 50)
	}

	return (
		<header
			className={`header fixed z-50 flex h-24 w-full flex-col justify-between shadow-lg lg:justify-center bg-homeColor bg-opacity-80 ${
				ariaExpanded ? 'bg-mainGray' : ''
			} opacity-100 lg:h-14 lg:flex-row backdrop-blur-md`}
		>
			<div className='header-standart relative grid h-12 w-full max-w-7xl grid-cols-2 items-center justify-between bg-transparent px-6 lg:flex lg:h-full xl:px-0'>
				<Link
					to={'/'}
					className={`header-top effect-shine transition-all duration-500`}
					onClick={() => {
						setPosition(0)
						setPage('home')
						scrollToTop()
					}}
				>
					<img
						src='./images/Logo.png'
						alt=''
						className={`h-8 transition-all duration-500 lg:h-10`}
					/>
				</Link>
				<NavigatorBig page={page} setPage={setPage} />
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
			<NavigatorSmall page={page} setPage={setPage} />
		</header>
	)
}
