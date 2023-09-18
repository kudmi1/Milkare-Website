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
				className={`hero-section relative w-full h-[620px] lg:h-[580px]`}
			>
				<div className='w-full h-full'>
					<img
						src='./images/aqua-hero.jpg'
						alt=''
						className={`h-full w-full object-cover transition-opacity 
					${inView ? 'opacity-100' : 'opacity-0'} duration-500`}
						srcSet='
					./images/milka.webp 640w,
					./images/aqua-hero-tablet.webp 1024w,
					./images/aqua-hero.jpg 1920w
					'
					/>
					{/* <TestProfile /> */}
				</div>
			</section>
			<Profile />
		</div>
	)
}
