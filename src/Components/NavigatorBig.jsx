import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useLanguageContext } from '../Providers/LanguageContext'
import { useSectionContext } from '../Providers/SectionContext'

export default function NavigatorBig({
	isScrollToSection,
	handleClick,
	activeLink,
	setActiveLink
}) {
	const { content } = useLanguageContext()
	const { section } = useSectionContext()

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
				scrollToId = null
		}

		if (scrollToId) {
			scrollToComponent(index, scrollToId, 'auto')
		}
	}, [])

	const underlineStyle = section === null || !isScrollToSection ? 'hidden' : ''
	return (
		<nav className='mynav black sticky bottom-0 left-0 z-[100] hidden h-full min-w-max items-center justify-center lg:flex'>
			<div
				className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-0 block h-1 w-1/3 rounded-full transition-transform duration-200 ${underlineStyle}`}
			></div>
			<div
				className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-0 block h-1 w-1/3 rounded-full transition-transform duration-200 ${underlineStyle}`}
			></div>
			<div
				className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-0 block h-1 w-1/3 rounded-full transition-transform duration-200 ${underlineStyle}`}
			></div>
			<NavLink
				to='/gallery'
				className={`gallery-link header-item z-10 flex h-full w-1/3 cursor-pointer items-center justify-center px-4 text-center ${
					(activeLink === 'gallery' && isScrollToSection) || 
					(section === 'gallery' && isScrollToSection)
						? 'text-secondaryText'
						: 'effect-shine text-mainText'
				}`}
				onClick={() => {
					scrollToComponent(0, 'gallery', 'smooth')
				}}
			>
				<p className='text-xl'>{content.header?.gallery}</p>
			</NavLink>
			<NavLink
				to='/price'
				className={`price-link header-item z-10 flex h-full w-1/3 cursor-pointer items-center justify-center px-4 text-center ${
					(activeLink === 'price' && isScrollToSection) ||
					(section === 'price' && isScrollToSection)
						? 'text-secondaryText'
						: 'effect-shine text-mainText'
				}`}
				onClick={() => {
					scrollToComponent(1, 'price', 'smooth')
				}}
			>
				<p className='text-xl '>{content.header?.price}</p>
			</NavLink>
			<NavLink
				to='/info'
				className={`'info-link header-item z-10 flex h-full w-1/3 cursor-pointer items-center justify-center px-4 text-center ${
					(activeLink === 'info' && isScrollToSection) ||
					(section === 'info' && isScrollToSection)
						? 'text-secondaryText'
						: 'effect-shine text-mainText'
				}`}
				onClick={() => {
					scrollToComponent(2, 'info', 'smooth')
				}}
			>
				<p className='text-xl'>{content.header?.info}</p>
			</NavLink>
		</nav>
	)
}
