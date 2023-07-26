import { useEffect } from 'react'

export default function HamburgerMenu({ hamburgerState, setHamburgerState, setAriaExpanded }) {
	const handleWindowResize = () => {
		if (window.innerWidth > 640) {
			setHamburgerState(false)
		}
	}

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize)
		return () => {
			window.removeEventListener('resize', handleWindowResize)
		}
	}, [])

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
				className={`slide-menu fixed right-[-80vw] top-0 z-50 h-screen w-[80vw] bg-[#212121d2] backdrop-blur ${
					hamburgerState
						? '-translate-x-[80vw] opacity-100'
						: 'pointer-events-none opacity-0'
				} transition-all duration-300 md:hidden`}
				onClick={(e) => {
					e.stopPropagation()
				}}
			></div>
		</div>
	)
}
