import { useState, useEffect } from 'react'

export default function ToTop({ position }) {
	const [showTopBtn, setShowTopBtn] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 600) {
				setShowTopBtn(true)
			} else {
				setShowTopBtn(false)
			}
		})
	}, [])

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return (
		<div
			className={`to-top-btn fixed right-6 active:bg-activeButton overflow-hidden bg-gradient-to-b from-[#191924ef] to-[#1600419a] backdrop-blur-[10px] ${position} z-[39] h-12 w-12 rounded-full md:h-16 md:w-16 transition-colors border-t border-thinLine ${
				showTopBtn
					? 'pointer-events-auto translate-y-0 opacity-100'
					: 'pointer-events-none translate-y-20 opacity-0'
			} `}
		>
			<button
				className='effect-shine flex h-full w-full items-center justify-center'
				onClick={goToTop}
				id='to-top-btn'
				aria-label='to-top-btn'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='#f9ded1'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					stroke='#f9ded1'
					className='h-7 w-7 md:h-8 md:w-8'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75'
					/>
				</svg>
			</button>
		</div>
	)
}
