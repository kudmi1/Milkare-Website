import PanelComponent from './PanelComponent'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export default function PriceCard({
	panelData,
	state,
	setState,
	textOnLeft,
	contentTitle,
	textContent,
	isAccordionVertical,
	isObjectTop,
}) {
	const { ref, inView } = useInView({
		threshold: 0.4,
		triggerOnce: true,
	})

	const commonProps =
		'price-card-section mb-12 lg:mb-24 h-[650px] lg:h-[600px] bg-gradient-to-r from-mainGrayTransparent via-[#3f3f3f9a] to-mainGrayTransparent p-4 backdrop-blur-[10px] rounded-md w-full border border-[#3b3b3b]'

	function TextContent() {
		return (
			<div className='w-full md:w-[80%] '>
				<div
					className={`flex w-full flex-col items-center justify-evenly text-start text-5xl lg:h-full`}
				>
					<h1 className='text-3xl text-secondaryText lg:text-6xl '>
						{contentTitle}
					</h1>
					<div className='w-full lg:w-max py-6 text-center lg:text-start lg:pt-16'>
						<p
							className='pb-4 text-lg text-mainText lg:text-2xl rounded-lg border border-thinLine bg-[#212121bb] px-8 py-4'
							dangerouslySetInnerHTML={{
								__html: textContent,
							}}
						></p>
						
					</div>
				</div>
			</div>
		)
	}

	return (
		<div ref={ref}>
			<div className={commonProps}>
				<div
					className={`flex ${
						textOnLeft ? 'md:flex-row-reverse' : 'md:flex-row'
					} h-full w-full flex-col items-center justify-between transition-opacity duration-500 md:flex-row `}
				>
					<div
						className={`w-full sm:w-4/5 md:w-3/5 ${
							inView ? 'opacity-100' : 'opacity-0'
						} block justify-center transition-opacity duration-500 md:flex`}
					>
						<TextContent />
					</div>
					<div className='price-card-container accordion h-full w-full sm:w-4/5 md:w-1/2 lg:w-2/5'>
						<div
							className={`flex h-full w-full ${
								isAccordionVertical ? 'flex-col' : 'flex-row'
							} gap-4`}
						>
							{panelData.map((_, index) => (
								<PanelComponent
									key={index}
									index={index}
									expandedPanel={state}
									setExpandedPanel={setState}
									imageNames={panelData}
									isText={false}
									initialExpandedIndex={0}
									isObjectTop={isObjectTop}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}