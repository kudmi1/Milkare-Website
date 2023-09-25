import { NavLink, useNavigate } from 'react-router-dom'
import { useLanguageContext } from '../Providers/LanguageContext'

export default function NavigatorBig({ page }) {
	const { content, language } = useLanguageContext()

	const scrollToTop = () => {
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}, 50)
	}

	return (
		<nav className='mynav black relative z-[100] hidden h-full min-w-max items-center justify-center lg:flex '>
			<div
				className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-40 block h-1 w-1/3 rounded-full transition-transform duration-200`}
			></div>
			<div
				className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-40 block h-1 w-1/3 rounded-full transition-transform duration-200`}
			></div>
			<div
				className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-40 block h-1 w-1/3 rounded-full transition-transform duration-200`}
			></div>
			<NavLink
				to='/'
				className={`price-link nav-text z-10 flex h-full w-36 cursor-pointer items-center justify-center px-4 text-center
				${
					page === 'home'
						? 'bg-opacity-20 text-secondaryText delay-200'
						: 'text-mainText effect-shine bg-opacity-0'
				} 
				transition-all duration-300
				`}
				onClick={() => {
					scrollToTop()
				}}
			>
				<p className='text-xl'>{language === 'english' ? 'HOME' : 'ГЛАВНАЯ'}</p>
			</NavLink>
			<NavLink
				to='/price'
				className={`price-link nav-text z-10 flex h-full w-36 cursor-pointer items-center justify-center px-4 text-center
				${
					page === 'price'
						? 'bg-opacity-20 text-secondaryText delay-200'
						: 'text-mainText effect-shine bg-opacity-0'
				} 
				transition-all duration-300`}
				onClick={() => {
					scrollToTop()
				}}
			>
				<p className='text-xl'>{content.header?.price}</p>
			</NavLink>
			<NavLink
				to='/info'
				className={`'info-link nav-text z-10 flex h-full w-36 cursor-pointer items-center justify-center px-4 text-center 
				${
					page === 'info'
						? 'bg-opacity-20 text-secondaryText delay-200'
						: 'text-mainText effect-shine bg-opacity-0'
				} 
				transition-all duration-300`}
				onClick={() => {
					scrollToTop()
				}}
			>
				<p className='text-xl'>{content.header?.info}</p>
			</NavLink>
		</nav>
	)
}
