import PanelComponent from './PanelComponent'
import { useEffect, useState } from 'react'
import PriceCard from './PriceCard'

const panelData = [
	{
		names: ['makima', 'kokomi'],
	},
	{
		names: ['lucy', 'purplegirl'],
	},
	{
		names: ['komi', 'redgirl'],
	},
	{
		names: ['milka'],
	},
]

export default function PriceSection({ language, content }) {
	const [expandedPanel, setExpandedPanel] = useState(0)
	const [expandedPanel1, setExpandedPanel1] = useState(0)
	const [expandedPanel2, setExpandedPanel2] = useState(0)

	return (
		<div
			className='max-w-6xl flex-col items-center justify-center py-24 '
			id='price'
		>
				<PriceCard
					contentTitle={content.priceSection?.bust?.title}
					textContent={content.priceSection?.bust?.content}
					panelData={panelData[0].names}
					setState={setExpandedPanel}
					state={expandedPanel}
					textOnLeft={false}
					isAccordionVertical={true}
				/>

				<PriceCard
					contentTitle={content.priceSection?.halfBody?.title}
					textContent={content.priceSection?.halfBody?.content}
					panelData={panelData[1].names}
					setState={setExpandedPanel1}
					state={expandedPanel1}
					textOnLeft={true}
					isAccordionVertical={false}
				/>

				<PriceCard
					contentTitle={content.priceSection?.fullBody?.title}
					textContent={content.priceSection?.fullBody?.content}
					panelData={panelData[2].names}
					setState={setExpandedPanel2}
					state={expandedPanel2}
					textOnLeft={false}
					isAccordionVertical={false}
				/>

				<PriceCard
					contentTitle={content.priceSection?.background?.title}
					textContent={content.priceSection?.background?.content}
					panelData={panelData[3].names}
					state={0}
					textOnLeft={true}
					isAccordionVertical={false}
				/>
		</div>
	)
}
