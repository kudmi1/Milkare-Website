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
		<div ref={ref} className={`flex justify-center px-4 ${showAccordion ? "opacity-100" : "opacity-0"} transition-opacity duration-500 motion-reduce:transition-none pt-24 pb-12`}>
			{inView ? (
				<div className={`accordion flex w-full max-w-4xl flex-col items-center border-[#212121] md:px-14`}>
					<TitleComponent title="Recent Works"/>
					<div className={` flex h-[600px] w-full flex-col gap-4 md:flex-row `}>
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
