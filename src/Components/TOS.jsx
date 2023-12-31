import { useLanguageContext } from '../Providers/LanguageContext'
import FAQ from './FAQ'

export default function TOS({ loaded }) {
	const { language } = useLanguageContext()
	const gradientBG = 'bg-gradient-to-t from-[#2c2649cc] to-[#1600419a]'
	return (
		<div className='flex w-full flex-col items-center rounded-lg border border-thinLine bg-[#1600419a] px-4 py-2 text-mainText md:w-2/3'>
			<h4 className='nav-text mb-6 text-center'>
				{language === 'english'
					? 'Terms of Service'
					: 'Условия предоставления услуг'}
			</h4>
			<FAQ />
			{language === 'english' ? (
				<div
					className={`w-full ${
						loaded
							? 'translate-y-0 opacity-100 delay-[500ms]'
							: '-translate-y-3 opacity-0'
					} transition-all duration-300`}
				>
					<div className='mb-6 w-full'>
						<p className='nav-text text-lg lg:text-xl'>PAYMENT METHOD: </p>
						<p className='text-md lg:text-lg'>
							Boosty (PayPal / credit card), DonationAlerts
						</p>
					</div>
					<div className='text-sm lg:text-base '>
						<ul className='list-inside list-disc'>
							<li>
								<span className='text-priceColor'>50%</span> payment before I
								start, then pay the rest after approving the sketch.
							</li>
							<li>
								No refunds unless I am unable to complete your commission.
							</li>
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
					</div>
				</div>
			) : (
				<div
					className={`w-full ${
						loaded
							? 'translate-y-0 opacity-100 delay-[500ms]'
							: '-translate-y-3 opacity-0'
					} transition-all duration-300`}
				>
					<div className='mb-6 w-full'>
						<p className='nav-text text-lg lg:text-xl'>СПОСОБ ОПЛАТЫ: </p>
						<p className='text-md lg:text-lg'>
							Карта (Тинькофф), DonationAlerts
						</p>
					</div>
					<div className='text-sm lg:text-base'>
						<ul className='list-inside list-disc'>
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
								Вы можете разместить иллюстрацию при условии, что Вы укажите
								меня автором.
							</li>
							<li>
								Я могу опубликовать или включить иллюстрацию в свое портфолио,
								если не оговорено иное.
							</li>
							<li>Я имею право отказать в выполнении заказа.</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	)
}
