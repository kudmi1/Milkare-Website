import { useEffect, useRef, useState } from 'react'
import { useLanguageContext } from '../Providers/LanguageContext'
import GoogleFormButton from './GoogleFormButton'
import Socials from './Socials'

export default function Profile({ loaded }) {
	const { language } = useLanguageContext()
	const star = (
		<img
			src='./svg/star-thin.svg'
			alt=''
			className='absolute right-[100%] top-1/2 h-4 w-4 -translate-y-1/2 md:right-[101%] md:h-5 md:w-5 lg:right-[104%]'
		/>
	)
	return (
		<footer className='absolute bottom-0 flex h-[300px] w-full flex-col items-center rounded-b-lg border-b border-thinLine bg-gradient-to-b from-[#191924ef] to-[#1600419a] py-4 text-mainText backdrop-blur-md lg:h-[300px]'>
			<div className='absolute bottom-[100%] left-0 flex h-[100dvh] w-full justify-center'>
				<div
					className={`relative h-full w-full max-w-[1920px] ${
						loaded ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
					} transition-all duration-500`}
				>
					<h1
						className={`hero-text absolute hidden translate-y-1/2 text-mainText sm:bottom-[80px] sm:left-12 sm:block md:bottom-[120px] lg:bottom-[150px] 2xl:left-24 `}
					>
						Commissions <br /> Open
					</h1>
					{/* <button className=' nav-text group absolute z-40 mt-12 hidden translate-y-1/2 text-mainText sm:bottom-[80px] sm:right-12 sm:block md:bottom-[120px] lg:bottom-[150px] 2xl:right-24'>
						<a
							href={`${
								language === 'english'
									? 'https://docs.google.com/forms/d/e/1FAIpQLSdKLe0F1y2OMIlAqpVCzP7wjb3a-83MXBjvB_XeIs84xaGsQA/viewform'
									: 'https://docs.google.com/forms/d/e/1FAIpQLSdMrGRP2JTpwU4VkqhPhsYqKAk-c4XNz3SwnECJ2hJgWh5IZA/viewform'
							}`}
							target='_blank'
							className='moon-btn flex h-full w-full items-center justify-center'
						>
							<p className='moon-text absolute z-20 min-w-max left-1/2 rounded-[2px] w-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-sm md:text-base xl:text-2xl transition-all duration-200'>
								{language === 'english' ? 'Google Form' : 'Гугл Форма'}
							</p>
							<img
								src='/images/moon-sticker.png'
								alt=''
								className='moon-image z-10 sm:w-32 md:w-40 lg:w-48 xl:w-60 transition-all duration-200  group-hover:scale-95 rounded-full'
							/>
						</a>
					</button> */}
					{/* <button className='moon-btn group absolute z-40 mt-12 hidden translate-y-1/2 items-center justify-center rounded-lg bg-[url(/images/bg.webp)] text-secondaryText bg-cover outline outline-2 outline-offset-0 outline-thinLine transition-all duration-200 hover:outline-offset-4 hover:outline-secondaryText sm:bottom-[80px] sm:right-12 sm:flex md:bottom-[120px] lg:bottom-[150px] 2xl:right-24 hover:shadow-lg hover:shadow-[#9562bede]'>
						<a
							href={`${
								language === 'english'
									? 'https://docs.google.com/forms/d/e/1FAIpQLSdKLe0F1y2OMIlAqpVCzP7wjb3a-83MXBjvB_XeIs84xaGsQA/viewform'
									: 'https://docs.google.com/forms/d/e/1FAIpQLSdMrGRP2JTpwU4VkqhPhsYqKAk-c4XNz3SwnECJ2hJgWh5IZA/viewform'
							}`}
							target='_blank'
							className='moon-btn flex h-full w-full items-center justify-center px-4 py-4 rounded-lg'
						>
							<p className='moon-text w-full text-lg transition-all duration-200 md:text-2xl  h-full'>
								{language === 'english' ? 'Google Form' : 'Гугл Форма'}
							</p>
							<img
								src='/images/chevron.png'
								alt=''
								className='h-6 -rotate-90 ml-2'
							/>
						</a>
					</button> */}
				</div>
			</div>
			<div className='absolute bottom-full flex w-full items-center justify-center bg-gradient-to-r from-[#19192456] to-[#19192456]  py-3 sm:hidden'>
				<h1 className='hero-text-mobile via-mainGray flex'>Commissions Open</h1>
			</div>
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
