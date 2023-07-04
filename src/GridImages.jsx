// import mediumZoom from "medium-zoom"
import { useEffect, useRef, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import openSourceImage from "./openSourceImage"

const names = [
	"milka",
	"redgirl",
	"purplegirl",
	"Lucy",
	"kokomi",
	"alhaitam",
	"mybirthday",
	"komi",
	"himeno",
	"pochita",
	"2B&9S",
	"Makima",
]

const images = names.map((name) => `images/${name}.png`)

export default function GridImages() {
	const [fullScreenImage, setFullScreenImage] = useState(null)
	const [isFullScreenOpen, setIsFullScreenOpen] = useState(false)
	const [zoom, setZoom] = useState(1)
	const [zoomedIn, setZoomedIn] = useState(false)
	const [cursor, setCursor] = useState("auto")
	const blurLoadRefs = useRef([])
	const fullImageRef = useRef(null)

	function handleImageClick(imageUrl) {
		setFullScreenImage(imageUrl)
		setZoom(1)
		setCursor("cursor-zoom-in")
		setIsFullScreenOpen(true)
	}

	function closeFullScreen() {
		setFullScreenImage(null)
		setZoomedIn(false)
		setIsFullScreenOpen(false)
	}


	function handleZoomIn() {
		if (!zoomedIn) {
			setZoom((zoom) => zoom * 1.5)
			setCursor("cursor-grab")
		}

		if (zoomedIn) {
			setZoom(1)
			setCursor("cursor-zoom-in")
		}
		setZoomedIn(!zoomedIn)
	}

	function zoomInPlace(e) {
		var zoomer = e.currentTarget
		e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX)
		e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX)
		x = (offsetX / zoomer.offsetWidth) * 100
		y = (offsetY / zoomer.offsetHeight) * 100
		zoomer.style.backgroundPosition = x + "% " + y + "%"
	}

	function handleImageLoad(index) {
		const blurLoadElement = blurLoadRefs.current[index]
		if (blurLoadElement) {
			blurLoadElement.classList.add("loaded")
		}
	}

	useEffect(() => {
		function handleWheelEvent(event) {
			if (isFullScreenOpen) {
				event.preventDefault()
			}
		}

		if (isFullScreenOpen) {
			window.addEventListener("wheel", handleWheelEvent, { passive: false })
		} else {
			window.removeEventListener("wheel", handleWheelEvent)
		}

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("wheel", handleWheelEvent)
		}
	}, [isFullScreenOpen])

	// mediumZoom('.grid-image', { background: "black", margin: "30px" })

	return (
		<div className="relative flex flex-col items-center justify-center py-16 ">
			<h1 className="gallery-header pb-16 text-6xl font-semibold text-gray-100">
				Gallery
			</h1>
			{/* <div className="grid-images grid lg:grid-cols-3 grid-cols-2"> */}
			{/* <div className="overflow-hidden rounded-2xl"> */}
			<div className="grid-images grid h-[200vh] max-w-7xl">
				{images.map((imageUrl, index) => (
					<div
						key={index}
						onClick={() => handleImageClick(imageUrl)}
						// onClick={() => mediumZoom('.grid-image', { background: "black", margin: 30 })}
						className={`grid-block relative cursor-pointer image${index} overflow-hidden`}
						ref={(el) => (blurLoadRefs.current[index] = el)}
					>
						<div className="inner-shadow absolute bottom-0 left-0 z-10 h-1/2 w-full bg-gradient-to-b from-black/0 to-black/90 opacity-0 transition-opacity duration-300"></div>

						<LazyLoadImage
							src={imageUrl}
							// effect="blur"
							className={`grid-image`}
							onLoad={() => {
								handleImageLoad(index)
							}}
						/>

						<div className="inner-text absolute bottom-0 left-0 z-20 p-4 opacity-0 transition-opacity duration-300">
							<h2 className="text-2xl font-semibold leading-tight text-gray-100">
								{names[index]}
							</h2>
						</div>
					</div>
				))}
			</div>

			{fullScreenImage ? (
				<div
					className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black/70 "
					onClick={closeFullScreen}
				>
					<p
						className="fixed right-2 top-2 cursor-pointer"
						onClick={closeFullScreen}
					>
						Close
					</p>
					<div
						className="full-image-div flex h-full w-full items-center justify-center"
						ref={fullImageRef}
					>
						<img
							src={fullScreenImage}
							className={`full-image max-h-[90%] max-w-[90%] rounded-2xl ${cursor} transition-all duration-500`}
							// style={{
							// 	transform: `scale(${zoom})`,
							// }}
							alt=""
							onClick={(e) => {
								e.stopPropagation()
								// handleZoomIn()
								openSourceImage(e.target)
								setCursor("cursor-grab")
							}}
						/>
					</div>
				</div>
			) : null}
		</div>
		// </div>
	)
}
