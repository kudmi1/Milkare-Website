import { useState } from 'react'
import { useLanguageContext } from '../Providers/LanguageContext'

export default function Translate() {
	const { language, setLanguage } = useLanguageContext()
	return (
		<div className='language-block h-full flex w-full items-center justify-between lg:justify-end'>
			<button
				className={`language-item language-eng mr-4 h-14 w-1/2 rounded-sm border border-thinLine text-xl lg:w-14 lg:rounded-t-md lg:border-none ${
					language === 'english' ? 'text-secondaryText bg-[#313131]' : 'text-mainText effect-shine'
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
				className={`language-item language-rus h-14 w-1/2 rounded-sm border border-thinLine text-xl lg:w-14 lg:rounded-t-md lg:border-none ${
					language === 'russian' ? 'text-secondaryText bg-[#313131]' : 'text-mainText effect-shine'
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
