export default function HamburgerButton({ toggleHamburger, ariaExpanded }) {
	return (
		<div className='z-50 flex h-full items-center justify-end lg:hidden'>
			<button
				onClick={toggleHamburger}
				className='hamburger-btn effect-shine flex'
				aria-controls='primary-navigation'
				aria-expanded={ariaExpanded}
				id='hamburger-btn'
			>
				<svg
					className='hamburger fill-mainText'
					viewBox='0 0 100 100'
					width={30}
				>
					<rect
						className='line top-bar'
						width={80}
						height={7}
						x={10}
						y={27}
						rx={5}
					></rect>
					<rect
						className='line middle-bar'
						width={80}
						height={7}
						x={10}
						y={50}
						rx={5}
					></rect>
					<rect
						className='line bottom-bar'
						width={80}
						height={7}
						x={10}
						y={73}
						rx={5}
					></rect>
				</svg>
			</button>
		</div>
	)
}
