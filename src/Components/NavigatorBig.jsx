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
	const { content, language } = useLanguageContext()
	const { section } = useSectionContext()


	const scrollToComponent = (index, id) => {
		handleClick(index, id)
		setActiveLink(id)
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}, 50)
		
	}

	
	const underlineStyle = section === null || !isScrollToSection ? 'hidden' : ''
	return (
		<nav className='mynav black relative z-[100] hidden h-full min-w-max items-center justify-center lg:flex '>
			<div
				className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-0 block h-1 w-1/4 rounded-full ${underlineStyle} transition-transform duration-200`}
			></div>
			<div
				className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-0 block h-1 w-1/4 rounded-full ${underlineStyle} transition-transform duration-200`}
			></div>
			<div
				className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-0 block h-1 w-1/4 rounded-full ${underlineStyle} transition-transform duration-200`}
			></div>
			<div
				className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-0 block h-1 w-1/4 rounded-full ${underlineStyle}transition-transform duration-200`}
			></div>
			<NavLink
				to='/'
				className={`price-link header-item z-10 flex h-full w-36 cursor-pointer items-center justify-center px-4 text-center ${
					(activeLink === 'home') ||
					(section === 'home')
						? 'text-secondaryText'
						: 'effect-shine text-mainText'
				}`}
				onClick={() => {
					scrollToComponent(0, 'home')
				}}
			>
				<p className='text-xl  '>{language === 'english' ? 'Home' : 'Дом'}</p>
			</NavLink>

			<NavLink
				to='/gallery'
				className={`gallery-link header-item z-10 flex h-full w-36 cursor-pointer items-center justify-center px-4 text-center ${
					(activeLink === 'gallery') || 
					(section === 'gallery')
						? 'text-secondaryText'
						: 'effect-shine text-mainText'
				}`}
				onClick={() => {
					scrollToComponent(1, 'gallery')
				}}
			>
				<p className='text-xl '>{content.header?.gallery}</p>
			</NavLink>
			<NavLink
				to='/price'
				className={`price-link header-item z-10 flex h-full w-36 cursor-pointer items-center justify-center px-4 text-center ${
					(activeLink === 'price') ||
					(section === 'price')
						? 'text-secondaryText'
						: 'effect-shine text-mainText'
				}`}
				onClick={() => {
					scrollToComponent(2, 'price')
				}}
			>
				<p className='text-xl  '>{content.header?.price}</p>
			</NavLink>
			<NavLink
				to='/info'
				className={`'info-link header-item z-10 flex h-full w-36 cursor-pointer items-center justify-center px-4 text-center ${
					(activeLink === 'info') ||
					(section === 'info')
						? 'text-secondaryText'
						: 'effect-shine text-mainText'
				}`}
				onClick={() => {
					scrollToComponent(3, 'info')
				}}
			>
				<p className='text-xl '>{content.header?.info}</p>
			</NavLink>
		</nav>
	)
}
