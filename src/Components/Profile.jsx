import { useState } from 'react'
import { useLanguageContext } from '../Providers/LanguageContext'
import Socials from './Socials'

export default function Profile() {
	const [loaded, setLoaded] = useState(false)
	const { language } = useLanguageContext()
	const star = (
		<img
			src='./svg/star-thin.svg'
			alt=''
			className='absolute right-[100%] top-1/2 h-4 w-4 -translate-y-1/2 md:right-[101%] md:h-5 md:w-5 lg:right-[104%]'
		/>
	)
	return (
		<footer className='absolute bottom-0 flex h-[300px] w-full flex-col items-center bg-gradient-to-b border-thinLine from-[#191924ef] to-[#1600419a] py-4 text-mainText backdrop-blur-md lg:h-[300px]'>
			<div className='absolute bottom-[100%] left-0 flex h-[100dvh] w-full justify-center'>
				<div className='relative h-full w-full max-w-[1920px]'>
					<h1 className='hero-text absolute hidden translate-y-1/2 text-mainText sm:bottom-[80px] md:bottom-[120px] lg:bottom-[150px] sm:left-12 sm:block lg:left-24'>
						Commission <br /> Open
					</h1>
				</div>
			</div>
			<h1 className='hero-text-mobile via-mainGray from-[#19192456] to-[#19192456] absolute bottom-full flex w-full justify-center bg-gradient-to-r py-3 sm:hidden'>
				Commission Open
			</h1>
			<div className='footer-content relative z-40 flex h-full w-full max-w-7xl flex-col-reverse items-center'>
				<div className='mt-4 flex h-2/3 w-[90%] items-center justify-between py-2 md:w-3/5 lg:w-1/2'>
					<div className='mx-2 flex h-full w-1/2 flex-col rounded-md border border-thinLine px-3 py-2 sm:w-1/2 md:min-w-[230px] lg:min-w-[270px]'>
						<p className='nav-text h-12 pl-2 text-lg md:pl-4 lg:pl-6 lg:text-2xl'>
							{language === 'english' ? 'Software' : 'Прог. обеспечение'}
						</p>
						<ul className='subtitle-text flex h-full flex-col justify-evenly pl-2 text-sm md:pl-4 lg:pl-6 lg:text-base'>
							<li className='relative'>
								{star}
								<p>Procreate</p>
							</li>
							<li className='relative'>
								{star}
								<p>Photoshop</p>
							</li>
							<li className='relative'>
								{star}
								<p>Clip Studio Paint</p>
							</li>
						</ul>
					</div>

					<div className='mx-1 flex h-full w-1/2 flex-col rounded-md border border-thinLine px-3 py-2 sm:w-1/2 md:min-w-[230px] lg:min-w-[270px]'>
						<p className='nav-text h-12 pl-2 text-lg md:pl-4 lg:pl-6 lg:text-2xl'>
							{language === 'english' ? 'Tablet' : 'Планшет'}
						</p>
						<ul className='subtitle-text flex h-full flex-col justify-evenly pl-2 text-sm md:pl-4 lg:pl-6 lg:text-base'>
							<li className='relative'>
								{star}
								<p>iPad (6th generation)</p>
							</li>
							<li className='relative'>
								{star}
								<p>Wacom One Medium CTL-671</p>
							</li>
						</ul>
					</div>
				</div>
				<div className=' h-[2px] w-3/4 bg-gradient-to-r from-transparent via-secondaryText to-transparent md:w-1/2 lg:w-1/3'></div>
				<div className='flex h-1/3 w-full flex-col items-center justify-center'>
					<div className='flex h-1/2 w-[90%] items-center justify-between md:mb-2 md:w-3/5 lg:w-2/5'>
						<Socials />
					</div>
				</div>
			</div>
		</footer>
	)
}
