import { useState, memo } from 'react'
import { useInView } from 'react-intersection-observer'

export default function PanelComponent({
	expandedPanel,
	setExpandedPanel,
	index,
	imageNames,
	isText,
	isObjectTop,
}) {
	const [showImage, setShowImage] = useState(false)
	const picname = imageNames[index]

	function handlePanelClick(panelIndex) {
		if (panelIndex === expandedPanel) {
			setExpandedPanel(null)
		} else {
			setExpandedPanel(panelIndex)
		}
	}

	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	})

	const showImageWithDelay = () => {
		setTimeout(() => {
			setShowImage(true)
		}, 50)
	}

	// if (inView) {
	// 	showImageWithDelay()
	// }

	// ${showImage ? '' : 'effect-shine-skeleton'} 
	return (
		<div
			className={`accordion_panel ${expandedPanel === index ? 'expanded' : ''} 
			relative isolate cursor-pointer overflow-hidden rounded-md bg-slate-600 transition-all duration-300`}
			onClick={expandedPanel === index ? null : () => handlePanelClick(index)}
		>
			{isText ? (
				<div className='inner-text pointer-events-none absolute bottom-2 left-6 z-20 mb-2 h-[4rem] rounded-2xl bg-[#212121] p-4 opacity-0 md:bottom-0 md:left-1/2 md:-translate-x-1/2 lg:left-6 lg:translate-x-0 xl:w-1/3  xl:px-4'>
					<h2 className='text-center text-2xl font-semibold leading-tight text-white md:text-lg lg:text-2xl'>
						{picname}
					</h2>
				</div>
			) : null}

			<h2 id={`panel${index}_heading`}></h2>
			<div
				ref={ref}
				className='accordion_content h-full '
				id={`panel${index}_content`}
				aria-labelledby={`panel${index}_heading`}
				aria-hidden={`${expandedPanel === index ? 'false' : 'true'}`}
				role='region'
			>
				<button
					className='accordion_trigger bottom-0 left-3'
					aria-controls={`panel${index}_content`}
					aria-expanded='true'
				></button>
				{inView ? (
					<picture>
						<source
							media='(max-width: 600px)'
							srcSet={`images-accordion/${picname}-small.webp`}
							type='image/webp'
						/>
						<img
							onLoad={showImageWithDelay}
							className={`accordion_image absolute inset-0 -z-10 h-full w-full object-cover ${
								isObjectTop ? 'object-top' : ''
							} ${
								showImage ? 'opacity-100 scale-100' : 'opacity-0 scale-[102%]'
							} transition-all duration-500`}
							src={`images-accordion/${picname}.webp`}
							alt={`image${index}`}
						/>
					</picture>
				) : null}
			</div>
		</div>
	)
}
