import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { useState, useEffect, useRef } from 'react'

const code_names = [
	'Lucy',
	'kokomi',
	'Makima2',
	'alhaitam',
	'mybirthday',
	'komi',
	'himeno',
	'pochita2',
	'2B_9S',
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
}

export default function PhotoGallery() {
	const gridRef = useRef(null)
	const images = []
	code_names.map((name) => {
		const img = new Image()
		images.push({
			path: `https://ik.imagekit.io/kudmi/images/${name}.webp`,
			width: img.width,
			height: img.height,
			sm: `images-sm/${name}-sm.webp`,
		})
	})

	useEffect(() => {
		gridRef.current.onmousemove = (e) => {
			for (const block of document.querySelectorAll('.grid-block')) {
				const rect = block.getBoundingClientRect(),
					x = e.clientX - rect.left,
					y = e.clientY - rect.top

				block.style.setProperty('--mouse-x', `${x}px`)
				block.style.setProperty('--mouse-y', `${y}px`)
			}
		}
	}, [])

	return (
		<>
			<div
				className='mediumWrapper relative flex flex-col items-center justify-center pt-12'
			>
				<div className='my-12 flex h-16 w-1/2 max-w-lg items-center justify-center rounded-2xl border-2 border-[#212121] bg-gradient-to-r from-[#212121d2] via-[#3f3f3fd2] to-[#212121d2] bg-cover backdrop-blur-[40px]'>
					<h1 className='header-section my-4 select-none text-center text-4xl'>
						Gallery
					</h1>
				</div>
				<div
					className='grid-images grid max-w-7xl grid-cols-2 gap-[15px] px-4 pt-12  md:grid-cols-3 md:p-14 md:px-14'
					ref={gridRef}
				>
					<Gallery options={options}>
						{images.map((image, index) => (
							<div key={index}>
								<div
									className={`grid-block relative overflow-hidden xl:h-96 xl:w-96 medium-block${index} aspect-square cursor-pointer transition-all
									duration-300 `}
								>
									<div className='block-border'></div>
									<Item
										original={image.path}
										thumbnail={image.sm}
										width={dimensions[index].width}
										height={dimensions[index].height}
									>
										{({ ref, open }) => (
											<img
												ref={ref}
												alt={names[index]}
												onClick={open}
												src={image.sm}
												className={`zoom-image object-cover medium-image${index} transition-all duration-300 `}
												loading='lazy'
											/>
										)}
									</Item>

									<div className='inner-text pointer-events-none absolute bottom-[-4rem] left-1/2 z-20 mb-2 flex h-[3rem] -translate-x-1/2 items-center justify-center rounded-2xl bg-[#212121] p-4 px-6 opacity-0 sm:px-12 xl:h-[4rem] xl:px-4'>
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
		</>
	)
}
