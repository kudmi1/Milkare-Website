import { useState } from 'react'
import Socials from './Socials'
import { TestProfile } from './TestProfile'

export default function Profile() {
	const [loaded, setLoaded] = useState(false)
	const star = (
		<img
			src='./svg/star-thin.svg'
			alt=''
			className='absolute right-[100%] top-1/2 h-4 w-4 -translate-y-1/2 md:right-[101%] md:h-5 md:w-5 lg:right-[104%]'
		/>
	)
	return (
		<footer className='relative flex h-[320px] w-full justify-center bg-gradient-to-r from-mainGray via-[#292929] to-mainGray lg:h-[360px]'>
			<TestProfile />
			<div className='footer-content relative z-40 flex w-full max-w-7xl flex-col-reverse items-center'>
				{/* <div className='profile-pic-container absolute top-0 -translate-y-1/2 left-[50%] h-24 w-24 lg:h-28 lg:w-28 -translate-x-1/2 rounded-full overflow-hidden'>
					<img
					onLoad={() => setLoaded(true)}
						src='images/milka-pic.webp'
						alt='profile-pic'
						className={`profile-pic h-full w-full ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
					/>
				</div> */}

				<div className='flex h-2/3 w-[90%] items-center justify-between py-2 md:w-3/5 lg:w-1/2'>
					<div className='flex w-1/2 sm:w-1/2 md:min-w-[230px] lg:min-w-[270px] h-3/4 flex-col rounded-md border border-thinLine px-3 py-2 mx-2'>
						<p className='text-lg lg:text-2xl h-12 self-center'>Used software</p>
						<ul className='flex h-full flex-col justify-evenly pl-2 md:pl-4 lg:pl-6 text-sm lg:text-md'>
							<li className='relative'>
								{star}
								Procreate
							</li>
							<li className='relative'>
							{star}
								Photoshop</li>
							<li className='relative'>
							{star}
								Clip Studio Paint</li>
						</ul>
					</div>

					<div className='flex w-1/2 sm:w-1/2 md:min-w-[230px] lg:min-w-[270px] h-3/4 flex-col rounded-md border border-thinLine px-3 py-2 mx-1'>
						<p className='text-lg lg:text-2xl h-12 self-center'>Tablet</p>
						<ul className='flex h-full flex-col justify-evenly pl-2 md:pl-4 lg:pl-6 text-sm lg:text-md'>
							<li className='relative'>
							{star}
								iPad (6th generation)</li>
							<li className='relative'>
							{star}
								Wacom One Medium CTL-671</li>
						</ul>
					</div>
				</div>
				<div className='h-[2px] w-3/4 bg-gradient-to-r from-transparent via-secondaryText to-transparent md:w-1/2 lg:w-1/3'></div>
				<div className='flex h-1/3 w-full flex-col items-center justify-center'>
					<div className='flex h-1/2 w-[90%] items-center justify-between md:mb-2 md:w-3/5 lg:w-2/5'>
						<Socials />
					</div>
				</div>
			</div>
		</footer>
	)
}
