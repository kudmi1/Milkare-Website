function price(amount) {
	return `<span class='text-priceColor'>${amount}</span>`
}
const divider = `<div class="w-full flex justify-center "><div class='flex justify-center items-center bg-priceColor w-full text-center h-[1px] my-[12px] lg:my-[24px] '></div></div>`

export const data = {
	english: {
		header: {
			gallery: 'Gallery',
			price: 'Price',
			info: 'ToS',
		},
		gallerySection: {
			speedpaint: {
				speedpaintTitle: 'Speedpaint',
				firstLine: 'Speedpaint of Aqua',
				secondLine: 'More on',
			},
		},
		priceSection: {
			bust: {
				title: 'Bust',
				content: `Full render ${price(
					'20$'
				)} ${divider} Line art + flat color ${price('10$')}`,
			},
			halfBody: {
				title: 'Half Body',
				content: `Full render ${price(
					'40$'
				)} ${divider} Line art + flat color ${price('15$')}</span>`,
			},
			fullBody: {
				title: 'Full Body',
				content: `Full render ${price('58 - 75$')} ${divider} Line art + flat color ${price('23$')}`,
			},
			background: {
				title: 'Background',
				content: `Simple <b>${price('free')}</b> <br/> <span class='text-lg'>flat color / gradient / simple texture</span> ${divider} Medium ${price(
					'6 - 12$'
				)} <br/>  <span class='text-lg'>blurred background / simple landscapes</span> ${divider} Hard ${price('+50%')} <br/> <span class='text-lg'>complicated landscapes / rooms / etc</span>`,
			},
		},
		infoSection:
			'Combining lazy loading with low-quality placeholders You have the option to lazy-load the original image only when the user scrolls near them. Until then, only a low-quality placeholder is loaded. This saves a lot of network bandwidth if the user never scrolls further down. Yo also specify a raw transformation if you want more control over the URL of the low-quality image placeholder. In this case, the SDK ignores quali and blur parameters. will not throw an error and simply display nothing. This way, once the useEffect sets the correct content based on the selected language, the content will be displayed automatically without any issues.',
	},

	russian: {
		header: {
			gallery: 'Галерея',
			price: 'Цены',
			info: 'Условия',
		},
		gallerySection: {
			accordionTitle: 'Последние Работы',
			galleryTitle: 'Галерея',
			speedpaint: {
				speedpaintTitle: 'Спидпеинт',
				firstLine: 'Спидпеинт Аквы',
				secondLine: 'Больше на',
			},
		},
		priceSection: {
			bust: {
				title: 'Портрет',
				content: `Полный рендер ${price(
					'2400₽'
				)} ${divider} Лайн арт + однотонный цвет ${price('800₽')}`,
			},
			halfBody: {
				title: 'Полтела',
				content: `Полный рендер ${price(
					'4090₽'
				)} ${divider} Лайн арт + однотонный цвет ${price('1500₽')}`,
			},
			fullBody: {
				title: 'Полный рост',
				content: `Полный рендер ${price('5100₽')} ${divider} Лайн арт + однотонный цвет ${price('2300₽')}`,
			},
			background: {
				title: 'Фон',
				content: `Простой - <b>${price('бесплатно')}</b> <br/> <span class='text-lg'>однотонный /градиент/простые текстуры</span> ${divider} Средний - ${price('600 - 2000₽')} <br/> <span class='text-lg'>размытый фон/простой пейзаж</span> ${divider}Сложный - ${price('+50%')} <br/> <span class='text-lg'>сложный пейзаж/комната/тд</span>`,
			},
		},
		infoSection:
			'Сочетание ленивой загрузки с некачественными заполнителями У вас есть возможность лениво загружать исходное изображение только тогда, когда пользователь прокручивает его. До тех пор загружается только низкокачественный заполнитель. Это значительно экономит пропускную способност сети, если пользователь никогда не прокручивает дальше вниз. Вы также можете указать необработанное преобразование, если хотите больше контролировать URL-адрес заполнителя низкокачественного изображения. В этом случае SDK игнорирует параметры качества и размытия. не выдаст ошибку и просто ничего не отобразит. Таким образом, как только useEffect установит правильный контент на основе выбранного языка, контент будет отображаться автоматически без каких-либо проблем.',
	},
}
