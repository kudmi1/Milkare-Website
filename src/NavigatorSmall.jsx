export default function NavigatorSmall({
	section,
	selectedLink,
	isScrollToSection,
	handleClick,
	language,
	content
}) {
	return (
		<div className='relative flex h-full w-full items-center lg:hidden'>
			<nav className='mynav black z-[20] flex h-full w-full items-center justify-center '>
				<div
					className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-0 block h-1 w-1/3 rounded-full transition-transform duration-200`}
				></div>
				<div
					className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-0 block h-1 w-1/3 rounded-full transition-transform duration-200`}
				></div>
				<div
					className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-0 block h-1 w-1/3 rounded-full transition-transform duration-200`}
				></div>
				<a
					href='#gallery'
					className={`gallery-link header-item z-10 inline-block w-1/3 cursor-pointer px-4 text-center ${
						selectedLink === 0 && isScrollToSection || section === 'gallery' && isScrollToSection
							? 'text-secondaryText'
							: 'effect-shine text-mainText'
					}`}
					onClick={() => handleClick(0, 'gallery')}
				>
					{content.header?.gallery}
				</a>
				<a
					href='#price'
					className={`price-link header-item z-10 inline-block w-1/3 cursor-pointer px-4 text-center ${
						selectedLink === 1 && isScrollToSection || section === 'price' && isScrollToSection
							? 'text-secondaryText'
							: 'effect-shine text-mainText'
					}`}
					onClick={() => handleClick(1, 'price')}
				>
					{content.header?.price}
				</a>

				<a
					href='#info'
					className={`info-link header-item z-10 inline-block w-1/3 cursor-pointer px-4 text-center ${
						selectedLink === 2 && isScrollToSection || section === 'info' && isScrollToSection
							? 'text-secondaryText'
							: 'effect-shine text-mainText'
					}`}
					onClick={() => handleClick(2, 'info')}
				>
					{content.header?.info}
				</a>
			</nav>
		</div>
	)
}
