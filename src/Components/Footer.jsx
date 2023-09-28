import { useEffect, useRef, useState } from 'react'
import { useLanguageContext } from '../Providers/LanguageContext'

export default function Footer() {
	const { language } = useLanguageContext()
	const [menuVisible, setMenuVisible] = useState(false)
	const menuRef = useRef()
	const buttonRef = useRef()

	useEffect(() => {
		// Add an event listener to the document to listen for clicks
		const handleClickOutside = (e) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(e.target) &&
				e.target !== buttonRef.current
			) {
				// If the click occurred outside of the menu, close it
				setMenuVisible(false)
			}
		}

		// Add the event listener when the menu becomes visible
		if (menuVisible) {
			document.addEventListener('mousedown', handleClickOutside)
		} else {
			// Remove the event listener when the menu is not visible
			document.removeEventListener('mousedown', handleClickOutside)
		}

		console.log('menu is:  ' + menuVisible)
		// Cleanup the event listener on component unmount
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [menuVisible])

	const handleButtonClick = () => {
		setMenuVisible((prev) => !prev)
	}

	return (
		<div className='footer flex h-52 w-full flex-col items-center border-t border-t-[#3b3b3b] bg-homeColor backdrop-blur-[10px]'>
			<div className='relative flex h-4/6 w-full max-w-7xl flex-row items-center justify-between px-6 md:h-full'>
				<div className='w-full '>
					<img src='./images/Logo.png' alt='' className={`h-6 md:h-8`} />
				</div>
				<div className='flex flex-col items-center justify-evenly gap-2'>
					<p className='text-sm text-mainText md:text-base'>
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
						<button className='effect-shine flex h-10 w-10 items-center justify-center md:h-14 md:w-14'>
							<a href='mailto:milkareart@gmail.com' target={'_blank'}>
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
			<div className='relative flex h-3/6 w-full items-center justify-center border-t border-thinLine py-2'>
				<div className='flex w-full flex-col items-center justify-center'>
					<p>2023 © milkare</p>
					<p className='flex'>
						website made by{' '}
						<button
							className={`relative ml-1 flex cursor-pointer items-center justify-center overflow-hidden rounded-md px-2 font-bold italic text-secondaryText ring-1 ring-thinLine transition-colors duration-300 active:translate-y-[2px]`}
							onClick={handleButtonClick}
							ref={buttonRef}
						>
							Kudmi
							{menuVisible ? (
								<img
									src='/svg/eye-close.svg'
									alt=''
									className='pointer-events-none ml-2 h-4 w-4'
								/>
							) : (
								<img
									src='/svg/eye-open.svg'
									alt=''
									className='pointer-events-none ml-2 h-4 w-4 '
								/>
							)}
						</button>
						<div
							className={`absolute bottom-16 left-1/2 -translate-x-1/2 ${
								menuVisible
									? 'pointer-events-auto translate-y-0 opacity-100'
									: 'pointer-events-none translate-y-2 opacity-0'
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
								<li className=' h-12 w-full hover:bg-accentColor'>
									<a
										href='mailto:dimarull00@gmail.com'
										target={'_blank'}
										className='flex h-full w-full items-center justify-center transition-all duration-300'
									>
										<img src='/svg/gmail.svg' alt='gmail-icon' />
									</a>
								</li>
							</ul>
						</div>
					</p>
				</div>
			</div>
		</div>
	)
}
