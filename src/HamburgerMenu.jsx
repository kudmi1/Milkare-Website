import { useEffect } from 'react'
import Translate from './Translate'

export default function HamburgerMenu({
	hamburgerState,
	setHamburgerState,
	setAriaExpanded,
	language,
	setLanguage
}) {
	return (
		<div
			className={`absolute bottom-0 left-0 right-0 top-14 z-30 h-screen w-screen bg-[#2121216b] transition-all duration-300
     ${
				hamburgerState
					? 'pointer-events-auto opacity-100'
					: 'pointer-events-none opacity-0'
			}
    `}
			onClick={() => {
				setAriaExpanded(false)
				setHamburgerState(false)
			}}
		>
			<div className='relative w-full'>
				<div
					className={`slide-menu absolute right-0 top-0 z-40 w-full bg-mainGray backdrop-blur ${
						hamburgerState
							? 'h-[50vh] opacity-100'
							: 'pointer-events-none h-0 opacity-0'
					} transition-all duration-300 lg:hidden`}
					onClick={(e) => {
						e.stopPropagation()
					}}
				>
					<div className='flex h-full w-full flex-col items-center max-w-[600px] mx-auto'>
						<div className='w-2/3'>
							<Translate language={language} setLanguage={setLanguage}/>
						</div>
						<div className='flex h-full w-full flex-col items-center justify-evenly '>
							<div className='h-16 w-2/3 rounded-sm border border-thinLine'></div>
							<div className='h-16 w-2/3 rounded-sm border border-thinLine'></div>
							<div className='h-16 w-2/3 rounded-sm border border-thinLine'></div>
							<div className='h-16 w-2/3 rounded-sm border border-thinLine'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
