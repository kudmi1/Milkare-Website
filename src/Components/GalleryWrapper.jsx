import 'photoswipe/dist/photoswipe.css'
import { useEffect, useState } from 'react'
import { InView, useInView } from 'react-intersection-observer'
import { useLanguageContext } from '../Providers/LanguageContext'
import GalleryGrid from './GalleryGrid'
import { imageInfo } from '../Scripts/imagesInfo'

export default function GalleryWrapper() {
	const { content, language } = useLanguageContext()
	const images = imageInfo.map(({ code_name }, index) => ({
		largeURL: `images/${code_name}.webp`,
		thumbnailURL: `images-md/${code_name}-md.webp`,
		sm: `images-sm/${code_name}-sm.webp`,
		blur: `images-blur/${code_name}-blur.webp`,
		height: imageInfo[index].height,
		width: imageInfo[index].width,
	}))

	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	})

	return (
		<div className='flex justify-center motion-reduce:transition-none'>
			<div
				className={`relative mt-12 flex w-full max-w-7xl flex-col items-center justify-center rounded-md border-b border-t border-thinLine bg-opacity-70 bg-gradient-to-b from-[#191924ef] to-[#1600419a] lg:w-max lg:border xl:min-w-[1280px]`}
			>
				<div ref={ref} className='w-full rounded-b-md p-4 '>
					<h1
						className={`section-title mb-8 flex justify-center text-4xl font-extrabold lg:mb-20 lg:mt-6 lg:text-7xl 
					${
						inView ? 'opacity-100' : 'opacity-0'
					} text-secondaryText transition-opacity duration-500`}
					>
						{language === 'english' ? 'Gallery' : 'Галерея'}
					</h1>

					<div className='w-full'>
						<GalleryGrid
							galleryID={'main-gallery'}
							images={images}
							inView={inView}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
