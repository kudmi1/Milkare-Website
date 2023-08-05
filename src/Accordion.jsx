/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import PanelComponent from './PanelComponent'
import TitleComponent from './TitleComponent'

const names = ['aqua', 'milka', 'himeno']

export default function Accordion({ language, content }) {
	const [expandedPanel, setExpandedPanel] = useState(0)
	const [showImage, setShowImage] = useState(false)

	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	})

	const showImageWithDelay = () => {
		setTimeout(() => {
			setShowImage(true)
		}, 50)
	}

	// if (inView) {
	// 	showImageWithDelay()
	// }

	return (
		<div
			ref={ref}
			className={`flex justify-center pb-12 pt-24 transition-opacity duration-500 motion-reduce:transition-none`}
		>
			<div
				className={`accordion flex w-full max-w-[1440px] flex-col items-center border-[#212121]`}
			>
				{/* <TitleComponent title='Recent Works' /> */}
				<div className=' w-full flex-col rounded-md border border-[#3b3b3b] bg-gradient-to-r from-mainGrayTransparent via-[#3f3f3f9a] to-mainGrayTransparent p-4 backdrop-blur-[10px]'>
					<h1
						className={`section-title mb-8 flex justify-start text-5xl font-extrabold sm:justify-center lg:mb-20 lg:mt-6 lg:text-7xl 
						${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
					>
						Последние работы
					</h1>
					<div className='hidden h-[600px] grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1 lg:grid'>
						{inView ? (
							<>
								<div
									className={`bg-slate-600 ${
										showImage
											? ''
											: 'effect-shine-skeleton'
									} rounded-md `}
								>
									<img
										onLoad={showImageWithDelay}
										src='images-accordion/aqua.webp'
										alt=''
										className={`grid-block pointer-events-none h-full w-full rounded-md object-cover ${
											showImage
												? 'scale-100 opacity-100'
												: 'scale-110 opacity-0'
										} transition-all duration-500`}
									/>
								</div>
								<div
									className={`bg-slate-600 ${
										showImage
											? ''
											: 'effect-shine-skeleton'
									} rounded-md `}
								>
									<img
										onLoad={showImageWithDelay}
										src='images-accordion/himeno.webp'
										alt=''
										className={`grid-block pointer-events-none h-full w-full rounded-md object-cover ${
											showImage
												? 'scale-100 opacity-100'
												: 'scale-110 opacity-0'
										} transition-all delay-200 duration-500`}
									/>
								</div>
								<div
									className={`bg-slate-600 ${
										showImage
											? ''
											: 'effect-shine-skeleton'
									} rounded-md `}
								>
									<img
										onLoad={showImageWithDelay}
										src='images-accordion/milka.webp'
										alt=''
										className={`grid-block pointer-events-none h-full w-full rounded-md object-cover ${
											showImage
												? 'scale-100 opacity-100'
												: 'scale-110 opacity-0'
										} transition-all delay-[400ms] duration-500`}
									/>
								</div>
							</>
						) : null}
					</div>
					<div
						className={`mx-auto flex h-[600px] w-full max-w-3xl flex-col gap-4 md:flex-row lg:hidden`}
					>
						{names.map((_, index) => (
							<PanelComponent
								key={index}
								index={index}
								expandedPanel={expandedPanel}
								setExpandedPanel={setExpandedPanel}
								imageNames={names}
								isText={true}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
