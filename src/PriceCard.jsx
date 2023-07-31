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
	const [showPriceCard, setShowPriceCard] = useState(false)
	const { ref, inView } = useInView({
		threshold: 0.4,
		triggerOnce: true,
	})

	const commonProps =
		'price-card-section mb-12 lg:mb-24 h-[600px] bg-gradient-to-r from-mainGrayTransparent via-[#3f3f3f9a] to-mainGrayTransparent p-4 backdrop-blur-[10px] rounded-md w-full border border-[#3b3b3b]'

	function TextContent() {
		return (
			<div className='w-full' >
				<div className={`flex w-full flex-col items-center justify-evenly text-start text-5xl lg:h-full `}>
					<h1 className='text-3xl text-secondaryText lg:text-6xl '>
						{contentTitle}
					</h1>
					<div className=' py-6 text-start'>
						<h3
							className='pb-4 text-lg text-mainText lg:text-2xl '
							dangerouslySetInnerHTML={{
								__html: textContent,
							}}
						></h3>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div ref={ref}>
			<div className={commonProps}>
				{textOnLeft ? (
					<div
						className={`flex h-full w-full flex-col items-center justify-between md:flex-row transition-opacity duration-500 `}
					>
						<div  className={`w-full sm:w-4/5 md:w-3/5 ${inView ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
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
				) : (
					<div
						className={`flex h-full w-full flex-col items-center justify-between md:flex-row transition-opacity duration-500 `}
					>
						<div className={`block w-full sm:w-4/5 md:hidden ${inView ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
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
										imageFolder={'images'}
										isText={false}
										initialExpandedIndex={0}
										isObjectTop={isObjectTop}
									/>
								))}
							</div>
						</div>
						<div className={`hidden w-3/5 md:flex ${inView ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
							<TextContent />
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
