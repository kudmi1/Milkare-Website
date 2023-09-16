import Profile from '../Components/Profile'
import { useInView } from 'react-intersection-observer'

export default function HeroSection() {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	})

	return (
		<section
			ref={ref}
			className={`hero-section h-[calc(100vh-208px)] md:h-[calc(100vh-142px)] flex w-full flex-col
			`}
		>
			<img
				src='./images/aqua-hero.jpg'
				alt=''
				className={`h-full w-full object-cover transition-opacity 
				${inView ? 'opacity-100' : 'opacity-0'} duration-500`}
				srcSet='./images/aqua-hero-mobile.webp 420w,
				./images/aqua-hero-tablet.webp 768w,
				./images/aqua-hero.jpg 1920w
				'
			/>

			<Profile />
		</section>
	)
}
