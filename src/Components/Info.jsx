import { useState } from 'react'
import { useLanguageContext } from '../Providers/LanguageContext'
import GoogleFormButton from './GoogleFormButton'
import TOS from './TOS'

export default function Info() {
	const { language } = useLanguageContext()
	const [loaded, setLoaded] = useState(false)

	const gradientBG = 'bg-gradient-to-b from-[#191924ef] to-[#1600419a]'
	return (
		<div
			className={`z-20 flex mt-6 w-full max-w-6xl flex-col items-center pt-24 text-mainText md:pb-24`}
			onLoad={() => setLoaded(true)}
		>
			<div className='flex w-full flex-col items-center justify-center rounded-md border-b border-t border-thinLine bg-[#191924c9] px-4 py-4 pt-4 md:py-12 lg:border lg:bg-transparent lg:bg-gradient-to-b lg:from-[#191924ef] lg:to-[#1600419a] lg:px-0'>
				<div
					className={`mb-12 flex w-full flex-col items-center justify-center rounded-md border border-thinLine bg-gradient-to-t from-[#2c2649cc] to-[#1600419a] px-4 py-4 sm:w-2/3 md:flex-row md:justify-between ${
						loaded ? 'opacity-100' : 'opacity-0'
					} transition-all duration-500`}
				>
					<p className='nav-text mb-6 text-2xl md:mb-0 lg:text-2xl'>
						{language === 'english' ? 'Make a commission' : 'Сделать заказ'}
					</p>
					<GoogleFormButton/>
				</div>
				<TOS loaded={loaded} />
			</div>
		</div>
	)
}
