import PhotoSwipeLightbox from '../Scripts/photoswipe-lightbox.esm'
import '../Styles/photoswipe.css'

import React, { useEffect, useState } from 'react'
import ObjectPosition from '../Scripts/photoswipe-object-position'
import { useInView } from 'react-intersection-observer'

const names = [
	'Lucy',
	'Eleonora',
	'Blade Runner 2049',
	'Kokomi',
	'Makima',
	'Alhaitam',
	'Aqua',
	'My Birthday',
	'Komi',
	'Himeno',
	'Pochita',
	'2B & 9S',
	'Milka',
	'Purple Girl',
	'Red Girl',
]

export default function SimpleGallery({ galleryID, images }) {
	const [showImage, setShowImage] = useState(false)
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	})

	const showImageWithDelay = () => {
		setTimeout(() => {
			setShowImage(true)
		}, 50)
	}
	useEffect(() => {
		const options = {
			gallery: '#' + galleryID,
			children: 'a',
			pswpModule: () => import('photoswipe'),
			pinchToClose: true,
			zoom: false,
		}

		let lightbox = new PhotoSwipeLightbox(options)

		lightbox.on('uiRegister', function () {
			lightbox.pswp.ui.registerElement({
				name: 'custom-caption',
				// order: 0,
				isButton: false,
				// appendTo: 'root',
				html: 'Caption text',
				onInit: (el, pswp) => {
					lightbox.pswp.on('change', () => {
						const currSlideElement = lightbox.pswp.currSlide.data.element
						let captionHTML = ''
						if (currSlideElement) {
							const hiddenCaption = currSlideElement.querySelector(
								'.hidden-caption-content'
							)
							if (hiddenCaption) {
								// get caption from element with class hidden-caption-content
								captionHTML = hiddenCaption.innerHTML
							} else {
								// get caption from alt attribute
								captionHTML = currSlideElement
									.querySelector('img')
									.getAttribute('alt')
							}
						}
						el.innerHTML = captionHTML || ''
					})
				},
			})
		})

		lightbox.on('uiRegister', function () {
			lightbox.pswp.ui.registerElement({
				name: 'bulletsIndicator',
				className: 'pswp__bullets-indicator',
				appendTo: 'wrapper',
				onInit: (el, pswp) => {
					const bullets = []
					let bullet
					let prevIndex = -1

					for (let i = 0; i < pswp.getNumItems(); i++) {
						bullet = document.createElement('div')
						bullet.className = 'pswp__bullet'
						bullet.onclick = (e) => {
							pswp.goTo(bullets.indexOf(e.target))
						}
						el.appendChild(bullet)
						bullets.push(bullet)
					}

					pswp.on('change', (a) => {
						if (prevIndex >= 0) {
							bullets[prevIndex].classList.remove('pswp__bullet--active')
						}
						bullets[pswp.currIndex].classList.add('pswp__bullet--active')
						prevIndex = pswp.currIndex
					})
				},
			})
		})

		new ObjectPosition(lightbox)
		lightbox.init()

		return () => {
			lightbox.destroy()
			lightbox = null
		}
	}, [])

	return (
		<div
			ref={ref}
			className='pswp-gallery grid-images grid w-full grid-cols-2 gap-[15px] transition-opacity duration-500 sm:grid-cols-3'
			id={galleryID}
		>
			{images.map((image, index) => (
				<div key={index} className={`${index === 13 ? 'row-span-2 sm:row-auto' : ''} `}>
					<div
						className={`grid-block relative xl:w-96 xl:h-96  ${index === 13 ? 'sm:aspect-square h-full sm:h-auto' : ' aspect-square'} overflow-hidden cursor-pointer rounded-md
						transition-all duration-500`}
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
										className={` h-full w-full rounded-md object-cover object-top
									${
										showImage ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
									} transition-all duration-500`}
										src={image.thumbnailURL}
										alt={names[index]}
										loading='lazy'
									/>
								</picture>
							) : null}

							<div className='inner-text pointer-events-none absolute bottom-[-4rem] left-0 z-20 hidden h-[3rem] w-full items-center justify-center border-t border-[#3b3b3b] bg-gradient-to-r from-mainGray via-[#3f3f3f] to-mainGray opacity-0 md:flex xl:h-[4rem] '>
								<h2 className='text-center text-lg font-semibold leading-tight text-white xl:text-2xl'>
									{names[index]}
								</h2>
							</div>
						</a>
					</div>
				</div>
			))}
		</div>
	)
}
