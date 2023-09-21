import { useLanguageContext } from '../Providers/LanguageContext'
import InfoQuestions from './InfoQuestions'

export default function TOS() {
	const { language } = useLanguageContext()
	return (
		<div className='flex w-full flex-col items-center rounded-lg border border-thinLine bg-[#2d3552] px-4 py-2 md:w-2/3'>
			<h4 className='mb-6'>
				{language === 'english'
					? 'Terms of Service'
					: 'Условия предоставления услуг'}
			</h4>
      <InfoQuestions />
			{language === 'english' ? (
				<div className='w-full'>
					<div className='mb-6 w-full'>
						<p className='text-lg lg:text-xl'>PAYMENT METHOD: </p>
						<p className='text-md lg:text-lg'>
							Boosty (PayPal/credit card), EasyStaff
						</p>
					</div>
					<p className='text-md lg:text-lg'>
						<ul className='list-disc list-inside'>
							<li>
								<span className='text-priceColor'>50%</span> payment before I
								start, then pay the rest after approving the sketch.
							</li>
							<li>No refunds unless I am unable to complete your commission.</li>
							<li>Finished artwork will be sent via email.</li>
							<li>
								Artwork is for personal use only{' '}
								<span className='text-red-400'>CAN NOT</span> use the
								illustration for profit, commercial products (monetized videos,
								merchandise, prints, books, etc).
							</li>
							<li>You may post the artwork as long as I'm given credit.</li>
							<li>
								I may post or include the artwork in my portfolio unless
								discussed otherwise.
							</li>
							<li>I have the right to refuse a commission.</li>
						</ul>
					</p>
				</div>
			) : (
				<div className='w-full pl-4'>
					<div className='mb-6 w-full'>
						<p className='text-lg lg:text-xl'>СПОСОБ ОПЛАТЫ: </p>
						<p className='text-md lg:text-lg'>Карта (Тинькофф), Boosty</p>
					</div>
					<p className='text-md lg:text-lg'>
						<ul className='list-disc'>
							<li>
								<span className='text-priceColor'>50%</span> оплаты до начала
								работы, остальное после утверждения скетча.
							</li>
							<li>
								Оплата не возвращается, за исключением случаев, когда я не могу
								выполнить Ваш заказ.
							</li>
							<li>Готовые работы будут отправлены по электронной почте.</li>
							<li>
								Иллюстрация предназначена только для личного использования
								<span className='text-red-400'> ЗАПРЕЩЕНО</span> использовать
								иллюстрацию для получения прибыли, коммерческих продуктов
								(монетизированных видео, товаров, принтов, книг и т.д.).
							</li>
							<li>
								Вы можете разместить иллюстрацию при условии, что Вы укажите меня
								автором.
							</li>
							<li>
								Я могу опубликовать или включить иллюстрацию в свое портфолио,
								если не оговорено иное.
							</li>
							<li>Я имею право отказать в выполнении заказа.</li>
						</ul>
					</p>
				</div>
			)}
		</div>
	)
}
