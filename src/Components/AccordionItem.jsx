import React, { useRef } from 'react'

export const AccordionItem = ({ faqItem, onClick, isOpen }) => {
	const itemRef = useRef(null)

	return (
		<li
			className={`'accordion-item my-2 w-full ${
				isOpen ? 'border-b-secondaryText' : ''
			} border-thinLine rounded-md border border-b-4 hover:border-b-secondaryText`}
		>
			<button
				className='accordion-header subtitle-text flex w-full select-none items-center justify-between overflow-hidden p-4 text-lg lg:text-lg'
				onClick={() => onClick()}
			>
				{faqItem.question}
				<div>
					
				</div>
				{isOpen ? (
				<img src='svg/eye-close.svg' alt='chevron' />

				): (
					<img src='svg/eye-open.svg' alt='chevron' />

				)}
			</button>
			<div
				className={`accordion-collapse h-0 overflow-hidden transition-[height] duration-300`}
				style={
					isOpen ? { height: itemRef.current.scrollHeight } : { height: '0px' }
				}
			>
				<div className='accordion-body p-4' ref={itemRef}>
					{faqItem.answer}
				</div>
			</div>
		</li>
	)
}
