import Profile from '../Components/Profile'
import Gallery from '../Components/Gallery'
import { useEffect, useState } from 'react'

export default function SectionHome() {
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		setLoaded(true)
	}, [])
	return (
		<div className={`flex flex-col items-center transition-all duration-700 `}>
			<section
				className={`hero-section relative h-[70vh] max-h-[1440px] min-h-[646px] w-full bg-opacity-30 bg-[url(/images/milka.webp)] bg-cover bg-center bg-no-repeat lg:h-screen`}
			>
				<img
					src='/images/milka4x.webp'
					alt='milka-banner-image'
					className={`hidden h-full w-full object-cover lg:block transition-opacity`}
					onContextMenu={(e) => e.preventDefault()}
				/>
				<Profile loaded={loaded} />
			</section>
			<Gallery />
		</div>
	)
}
