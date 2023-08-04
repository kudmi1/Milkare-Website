import 'photoswipe/dist/photoswipe.css'
import { InView, useInView } from 'react-intersection-observer'
import TitleComponent from './TitleComponent'
import SimpleGallery from './SimpleGallery'

const code_names = [
	'lucy',
	'kokomi',
	'makima',
	'alhaitam',
	'mybirthday',
	'komi',
	'himeno',
	'pochita',
	'2b_9s',
	'milka',
	'redgirl',
	'purplegirl',
]

const names = [
	'Lucy',
	'Kokomi',
	'Makima',
	'Alhaitam',
	'My Birthday',
	'Komi',
	'Himeno',
	'Pochita',
	'2B & 9S',
	'Milka',
	'Red Girl',
	'Purple Girl',
]

const dimensions = [
	{ width: 2480, height: 3508 },
	{ width: 2048, height: 2048 },
	{ width: 2720, height: 2720 },
	{ width: 2048, height: 2048 },
	{ width: 2048, height: 2048 },
	{ width: 2388, height: 3196 },
	{ width: 3000, height: 3000 },
	{ width: 2706, height: 2706 },
	{ width: 2480, height: 3508 },
	{ width: 1429, height: 1904 },
	{ width: 1080, height: 1920 },
	{ width: 1080, height: 1920 },
]

export default function PhotoGallery({ language, content }) {
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
		<div className='flex w-full justify-center motion-reduce:transition-none'>
			<div
				className={`relative mt-12 flex w-full max-w-7xl flex-col items-center justify-center rounded-md border border-[#3b3b3b] lg:w-max`}
			>
				{/* <TitleComponent title='Gallery' /> */}
				<div ref={ref} className='w-full rounded-md bg-gradient-to-r from-mainGrayTransparent via-[#3f3f3f9a] to-mainGrayTransparent p-4 backdrop-blur-[10px] '>
					<h1
						className={`section-title mb-8 flex justify-start text-6xl font-extrabold sm:justify-center lg:mb-20 lg:mt-6 lg:text-8xl 
					${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
					>
						Gallery
					</h1>
					<div className=''>
						<SimpleGallery
							galleryID={'main-gallery'}
							images={imagesTwo}
							names={names}
							inView={inView}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
