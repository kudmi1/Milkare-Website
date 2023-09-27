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
		<div className='overflow relative flex h-10 w-full items-center lg:hidden'>
			<nav className='mynav black z-[20] flex h-full w-full items-center justify-center '>
				<div
					className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-20 block h-1 w-1/3 rounded-full transition-transform duration-200`}
				></div>
				<div
					className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-20 block h-1 w-1/3 rounded-full transition-transform duration-200`}
				></div>
				<div
					className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-20 block h-1 w-1/3 rounded-full transition-transform duration-200`}
				></div>

				<NavLink
					to='/'
					className={`home-link active:bg-activeButton border rounded-t-lg nav-text z-10 flex h-full w-1/3 border-transparent cursor-pointer items-center justify-center px-4 text-center
					${page === 'home' ? 'text-secondaryText bg-[#161621] bg-opacity-20 delay-200' : 'text-mainText effect-shine bg-opacity-0'}
					transition-all duration-300`}
					onClick={() => {
						scrollToTop()
					}}
				>
					<p>{language === 'english' ? 'HOME' : 'ГЛАВНАЯ'}</p>
				</NavLink>
				<NavLink
					to='/price'
					className={`price-link active:bg-activeButton border rounded-t-lg nav-text z-10 flex h-full w-1/3 border-transparent cursor-pointer items-center justify-center px-4 text-center 
					${page === 'price' ? 'text-secondaryText bg-[#161621] bg-opacity-20 delay-200' : 'text-mainText effect-shine bg-opacity-0'} transition-all duration-300`}
					onClick={() => {
						scrollToTop()
					}}
				>
					<p>{language === 'english' ? 'PRICE' : 'ЦЕНЫ'}</p>
				</NavLink>
				<NavLink
					to='/info'
					className={`info-link active:bg-activeButton border rounded-t-lg nav-text z-10 flex h-full w-1/3 border-transparent cursor-pointer items-center justify-center px-4 text-center 
					${page === 'info' ? 'text-secondaryText bg-[#161621] bg-opacity-20 delay-200' : 'text-mainText effect-shine bg-opacity-0'} transition-all duration-300`}
					onClick={() => {
						scrollToTop()
					}}
				>
					<p>{language === 'english' ? 'TOS' : 'УСЛОВИЯ'}</p>
				</NavLink>
			</nav>
		</div>
	)
}
