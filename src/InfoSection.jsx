import { useState } from 'react'

const testArray = [1, 2, 3, 4, 5]

export default function InfoSection({ language, content }) {
	const [isOpen, setIsOpen] = useState(null)
	function handleOpen(index) {
		setIsOpen((prev) => (prev === index ? null : index))
	}
	return (
		<div
			className='flex py-24 w-full max-w-7xl flex-col items-center px-4 '
			id='info'
		>
			<div
				className={`flex h-16 w-1/2 max-w-lg items-center justify-center rounded-2xl border border-[#3b3b3b] bg-gradient-to-r from-mainGrayTransparent via-[#3f3f3fd2] to-mainGrayTransparent bg-cover backdrop-blur-[40px] transition-opacity duration-500`}
			>
				<h1 className='header-section my-4 select-none text-center text-4xl text-mainText'>
					Information
				</h1>
			</div>

			<div className='mt-12 flex w-full flex-col items-center justify-center rounded-md bg-gradient-to-r from-mainGrayTransparent via-[#3f3f3f9a] to-mainGrayTransparent py-12 backdrop-blur-[10px]'>
				{testArray.map((_, index) => (
					<div
						key={index}
						className='info-panel my-2 mx-4	 cursor-pointer rounded-sm border-2 p-4 md:w-2/3'
						onClick={() => handleOpen(index)}
					>
						<div className='flex w-full items-center justify-between'>
							<p className='text-2xl'>Grid is awesome</p>
							<img src='icons/chevron.svg' alt='chevron' />
						</div>

						<div
							className={`grid ${
								isOpen === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
							} duration-500' transition-[grid-template-rows]`}
						>
							<div className='overflow-hidden'>
								<p className='mt-6'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod autem, deleniti commodi natus reprehenderit architecto iusto aliquam libero? Omnis magnam rerum molestiae maxime, nam iusto necessitatibus cupiditate enim dolore, accusantium dolorum saepe repellat, iure aliquid fuga alias quam beatae! Obcaecati maxime officiis adipisci maiores quasi sunt voluptas ipsum modi qui!
								</p>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* <div>
				{content.infoSection}
			</div> */}
		</div>
	)
}
