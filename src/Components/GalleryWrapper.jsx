import 'photoswipe/dist/photoswipe.css'
import { InView, useInView } from 'react-intersection-observer'
import { useLanguageContext } from '../Providers/LanguageContext'
import GalleryGrid from './GalleryGrid'

const code_names = [
	'frieren',
	'lucy1',
	'eleonora',
	'aqua',
	'kokomi',
	'makima1',
	'alhaitam',
	'mybirthday',
	'komi',
	'himeno',
	'pochita',
	'2b_9s1',
	'milka',
	'roadside-picnic',
	'redgirl',
	'bladerunner2049',
	'purplegirl',
	// 'WIP'
]

const dimensions = [
	{ width: 2483, height: 3511 },
	{ width: 2480, height: 3508 },
	{ width: 1536, height: 2048 },
	{ width: 3001, height: 2720 },
	{ width: 2048, height: 2048 },
	{ width: 2048, height: 2048 },
	{ width: 2720, height: 2720 },
	{ width: 2048, height: 2048 },
	{ width: 2388, height: 3196 },
	{ width: 3000, height: 3000 },
	{ width: 2706, height: 2706 },
	{ width: 2480, height: 3508 },
	{ width: 1429, height: 1904 },
	{ width: 4967, height: 7022 },
	{ width: 1080, height: 1920 },
	{ width: 1920, height: 1080 },
	{ width: 1080, height: 1920 },
	// { width: 1080, height: 1920 },
]

export default function GalleryWrapper() {
	const { content, language } = useLanguageContext()
	const imagesTwo = code_names.map((name, index) => ({
		largeURL: `images/${name}.webp`,
		thumbnailURL: `images-md/${name}-md.webp`,
		sm: `images-sm/${name}-sm.webp`,
		blur: `images-blur/${name}-blur.webp`,
		height: dimensions[index].height,
		width: dimensions[index].width,
	}))

	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	})

	return (
		<div className='flex justify-center motion-reduce:transition-none'>
			<div
				className={`relative mt-12 flex w-full xl:min-w-[1280px] max-w-7xl flex-col items-center justify-center rounded-md border-t border-b lg:border border-thinLine bg-gradient-to-b from-[#191924ef] to-[#1600419a] bg-opacity-70 lg:w-max`}
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
							images={imagesTwo}
							inView={inView}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
