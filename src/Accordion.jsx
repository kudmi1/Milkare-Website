/* eslint-disable react/prop-types */
import { useState, memo } from 'react'
import { useInView } from 'react-intersection-observer'
import PanelComponent from './PanelComponent'

const names = ['aqua', 'milka', 'himeno']

export default function Accordion({ language, content }) {
	const [expandedPanel, setExpandedPanel] = useState(0)
	const [showAccordion, setShowAccordion] = useState(false)

	const { ref, inView } = useInView({
		threshold: 0.4,
		triggerOnce: true,
	})

	const showAccordionWithDelay = () => {
		setTimeout(() => {
			setShowAccordion(true)
		}, 100)
	}

	if (inView) {
		showAccordionWithDelay()
	}

	return (
		<div ref={ref} className={`flex justify-center px-4 ${showAccordion ? "opacity-100" : "opacity-0"} transition-opacity duration-500 motion-reduce:transition-none`}>
			{inView ? (
				<div className={`accordion flex w-full max-w-5xl flex-col items-center border-[#212121] pt-12 md:px-14`}>
					<div className={`my-12 flex h-24 w-1/2 max-w-lg items-center justify-center rounded-2xl border border-[#3b3b3b] bg-gradient-to-r from-[#212121d2] via-[#3f3f3fd2] to-[#212121d2] bg-cover backdrop-blur-[40px] lg:top-16 lg:h-16 `}>
						<h1 className='header-section my-4 select-none text-center text-4xl text-mainText'>
							{content.gallerySection?.accordionTitle}
						</h1>
					</div>
					<div className={`mt-12 flex h-[700px] w-full flex-col gap-4 md:flex-row`}>
						{names.map((_, index) => (
							<PanelComponent
								key={index}
								index={index}
								expandedPanel={expandedPanel}
								setExpandedPanel={setExpandedPanel}
								imageNames={names}
								isText={true}
							/>
						))}
					</div>
				</div>
			) : (
				<div className='accordion flex w-full max-w-5xl flex-col items-center border-[#212121] pt-12 md:px-14'>
					<div className=' my-12 flex h-24 w-1/2 max-w-lg items-center justify-center rounded-2xl border border-[#3b3b3b]  bg-cover backdrop-blur-[40px] lg:top-16 lg:h-16 effect-shine-skeleton'>
						<h1 className='header-section my-4 select-none text-center text-4xl text-mainText'></h1>
					</div>
					<div className='mt-12 flex h-[700px] w-full flex-col gap-4 rounded-md md:flex-row effect-shine-skeleton'></div>
				</div>
			)}
		</div>
	)
}
