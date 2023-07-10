import { useRef, useEffect, useState } from "react"

export default function Modal({
	active,
	setActive,
	children,
	videoRef,
	buttonState,
	setButtonState,
}) {
	const [paused, setPaused] = useState(false)
	// videoRef.current.volume = 0.5
	function handlePause() {
		if (videoRef.current.paused) {
			videoRef.current.play()
			setPaused(false)
		} else {
			videoRef.current.pause()
			setPaused(true)
		}
	}

	// function handleFullscreen() {
	// 	if (videoRef.current.requestFullscreen) {
	// 		videoRef.current.requestFullscreen()
	// 	} else if (videoRef.current.mozRequestFullScreen) {
	// 		videoRef.current.mozRequestFullScreen()
	// 	} else if (videoRef.current.webkitRequestFullscreen) {
	// 		videoRef.current.webkitRequestFullscreen()
	// 	} else if (videoRef.current.msRequestFullscreen) {
	// 		videoRef.current.msRequestFullscreen()
	// 	}
	// }

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				setActive(false)
			} else if (event.key === " ") {
				event.preventDefault()
				handlePause()
				setButtonState(true)
			}
		}

		if (active) {
		
			videoRef.current.play()
			document.addEventListener("keydown", handleKeyDown)
		} else {
			videoRef.current.pause()
			videoRef.current.currentTime = 0
			document.removeEventListener("keydown", handleKeyDown)
		}

		return () => {
			document.removeEventListener("keydown", handleKeyDown)
		}
	}, [active])

	useEffect(() => {
		setButtonState(false)
	}, [active])

	useEffect(() => {
		let timeoutId

		if (buttonState && !paused) {
			timeoutId = setTimeout(() => {
				setButtonState(false)
			}, 2000)
		}

		return () => clearTimeout(timeoutId)
	}, [buttonState, paused])

	return (
		<div
			className={`${
				active ? "modal active" : "modal"
			} pointer-events-none fixed left-0 top-0 z-[100] flex h-[100dvh] w-screen flex-col items-center justify-center bg-[#212121] opacity-0 transition-opacity duration-500 md:bg-[#212121d2]`}
			onClick={() => {
				if (active) {
					setPaused(false)
					setActive(false)
				}
			}}
			
		>
			<button
				className={`close-modal-btn fixed left-0 top-0 z-[110] flex h-16 w-16 items-center justify-center bg-[#21212181] transition-opacity duration-300 hover:bg-[#303030]  md:left-[100%] md:top-0 md:h-16 md:w-16 md:-translate-x-[100%] md:rounded-none md:border-none md:bg-transparent md:hover:bg-transparent`}
				// ${buttonState ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}
				onClick={() => setActive(false)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="h-8 w-8"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
					/>
				</svg>
			</button>

			<div
				className={`${
					active ? "modal-content active" : "modal-content"
				} relative h-full w-full scale-50 rounded-xl bg-transparent transition-all duration-500 md:h-[80%] md:w-[80%] md:bg-[#212121] md:p-5 overflow-hidden`}
				onClick={(e) => {
					e.stopPropagation()
				}}
			>
				{/* <div
					className={`"video-control-panel z-[120] absolute bottom-0 left-0 h-12 w-full bg-[#2121219a] transition-opacity duration-300 flex justify-between
					${buttonState
							? "pointer-events-auto opacity-100"
							: "pointer-events-none opacity-0"
					}
					`}
				>
					<button className="w-12 h-full hover:bg-[#303030] right-0 bottom-0" onClick={handleFullscreen}>[/p]</button>
					<button className="w-12 h-full hover:bg-[#303030] right-0 bottom-0" onClick={handleFullscreen}>[  ]</button>
				</div> */}
{/* 
				<button
					className={`pause-rounded fixed left-1/2 top-1/2 z-[110] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#2121219a]  transition-opacity duration-300 hover:bg-[#303030] ${
						buttonState && active
							? "pointer-events-auto opacity-100"
							: "pointer-events-none opacity-0"
					}`}
					onClick={(e) => {
						e.stopPropagation()
						handlePause()
					}}
				>
					{paused ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="white"
							viewBox="-1 0 24 24"
							strokeWidth="2"
							stroke="currentColor"
							className="play-svg h-8 w-8"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="2"
							stroke="currentColor"
							className="pause-svg h-8 w-8"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 5.25v13.5m-7.5-13.5v13.5"
							/>
						</svg>
					)}
				</button> */}
				{children}
			</div>
		</div>
	)
}
