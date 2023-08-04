import { useState } from 'react'
import TitleComponent from './TitleComponent'
import { useInView } from 'react-intersection-observer'
import SimpleGallery from './SimpleGallery'

const testArray = [1, 2, 3, 4, 5]

export default function InfoSection({ language, content }) {
	const [isOpen, setIsOpen] = useState()
	function handleOpen(index) {
		setIsOpen((prev) => (prev === index ? null : index))
	}

	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	})
	return (
		<div ref={ref}
			className='flex w-full max-w-6xl flex-col items-center pt-24 pb-12 md:pb-24 '
			
		>
			{/* <TitleComponent title='Info' /> */}

			<div className='flex w-full flex-col items-center justify-center rounded-md border border-[#3b3b3b] bg-gradient-to-r from-mainGrayTransparent via-[#3f3f3f9a] to-mainGrayTransparent pb-12 pt-4 backdrop-blur-[10px]'>
				<h1 className={`section-title mb-8 flex justify-start text-5xl font-extrabold sm:justify-center lg:mb-20 lg:mt-6 lg:text-7xl ${inView ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
					Information
				</h1>
				{testArray.map((_, index) => (
					<div
						onClick={() => handleOpen(index)}
						key={index}
						className={`info-panel mx-4 my-2 cursor-pointer rounded-sm border-2  p-4 hover:border-white md:w-2/3 ${
							isOpen === index ? 'border-mainText' : 'border-white/50'
						} ${inView ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
						style={{transitionDelay: `${(index * 100) + 100}ms`}}
					>
						<div className='flex w-full items-center justify-between'>
							<p className='select-none text-2xl'>Some question</p>
							{isOpen === index ? (
								<img src='svg/eye-close.svg' alt='chevron' />
							) : (
								<img src='svg/eye-open.svg' alt='chevron' />
							)}
						</div>

						<div
							className={`grid ${
								isOpen === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
							} duration-500' transition-[grid-template-rows]`}
						>
							<div className='overflow-hidden'>
								<p className='mt-6 select-none'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
									autem, deleniti commodi natus reprehenderit architecto iusto
									aliquam libero? Omnis magnam rerum molestiae maxime, nam iusto
									necessitatibus cupiditate enim dolore, accusantium dolorum
									saepe repellat, iure aliquid fuga alias quam beatae! Obcaecati
									maxime officiis adipisci maiores quasi sunt voluptas ipsum
									modi qui!
								</p>
							</div>
						</div>
					</div>
				))}
			</div>

			<div>
				<SimpleGallery galleryID={"my-gallery"} images={[
					{
						largeURL:
							'public/images/Lucy.webp',
						thumbnailURL:
							'public/images/Lucy.webp',
						width: 2480,
            height: 3508,
					},
				]} />
			</div>

			{/* <div>
				{content.infoSection}
			</div> */}
		</div>
	)
}
