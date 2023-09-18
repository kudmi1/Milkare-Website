import { NavLink, useNavigate } from 'react-router-dom'
import { useLanguageContext } from '../Providers/LanguageContext'

export default function NavigatorSmall({ page, setPage }) {
	const { content, language } = useLanguageContext()

	const scrollToTop = () => {
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}, 50)
	}

	return (
		<div className='overflow relative flex h-full w-full items-center lg:hidden'>
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
					className={`home-link header-item z-10 flex h-full w-1/4 cursor-pointer items-center justify-center px-4 text-center
					${page === 'home' ? 'text-secondaryText rounded-t-md bg-[#313131] bg-opacity-100 delay-200' : 'effect-shine text-mainText bg-opacity-0'}
					transition-all duration-300`}
					onClick={() => {
						scrollToTop()
					}}
				>
					<p>{language === 'english' ? 'Home' : 'Начало'}</p>
				</NavLink>
				<NavLink
					to='/gallery'
					className={`gallery-link header-item z-10 flex h-full w-1/4 cursor-pointer items-center justify-center px-4 text-center 
					${page === 'gallery' ? 'text-secondaryText rounded-t-md bg-[#313131] bg-opacity-100 delay-200' : 'effect-shine text-mainText bg-opacity-0'} transition-all duration-300`}
					onClick={() => {
						scrollToTop()
					}}
				>
					<p>{language === 'english' ? 'Gallery' : 'Галерея'}</p>
				</NavLink>
				<NavLink
					to='/price'
					className={`price-link header-item z-10 flex h-full w-1/4 cursor-pointer items-center justify-center px-4 text-center 
					${page === 'price' ? 'text-secondaryText rounded-t-md bg-[#313131] bg-opacity-100 delay-200' : 'effect-shine text-mainText bg-opacity-0'} transition-all duration-300`}
					onClick={() => {
						scrollToTop()
					}}
				>
					<p>{language === 'english' ? 'Price' : 'Цены'}</p>
				</NavLink>
				<NavLink
					to='/info'
					className={`info-link header-item z-10 flex h-full w-1/4 cursor-pointer items-center justify-center px-4 text-center 
					${page === 'info' ? 'text-secondaryText rounded-t-md bg-[#313131] bg-opacity-100 delay-200' : 'effect-shine text-mainText bg-opacity-0'} transition-all duration-300`}
					onClick={() => {
						scrollToTop()
					}}
				>
					<p>{language === 'english' ? 'ToS' : 'Условия'}</p>
				</NavLink>
			</nav>
		</div>
	)
}
