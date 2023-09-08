import { useLanguageContext } from '../Providers/LanguageContext'
import GoogleFormButton from './GoogleFormButton'

export default function AdditionPriceInfo() {
	const { language } = useLanguageContext()
	const divider = (
		<div class='flex w-full justify-center '>
			<div class='my-[12px] flex h-[1px] w-full items-center justify-center bg-priceColor text-center lg:my-[24px] '></div>
		</div>
	)
	return (
		<div className='mb-12 w-full rounded-md border border-[#3b3b3b] bg-gradient-to-r from-mainGrayTransparent via-[#3f3f3f9a] to-mainGrayTransparent px-4 backdrop-blur-[10px] md:px-12 lg:mb-24 lg:px-24 lg:py-6'>
			{language === 'english' ? (
				<>
					<div className='star-header relative my-6 rounded-lg border border-thinLine bg-[#212121bb] px-4 py-2'>
						<p className='text-lg lg:text-xl'>
							CHARACTERS WITH COMPLEX DESIGN:{' '}
							<span className='text-priceColor'>+10-75 $</span>
						</p>
						<p className='text-md mt-3 lg:text-lg'>
							Characters with a complex design come with an extra cost depending
							on the difficulty: many details, guns, weapons, very long hair,
							dynamic pose, bags, items, various skirt layers, wings, armor,
							lace, complex clothing pattern, tattoos etc.
						</p>
					</div>
					<div className='star-header relative my-6 rounded-lg border border-thinLine bg-[#212121bb] px-4 py-2'>
						<p className='text-lg lg:text-xl'>LINE ART INFORMATION</p>
						<p className='text-md mt-3 lg:text-lg'>
							The simplest style. Only base color fills and gradients are
							performed. The lowest detail.
						</p>
					</div>
					<p className='star-header relative my-6 rounded-lg border border-thinLine bg-[#212121bb] px-4 py-2 text-lg lg:text-xl'>
						Nude version: <span className='text-priceColor'>+50%</span> of the
						price character.
					</p>
					<p className='star-header relative my-6 rounded-lg border border-thinLine bg-[#212121bb] px-4 py-2 text-lg lg:text-xl'>
						Underwear/additional outfits:
						<span className='text-priceColor'> +20% - 100%</span> of the price
						character (depending on the complexity).
					</p>
					<p className='star-header relative my-6 rounded-lg border border-thinLine bg-[#212121bb] px-4 py-2 text-lg lg:text-xl'>
						ADDITIONAL CHARACTER:
						<span className='text-priceColor'> +100%</span> of the price (Max.{' '}
						<span>2</span> characters).
					</p>
					<p className='star-header relative my-6 rounded-lg border border-thinLine bg-[#212121bb] px-4 py-2 text-lg lg:text-xl'>
						Commercial rights: <span className='text-priceColor'>+100%</span> of
						the price.
					</p>
				</>
			) : (
				<>
					<div className='star-header relative my-6 rounded-lg border border-thinLine bg-[#212121bb] px-4 py-2'>
						<p className='text-lg lg:text-xl'>
							ПЕРСОНАЖИ СО СЛОЖНЫМ ДИЗАЙНОМ:{' '}
							<span className='text-priceColor'>+10-75 $</span>
						</p>
						<p className='text-md mt-3 lg:text-lg'>
							Персонажи со сложным дизайном оплачиваются дополнительно в
							зависимости от сложности: множество деталей, пистолеты, оружие,
							очень длинные волосы, динамичные позы, сумки, предметы, различные
							слои юбки, крылья, доспехи, кружева, сложный рисунок одежды,
							татуировки и т.д.
						</p>
					</div>
					<div className='star-header relative my-6 rounded-lg border border-thinLine bg-[#212121bb] px-4 py-2'>
						<p className='text-lg lg:text-xl'>ЛАЙН АРТ ИНФОРМАЦИЯ</p>
						<p className='text-md mt-3 lg:text-lg'>
							Простой стиль. Выполняются базовым цветом заливка, градиент.
							Наименьшая детализация.
						</p>
					</div>
					<p className='star-header relative my-6 rounded-lg border border-thinLine bg-[#212121bb] px-4 py-2 text-lg lg:text-xl'>
						Обнаженная версия: <span className='text-priceColor'>+50%</span> от
						стоимости персонажа.
					</p>
					<p className='star-header relative my-6 rounded-lg border border-thinLine bg-[#212121bb] px-4 py-2 text-lg lg:text-xl'>
						Нижнее белье/дополнительные наряды:
						<span className='text-priceColor'> +20% - 100%</span> от стоимости
						персонажа, в зависимости от сложности.
					</p>
					<p className='star-header relative my-6 rounded-lg border border-thinLine bg-[#212121bb] px-4 py-2 text-lg lg:text-xl'>
						ДОПОЛНИТЕЛЬНЫЙ ПЕРСОНАЖ:
						<span className='text-priceColor'> +100%</span> от суммы персонажа
						(Максимум <span>2</span> персонажа).
					</p>
					<p className='star-header relative my-6 rounded-lg border border-thinLine bg-[#212121bb] px-4 py-2 text-lg'>
						Коммерческое использование:{' '}
						<span className='text-priceColor'>+100%</span> от суммы.
					</p>
				</>
			)}

			<div className='flex w-full flex-col items-center justify-center rounded-md border border-thinLine bg-[#212121bb] px-4 py-4 md:flex-row md:justify-between'>
				<p className='mb-6 text-2xl md:mb-0 lg:text-2xl'>
					{language === 'english' ? 'Make a commission' : 'Сделать заказ'}
				</p>
				<GoogleFormButton />
			</div>
		</div>
	)
}
