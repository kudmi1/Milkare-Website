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
				className={`hero-section relative h-[646px] w-full `}
			>
				<div className='relative h-full w-full '>
					<picture>
						<source srcSet='./images/milka.webp' media='(max-width: 640px)' />
						<source srcSet='./images/milka.webp' media='(max-width: 1024)' />
						<img
							src='./images/milka.jpg'
							alt='hero-image'
							className={`h-full w-full object-cover object-center transition-opacity 
							${inView ? 'opacity-100' : 'opacity-0'} duration-500`}
						/>
					</picture>
					<h1 className='hero-text absolute hidden sm:left-6 sm:block sm:bottom-36 lg:bottom-1/2 lg:translate-y-1/2 lg:left-12'>
						Commission <br /> Open
					</h1>
					<h1 className='hero-text absolute bottom-0 py-6 flex w-full justify-center sm:hidden bg-gradient-to-r from-transparent via-mainGray to-transparent'>
						Commission Open
					</h1>
				</div>
			</section>
			<Profile />
			<SectionGallery />
		</div>
	)
}
