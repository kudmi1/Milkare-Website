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
				className={`hero-section relative h-[70vh] max-h-[1440px] min-h-[646px] w-full bg-[url(/images/milka.webp)] bg-cover bg-center bg-no-repeat lg:h-screen lg:bg-[url(/images/milka4x.webp)]`}
			>
				{/* <div className={`relative h-full w-full`}>
						<picture>
							<source
								srcSet='./images/milka.webp'
								media='(max-width: 1024px)'
							/>
							<img
								src='./images/milka4x.webp3'
								alt='hero-image'
								// onContextMenu={false}
								className={`h-full w-full rounded-b-lg object-cover ${loaded ? ' opacity-100' : 'opacity-70 '} transition-all duration-[.9s] object-center `}
							/>
						</picture>
					</div> */}
				<Profile loaded={loaded} />
			</section>
			<Gallery />
		</div>
	)
}
