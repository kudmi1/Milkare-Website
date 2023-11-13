import { useState } from 'react'

export const BgPriceSmallCard = ({ image, header, price, description }) => {
	const [showImage, setShowImage] = useState(false)

	const divider = (
		<div className='flex w-full justify-center '>
			<div className='my-6 h-[2px] w-[90%] bg-gradient-to-r from-transparent via-secondaryText to-transparent'></div>
		</div>
	)

	const showImageWithDelay = () => {
		setTimeout(() => {
			setShowImage(true)
		}, 50)
	}

	return (
		<div className='flex w-full flex-col text-mainText md:w-1/3'>
			<div className='flex h-full min-h-max flex-col justify-between rounded-lg border border-thinLine bg-gradient-to-t from-[#2c2649cc] to-[#1600419a] px-4 sm:px-2 py-4 text-center'>
				<div className='rounded-lg bg-gradient-to-t from-[#2c2649cc] to-[#2c264991] px-2 py-2 md:min-h-[140px] lg:min-h-max'>
					<p className='w-full text-lg lg:text-2xl '>
						{header}
						<span className='price-text pr-2 text-priceColor'>{price}</span>
					</p>
					{divider}
					<p className='w-full text-sm lg:text-base'>{description}</p>
				</div>
				<div className='bg-slate-600 w-full h-full rounded-md mt-4'>
					<img
						onLoad={showImageWithDelay}
						src={`images-accordion/${image}.webp`}
						alt=''
						className={`h-full w-full max-h-[300px] sm:max-h-[450px] rounded-md object-cover object-top md:max-h-[400px] ${
							showImage ? 'scale-100 opacity-100' : 'scale-[102%] opacity-0'
						} transition-all duration-500`}
					/>
				</div>
			</div>
		</div>
	)
}
