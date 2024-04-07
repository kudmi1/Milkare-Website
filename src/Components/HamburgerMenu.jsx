import { NavLink } from 'react-router-dom'
import { useCommissionContext } from '../Providers/CommissionContext'
import { useLanguageContext } from '../Providers/LanguageContext'
import Translate from './Translate'

export default function HamburgerMenu({
	hamburgerState,
	setHamburgerState,
	setAriaExpanded,
	showContactModal,
	setShowContactModal,
	page,
	setPage
}) {
	const { language, setLanguage } = useLanguageContext()
	const { commissionStatus } = useCommissionContext()

	function toggleContactModal() {
		setShowContactModal((prev) => !prev)
	}

	function closeAllModals() {
		setHamburgerState(false)
	}

	const scrollToTop = () => {
		setTimeout(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}, 50)
	}

	return (
		<>
			<div
				className={`absolute bottom-0 left-0 right-0 top-0 z-30 h-[100dvh] w-screen backdrop-blur-2xl transition-all duration-300
			${
				hamburgerState
					? 'pointer-events-auto opacity-100'
					: 'pointer-events-none opacity-0'
			}
    `}
				onClick={() => {
					setAriaExpanded(false)
					closeAllModals()
				}}
			>
				<div className='subtitle-text relative h-full w-full '>
					<div
						className={`slide-menu absolute right-0 top-0 z-40 w-full py-4 pt-12 ${
							hamburgerState
								? 'h-[440px] opacity-100 sm:h-[310px]'
								: 'pointer-events-none h-0 opacity-0'
						} overflow-y-auto rounded-b-xl border-b-2 border-thinLine bg-gradient-to-b from-[#191924ef] to-[#1600419a] transition-all duration-300 lg:hidden`}
						onClick={(e) => {
							e.stopPropagation()
						}}
					>
						<div className='mx-auto flex h-full w-full max-w-[600px] flex-col items-center gap-4 '>
							<div className='w-2/3 '>
								<Translate language={language} setLanguage={setLanguage} />
							</div>
							<div className='text-md mb-6 grid h-full w-2/3 grid-cols-1 place-items-center gap-4 sm:grid-cols-2'>
								<button
									className={`h-12 min-h-[48px] w-full overflow-hidden rounded-lg border border-thinLine bg-cardFieldBg bg-opacity-90 text-mainText hover:border-secondaryText ${
										page === 'home'
											? 'border-secondaryText text-secondaryText'
											: ''
									}`}
									onClick={() => {
										setHamburgerState(false)
										setAriaExpanded(false)
									}}
								>
									<NavLink
										to={'/'}
										className={`flex h-full w-full items-center justify-center`}
										onClick={scrollToTop}
									>
										{language === 'english' ? 'HOME' : 'ГЛАВНАЯ'}
									</NavLink>
								</button>
								<button
									className={`h-12 min-h-[48px] w-full overflow-hidden rounded-lg border border-thinLine bg-cardFieldBg bg-opacity-90 text-mainText hover:border-secondaryText ${
										page === 'price'
											? 'border-secondaryText text-secondaryText'
											: ''
									}`}
									onClick={() => {
										setHamburgerState(false)
										setAriaExpanded(false)
									}}
								>
									<NavLink
										to='/price'
										className='flex h-full w-full items-center justify-center'
										onClick={scrollToTop}
									>
										{language === 'english' ? 'PRICE' : 'ЦЕНЫ'}
									</NavLink>
								</button>
								<button
									className={`h-12 min-h-[48px] w-full overflow-hidden rounded-lg border border-thinLine bg-cardFieldBg bg-opacity-90 text-mainText hover:border-secondaryText ${
										page === 'info'
											? 'border-secondaryText text-secondaryText'
											: ''
									}`}
									onClick={() => {
										setHamburgerState(false)
										setAriaExpanded(false)
									}}
								>
									<NavLink
										to='/info'
										className='flex h-full w-full items-center justify-center'
										onClick={scrollToTop}
									>
										{language === 'english' ? 'TOS' : 'УСЛОВИЯ'}
									</NavLink>
								</button>
								<button
									className='relative flex h-12 min-h-[48px] w-full items-center justify-center overflow-hidden rounded-lg border border-thinLine bg-cardFieldBg bg-opacity-90 text-mainText hover:border-secondaryText'
									onClick={toggleContactModal}
								>
									<p>{language === 'english' ? 'CONTACT' : 'СВЯЗЬ СО МНОЙ'}</p>
									<div className='absolute right-2 top-2'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='16'
											height='16'
											viewBox='0 0 24 24'
										>
											<g fill='none'>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6zm10-1a1 1 0 1 0 0 2h2.586l-4.293 4.293a1 1 0 0 0 1.414 1.414L17 8.414V11a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1h-5z'
													fill='currentColor'
												/>
											</g>
										</svg>
									</div>
								</button>

								<button
									className={` relative flex h-12 min-h-[48px] w-full overflow-hidden rounded-lg  border border-thinLine ${
										commissionStatus
											? 'bg-cardFieldBg bg-opacity-90 text-mainText hover:border-secondaryText'
											: 'cursor-not-allowed bg-slate-500 text-slate-600'
									}`}
								>
									<a
										href={`${
											language === 'english'
												? 'https://docs.google.com/forms/d/e/1FAIpQLScMtnQm8ZwWmlKhVttIbN7cjKSQglqyukuUINlBvIhbvRHGCA/viewform'
												: 'https://docs.google.com/forms/d/e/1FAIpQLSdrOU24svdQmsWdWPuXI9JL9ZEj1BtEq0HX7szUjU_MwaVaMg/viewform'
										} `}
										target={'_blank'}
										className={`flex h-full w-full items-center justify-center ${
											commissionStatus
												? ''
												: 'pointer-events-none cursor-not-allowed'
										}`}
									>
										<p>
											{language === 'english' ? 'COMMISSION' : 'СДЕЛАТЬ ЗАКАЗ'}
										</p>
										<div className='absolute right-2 top-2'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='16'
												height='16'
												viewBox='0 0 24 24'
											>
												<g fill='none'>
													<path
														fillRule='evenodd'
														clipRule='evenodd'
														d='M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6zm10-1a1 1 0 1 0 0 2h2.586l-4.293 4.293a1 1 0 0 0 1.414 1.414L17 8.414V11a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1h-5z'
														fill='currentColor'
													/>
												</g>
											</svg>
										</div>
									</a>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{showContactModal ? (
				<div
					className='fixed left-0 top-0 z-[999] flex h-[100dvh] w-full items-center justify-center backdrop-blur-2xl '
					onClick={() => setShowContactModal(false)}
				>
					<div className='relative h-48 w-96 rounded-lg bg-gradient-to-br from-[#191924ef] to-[#1600419a]'>
						<button
							className='effect-shine absolute right-0 top-0 m-2 flex h-8 w-8 items-center justify-center'
							onClick={toggleContactModal}
						>
							<img src='./svg/x-mark.svg' alt='' />
						</button>
						<div className='flex h-full w-full items-center justify-evenly'>
							<button className='effect-shine flex h-14 w-14 items-center justify-center md:h-14 md:w-14'>
								<a href='https://twitter.com/milkareart' target={'_blank'}>
									<img
										src='./svg/twitter.svg'
										alt='twitter-logo'
										className='h-12 w-12 md:h-8 md:w-8'
									/>
								</a>
							</button>
							<button className='effect-shine flex h-14 w-14 items-center justify-center md:h-14 md:w-14'>
								<a href='http://instagram.com/milkareart/' target={'_blank'}>
									<img
										src='./svg/instagram.svg'
										alt='instagram-logo'
										className='h-12 w-12 md:h-8 md:w-8'
									/>
								</a>
							</button>
							<button className='effect-shine flex h-16 w-16 items-center justify-center md:h-14 md:w-14'>
								<a href='mailto:milkareart@gmail.com' target={'_blank'}>
									<img
										src='./svg/gmail.svg'
										alt='gmail-logo'
										className='h-16 w-16 md:h-10 md:w-10'
									/>
								</a>
							</button>
						</div>
					</div>
				</div>
			) : null}
		</>
	)
}
