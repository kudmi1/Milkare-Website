import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { AccordionItem } from './AccordionItem'

export const AccordionText = ({ faq }) => {
	const [openId, setId] = useState(null)

	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	})

	return (
		<ul className='accordion-text' ref={ref}>
			{faq.map((faqItem, id) => {
				return (
					<div
						key={id}
						className={`${
							inView ? 'opacity-100' : 'opacity-0'
						} transition-opacity duration-500`}
						style={{ transitionDelay: `${id * 100 + 100}ms` }}
					>
						<AccordionItem
							onClick={() => (id === openId ? setId(null) : setId(id))}
							faqItem={faqItem}
							isOpen={id === openId}
							key={id}
						/>
					</div>
				)
			})}
		</ul>
	)
}
