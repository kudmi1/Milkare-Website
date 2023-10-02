import PanelComponent from './PanelComponent'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import PriceCard from './PriceCard'
import { useLanguageContext } from '../Providers/LanguageContext'
import AdditionPriceInfo from './AdditionPriceInfo'

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

export default function Price() {
	const { content } = useLanguageContext()
	const priceContent = content.priceSection

	const [expandedPanel, setExpandedPanel] = useState(0)
	const [expandedPanel1, setExpandedPanel1] = useState(0)
	const [expandedPanel2, setExpandedPanel2] = useState(0)

	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	})

	return (
		<div className='flex w-full max-w-6xl flex-col items-center pt-24 sm:px-4 z-20'>
			{/* <TitleComponent title="Price"/> */}
			<div className='w-full'>
				<PriceCard
					contentTitle={priceContent.bust.title}
					textContent={priceContent.bust.content}
					panelData={panelData[0].names}
					setState={setExpandedPanel}
					state={expandedPanel}
					textOnLeft={false}
					isAccordionVertical={true}
					isObjectTop={false}
				/>

				<PriceCard
					contentTitle={priceContent.halfBody.title}
					textContent={priceContent.halfBody.content}
					panelData={panelData[1].names}
					setState={setExpandedPanel1}
					state={expandedPanel1}
					textOnLeft={true}
					isAccordionVertical={false}
					isObjectTop={true}
				/>

				<PriceCard
					contentTitle={priceContent.fullBody.title}
					textContent={priceContent.fullBody.content}
					panelData={panelData[2].names}
					setState={setExpandedPanel2}
					state={expandedPanel2}
					textOnLeft={false}
					isAccordionVertical={false}
					isObjectTop={true}
				/>

				<PriceCard
					contentTitle={priceContent.background.title}
					textContent={priceContent.background.content}
					panelData={panelData[3].names}
					state={0}
					textOnLeft={true}
					isAccordionVertical={false}
				/>

				<AdditionPriceInfo/>
			</div>
		</div>
	)
}
