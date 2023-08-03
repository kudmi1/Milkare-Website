import { useState } from 'react'

export default function Translate({ language, setLanguage }) {
	return (
		<div className='language-block flex w-full items-center justify-between lg:justify-end'>
			<button
				className={`language-item language-eng mr-4 h-12 w-1/2 rounded-sm border border-thinLine text-xl lg:w-auto lg:border-none ${
					language === 'english' ? 'text-secondaryText' : 'text-mainText'
				}`}
				onClick={() => setLanguage('english')}
			>
				<p>
					<span className={`${language === 'english' ? '' : 'effect-shine'}`}>
						En
					</span>
				</p>
			</button>
			<button
				className={`language-item language-rus h-12 w-1/2 rounded-sm border border-thinLine text-xl lg:w-auto lg:border-none ${
					language === 'russian' ? 'text-secondaryText' : 'text-mainText'
				}`}
				onClick={() => setLanguage('russian')}
			>
				<p>
					<span className={`${language === 'russian' ? '' : 'effect-shine'}`}>
						Ru
					</span>
				</p>
			</button>
		</div>
	)
}
