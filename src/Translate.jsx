import { useState } from "react"

export default function Translate({language, setLanguage}) {
	return (
		<div className='language-block hidden items-center justify-end md:flex'>
			<button
				className={`language-item language-eng mr-8 text-xl ${
					language === 'english' ? 'text-secondaryText' : 'text-mainText'
				}`}
				onClick={() => setLanguage("english")}
			>
				<span className={`${language === 'english' ? '' : 'effect-shine'}`}>En</span> 
			</button>
			<button
				className={`language-item language-rus text-xl ${
					language === 'russian' ? 'text-secondaryText' : 'text-mainText'
				}`} 
				onClick={() => setLanguage("russian")}
			>
				<span className={`${language === 'russian' ? '' : 'effect-shine'}`}>Ru</span>
			</button>
		</div>
	)
}
