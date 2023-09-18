import Profile from '../Components/Profile'
import { useInView } from 'react-intersection-observer'
import { TestProfile } from './TestProfile'

export default function HeroSection() {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	})

	return (
		<div className='flex flex-col'>
			<section
				ref={ref}
				className={`hero-section relative h-[620px] w-full lg:h-[580px]`}
			>
				<div className='h-full w-full'>
					{/* <img
						src='./images/aqua-hero.jpg'
						alt=''
						className={`h-full w-full object-cover transition-opacity 
					${inView ? 'opacity-100' : 'opacity-0'} duration-500`}
						srcSet='
					./images/milka.webp 640w 3x,
					./images/aqua-hero-tablet.webp 1024w,
					./images/aqua-hero.jpg 1920w
					'
					/> */}
					<picture>
						<source srcSet='./images/milka.webp' media='(max-width: 640px)' />
						<source
							srcSet='./images/aqua-hero-tablet.webp'
							media='(max-width: 1024)'
						/>
						<img
							src='./images/aqua-hero.jpg'
							alt='hero-image'
							className={`h-full w-full object-cover transition-opacity 
							${inView ? 'opacity-100' : 'opacity-0'} duration-500`}
						/>
					</picture>
				</div>
			</section>
			<Profile />
		</div>
	)
}
