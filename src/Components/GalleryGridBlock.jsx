import React, { useState } from 'react'
import { imageInfo } from '../Scripts/imagesInfo'
const GalleryGridBlock = ({
	image,
	index,
	galleryID,
	inView
}) => {
	const [showImage, setShowImage] = useState(false)
	const { name }= imageInfo[index]
	const showImageWithDelay = () => {
		setTimeout(() => {
			setShowImage(true)
		}, 50)
	}

	return (
		<div
			className={`grid-block group relative aspect-square w-full overflow-hidden rounded-md transition-all duration-500 active:brightness-75 lg:min-h-[320px] lg:min-w-[320px] xl:min-h-[384px] xl:min-w-[384px]`}
			style={{
				backgroundImage: `url(${image.blur})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			<a
				href={image.largeURL}
				data-pswp-width={image.width}
				data-pswp-height={image.height}
				data-cropped={true}
				key={galleryID + '-' + index}
				target='_blank'
				rel='noreferrer'
				aria-label={galleryID}
			>
				{inView ? (
					<picture>
						<source
							srcSet={`${image.sm}`}
							media='(max-width: 600px)'
							type='image/webp'
						/>
						<img
							onLoad={showImageWithDelay}
							className={`h-full w-full rounded-md object-cover
						    ${index === 0 || index === 1 ? 'object-center' : 'object-top'}

						    ${
						    	showImage
						    		? 'scale-100 opacity-100'
						    		: 'scale-[101%] opacity-0'
						    } transition-all duration-500`}
							src={image.thumbnailURL}
							alt={
								// index === 1 ? 'Ineri Yorha from FFXIV Commission' : name
								name
							}
							loading='lazy'
						/>
					</picture>
				) : null}

				<div className='absolute bottom-3 left-3 z-20 hidden -translate-x-[50%] overflow-hidden rounded-md border border-thinLine bg-gradient-to-b from-[#191924ef] to-[#160041f1] px-3 py-1 text-mainText opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block'>
					<p>{name}</p>
				</div>
			</a>
		</div>
	)
}
export default GalleryGridBlock
