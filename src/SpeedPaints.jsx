import { useRef, useState, useEffect } from "react"

export default function SpeedPaints() {
	const [isMouseOver, setIsMouseOver] = useState(false)
	const [isClicked, setIsClicked] = useState(false)
	const videoRef = useRef(null)

	const handleMouseOver = () => {
		setIsMouseOver(true)
		videoRef.current.play()
		videoRef.current.playbackRate = 2
	}

	const handleMouseOut = () => {
		setIsMouseOver(false)
		videoRef.current.pause()
		videoRef.current.currentTime = 0
	}

	const handleVideoClick = (event) => {
		event.stopPropagation()
		setIsClicked(true)
	}

	const handleCloseClick = () => {
		setIsClicked(false)
	}

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				isClicked &&
				videoRef.current &&
				!videoRef.current.contains(event.target)
			) {
				setIsClicked(false)
				setIsModalOpen(false)
			}
		}

		document.body.addEventListener("click", handleClickOutside)

		return () => {
			document.body.removeEventListener("click", handleClickOutside)
		}
	}, [isClicked])

	return (
		<>
			<div className="relative mx-auto mt-12 mb-24 flex max-w-7xl justify-between px-12">
				<div className="flex h-14 w-1/3 items-center justify-center border-2 border-[#212121] bg-[#212121d2] bg-cover backdrop-blur-[10px] xl:w-1/3 ">
					<h1 className="header-section my-4 select-none text-center text-3xl ">
						Speedpaint
					</h1>
				</div>
				<div className="video-card-container flex h-[400px] w-[750px] max-w-6xl items-center justify-center">
					<div className="video-card w-full overflow-hidden bg-white shadow-xl">
						<div className="video-card-body relative">
							<div
								className="video-thumbnail relative flex h-[400px] w-[750px] cursor-pointer items-center justify-center overflow-hidden"
								onMouseOver={handleMouseOver}
								onMouseOut={handleMouseOut}
								onClick={handleVideoClick}
							>
								<div
									className={`play-sign absolute left-1/2 top-1/2 z-50 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#212121d2] ${
										isMouseOver
											? "opacity-0"
											: "opacity-100 transition-opacity duration-300"
									}`}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="-1 0 24 24"
										stroke-width="1.0"
										stroke="currentColor"
										class="h-12 w-12"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
										/>
									</svg>
								</div>

								<img
									src="https://ik.imagekit.io/kudmi/images/Aqua.webp"
									className="thumb-img absolute h-full w-full cursor-pointer object-cover"
									alt="Makima thumbnail"
								/>
								<video
									src="https://ik.imagekit.io/kudmi/Video/aqua_video.mp4?updatedAt=1688728147078"
									className={`thumb-video absolute z-20 h-[102%] w-[102%] object-cover ${
										isMouseOver ? "opacity-100" : "opacity-0"
									} transition-opacity duration-300`}
									ref={videoRef}
									muted
									loop
								></video>
							</div>
						</div>
					</div>
					{isClicked ? (
						<div
							className={`video-modal-screen fixed bottom-0 left-0 right-0 top-0 z-[999] flex h-full w-full flex-col items-center justify-center bg-[#212121d2]`}
						>
							<button
								className="video-modal-close-btn absolute right-0 top-1 cursor-pointer p-2"
								onClick={handleCloseClick}
							>
								<svg className="m-2" width="32" height="32" viewBox="0 0 33 33">
									<path
										d="M24 10l-2-2-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6z"
										id="pswp__icn-close"
										fill="#fff"
									/>
								</svg>
							</button>
							<div
								className={`video-modal-content relative mx-auto h-auto w-full max-w-[900px]`}
							>
								<video
									src="https://ik.imagekit.io/kudmi/Video/aqua_video.mp4?updatedAt=1688728147078"
									className="modal-video"
									controls
									autoPlay
									loop
								></video>
							</div>
						</div>
					) : null}
				</div>
			</div>
		</>
	)
}
