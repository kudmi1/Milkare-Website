import { useInView } from "react-intersection-observer"
import { useLanguageContext } from "../Providers/LanguageContext"
import { AccordionText } from "./AccordionText"
import Table from "./Table"

export default function FAQ() {
  const { language } = useLanguageContext()

  const commonProps =
		'rounded-lg border border-thinLine bg-[#35275aa2] px-4 py-2 text-sm lg:text-base'

  const faq = [
		{
			question: language === 'english' ? 'What i draw' : 'Что я рисую',
			answer: <Table />,
		},

		{
			question: language === 'english' ? 'Commission style' : 'Стиль заказа',
			answer: (
				<div className={commonProps}>
					{language === 'english' ? (
						<>
							- Character (name, title and fandom) <br />- Сommercial use / a
							drawing with detailed background / additional character(s) / idea
							( pose, angle, etc.).
						</>
					) : (
						<>
							- Персонаж (имя, фандом) <br />- Коммерческое использование /
							рисунок с детализированным фоном / дополнительный персонаж / идея
							(поза, ракурс и т.д.).
						</>
					)}
				</div>
			),
		},

		{
			question:
				language === 'english' ? 'Character reference' : 'Референс персонажа',
			answer: (
				<div className={commonProps}>
					{language === 'english' ? (
						<>Art, description, etc.</>
					) : (
						<>Арт, описание и т.д.</>
					)}
				</div>
			),
		},

		{
			question: language === 'english' ? 'Deadline' : 'Сроки',
			answer: <div className={commonProps}>
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
		},
	]

  const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	})

  return(
    <div ref={ref} className='mb-8 w-full'>
      <AccordionText faq={faq} />
    </div>
  )
}