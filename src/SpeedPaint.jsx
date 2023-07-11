import { useRef, useState, useEffect } from "react"
import Modal from "./Modal"

export default function SpeedPaint() {
	const [modalActive, setModalActive] = useState(false)
	const videoRef = useRef(null)
	const [showCloseButton, setShowCloseButton] = useState(false)
	const [isClicked, setIsClicked] = useState(false)
	const videoContainerRef = useRef()

	function turnOffVideo() {
		setIsClicked(false)
		videoRef.current.pause()
	}

	const handleVideoClick = (event) => {
		event.stopPropagation()
		event.preventDefault()
		setShowCloseButton((prev) => !prev)
	}

	useEffect(() => {
		document.addEventListener("click", turnOffVideo)

		return () => {
			document.removeEventListener("click", turnOffVideo)
		}
	}, [])

	return (
		<div className="relative mx-auto mb-24 mt-12 flex max-w-7xl flex-col items-center justify-between px-4 lg:flex-row lg:items-start lg:px-14 ">
			{/* <Modal
				active={modalActive}
				setActive={setModalActive}
				videoRef={videoRef}
				buttonState={showCloseButton}
				setButtonState={setShowCloseButton}
			>
				<div className="relative h-full w-full ">
					<video
						ref={videoRef}
						src="https://ik.imagekit.io/kudmi/Video/aqua_video.mp4?updatedAt=1688728147078"
						className="modal-video absolute left-0 top-0 h-full w-full"
						controls
						// muted
						// autoPlay
						// loop
						onClick={handleVideoClick}
					></video>
				</div>
			</Modal> */}
			<div className="mb-6 mr-3 flex w-2/3 flex-col items-center lg:w-1/3 lg:items-start">
				<div className="mb-12 flex h-14 w-full items-center justify-center border-2 border-[#212121] bg-[#212121d2] bg-cover backdrop-blur-[10px] ">
					<h1 className="header-section my-4 w-full select-none text-center text-3xl ">
						Speedpaint
					</h1>
				</div>
				<div className="text-center lg:text-start">
					<h2 className="pb-4 text-3xl">Speedpaint of Aqua</h2>
					<p className="text-lg">
						More speedpaints on{" "}
						<span className="font-bold italic underline">
							<a target={"_blank"} href="https://boosty.to/milkareart">
								Boosty
							</a>
						</span>
					</p>
				</div>
			</div>
			<div
				className="video-card-container relative h-96 max-h-[400px] w-full max-w-[690px] cursor-pointer border-2 border-[#212121d2]"
				// onClick={() => setModalActive(true)}
				ref={videoContainerRef}
				onClick={(e) => {
					setIsClicked(true)
					videoRef.current.play()
					e.stopPropagation()
				}}
			>
				<div className="absolute -left-3 -top-5 z-10 text-4xl text-black">
					X
				</div>
				<div className="absolute -right-3 -top-5 z-10 text-4xl text-black">
					X
				</div>
				<div className="absolute -bottom-5 -right-3 z-10 text-4xl text-black">
					X
				</div>
				<div className="absolute -bottom-5 -left-3 z-10 text-4xl text-black">
					X
				</div>

				<div className="thumb-img-container relative h-full w-full overflow-hidden">
					<img
						src="/images-sm/video-thumb.webp"
						className="thumb-img pointer-events-none absolute h-full w-full cursor-pointer object-cover transition-transform duration-300"
						alt="Aqua thumbnail"
					/>

					<video
						ref={videoRef}
						src="https://ik.imagekit.io/kudmi/Video/aqua_video.mp4?updatedAt=1688728147078"
						className={`thumb-video absolute z-[5] h-[102%] w-[102%] object-cover transition-opacity duration-300
						${
							isClicked
								? "pointer-events-auto opacity-100"
								: "pointer-events-none opacity-0"
						}`}
						controls
						loop
					></video>
				</div>

				<div
					className={`play-sign absolute left-1/2 top-1/2  flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#212121d2]`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="white"
						viewBox="-1 0 24 24"
						strokeWidth="2"
						stroke="currentColor"
						className="h-8 w-8"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
						/>
					</svg>
				</div>
			</div>
		</div>
	)
}
