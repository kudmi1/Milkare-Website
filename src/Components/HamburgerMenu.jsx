import { useEffect, useState } from 'react'
import { useLanguageContext } from '../Providers/LanguageContext'
import GoogleFormButton from './GoogleFormButton'
import Translate from './Translate'

export default function HamburgerMenu({
	hamburgerState,
	setHamburgerState,
	setAriaExpanded,
	showContactModal,
	setShowContactModal,
}) {
	const { language, setLanguage } = useLanguageContext()
	// const [modalOpened, setModalOpened] = useState(false)

	function toggleContactModal() {
		setShowContactModal((prev) => !prev)
	}

	function closeAllModals() {
		setHamburgerState(false)
		setShowContactModal(false)
	}

	return (
		<div
			className={`absolute bottom-0 left-0 right-0 top-14 z-30 h-screen w-screen bg-[#2121216b] transition-all duration-300
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
			<div className='relative w-full'>
				<div
					className={`slide-menu absolute right-0 top-0 z-40 w-full bg-gradient-to-r from-mainGray via-[#292929] to-mainGray backdrop-blur ${
						hamburgerState
							? 'h-[45vh] min-h-[300px] opacity-100'
							: 'pointer-events-none h-0 opacity-0'
					} rounded-b-xl border-b-2 border-thinLine transition-all duration-300 lg:hidden`}
					onClick={(e) => {
						e.stopPropagation()
					}}
				>
					<div className='mx-auto flex h-full w-full max-w-[600px] flex-col items-center'>
						<div className='w-2/3'>
							<Translate language={language} setLanguage={setLanguage} />
						</div>
						<div className='flex h-full w-full flex-col items-center justify-evenly'>
							<button className='effect-shine flex h-12 w-2/3 items-center justify-center rounded-sm border border-thinLine text-xl'>
								<a href='#gallery'>
									{language === 'english' ? 'Gallery' : 'Галерея'}
								</a>
							</button>
							<button className='effect-shine flex h-12 w-2/3 items-center justify-center rounded-sm border border-thinLine text-xl'>
								<a href='#price'>{language === 'english' ? 'Price' : 'Цены'}</a>
							</button>
							<button className='effect-shine flex h-12 w-2/3 items-center justify-center rounded-sm border border-thinLine text-xl'>
								<a href='#info'>
									{language === 'english' ? 'Info' : 'Условия'}
								</a>
							</button>
							<button
								className='effect-shine flex h-12 w-2/3 items-center justify-center rounded-sm border border-thinLine text-xl'
								onClick={toggleContactModal}
							>
								<p>{language === 'english' ? 'Contact' : 'Связь со мной'}</p>
								<div className='ml-2'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
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

							<button className='effect-shine flex h-12 w-2/3 rounded-sm border border-thinLine text-xl'>
								<a
									href='https://docs.google.com/forms/d/e/1FAIpQLSdKLe0F1y2OMIlAqpVCzP7wjb3a-83MXBjvB_XeIs84xaGsQA/viewform'
									target={'_blank'}
									className='flex h-full w-full items-center justify-center'
								>
									<p>
										{language === 'english' ? 'Commission' : 'Сделать заказ'}
									</p>
									<div className='ml-2'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='24'
											height='24'
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
							{showContactModal ? (
								<div
									className='absolute bottom-0 left-0 flex h-full w-full items-center justify-center bg-[#2121216b]'
									onClick={() => setShowContactModal(false)}
								>
									<div className='relative h-48 w-96 rounded-sm border border-thinLine bg-mainGray'>
										<button
											className='effect-shine absolute right-0 top-0 m-2 flex h-8 w-8 items-center justify-center'
											onClick={toggleContactModal}
										>
											<img src='./svg/x-mark.svg' alt='' />
										</button>
										<div className='flex h-full w-full items-center justify-evenly'>
											<button className='effect-shine flex h-14 w-14 items-center justify-center md:h-14 md:w-14'>
												<a
													href='https://twitter.com/milkareart'
													target={'_blank'}
												>
													<img
														src='./svg/twitter.svg'
														alt='twitter-logo'
														className='h-12 w-12 md:h-8 md:w-8'
													/>
												</a>
											</button>
											<button className='effect-shine flex h-14 w-14 items-center justify-center md:h-14 md:w-14'>
												<a
													href='http://instagram.com/milkareart/'
													target={'_blank'}
												>
													<img
														src='./svg/instagram.svg'
														alt='instagram-logo'
														className='h-12 w-12 md:h-8 md:w-8'
													/>
												</a>
											</button>
											<button className='effect-shine flex h-14 w-14 items-center justify-center md:h-14 md:w-14'>
												<a href='mailto:milkareart@gmail.com' target={'_blank'}>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='38'
														height='38'
														viewBox='0 0 256 256'
														className='h-14 w-14 md:h-10 md:w-10'
													>
														<path
															fill='currentColor'
															d='M224 50H32a6 6 0 0 0-6 6v136a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a6 6 0 0 0-6-6Zm-15.42 12L128 135.86L47.42 62ZM216 194H40a2 2 0 0 1-2-2V69.64l86 78.78a6 6 0 0 0 8.1 0L218 69.64V192a2 2 0 0 1-2 2Z'
														/>
													</svg>
												</a>
											</button>
										</div>
									</div>
								</div>
							) : null}
							{/* <div className='flex h-16 w-full items-center justify-evenly rounded-sm '>
								<p className='text-lg underline underline-offset-4'>Commission</p>
								<GoogleFormButton />
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
