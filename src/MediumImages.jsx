import mediumZoom from "medium-zoom"
import { useEffect, useRef, useState } from "react"
// import mediumZoom from "medium-zoom"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import "photoswipe/dist/photoswipe.css"
import { Gallery, Item } from "react-photoswipe-gallery"

const names = [
	"milka",
	"redgirl",
	"purplegirl",
	"Lucy",
	"kokomi",
	"Makima",
	"alhaitam",
	"mybirthday",
	"komi",
	"himeno",
	"pochita",
	"2B&9S",
]

const images = names.map((name) => `images/${name}.png`)

export default function MediumImages() {
	return (
		<>
			<div className="mediumWrapper relative flex flex-col items-center justify-center py-16 ">
				<h1 className="gallery-header pb-16 text-6xl font-semibold text-gray-900">
					Medium Images
				</h1>

				<div className="grid-images grid max-w-7xl ">
					{images.map((imageUrl, index) => (
						<>
							<Zoom wrapElement="div" zoomMargin={20} key={index}>
								<div
									className={`grid-block relative h-96 overflow-hidden medium-block${index} rounded-xl`}
								>
									<img
										src={imageUrl}
										alt="dsa"
										className={`zoom-image w-full medium-image${index} `}
									/>

									<div className="inner-text absolute bottom-0 left-0 z-20 rounded-se-2xl bg-black/75 p-4 opacity-0 transition-opacity duration-300">
										<h2 className="text-2xl font-semibold leading-tight text-gray-100">
											{names[index]}
										</h2>
									</div>
								</div>
							</Zoom>
						</>
					))}
				</div>
			</div>
		</>
	)
}
