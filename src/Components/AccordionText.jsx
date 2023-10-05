import React, { useState } from 'react'
import { AccordionItem } from './AccordionItem'

export const AccordionText = ({ faq }) => {
	const [openId, setId] = useState(null)

	return (
		<ul className='accordion-text'>
			{faq.map((faqItem, id) => {
				return (
					<AccordionItem
						onClick={() => (id === openId ? setId(null) : setId(id))}
						faqItem={faqItem}
						isOpen={id === openId}
						key={id}
					/>
				)
			})}
		</ul>
	)
}
