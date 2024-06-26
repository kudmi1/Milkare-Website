/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useLanguageContext } from '../Providers/LanguageContext'
import PanelComponent from './PanelComponent'

const names = ['frieren_narcissus','everlasting_summer', 'maomao']

export default function Accordion() {
	const { language, content } = useLanguageContext()
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

	return (
		<div
			ref={ref}
			className={`flex justify-center pb-12 pt-24 transition-opacity duration-500 motion-reduce:transition-none`}
		>
			<div
				className={`accordion flex w-full max-w-full flex-col items-center border-[#212121] xl:max-w-[1380px] z-20`}
			>
				<div className='w-full flex-col rounded-md border-t border-b lg:border border-thinLine bg-gradient-to-b from-[#191924ef] to-[#1600419a] bg-opacity-70 p-4 '>
					<h1
						className={`section-title mb-8 flex justify-center text-center text-4xl font-extrabold text-secondaryText sm:justify-center lg:mb-20 lg:mt-6 lg:text-7xl 
						${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
					>
						{language === 'english' ? 'Recent Works' : 'Последние работы'}
					</h1>
					<div className='hidden h-[600px] grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1 xl:grid'>
						{inView ? (
							<>
								<div
									className={`bg-slate-600 ${
										showImage ? '' : 'effect-shine-skeleton'
									} overflow-hidden rounded-md`}
								>
									<img
									onContextMenu={(e) => e.preventDefault()}
										onLoad={showImageWithDelay}
										src='images-accordion/frieren_narcissus.webp'
										alt=''
										className={`grid-block h-full w-full rounded-md object-cover transition-all delay-0 duration-500 ease-linear hover:scale-110 hover:duration-[3s] ${
											showImage
												? 'scale-100 opacity-100 blur-0'
												: 'opacity-50 blur-[2px]'
										} `}
									/>
								</div>
								<div
									className={`bg-slate-600 ${
										showImage ? '' : 'effect-shine-skeleton'
									} overflow-hidden rounded-md`}
								>
									<img
									onContextMenu={(e) => e.preventDefault()}

										onLoad={showImageWithDelay}
										src='images-accordion/everlasting_summer.webp'
										alt=''
										className={`grid-block h-full w-full rounded-md object-cover transition-all delay-0 duration-500 ease-linear hover:scale-110 hover:duration-[3s] ${
											showImage
												? 'scale-100 opacity-100 blur-0'
												: 'opacity-50 blur-[2px]'
										} `}
									/>
								</div>
								<div
									className={`bg-slate-600 ${
										showImage ? '' : 'effect-shine-skeleton'
									} overflow-hidden rounded-md`}
								>
									<img
									onContextMenu={(e) => e.preventDefault()}

										onLoad={showImageWithDelay}
										src='images-accordion/maomao.webp'
										alt=''
										className={`grid-block h-full w-full rounded-md object-cover transition-all delay-0 duration-500 ease-linear hover:scale-110 hover:duration-[3s] ${
											showImage
												? 'scale-100 opacity-100 blur-0'
												: 'opacity-50 blur-[2px]'
										} `}
									/>
								</div>
							</>
						) : null}
					</div>
					<div
						className={`mx-auto flex h-[600px] w-full max-w-3xl flex-col gap-4 sm:flex-row xl:hidden`}
					>
						{names.map((_, index) => (
							<PanelComponent
								key={index}
								index={index}
								expandedPanel={expandedPanel}
								setExpandedPanel={setExpandedPanel}
								imageNames={names}
								isText={false}
								isObjectTop={index === 1 ? false : true}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
