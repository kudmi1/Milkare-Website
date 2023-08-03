
export default function NavigatorBig({
	section,
	isScrollToSection,
	selectedLink,
	handleClick,
	language,
	content,
}) {
	const underlineStyle = section === null || !isScrollToSection ? 'hidden' : ''
	return (
			<nav className='mynav black sticky bottom-0 left-0 z-[100] hidden h-full min-w-max items-center justify-center lg:flex'>
				<div
					className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-0 block h-1 w-1/3 rounded-full transition-transform duration-200 ${underlineStyle}`}
				></div>
				<div
					className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-0 block h-1 w-1/3 rounded-full transition-transform duration-200 ${underlineStyle}`}
				></div>
				<div
					className={`underline-animation pointer-events-none absolute bottom-0 left-0 z-0 block h-1 w-1/3 rounded-full transition-transform duration-200 ${underlineStyle}`}
				></div>
				<a
					// to='/gallery'
					href='#gallery'
					className={`gallery-link header-item z-10 flex h-full w-1/3 cursor-pointer items-center justify-center px-4 text-center ${
						selectedLink === 0 && isScrollToSection || section === 'gallery' && isScrollToSection
							? 'text-secondaryText'
							: 'effect-shine text-mainText'
					}`}
					onClick={() => handleClick(0, 'gallery')}
				>
					<p className='text-xl'>{content.header?.gallery}</p>
				</a>
				<a
					// to='/price'
					href='#price'
					className={`price-link header-item z-10 flex h-full w-1/3 cursor-pointer items-center justify-center px-4 text-center ${
						selectedLink === 1 && isScrollToSection || section === 'price' && isScrollToSection
							? 'text-secondaryText'
							: 'effect-shine text-mainText'
					}`}
					onClick={() => handleClick(1, 'price')}
				>
					<p className='text-xl '>{content.header?.price}</p>
				</a>
				<a
					// to='/info'
					href='#info'
					className={`'info-link header-item z-10 flex h-full w-1/3 cursor-pointer items-center justify-center px-4 text-center ${
						selectedLink === 2 && isScrollToSection || section === 'info' && isScrollToSection
							? 'text-secondaryText'
							: 'effect-shine text-mainText'
					}`}
					onClick={() => handleClick(2, 'info')}
				>
					<p className='text-xl'>{content.header?.info}</p>
				</a>
			</nav>
	)
}
