import Profile from '../Components/Profile'
import { useInView } from 'react-intersection-observer'
import Gallery from '../Components/Gallery'

export default function SectionHome() {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	})

	return (
		<div className='flex flex-col items-center'>
			<section
				ref={ref}
				// className={`hero-section relative w-full md:h-[646px]`}
				className={`hero-section relative h-[20vh] max-h-[1440px] min-h-[646px] w-full md:h-screen`}
			>
				<div className='relative h-full w-full '>
					<picture>
						<source srcSet='./images/milka-mobile.webp' media='(max-width: 640px)' />
						<source srcSet='./images/milka.webp' media='(max-width: 1024px)' />
						<img
							src='./images/milka-wide.webp'
							alt='hero-image'
							className={`h-full w-full object-cover object-center transition-opacity 
							${inView ? 'opacity-100' : 'opacity-0'} duration-500 `}
						/>
					</picture>
					
				</div>
				<Profile />
			</section>
			<Gallery />
		</div>
	)
}
