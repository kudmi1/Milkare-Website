import React from 'react'

export const TestProfile = () => {
	return (
		<div className='absolute bottom-full flex h-60 w-full flex-row-reverse justify-center border-b lg:border-2 border-thinLine bg-gradient-to-r from-mainGray via-[#292929] to-mainGray p-2 backdrop-blur-md lg:bottom-[57%] lg:right-[3%] lg:block lg:h-auto lg:max-h-none lg:w-64 lg:rounded-md lg:bg-gradient-to-b lg:from-mainGray lg:to-[#2121219d] xl:right-[5%] 2xl:right-[15%]'>
			<img
				src='images/milka.webp'
				alt='profile-pic'
				className='absolute hidden top-0 aspect-square w-32 -translate-y-1/2 rounded-[4px] border-thinLine object-cover outline -outline-offset-1 outline-4 outline-[#292929] sm:block lg:relative lg:w-full lg:-translate-y-0 lg:rounded-t-[4px] lg:outline-none'
			/>
			<div className='flex h-full sm:h-2/3 w-2/3 flex-col items-center justify-evenly self-end lg:h-36 lg:w-full lg:justify-evenly'>
				<h5>Hello! I’m Milka</h5>
				<div className='flex w-3/4 max-w-[240px] flex-col  items-center rounded-b-md px-3 py-2'>
					<h5>Commission</h5>
					<div className='flex w-5/6 justify-between'>
						<span className='underline-2 text-lg text-green-500 underline underline-offset-2'>
							Open
						</span>
						<span className='text-lg text-gray-400'>Closed</span>
					</div>
				</div>
			</div>
		</div>
	)
}
