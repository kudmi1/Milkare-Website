import { useInView } from 'react-intersection-observer'
import { useLanguageContext } from '../Providers/LanguageContext'
import { BgPriceSmallCard } from './BgPriceSmallCard'

export default function BgPriceCard({ names }) {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	})
	const { language } = useLanguageContext()
  const star = (
    <div className="flex gap-2 h-6 justify-center md:hidden">
      <img src="svg/star-thin.svg" alt="" />
    </div>
  )

	const text = {
		simple: {
			header: language === 'english' ? 'Simple - ' : 'Простой - ',
			price: language === 'english' ? 'free' : 'бесплатно',
			description:
				language === 'english'
					? 'flat color / gradient / simple texture'
					: 'однотонный / градиент / простые текстуры',
		},
		medium: {
			header: language === 'english' ? 'Medium - ' : 'Средний - ',
			price: language === 'english' ? '3 - 18$' : '300 - 1800₽',
			description:
				language === 'english'
					? 'blurred background / simple landscapes'
					: 'размытый фон / простой пейзаж',
		},
		hard: {
			header: language === 'english' ? 'Hard - ' : 'Сложный - ',
			price: '+50%',
			description:
				language === 'english'
					? 'complicated landscapes / rooms / etc'
					: 'сложный пейзаж / комната / тд',
		},
	}

	return (
		<div ref={ref}>
			<div className='price-card-section mb-12 lg:mb-24 py-4 sm:px-4 bg-gradient-to-b from-[#191924ef] to-[#1600419a] bg-opacity-70 rounded-md w-full border-t border-b sm:border border-thinLine'>
				<div
					className={`flex h-full w-full flex-col items-center md:justify-between transition-opacity duration-500 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
				>
					<div
						className={`w-full md:mt-6 md:mb-12 mb-6 justify-center transition-opacity duration-500 flex`}
					>
						<h1 className=' content-title text-3xl text-secondaryText lg:text-6xl '>
							{language === 'english' ? 'Background' : 'Фон'}
						</h1>
					</div>

					<div className={`price-card-container accordion w-full`}>
						<div
							className={`flex h-full w-full justify-between flex-col md:flex-row gap-4`}
						>
							<BgPriceSmallCard
								image={names[0]}
								header={text.simple.header}
								price={text.simple.price}
								description={text.simple.description}
							/>
              {star}
							<BgPriceSmallCard
								image={names[1]}
								header={text.medium.header}
								price={text.medium.price}
								description={text.medium.description}
							/>
              {star}
							<BgPriceSmallCard
								image={names[2]}
								header={text.hard.header}
								price={text.hard.price}
								description={text.hard.description}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
