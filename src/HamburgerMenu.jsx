import { useEffect } from 'react'

export default function HamburgerMenu({ hamburgerState, setHamburgerState, setAriaExpanded }) {

	return (
		<div
			className={`fixed bottom-0 left-0 right-0 top-0 z-40 h-screen w-screen bg-[#212121a2] transition-all duration-300
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
			<div
				className={`slide-menu fixed right-0 top-[-80vh] z-50 h-[50vh] w-full bg-[#212121d2] backdrop-blur ${
					hamburgerState
						? 'translate-y-[80vh] opacity-100'
						: 'pointer-events-none opacity-0'
				} transition-all duration-300 lg:hidden`}
				onClick={(e) => {
					e.stopPropagation()
				}}
			></div>
		</div>
	)
}
