import Profile from '../Components/Profile'
import { useInView } from 'react-intersection-observer'
import SectionGallery from './SectionGallery'

export default function SectionHome() {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	})

	return (
		<div className='flex flex-col'>
			<section
				ref={ref}
				className={`hero-section relative h-[80dvh] w-full lg:h-[100dvh]`}
			>
				<div className='relative h-full w-full'>
					<picture>
						<source srcSet='./images/milka.webp' media='(max-width: 640px)' />
						<source srcSet='./images/milka.webp' media='(max-width: 1024)' />
						<img
							src='./images/milka.webp'
							alt='hero-image'
							className={`h-full w-full object-cover object-center transition-opacity 
							${inView ? 'opacity-100' : 'opacity-0'} duration-500`}
						/>
					</picture>
					<h1 className='hero-text absolute hidden sm:block sm:bottom-[45%] lg:bottom-[40%] sm:left-6 lg:left-12'>
						Commission <br /> Open
					</h1>
					<h1 className='hero-text absolute sm:hidden bottom-[77%] flex w-full justify-center '>
						Commission Open
					</h1>
				</div>
				<Profile />
			</section>
			<SectionGallery />
		</div>
	)
}
