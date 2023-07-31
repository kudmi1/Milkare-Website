import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect, useRef } from 'react'
import TitleComponent from './TitleComponent'

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

const options = {
	zoom: false,
	pinchToClose: true,
}

export default function PhotoGallery({ language, content }) {
	const [showGallery, setShowGallery] = useState(false)
	const gridRef = useRef(null)
	const [imageLoaded, setImageLoaded] = useState(false)
	const images = []

	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	})

	code_names.map((name) => {
		const img = new Image()
		images.push({
			path: `images/${name}.webp`,
			width: img.width,
			height: img.height,
			sm: `images-sm/${name}-sm.webp`,
			big: `images-big/${name}-big.webp`,
			bg: `images-bg/${name}-blur.webp`,
		})
	})

	const handleImageLoad = () => {
		setImageLoaded(true)
	}

	const showGalleryWithDelay = () => {
		setTimeout(() => {
			setShowGallery(true)
		}, 100)
	}

	if (inView) {
		showGalleryWithDelay()
	}

	const uiElements = [
		{
			name: 'bulletsIndicator',
			order: 9,
			isButton: false,
			appendTo: 'wrapper',
			onInit: (el, pswpInstance) => {
				let prevIndex = -1
				const thumbnails = []

				/* eslint-disable no-param-reassign */
				el.style.position = 'absolute'
				el.style.bottom = '20px'
				el.style.left = '10px'
				el.style.right = '0'
				el.style.display = 'grid'
				el.style.gridGap = '5px'
				el.style.gridTemplateColumns = 'repeat(auto-fit, 40px)'
				el.style.gridTemplateRows = 'repeat(auto-fit, 40px)'
				el.style.justifyContent = 'center'
				/* eslint-enable no-param-reassign */

				const dataSource = pswpInstance.options.dataSource

				for (let i = 0; i < dataSource.length; i++) {
					const slideData = dataSource[i]

					const thumbnail = document.createElement('div')
					thumbnail.style.transition = 'transform 0.15s ease-in'
					thumbnail.style.opacity = '0.6'
					thumbnail.style.cursor = 'pointer'
					thumbnail.onclick = (e) => {
						const target = e.target
						const thumbnailEl =
							target.tagName === 'IMG' ? target.parentElement : e.target
						if (thumbnailEl) {
							pswpInstance.goTo(thumbnails.indexOf(thumbnailEl))
						}
					}

					const thumbnailImage = document.createElement('img')
					thumbnailImage.setAttribute('src', slideData.msrc || '')
					thumbnailImage.style.width = '100%'
					thumbnailImage.style.height = '100%'
					thumbnailImage.style.objectFit = 'cover'

					thumbnail.appendChild(thumbnailImage)

					el.appendChild(thumbnail)

					thumbnails.push(thumbnail)
				}

				pswpInstance.on('change', () => {
					if (prevIndex >= 0) {
						const prevThumbnail = thumbnails[prevIndex]
						prevThumbnail.style.opacity = '0.6'
						prevThumbnail.style.cursor = 'pointer'
						prevThumbnail.style.transform = 'scale(1)'
					}

					const currentThumbnail = thumbnails[pswpInstance.currIndex]
					currentThumbnail.style.opacity = '1'
					currentThumbnail.style.cursor = 'unset'
					currentThumbnail.style.transform = 'scale(1.2)'

					prevIndex = pswpInstance.currIndex
				})
			},
		},
	]

	return (
		<div ref={ref} className='motion-reduce:transition-none w-full flex justify-center'>
			{inView ? (
				<div
					className={`relative flex max-w-7xl flex-col items-center justify-center mt-12 border border-[#3b3b3b] rounded-md`}
				>
					{/* <TitleComponent title='Gallery' /> */}
					<div className='w-full  rounded-md bg-gradient-to-r from-mainGrayTransparent via-[#3f3f3f9a] to-mainGrayTransparent p-4 backdrop-blur-[10px] '>
						<h1 className='section-title text-6xl lg:text-8xl font-extrabold lg:mb-20 lg:mt-6 mb-8 flex justify-start sm:justify-center'>Gallery</h1>
						<div
							className={`grid-images grid grid-cols-2 gap-[15px] md:grid-cols-3 ${
								showGallery ? 'opacity-100' : 'opacity-0'
							} transition-opacity duration-500`}
							ref={gridRef}
						>
							<Gallery options={options} uiElements={uiElements} withCaption>
								{images.map((image, index) => (
									<div key={index}>
										<div
											className={`grid-block relative overflow-hidden xl:h-96 xl:w-96 medium-block${index} aspect-square cursor-pointer rounded-md
											 transition-all duration-500`}
											style={{
												backgroundImage: `url(${image.bg})`,
												backgroundRepeat: 'no-repeat',
												backgroundSize: 'cover',
											}}
										>
											<Item
												original={image.path}
												thumbnail={image.sm}
												width={dimensions[index].width}
												height={dimensions[index].height}
												caption={`<h1 class="pswp__custom-caption">${names[index]}<h1/>`}
											>
												{({ ref, open }) => (
													<img
														onLoad={handleImageLoad}
														ref={ref}
														alt={names[index]}
														onClick={open}
														src={image.path}
														srcSet={`${image.sm} 600w, ${image.big} 800w`}
														sizes={`
    												(max-width: 640px) 600px,
    												800px
  												`}
														className={`zoom-image object-cover medium-image${index} transition-all duration-500 ${
															imageLoaded ? 'opacity-100' : 'opacity-0'
														}`}
														loading='lazy'
													/>
												)}
											</Item>

											<div className='inner-text pointer-events-none absolute bottom-[-4rem] left-0 z-20 hidden h-[3rem] w-full items-center justify-center border-t border-[#3b3b3b] bg-gradient-to-r from-mainGray via-[#3f3f3f] to-mainGray opacity-0 md:flex xl:h-[4rem] '>
												<h2 className='text-center text-lg font-semibold leading-tight text-white xl:text-2xl'>
													{names[index]}
												</h2>
											</div>
										</div>
									</div>
								))}
							</Gallery>
						</div>
					</div>
				</div>
			) : (
				<div className='gallery-skeleton'>
					<div className='relative flex flex-col items-center justify-center pt-12'>
						<div className='effect-shine-skeleton my-12 flex h-16 w-1/2 max-w-lg items-center justify-center rounded-2xl border-2 border-mainGray bg-gradient-to-r  bg-cover backdrop-blur-[40px]'>
							<h1 className='header-section my-4 select-none text-center text-4xl text-mainText'></h1>
						</div>
						<div
							className='grid-images grid max-w-7xl grid-cols-2 gap-[15px] px-4 pt-12  md:grid-cols-3 md:p-14 md:px-14'
							ref={gridRef}
						>
							{images.map((_, index) => (
								<div key={index}>
									<div
										className={`grid-block effect-shine-skeleton relative aspect-square cursor-pointer overflow-hidden rounded-md transition-all
									duration-500 xl:h-96 xl:w-96`}
									></div>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
