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
	const { content, language } = useLanguageContext()
	const { section } = useSectionContext()


	const scrollToComponent = (index, id) => {
		handleClick(index, id)
		setActiveLink(id)
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}, 50)
		
	}

	return (
		<div className='relative flex h-full w-full items-center overflow lg:hidden'>
			<nav className='mynav black z-[20] flex h-full w-full items-center justify-center '>
				<div
					className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-0 block h-1 w-1/4 rounded-full transition-transform duration-200`}
				></div>
				<div
					className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-0 block h-1 w-1/4 rounded-full transition-transform duration-200`}
				></div>
				<div
					className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-0 block h-1 w-1/4 rounded-full transition-transform duration-200`}
				></div>
				<div
					className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-0 block h-1 w-1/4 rounded-full transition-transform duration-200`}
				></div>
				<NavLink
				to='/'
				className={`price-link header-item z-10 flex h-full w-1/4 cursor-pointer items-center justify-center px-4 text-center ${
					(activeLink === 'home') ||
					(section === 'home')
						? 'text-secondaryText'
						: 'effect-shine text-mainText'
				}`}
				onClick={() => {
					scrollToComponent(0, 'home')
				}}
			>
				<p >{language === 'english' ? 'Home' : 'Дом'}</p>
			</NavLink>
				<NavLink
					to='/gallery'
					className={`gallery-link header-item z-10 inline-block w-1/4 cursor-pointer px-4 text-center ${
						(activeLink === 'gallery') ||
						(section === 'gallery')
							? 'text-secondaryText'
							: 'effect-shine text-mainText'
					}`}
					onClick={() => {
						scrollToComponent(1, 'gallery')
					}}
				>
					{content.header?.gallery}
				</NavLink>
				<NavLink
					to='/price'
					className={`price-link header-item z-10 inline-block w-1/4 cursor-pointer px-4 text-center ${
						(activeLink === 'price') ||
						(section === 'price')
							? 'text-secondaryText'
							: 'effect-shine text-mainText'
					}`}
					onClick={() => {
						scrollToComponent(2, 'price')
					}}
				>
					{content.header?.price}
				</NavLink>

				<NavLink
					to='/info'
					className={`info-link header-item z-10 inline-block w-1/4 cursor-pointer px-4 text-center ${
						(activeLink === 'info') ||
						(section === 'info')
							? 'text-secondaryText'
							: 'effect-shine text-mainText'
					}`}
					onClick={() => {
						scrollToComponent(3, 'info')
					}}
				>
					{content.header?.info}
				</NavLink>
			</nav>
		</div>
	)
}
