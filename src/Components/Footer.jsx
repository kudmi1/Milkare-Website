import { useEffect, useState } from 'react'
import { InView, useInView } from 'react-intersection-observer'
import { useLanguageContext } from '../Providers/LanguageContext'
import GoogleFormButton from './GoogleFormButton'
import Socials from './Socials'

export default function Footer() {
	const { language } = useLanguageContext()

	return (
		<div className='footer flex h-52 flex-col items-center border-t border-t-[#3b3b3b] bg-gradient-to-br from-mainGrayTransparent to-mainGray backdrop-blur-[10px]'>
			<div className='flex h-4/6 w-full max-w-7xl flex-row items-center justify-between px-6 md:h-full'>
				<div className='w-full '>
					<img src='./images/Logo.png' alt='' className={`h-6 md:h-8`} />
				</div>
				<div className='flex flex-col items-center justify-evenly gap-2'>
					<p className='text-sm md:text-lg'>
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
									className='h-9 w-9 md:h-10 md:w-10'
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
			<div className='flex h-3/6 w-full items-center justify-center border-t border-thinLine'>
				<div className='flex w-full flex-col items-center justify-center'>
					<p>Made by </p>
					<div>
						github:{' '}
						<span className='font-bold italic text-secondaryText underline'>
							<a
								className='effect-shine'
								href='https://github.com/kudmi1'
								target={'_blank'}
							>
								Kudmi1
							</a>
						</span>{' '}
						telegram:{' '}
						<span className='font-bold italic text-secondaryText underline'>
							@kudmi
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
