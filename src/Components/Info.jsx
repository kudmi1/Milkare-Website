import { useLanguageContext } from '../Providers/LanguageContext'
import GoogleFormButton from './GoogleFormButton'
import TOS from './TOS'


export default function Info() {
	const { language } = useLanguageContext()
	return (
		<div
			className='flex w-full max-w-6xl flex-col items-center pb-12 pt-24 md:pb-24 '
		>

			<div className='flex w-full flex-col items-center justify-center rounded-md border border-[#3b3b3b] bg-gradient-to-r from-[#282f49] via-[#323b5aec] to-[#282f49] px-4 py-4 md:py-12 pt-4 backdrop-blur-[10px] lg:px-0'>
				
				<div className='mb-12 flex w-full flex-col items-center justify-center rounded-md border border-thinLine bg-[#21273d] px-4 py-4 sm:w-2/3 md:flex-row md:justify-between'>
					<p className='mb-6 text-2xl md:mb-0 lg:text-2xl'>
						{language === 'english' ? 'Make a commission' : 'Сделать заказ'}
					</p>
					<GoogleFormButton />
				</div>
				<TOS />
			</div>
		</div>
	)
}
