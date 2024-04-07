import { useEffect, useRef, useState } from 'react'
import { useLanguageContext } from '../Providers/LanguageContext'

export default function Footer() {
	const { language } = useLanguageContext()
	const [menuVisible, setMenuVisible] = useState(false)
	const menuRef = useRef()
	const buttonRef = useRef()

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(e.target) &&
				e.target !== buttonRef.current
			) {
				setMenuVisible(false)
			}
		}

		if (menuVisible) {
			document.addEventListener('mousedown', handleClickOutside)
		} else {
			document.removeEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [menuVisible])

	const handleButtonClick = () => {
		setMenuVisible((prev) => !prev)
	}

	return (
		<footer className='footer mt-auto flex flex-col h-52 w-full items-center border-t border-t-[#3b3b3b] bg-[#1600419a]'>
			<div className='flex h-1/2 w-full items-center justify-center md:h-4/6'>
				<div className='relative flex h-full w-full max-w-7xl flex-row items-center justify-between px-6 '>
					<div className='w-full'>
						<img src='./images/Logo.webp' alt='' className={`h-6 md:h-8`} />
					</div>
					<div className='flex flex-col items-center justify-evenly gap-2'>
						<p className='form-text text-sm text-mainText md:text-base'>
							{language === 'english' ? 'CONTACT ME' : 'СВЯЗЬ СО МНОЙ'}
						</p>
						<div className='flex justify-evenly'>
							<button className='effect-shine flex h-10 w-10 items-center justify-center md:h-14 md:w-14'>
								<a href='https://twitter.com/milkareart' target={'_blank'}>
									<img
										src='./svg/twitter.svg'
										alt='twitter-logo'
										className='h-7 w-7 md:h-8 md:w-8'
									/>
								</a>
							</button>
							<button className='effect-shine flex h-10 w-10 items-center justify-center md:h-14 md:w-14'>
								<a href='http://instagram.com/milkareart/' target={'_blank'}>
									<img
										src='./svg/instagram.svg'
										alt='instagram-logo'
										className='h-7 w-7 md:h-8 md:w-8'
									/>
								</a>
							</button>
							<button className='effect-shine flex h-10 w-10 items-center justify-center md:h-14 md:w-14' aria-label='milka-gmail'>
								<a href='mailto:milkareart@gmail.com' target={'_blank'} aria-label='milka-gmail' >
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='38'
										height='38'
										viewBox='0 0 256 256'
										className='h-9 w-9 fill-mainText md:h-10 md:w-10'
									>
										<path d='M224 50H32a6 6 0 0 0-6 6v136a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a6 6 0 0 0-6-6Zm-15.42 12L128 135.86L47.42 62ZM216 194H40a2 2 0 0 1-2-2V69.64l86 78.78a6 6 0 0 0 8.1 0L218 69.64V192a2 2 0 0 1-2 2Z' />
									</svg>
									
								</a>
							</button>
						</div>
					</div>
				</div>
			</div>

			<div
				className={`relative flex h-3/6 w-full items-center justify-center border-t border-[#3b3b3b] py-2 bg-gradient-to-t from-[#191924ef] to-[#160041]`}
			>
				<div
					className={`absolute bottom-0 left-0 h-full w-full ${
						menuVisible ? 'visible backdrop-blur-sm' : 'invisible'
					} transition-all duration-300`}
				></div>
				<div className='flex w-full flex-col items-center justify-center h-full'>
					<p>2023-2024© milkare</p>
					<p className='flex'>
						website made by{' '}
						<button
							className={`relative ml-2 flex cursor-pointer items-center justify-center rounded-md px-2 font-bold italic text-secondaryText ring-1 ring-thinLine transition-colors duration-300 hover:ring-secondaryText `}
							onClick={handleButtonClick}
							ref={buttonRef}
						>
							Kudmi
							<div
								className={`absolute bottom-0 right-[122%] ${
									menuVisible
										? 'pointer-events-auto translate-x-0 scale-100 opacity-100'
										: 'pointer-events-none translate-x-2 scale-90 opacity-0'
								} transition-all duration-300`}
								ref={menuRef}
							>
								<ul className='flex w-44 justify-evenly overflow-hidden rounded-md border border-thinLine bg-homeColor'>
									<li className='h-12 w-full hover:bg-accentColor'>
										<a
											href='https://github.com/kudmi1'
											target={'_blank'}
											className='flex h-full w-full items-center justify-center transition-all duration-300'
										>
											<img src='/svg/github.svg' alt='github-icon' />
										</a>
									</li>
									<li className=' h-12 w-full hover:bg-accentColor'>
										<a
											href='https://t.me/Kudmi'
											target={'_blank'}
											className='flex h-full w-full items-center justify-center transition-all duration-300'
										>
											<img src='/svg/telegram.svg' alt='telegram-icon' />
										</a>
									</li>
									<li className='h-12 w-full hover:bg-accentColor'>
										<a
											href='mailto:dimarull00@gmail.com'
											target={'_blank'}
											className='flex h-full w-full items-center justify-center transition-all duration-300'
										>
											<img src='/svg/gmail2.svg' alt='gmail-icon' />
										</a>
									</li>
								</ul>
							</div>
						</button>
					</p>
				</div>
			</div>
		</footer>
	)
}
