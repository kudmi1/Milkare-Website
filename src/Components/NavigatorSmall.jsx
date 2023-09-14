import { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useLanguageContext } from '../Providers/LanguageContext'
import { useSectionContext } from '../Providers/SectionContext'

export default function NavigatorSmall({
	isScrollToSection,
	handleClick,
	activeLink,
	setActiveLink
}) {
	const { content } = useLanguageContext()
	const section = useSectionContext()

	const navigate = useNavigate()

	const scrollToComponent = (index, id, behavior) => {
		handleClick(index, id)
		setActiveLink(id)
		navigate(`/${id}`)
		setTimeout(() => {
			const element = document.getElementById(id)
			if (element) element.scrollIntoView({ behavior: behavior })
		}, 50)
	}

	useEffect(() => {
		const currentPathname = window.location.pathname

		let scrollToId, index
		switch (currentPathname) {
			case '/gallery':
				index = 0
				scrollToId = 'gallery'
				break
			case '/price':
				index = 1
				scrollToId = 'price'
				break
			case '/info':
				index = 2
				scrollToId = 'info'
				break
			default:
				index = null
				scrollToId = null
		}

		if (scrollToId) {
			scrollToComponent(index, scrollToId, 'auto')
		}
	}, [])

	return (
		<div className='relative flex h-full w-full items-center lg:hidden'>
			<nav className='mynav black z-[20] flex h-full w-full items-center justify-center '>
				<div
					className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-0 block h-1 w-1/3 rounded-full transition-transform duration-200`}
				></div>
				<div
					className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-0 block h-1 w-1/3 rounded-full transition-transform duration-200`}
				></div>
				<div
					className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-0 block h-1 w-1/3 rounded-full transition-transform duration-200`}
				></div>
				<NavLink
					to='/gallery'
					className={`gallery-link header-item z-10 inline-block w-1/3 cursor-pointer px-4 text-center ${
						(activeLink === 'gallery' && isScrollToSection) ||
						(section === 'gallery' && isScrollToSection)
							? 'text-secondaryText'
							: 'effect-shine text-mainText'
					}`}
					onClick={() => {
						scrollToComponent(0, 'gallery', 'smooth')
					}}
				>
					{content.header?.gallery}
				</NavLink>
				<NavLink
					to='/price'
					className={`price-link header-item z-10 inline-block w-1/3 cursor-pointer px-4 text-center ${
						(activeLink === 'price' && isScrollToSection) ||
						(section === 'price' && isScrollToSection)
							? 'text-secondaryText'
							: 'effect-shine text-mainText'
					}`}
					onClick={() => {
						scrollToComponent(1, 'price', 'smooth')
					}}
				>
					{content.header?.price}
				</NavLink>

				<NavLink
					to='/info'
					className={`info-link header-item z-10 inline-block w-1/3 cursor-pointer px-4 text-center ${
						(activeLink === 'info' && isScrollToSection) ||
						(section === 'info' && isScrollToSection)
							? 'text-secondaryText'
							: 'effect-shine text-mainText'
					}`}
					onClick={() => {
						scrollToComponent(2, 'info', 'smooth')
					}}
				>
					{content.header?.info}
				</NavLink>
			</nav>
		</div>
	)
}
