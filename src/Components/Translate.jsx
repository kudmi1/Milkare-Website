import { useState } from 'react'
import { useLanguageContext } from '../Providers/LanguageContext'

export default function Translate() {
	const { language, setLanguage } = useLanguageContext()
	return (
		<div className='language-block h-full flex w-full items-center justify-between lg:justify-end'>
			<button
				className={`language-item language-eng mr-4 h-14 w-1/2 rounded-lg text-xl lg:w-14 lg:border-none ${
					language === 'english' ? 'text-secondaryText border border-thinLine lg:bg-[#161621] lg:bg-opacity-20 bg-[#161621] bg-opacity-40' : 'text-mainText effect-shine bg-[#161621] bg-opacity-20'
				}`}
				onClick={() => setLanguage('english')}
			>
				<p>
					<span>
						En
					</span>
				</p>
			</button>
			<button
				className={`language-item language-rus h-14 w-1/2 rounded-lg text-xl lg:w-14 lg:border-none ${
					language === 'russian' ? 'text-secondaryText border border-thinLine lg:bg-[#161621] lg:bg-opacity-20 bg-[#161621] bg-opacity-40' : 'text-mainText effect-shine bg-[#161621] bg-opacity-20'
				} `}
				onClick={() => setLanguage('russian')}
			>
				<p>
					<span >
						Ru
					</span>
				</p>
			</button>
		</div>
	)
}
