import { useState } from 'react'
import { useLanguageContext } from '../Providers/LanguageContext'

export default function Translate() {
	const { language, setLanguage } = useLanguageContext()
	return (
		<div className='language-block flex h-full w-full items-center justify-between lg:justify-end'>
			<button
				className={`language-item language-eng mr-4 h-14 w-1/2 text-xl lg:w-14 lg:border-none ${
					language === 'english'
						? 'border border-thinLine bg-[#4b4b4b] bg-opacity-40 text-secondaryText'
						: 'effect-shine text-mainText '
				}`}
				onClick={() => setLanguage('english')}
			>
				<p>
					<span>En</span>
				</p>
			</button>
			<button
				className={`language-item language-rus h-14 w-1/2 text-xl lg:w-14 lg:border-none ${
					language === 'russian'
						? 'border border-thinLine bg-[#4b4b4b] bg-opacity-40 text-secondaryText'
						: 'effect-shine text-mainText '
				} `}
				onClick={() => setLanguage('russian')}
			>
				<p>
					<span>Ru</span>
				</p>
			</button>
		</div>
	)
}
