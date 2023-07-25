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
}) {
	const [showPriceCard, setShowPriceCard] = useState(false)
	const { ref, inView } = useInView({
		threshold: 0.4,
		triggerOnce: true,
	})

	const commonProps =
		'price-card-section mb-48 h-[600px] bg-gradient-to-r from-mainGrayTransparent via-[#3f3f3f9a] to-mainGrayTransparent p-6 	backdrop-blur-[10px] rounded-md w-[72rem]'

	function TextContent() {
		return (
			<div className='flex h-full w-1/2 flex-col items-center justify-evenly text-5xl leading-normal '>
				<h1 className='text-6xl text-secondaryText'>{contentTitle}</h1>
				<div className='px-6 py-6 text-center lg:text-start'>
					<p
						className='pb-4 text-3xl text-secondaryText'
						dangerouslySetInnerHTML={{
							__html: textContent,
						}}
					></p>
				</div>
			</div>
		)
	}

	const showPriceCardWithDelay = () => {
		setTimeout(() => {
			setShowPriceCard(true)
		}, 100)
	}

	if (inView) {
		showPriceCardWithDelay()
	}

	return (
		<div ref={ref}>
			{inView ? (
				<div className={commonProps}>
					{textOnLeft ? (
						<div
							className={`flex h-full w-full items-center justify-between ${
								showPriceCard ? 'opacity-100' : 'opacity-0'
							} transition-opacity duration-500 `}
						>
							<TextContent />
							<div className='price-card-container accordion h-full w-2/5 min-w-[400px]'>
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
										/>
									))}
								</div>
							</div>
						</div>
					) : (
						<div
							className={`flex h-full w-full items-center justify-between ${
								showPriceCard ? 'opacity-100' : 'opacity-0'
							} transition-opacity duration-500 `}
						>
							<div className='price-card-container accordion h-full w-2/5 min-w-[400px]'>
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
											format={'webp'}
											isText={false}
											initialExpandedIndex={0}
										/>
									))}
								</div>
							</div>
							<TextContent />
						</div>
					)}
				</div>
			) : (
				<div className={`${commonProps} effect-shine-skeleton`}></div>
			)}
		</div>
	)
}
