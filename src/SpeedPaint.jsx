import { useRef, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Modal from './Modal'

export default function SpeedPaint({ language, content }) {
	const [showSpeedpaint, setShowSpeedpaint] = useState(false)
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
		document.addEventListener('click', turnOffVideo)

		return () => {
			document.removeEventListener('click', turnOffVideo)
		}
	}, [])

	const { ref, inView } = useInView({
		threshold: 1,
		triggerOnce: true,
	})

	const showSpeedpaintWithDelay = () => {
		setTimeout(() => {
			setShowSpeedpaint(true)
		}, 100)
	}

	if (inView) {
		showSpeedpaintWithDelay()
	}

	return (
		<div
			ref={ref}
			className={`${
				showSpeedpaint ? 'opacity-100' : 'opacity-0'
			} transition-opacity duration-500 motion-reduce:transition-none`}
		>
			{inView ? (
				<div
					className={`relative mx-auto mb-24 mt-12 flex max-w-7xl flex-col items-center justify-between px-4 lg:flex-row lg:items-start lg:px-14`}
				>
					<div
						className={`mb-6 mr-3 flex w-2/3 flex-col items-center justify-between lg:mb-0 lg:h-[340px] lg:w-1/3 lg:items-start`}
					>
						<div
							className={`mb-12 flex h-14 w-full items-center justify-center border border-[#3b3b3b] bg-gradient-to-r from-[#212121d2] via-[#3f3f3fd2] to-[#212121d2] bg-cover backdrop-blur-[40px] `}
						>
							<h1 className='header-section my-4 w-full select-none text-center text-3xl text-mainText'>
								{content.gallerySection?.speedpaint?.speedpaintTitle}
							</h1>
						</div>
						<div
							className='bg-gradient-to-r from-[#212121d2] via-[#3f3f3f9a] to-[#212121d2] px-6 py-6 text-center backdrop-blur-[10px] lg:text-start
				'
						>
							<h2 className='pb-4 text-3xl text-secondaryText'>
								{content.gallerySection?.speedpaint?.firstLine}
							</h2>
							<p className='text-lg text-secondaryText'>
								{content.gallerySection?.speedpaint?.secondLine} {''}
								<span className='font-bold italic underline'>
									<a
										target={'_blank'}
										href='https://boosty.to/milkareart'
										className='effect-shine'
									>
										Boosty
									</a>
								</span>
							</p>
						</div>
					</div>
					<div
						className='video-card-container relative h-96 max-h-[400px] w-full max-w-[690px] cursor-pointer border border-[#3b3b3b] '
						ref={videoContainerRef}
						onClick={(e) => {
							setIsClicked(true)
							videoRef.current.play()
							e.stopPropagation()
						}}
					>
						<div className='absolute -left-3 -top-5 z-10 text-4xl text-black pointer-events-none'>
							<img src='icons/twitter.svg' alt='' />
						</div>
						<div className='absolute -right-3 -top-5 z-10 text-4xl text-black pointer-events-none'>
							<img src='icons/twitter.svg' alt='' />
						</div>
						<div className='absolute -bottom-5 -right-3 z-10 text-4xl text-black pointer-events-none'>
							<img src='icons/twitter.svg' alt='' />
						</div>
						<div className='absolute -bottom-5 -left-3 z-10 text-4xl text-black pointer-events-none'>
							<img src='icons/twitter.svg' alt='' />
						</div>

						<div className='thumb-img-container relative h-full w-full overflow-hidden '>
							<img
								src='/images-sm/video-thumb.webp'
								className='thumb-img pointer-events-none absolute h-full w-full cursor-pointer object-cover transition-transform duration-300'
								alt='Aqua thumbnail'
							/>

							<video
								ref={videoRef}
								src='video/speedpaint.MP4'
								className={`thumb-video absolute z-[5] h-[102%] w-[102%] object-cover transition-opacity duration-300
						${
							isClicked
								? 'pointer-events-auto opacity-100'
								: 'pointer-events-none opacity-0'
						}`}
								controls
								loop
							></video>
						</div>

						<div
							className={`play-sign absolute left-1/2 top-1/2  flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#212121d2]`}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='#f9ded1'
								viewBox='-1 0 24 24'
								strokeWidth='2'
								stroke='#f9ded1'
								className='effect-shine h-8 w-8'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
								/>
							</svg>
						</div>
					</div>
				</div>
			) : (
				<div className='relative mx-auto mb-24 mt-12 flex max-w-7xl flex-col items-center justify-between px-4 lg:flex-row lg:items-start lg:px-14'>
					<div className='mb-6 mr-3 flex w-2/3 flex-col items-center justify-between lg:mb-0 lg:h-[340px] lg:w-1/3 lg:items-start'>
						<div className='effect-shine-skeleton mb-12 flex h-14 w-full items-center justify-center border border-[#3b3b3b] bg-cover backdrop-blur-[40px] '>
							<h1 className='header-section my-4 w-full select-none text-center text-3xl text-mainText'></h1>
						</div>
					</div>
					<div className='video-card-container effect-shine-skeleton relative h-96 max-h-[400px] w-full max-w-[690px] cursor-pointer border border-[#3b3b3b] backdrop-blur-[40px] '></div>
				</div>
			)}
		</div>
	)
}
