import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useLanguageContext } from '../Providers/LanguageContext'
import Table from './Table'

export default function InfoQuestions() {
	const { language } = useLanguageContext()

	const infoContent = [
		<Table />,
		<div className='rounded-lg border border-thinLine bg-[#35275aa2] px-4 py-2 text-sm lg:text-base'>
			{language === 'english' ? (
				<>
					- Character (name, title and fandom) <br />- Сommercial use / a
					drawing with detailed background / additional character(s) / idea (
					pose, angle, etc.).
				</>
			) : (
				<>
					- Персонаж (имя, фандом) <br />- Коммерческое использование / рисунок
					с детализированным фоном / дополнительный персонаж / идея (поза,
					ракурс и т.д.).
				</>
			)}
		</div>,
		<div className='rounded-lg border border-thinLine bg-[#35275aa2] px-4 py-2 text-sm lg:text-base'>
			{language === 'english' ? (
				<>Art, description, etc.</>
			) : (
				<>Арт, описание и т.д.</>
			)}
		</div>,
		<div className='rounded-lg border border-thinLine bg-[#35275aa2] px-4 py-2 text-sm lg:text-base'>
			{language === 'english' ? (
				<>
					If you have a deadline, please let me know in advance. With deadline{' '}
					<span className='text-priceColor'> +50%</span>
					<br />☾ One art work takes from{' '}
					<span className='text-priceColor'> 10</span> to{' '}
					<span className='text-priceColor'>40</span> hours of work! <br />
					☾ Once payment is received, allow me up to two weeks to finish. <br />
					☾ Feel free to tell me about any necessary corrections while it's
					still a sketch. Slight revisions are allowed throughout the whole
					process, major revisions are only
				</>
			) : (
				<>
					Если у Вас есть дедлайн, пожалуйста, сообщите мне об этом заранее. С
					дедлайном <span className='text-priceColor'> +50%</span>
					<br />☾ Работа над одним рисунок занимает от{' '}
					<span className='text-priceColor'> 10</span> до{' '}
					<span className='text-priceColor'>40</span> часов! <br />
					☾ После получения оплаты, дайте мне до двух недель на завершение
					работы. <br />☾ Не стесняйтесь сообщать мне о любых необходимых
					исправлениях, пока это ещё скетч. Незначительные изменения допускаются
					в течение всего процесса работы, значительные - только в процессе
					работы над скетчем. Однако за кардинальные изменения может взиматься
					дополнительная плата.
				</>
			)}
		</div>,
	]

	const infoQuestion =
		language === 'english'
			? ['What i draw', 'Commission style', 'Character reference', 'Deadline']
			: ['Что я рисую', 'Стиль заказа', 'Референс персонажа', 'Сроки']


  const [isOpen, setIsOpen] = useState(null)

	function handleOpen(index) {
		setIsOpen(prev => prev === index ? null : index)
	}

	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	})
	return (
		<div ref={ref} className='mb-8 w-full'>
			{infoQuestion.map((text, index) => (
				<div
					
					key={index}
					className={`info-panel my-2 w-full rounded-md border border-b-4  border-thinLine hover:border-b-secondaryText
				
				 
					${isOpen === index ? ' border-b-secondaryText' : 'border-b-white/50'}
					${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
					style={{ transitionDelay: `${index * 100 + 100}ms` }}
				>
					<button className='flex w-full items-center justify-between p-4' onClick={() => handleOpen(index)}>
						<p className='subtitle-text select-none text-lg lg:text-lg'>
							{text}
						</p>
						<img src='svg/eye-open.svg' alt='chevron' />
					</button>

					<div
						className={`grid ${
							isOpen === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
						} will-change-[transform] transition-all duration-200`}
					>
						<div className={`overflow-hidden`}>
							<div className={`p-4`}>{infoContent[index]}</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
