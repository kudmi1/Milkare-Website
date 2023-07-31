/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import PanelComponent from './PanelComponent'
import TitleComponent from './TitleComponent'

const names = ['aqua', 'milka', 'himeno']

export default function Accordion({ language, content }) {
	const [expandedPanel, setExpandedPanel] = useState(0)
	const [showAccordion, setShowAccordion] = useState(false)

	const { ref, inView } = useInView({
		threshold: 0.2,
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
		<div
			ref={ref}
			className={`flex justify-center px-4 ${
				showAccordion ? 'opacity-100' : 'opacity-0'
			} pb-12 pt-24 transition-opacity duration-500 motion-reduce:transition-none`}
		>
			{inView ? (
				<div
					className={`accordion flex w-full max-w-[1440px] flex-col items-center border-[#212121]`}
				>
					{/* <TitleComponent title='Recent Works' /> */}
					<div className=' w-full flex-col rounded-md bg-gradient-to-r from-mainGrayTransparent via-[#3f3f3f9a] to-mainGrayTransparent p-4 backdrop-blur-[10px] border border-[#3b3b3b]'>
						<h1 className='section-title text-6xl lg:text-7xl font-extrabold lg:mb-20 lg:mt-6 mb-8 flex justify-center'>Recent Works</h1>
						<div className='lg:grid hidden h-[600px] md:grid-cols-3 md:grid-rows-1 gap-4 grid-rows-3'>
							<img src="images-accordion/aqua.webp" alt="" className='w-full h-full object-cover rounded-md grid-block pointer-events-none'/>
							<img src="images-accordion/himeno.webp" alt="" className='w-full h-full object-cover rounded-md grid-block pointer-events-none'/>
							<img src="images-accordion/milka.webp" alt="" className='w-full h-full object-cover rounded-md grid-block pointer-events-none'/>
						</div>
						<div
							className={`flex lg:hidden h-[600px] max-w-3xl mx-auto w-full flex-col gap-4 md:flex-row`}
						>
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
				</div>
			) : (
				<div className='accordion flex w-full max-w-5xl flex-col items-center border-[#212121] pt-12 md:px-14'>
					<div className=' effect-shine-skeleton my-12 flex h-24 w-1/2 max-w-lg items-center justify-center rounded-2xl border  border-[#3b3b3b] bg-cover backdrop-blur-[40px] lg:top-16 lg:h-16'>
						<h1 className='header-section my-4 select-none text-center text-4xl text-mainText'></h1>
					</div>
					<div className='effect-shine-skeleton mt-12 flex h-[700px] w-full flex-col gap-4 rounded-md md:flex-row'></div>
				</div>
			)}
		</div>
	)
}
