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
		'price-card-section mb-48 h-[800px] md:h-[600px] bg-gradient-to-r from-mainGrayTransparent via-[#3f3f3f9a] to-mainGrayTransparent p-4 	backdrop-blur-[10px] rounded-md w-full'

	function TextContent() {
		return (
			<div className='flex flex-col items-center justify-evenly text-5xl leading-normal lg:h-full lg:w-1/2'>
				<h1 className='text-3xl text-secondaryText lg:text-6xl'>
					{contentTitle}
				</h1>
				<div className='px-6 py-6 text-start'>
					<p
						className='pb-4 text-xl text-secondaryText lg:text-3xl'
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
		<div ref={ref} className='mx-4 xl:mx-0'>
			{inView ? (
				<div className={commonProps}>
					{textOnLeft ? (
						<div
							className={`flex h-full w-full flex-col items-center justify-between md:flex-row ${
								showPriceCard ? 'opacity-100' : 'opacity-0'
							} transition-opacity duration-500 `}
						>
							<div>
								<TextContent />
							</div>
							<div className='price-card-container accordion h-full w-4/5 min-w-[380px] md:w-2/5'>
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
							className={`flex h-full w-full flex-col items-center justify-between md:flex-row ${
								showPriceCard ? 'opacity-100' : 'opacity-0'
							} transition-opacity duration-500 `}
						>
							<div className='block md:hidden'>
								<TextContent />
							</div>
							<div className='price-card-container accordion h-full w-4/5 min-w-[380px] md:w-2/5'>
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
							<div className='md:block hidden'>
								<TextContent />
							</div>
						</div>
					)}
				</div>
			) : (
				<div className={`${commonProps} effect-shine-skeleton`}></div>
			)}
		</div>
	)
}
