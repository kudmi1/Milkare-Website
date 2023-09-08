import { useInView } from 'react-intersection-observer'
import { useLanguageContext } from '../Providers/LanguageContext'
import GoogleFormButton from './GoogleFormButton'
import TOS from './TOS'


export default function InfoSection() {
	const { language } = useLanguageContext()

	// const infoContent = [
	// 	<Table />,
	// 	<div className='rounded-lg border border-thinLine bg-[#212121bb] px-4 py-2'>
	// 		{language === 'english' ? (
	// 			<>
	// 				- Character (name, title and fandom) <br />- Сommercial use/a drawing
	// 				with detailed background/additional character(s)/ idea ( pose, angle,
	// 				etc.).
	// 			</>
	// 		) : (
	// 			<>
	// 				- Персонаж (имя, фандом) <br />- Коммерческое использование/рисунок с
	// 				детализированным фоном/дополнительный персонаж/ идея (поза, ракурс и
	// 				т.д.).
	// 			</>
	// 		)}
	// 	</div>,
	// 	<div className='rounded-lg border border-thinLine bg-[#212121bb] px-4 py-2'>
	// 		{language === 'english' ? (
	// 			<>Art, description, etc.</>
	// 		) : (
	// 			<>Арт, описание и т.д.</>
	// 		)}
	// 	</div>,
	// 	<div className='rounded-lg border border-thinLine bg-[#212121bb] px-4 py-2'>
	// 		{language === 'english' ? (
	// 			<>
	// 				If you have a deadline, please let me know in advance. With deadline{' '}
	// 				<span className='text-priceColor'> +50%</span>
	// 				<br />☾ One art work takes from{' '}
	// 				<span className='text-priceColor'> 10</span> to{' '}
	// 				<span className='text-priceColor'>40</span> hours of work! <br />
	// 				☾ Once payment is received, allow me up to two weeks to finish. <br />
	// 				☾ Feel free to tell me about any necessary corrections while it's
	// 				still a sketch. Slight revisions are allowed throughout the whole
	// 				process, major revisions are only
	// 			</>
	// 		) : (
	// 			<>
	// 				Если у Вас есть дедлайн, пожалуйста, сообщите мне об этом заранее. С
	// 				дедлайном <span className='text-priceColor'> +50%</span>
	// 				<br />☾ Работа над одним рисунок занимает от{' '}
	// 				<span className='text-priceColor'> 10</span> до{' '}
	// 				<span className='text-priceColor'>40</span> часов! <br />
	// 				☾ После получения оплаты, дайте мне до двух недель на завершение
	// 				работы. <br />☾ Не стесняйтесь сообщать мне о любых необходимых
	// 				исправлениях, пока это ещё скетч. Незначительные изменения допускаются
	// 				в течение всего процесса работы, значительные - только в процессе
	// 				работы над скетчем. Однако за кардинальные изменения может взиматься
	// 				дополнительная плата.
	// 			</>
	// 		)}
	// 	</div>,
	// ]

	// const infoQuestion =
	// 	language === 'english'
	// 		? ['What i draw', 'Commission style', 'Character reference', 'Deadline']
	// 		: ['Что я рисую', 'Стиль заказа', 'Референс персонажа', 'Сроки']

	// const [isOpen, setIsOpen] = useState()
	// function handleOpen(index) {
	// 	setIsOpen((prev) => (prev === index ? null : index))
	// }

	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	})
	return (
		<div
			ref={ref}
			className='flex w-full max-w-6xl flex-col items-center pb-12 pt-24 md:pb-24 '
		>

			<div className='flex w-full flex-col items-center justify-center rounded-md border border-[#3b3b3b] bg-gradient-to-r from-mainGrayTransparent via-[#3f3f3f9a] to-mainGrayTransparent px-4 py-4 md:py-12 pt-4 backdrop-blur-[10px] lg:px-0'>
				{/* <h1
					className={`section-title mb-8 flex justify-start text-5xl font-extrabold sm:justify-center lg:mb-20 lg:mt-6 lg:text-7xl ${
						inView ? 'opacity-100' : 'opacity-0'
					} transition-opacity duration-500`}
				>
					Information
				</h1> */}
				<div className='mb-12 flex w-full flex-col items-center justify-center rounded-md border border-thinLine bg-[#212121bb] px-4 py-4 sm:w-2/3 md:flex-row md:justify-between'>
					<p className='mb-6 text-2xl md:mb-0 lg:text-2xl'>
						{language === 'english' ? 'Make a commission' : 'Сделать заказ'}
					</p>
					<GoogleFormButton />
				</div>

				{/* {infoQuestion.map((text, index) => (
					<div
						onClick={() => handleOpen(index)}
						key={index}
						className={`info-panel mx-4 my-2 w-full cursor-pointer rounded-md border border-b-4 border-thinLine p-4 backdrop-blur-md hover:border-b-secondaryText md:w-2/3 ${
							isOpen === index ? ' border-b-secondaryText' : 'border-b-white/50'
						} ${
							inView ? 'opacity-100' : 'opacity-0'
						} transition-opacity duration-500`}
						style={{ transitionDelay: `${index * 100 + 100}ms` }}
					>
						<div className='flex w-full items-center justify-between'>
							<p className='select-none text-xl'>{text}</p>
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
							<div className='overflow-hidden '>
								<p className='mt-6 select-none '>{infoContent[index]}</p>
							</div>
						</div>
					</div>
				))} */}
				<TOS />
			</div>
		</div>
	)
}
