import "react-medium-image-zoom/dist/styles.css"
import "photoswipe/dist/photoswipe.css"
import { Gallery, Item } from "react-photoswipe-gallery"
import { useState, useEffect } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

const names = [
	"milka",
	"redgirl",
	"purplegirl",
	"Lucy",
	"kokomi",
	"Makima2",
	"alhaitam",
	"mybirthday",
	"komi",
	"himeno",
	"pochita2",
	"2B_9S",
]

const options = {
	zoom: false,
}

export default function LightBoxImages() {
	const [imagesPath, setImagesPath] = useState([])

	useEffect(() => {
		const loadImages = async () => {
			const images = await Promise.all(
				names.map((name) => {
					return new Promise((resolve) => {
						const img = new Image()
						img.onload = () => {
							resolve({
								path: `https://ik.imagekit.io/kudmi/images/${name}.webp`,
								width: img.width,
								height: img.height,
								sm: `images-sm/${name}-sm.webp`,
							})
						}
						img.src = `https://ik.imagekit.io/kudmi/images/${name}.webp`
					})
				})
			)
			setImagesPath(images)
		}
		loadImages()
	}, [])
	const uiElements = [
		{
			name: "bulletsIndicator",
			order: 9,
			isButton: false,
			appendTo: "wrapper",
			onInit: (el, pswpInstance) => {
				let prevIndex = -1
				const thumbnails = []

				el.style.position = "absolute"
				el.style.bottom = "20px"
				el.style.left = "10px"
				el.style.right = "0"
				el.style.display = "grid"
				el.style.gridGap = "10px"
				el.style.gridTemplateColumns = "repeat(auto-fit, 40px)"
				el.style.gridTemplateRows = "repeat(auto-fit, 40px)"
				el.style.justifyContent = "center"

				const dataSource = pswpInstance.options.dataSource

				for (let i = 0; i < dataSource.length; i++) {
					const slideData = dataSource[i]

					const thumbnail = document.createElement("div")
					thumbnail.style.transition = "transform 0.15s ease-in"
					thumbnail.style.opacity = "0.6"
					thumbnail.style.cursor = "pointer"
					thumbnail.onclick = (e) => {
						const target = e.target
						const thumbnailEl =
							target.tagName === "IMG" ? target.parentElement : e.target
						if (thumbnailEl) {
							pswpInstance.goTo(thumbnails.indexOf(thumbnailEl))
						}
					}

					const thumbnailImage = document.createElement("img")
					thumbnailImage.setAttribute("src", slideData.msrc || "")
					thumbnailImage.style.width = "100%"
					thumbnailImage.style.height = "100%"
					thumbnailImage.style.objectFit = "cover"

					thumbnail.appendChild(thumbnailImage)

					el.appendChild(thumbnail)

					thumbnails.push(thumbnail)
				}

				pswpInstance.on("change", () => {
					if (prevIndex >= 0) {
						const prevThumbnail = thumbnails[prevIndex]
						prevThumbnail.style.opacity = "0.6"
						prevThumbnail.style.cursor = "pointer"
						prevThumbnail.style.transform = "scale(1)"
					}

					const currentThumbnail = thumbnails[pswpInstance.currIndex]
					currentThumbnail.style.opacity = "1"
					currentThumbnail.style.cursor = "unset"
					currentThumbnail.style.transform = "scale(1.2)"

					prevIndex = pswpInstance.currIndex
				})
			},
		},
	]

	return (
		<>
			<div className="mediumWrapper relative flex flex-col items-center justify-center pt-12 ">
				<div className="my-12 flex h-16 w-1/2 items-center justify-center rounded-2xl border-2 border-[#212121] bg-[#212121d2] bg-cover backdrop-blur-[10px] max-w-lg">
					<h1 className="header-section my-4 select-none text-center text-4xl">
						Gallery
					</h1>
				</div>
				<div className="grid-images grid max-w-7xl grid-cols-2 gap-[15px] border-[#212121] px-4 pt-12  md:p-14 md:px-14 md:grid-cols-3">
					<Gallery options={options} uiElements={uiElements}>
						{imagesPath.map((image, index) => (
							<div key={index}>
								<div
									className={`grid-block relative overflow-hidden xl:h-96 xl:w-96 medium-block${index} aspect-square cursor-pointer bg-[url('images/blurry-gradient-4.svg')] transition-all
									duration-300`}
								>
									<Item
										original={image.path}
										thumbnail={image.sm}
										width={image.width}
										height={image.height}
									>
										{({ ref, open }) => (
											<img
												ref={ref}
												alt={names[index]}
												onClick={open}
												src={image.sm}
												className={`zoom-image h-full w-full object-cover medium-image${index} transition-all duration-300`}
												loading="lazy"
											/>
										)}
									</Item>

									<div className="inner-text pointer-events-none absolute bottom-[-4rem] left-1/2 z-20 mb-2 h-[4rem] -translate-x-1/2 rounded-2xl bg-[#212121] p-4 px-6 sm:px-12 opacity-0 xl:px-4">
										<h2 className="text-center text-2xl font-semibold leading-tight text-white ">
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
