import PhotoSwipeLightbox from '../Scripts/photoswipe-lightbox.esm'
import '../Styles/photoswipe.css'

import React, { useEffect, useState } from 'react'
import ObjectPosition from '../Scripts/photoswipe-object-position'
import GalleryGridBlock from './GalleryGridBlock'
import { imageInfo } from '../Scripts/imagesInfo'
import { useInView } from 'react-intersection-observer'

export default function GalleryGrid({ galleryID, images }) {
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	})
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
			className='pswp-gallery grid-images grid w-full grid-cols-2 gap-[15px] transition-opacity duration-500 sm:grid-cols-3'
			id={galleryID}
			ref={ref}
		>
			{images.map((image, index) => (
				<div key={index} className={`rounded-md`}>
					<GalleryGridBlock
						galleryID={galleryID}
						image={image}
						index={index}
						names={imageInfo}
						key={index}
						inView={inView}
					/>
				</div>
			))}
		</div>
	)
}
