import { useState } from "react"

export default function Translate({language, setLanguage}) {
	return (
		<div className='language-block hidden items-center justify-end lg:flex'>
			<button
				className={`language-item language-eng mr-8 text-xl ${
					language === 'english' ? 'text-secondaryText' : 'text-mainText'
				}`}
				onClick={() => setLanguage("english")}
			>
				<p><span className={`${language === 'english' ? '' : 'effect-shine'}`}>En</span></p>
			</button>
			<button
				className={`language-item language-rus text-xl ${
					language === 'russian' ? 'text-secondaryText' : 'text-mainText'
				}`} 
				onClick={() => setLanguage("russian")}
			>
				<p><span className={`${language === 'russian' ? '' : 'effect-shine'}`}>Ru</span></p>
			</button>
		</div>
	)
}
