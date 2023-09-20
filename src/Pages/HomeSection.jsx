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
				className={`hero-section relative w-full md:h-[646px] `}
			>
				<div className='relative h-full w-full '>
					<picture>
						<source srcSet='./images/milka.webp' media='(max-width: 640px)' />
						<source srcSet='./images/milka.webp' media='(max-width: 1024)' />
						<img
							src='./images/milka.jpg'
							alt='hero-image'
							className={`h-full w-full object-cover object-center transition-opacity 
							${inView ? 'opacity-100' : 'opacity-0'} duration-500 `}
						/>
					</picture>
					<div className='absolute top-0 h-full w-full flex justify-center'>
						<div className='w-full h-full relative max-w-[1920px]'>

						<h1 className='hero-text absolute hidden sm:bottom-36 sm:left-6 sm:block lg:bottom-1/2 lg:left-20 lg:translate-y-1/2 '>
							Commission <br /> Open
						</h1>
						</div>
					</div>
					<h1 className='hero-text-mobile absolute bottom-0 flex w-full justify-center bg-gradient-to-r from-[#21212162] via-mainGray to-[#21212162] py-6 sm:hidden'>
						Commission Open
					</h1>
				</div>
			</section>
			<Profile />
			<SectionGallery />
		</div>
	)
}
