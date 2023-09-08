import { useLanguageContext } from '../Providers/LanguageContext'

export default function Table() {
	const { language } = useLanguageContext()
	return (
		<div className='grid grid-cols-2 gap-3'>
			<div className=' flex h-12 items-center justify-center rounded-sm border border-thinLine bg-mainGrayTransparent text-xl text-secondaryText'>
				<div className='relative'>
					{'(╹◡╹๑)'}{' '}
					<span className='absolute left-[100%]'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							class='h-6 w-6'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M4.5 12.75l6 6 9-13.5'
							/>
						</svg>
					</span>
				</div>
			</div>
			<div className='flex h-12 items-center justify-center rounded-sm border border-thinLine bg-mainGrayTransparent text-xl text-red-500'>
				<div className='relative'>
					{'(￣ヘ￣ ;)'}{' '}
					<span className='absolute left-[100%]'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							class='h-7 w-7'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</span>
				</div>
			</div>
			{language === 'english' ? (
				<>
					<div className='flex items-center justify-center rounded-lg bg-[#212121bb] px-4 py-2 text-center'>
						FanArts (anime, games)
					</div>
					<div className='flex items-center justify-center rounded-lg bg-[#212121bb] px-4 py-2 text-center'>
						OCs with not suitable for me design
					</div>
					<div className='flex items-center justify-center rounded-lg bg-[#212121bb] px-4 py-2 text-center'>
						Slight NSFW (only women)
					</div>
					<div className='flex items-center justify-center rounded-lg bg-[#212121bb] px-4 py-2 text-center'>
						Hentai
					</div>
					<div className='flex items-center justify-center rounded-lg bg-[#212121bb] px-4 py-2 text-center'>
						OCs
					</div>
					<div className='flex items-center justify-center rounded-lg bg-[#212121bb] px-4 py-2 text-center'>
						Furries / Animals
					</div>
					<div className='flex items-center justify-center rounded-lg bg-[#212121bb] px-4 py-2 text-center'>
						Real people
					</div>
					<div className='flex items-center justify-center rounded-lg bg-[#212121bb] px-4 py-2 text-center'>
						Mecha
					</div>
				</>
			) : (
				<>
					<div className='flex items-center justify-center rounded-lg bg-[#212121bb] px-4 py-2 text-center'>
						Фанарт (аниме, игры)
					</div>
					<div className='flex items-center justify-center rounded-lg bg-[#212121bb] px-4 py-2 text-center'>
						Персонаж с неподходящим для меня дизайном
					</div>
					<div className='flex items-center justify-center rounded-lg bg-[#212121bb] px-4 py-2 text-center'>
						Лёгкий NSFW (только жен.)
					</div>
					<div className='flex items-center justify-center rounded-lg bg-[#212121bb] px-4 py-2 text-center'>
						Хентай
					</div>
					<div className='flex items-center justify-center rounded-lg bg-[#212121bb] px-4 py-2 text-center'>
						Ваш персонаж
					</div>
					<div className='flex items-center justify-center rounded-lg bg-[#212121bb] px-4 py-2 text-center'>
						Фурри / Животные
					</div>
					<div className='flex items-center justify-center rounded-lg bg-[#212121bb] px-4 py-2 text-center'>
						Реальные люди
					</div>
					<div className='flex items-center justify-center rounded-lg bg-[#212121bb] px-4 py-2 text-center'>
						Меха
					</div>
				</>
			)}
		</div>
	)
}
