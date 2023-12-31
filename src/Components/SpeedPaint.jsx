import { useRef, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useLanguageContext } from '../Providers/LanguageContext'

export default function SpeedPaint() {
	const { content } = useLanguageContext()

	const [showSpeedpaint, setShowSpeedpaint] = useState(false)
	const videoRef = useRef()
	const [isClicked, setIsClicked] = useState(false)
	const videoContainerRef = useRef()

	function turnOffVideo() {
		setIsClicked(false)
		videoRef.current?.pause()
	}

	useEffect(() => {
		document.addEventListener('click', turnOffVideo)

		return () => {
			document.removeEventListener('click', turnOffVideo)
		}
	}, [])

	const { ref, inView } = useInView({
		threshold: 0.2,
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
					className={`relative mx-auto mb-12 mt-24 flex max-w-7xl items-center justify-center px-4 lg:flex-row lg:items-start lg:px-14`}
				>
					{/* <div
						className={`mb-6 mr-3 flex w-full flex-col items-center justify-between md:w-2/3 lg:mb-0 lg:h-[340px] lg:w-1/3 lg:items-start`}
					>
					</div> */}
					<div className='video-card-container relative flex h-96 sm:h-[450px] max-h-[500px] w-full sm:w-[90%] lg:w-full max-w-[800px] flex-col rounded-md border border-thinLine shadow-lg shadow-[#9562be63]'>
						<div className='flex h-[10%] w-full items-center justify-between border-b border-[#292929d2] bg-gradient-to-b from-[#191924ef] to-[#1600419a] bg-opacity-60 bg-cover px-4 backdrop-blur-[40px] rounded-t-md'>
							<div>
								<p className='text-lg lg:text-xl text-mainText'>
									{content.gallerySection?.speedpaint?.firstLine} {''}
								</p>
							</div>
							<div className='flex gap-3'>
								<div className='h-4 w-4 rounded-full bg-pink-300'></div>
								<div className='h-4 w-4 rounded-full bg-violet-300'></div>
								<div className='h-4 w-4 rounded-full bg-violet-400'></div>
							</div>
						</div>

						<div
							className='thumb-img-container relative h-[90%] w-full cursor-pointer overflow-hidden rounded-b-md'
							ref={videoContainerRef}
							onClick={(e) => {
								setIsClicked(true)
								videoRef.current.play()
								e.stopPropagation()
							}}
						>
							<img
								src='/images-sm/video-thumb.webp'
								className='thumb-img pointer-events-none absolute h-full w-full object-cover transition-transform duration-300'
								alt='Aqua thumbnail'
							/>

							<video
								ref={videoRef}
								src='video/speedpaint.mp4'
								className={`thumb-video absolute z-[5] h-[102%] w-[102%] object-cover transition-opacity duration-300
						${
							isClicked
								? 'pointer-events-auto opacity-100'
								: 'pointer-events-none opacity-0'
						}`}
								controls
								loop
							></video>

							<div
								className={`play-sign pointer-events-auto absolute left-1/2  top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-[#191924ef] to-[#1600419a]`}
								// onClick={e => e.preventDefault()}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='#fff'
									viewBox='-1 0 24 24'
									strokeWidth='2'
									stroke='#fff'
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
						<p className='absolute top-[100%] right-0 py-1 text-mainText bg-gradient-to-r from-[#191924ef] to-[#1600419a] rounded-md px-3 mt-2 backdrop-blur-[10px] text-base'>
							{content.gallerySection?.speedpaint?.secondLine} {' '}
							<span className='font-bold italic underline text-secondaryText'>
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
