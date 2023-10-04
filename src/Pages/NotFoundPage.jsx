import React from 'react'
import { NavLink } from 'react-router-dom'

export const NotFoundPage = () => {
	return (
		<div className='flex h-[calc(100dvh-208px)] items-center justify-center'>
			<div className='flex flex-col items-center rounded-md border border-thinLine bg-mainGray px-6 py-4 bg-homeColor/80 backdrop-blur-sm'>
				<h3 className='text-mainText'>Page Not Found</h3>
				<h5 className='mt-4'>
					<NavLink className='w-full h-full border rounded-md py-2 px-4' to={'/'} >Go to the home page</NavLink>
				</h5>
			</div>
		</div>
	)
}
