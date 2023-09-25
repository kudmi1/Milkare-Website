import { useState, useEffect, useLayoutEffect} from 'react'
import { useLanguageContext } from '../Providers/LanguageContext'

export default function Translate() {
	const { language, setLanguage } = useLanguageContext()
	const [position, setPosition] = useState()

	useEffect(() => {
		switch (language) {
			case 'english':
				setPosition(0 * 100 + '%')
				break
			case 'russian':
				setPosition(1 * 100 + '%')
				break
			default:
				setPage(0 * 100 + '%')
		}
	}, [language])

	useLayoutEffect(() => {
		let underlines = document.querySelectorAll('.language-underline-animation')
		for (let i = 0; i < underlines.length; i++) {
			underlines[i].style.transform = `translate3d(${position}, 0, 0)`
		}
	}, [position])

	return (
		<div className='language-block relative flex h-full w-full items-center justify-between lg:justify-end gap-3 lg:gap-0'>
			<div
				className={`language-underline-animation hidden pointer-events-none absolute bottom-0 left-0 z-40 lg:block h-1 w-1/2 rounded-full transition-transform duration-200`}
			></div>
			<div
				className={`language-underline-animation hidden pointer-events-none absolute bottom-0 left-0 z-40 lg:block h-1 w-1/2 rounded-full transition-transform duration-200`}
			></div>
			<button
				className={`language-item language-eng h-14 w-1/2 rounded-lg text-xl lg:w-14 lg:border-none ${
					language === 'english'
						? 'border border-thinLine bg-accentColor bg-opacity-40 text-secondaryText lg:bg-transparent'
						: 'effect-shine bg-cardFieldBg text-mainText lg:bg-opacity-0'
				}`}
				onClick={() => setLanguage('english')}
			>
				<p className='nav-text'>
					<span>En</span>
				</p>
			</button>
			<button
				className={`language-item language-rus h-14 w-1/2 rounded-lg text-xl lg:w-14 lg:border-none ${
					language === 'russian'
						? 'border border-thinLine bg-accentColor bg-opacity-40 text-secondaryText lg:bg-transparent'
						: 'effect-shine bg-cardFieldBg text-mainText lg:bg-opacity-0'
				} `}
				onClick={() => setLanguage('russian')}
			>
				<p className='nav-text'>
					<span>Ru</span>
				</p>
			</button>
		</div>
	)
}
