import { useLanguageContext } from '../Providers/LanguageContext'

export default function GoogleFormButton() {
	const { language } = useLanguageContext()
	return (
		<button className='outline outline-2 outline-offset-0 outline-thinLine overflow-hidden rounded-md text-xl text-mainText transition-all duration-150 shadow-lg shadow-[#9562be9c] bg-[#160041] hover:outline-mainText/50'>
			<a
				href={`${
					language === 'english'
						? 'https://docs.google.com/forms/d/e/1FAIpQLSdKLe0F1y2OMIlAqpVCzP7wjb3a-83MXBjvB_XeIs84xaGsQA/viewform'
						: 'https://docs.google.com/forms/d/e/1FAIpQLSdMrGRP2JTpwU4VkqhPhsYqKAk-c4XNz3SwnECJ2hJgWh5IZA/viewform'
				} `}
				target={'_blank'}
				className='flex h-full w-full items-center px-4 py-2'
			>
				<p className='form-text'>
					{language === 'english' ? 'Google Form' : 'Гугл форма'}
				</p>

				<div className='ml-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
					>
						<g fill='none'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6zm10-1a1 1 0 1 0 0 2h2.586l-4.293 4.293a1 1 0 0 0 1.414 1.414L17 8.414V11a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1h-5z'
								fill='currentColor'
							/>
						</g>
					</svg>
				</div>
			</a>
		</button>
	)
}
