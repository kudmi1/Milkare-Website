import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useLanguageContext } from '../Providers/LanguageContext'
import { useSectionContext } from '../Providers/SectionContext'

export default function NavigatorSmall({
	isScrollToSection,
	handleClick,
	activeLink,
	setActiveLink,
	selectedTab,
	setSelectedTab
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
					className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-20 block h-1 w-1/4 rounded-full transition-transform duration-200`}
				></div>
				<div
					className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-20 block h-1 w-1/4 rounded-full transition-transform duration-200`}
				></div>
				<div
					className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-20 block h-1 w-1/4 rounded-full transition-transform duration-200`}
				></div>
				<div
					className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-20 block h-1 w-1/4 rounded-full transition-transform duration-200`}
				></div>
				<NavLink
				to='/'
				className={`home-link header-item z-10 flex h-full w-1/4 cursor-pointer items-center justify-center px-4 text-center ${
					(activeLink === 'home') ||
					(section === 'home')
						? 'text-secondaryText'
						: 'effect-shine text-mainText'
				} ${selectedTab === 0 ? 'bg-[#313131] rounded-t-md delay-200 bg-opacity-100 ' : 'bg-opacity-0'} transition-all duration-300`}
				onClick={() => {
					scrollToComponent(0, 'home')
					setSelectedTab(0)
				}}
			>
				<p >{language === 'english' ? 'Home' : 'Дом'}</p>
			</NavLink>
			<NavLink
				to='/gallery'
				className={`gallery-link header-item z-10 flex h-full w-1/4 cursor-pointer items-center justify-center px-4 text-center ${
					(activeLink === 'gallery') ||
					(section === 'gallery')
						? 'text-secondaryText'
						: 'effect-shine text-mainText'
				} ${selectedTab === 1 ? 'bg-[#313131] rounded-t-md delay-200 bg-opacity-100 ' : 'bg-opacity-0'} transition-all duration-300`}
				onClick={() => {
					scrollToComponent(1, 'gallery')
					setSelectedTab(1)
				}}
			>
				<p >{language === 'english' ? 'Gallery' : 'Галерея'}</p>
			</NavLink>
			<NavLink
				to='/price'
				className={`price-link header-item z-10 flex h-full w-1/4 cursor-pointer items-center justify-center px-4 text-center ${
					(activeLink === 'price') ||
					(section === 'price')
						? 'text-secondaryText'
						: 'effect-shine text-mainText'
				} ${selectedTab === 2 ? 'bg-[#313131] rounded-t-md delay-200 bg-opacity-100 ' : 'bg-opacity-0'} transition-all duration-300`}
				onClick={() => {
					scrollToComponent(2, 'price')
					setSelectedTab(2)
				}}
			>
				<p >{language === 'english' ? 'Price' : 'Цены'}</p>
			</NavLink>
			<NavLink
				to='/info'
				className={`info-link header-item z-10 flex h-full w-1/4 cursor-pointer items-center justify-center px-4 text-center ${
					(activeLink === 'info') ||
					(section === 'info')
						? 'text-secondaryText'
						: 'effect-shine text-mainText'
				} ${selectedTab === 3 ? 'bg-[#313131] rounded-t-md delay-200 bg-opacity-100 ' : 'bg-opacity-0'} transition-all duration-300`}
				onClick={() => {
					scrollToComponent(3, 'info')
					setSelectedTab(3)
				}}
			>
				<p >{language === 'english' ? 'ToS' : 'Условия'}</p>
			</NavLink>
			</nav>
		</div>
	)
}
