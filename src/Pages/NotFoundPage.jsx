import React from 'react'
import { NavLink } from 'react-router-dom'

export const NotFoundPage = () => {
	return (
		<div className='flex h-[calc(100dvh-208px)] items-center justify-center'>
			<div className='flex flex-col items-center rounded-md border border-thinLine bg-mainGray px-6 py-4'>
				<h3>Page Not Found</h3>
				<h5 className='py-2 px-4 rounded-md border-2 mt-4'>
					<NavLink className='w-full h-full' to={'/'} >Go to the home page</NavLink>
				</h5>
			</div>
		</div>
	)
}
