import Profile from './Profile'
import { useInView } from 'react-intersection-observer'

export default function HeroSection() {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	})

	return (
		<section
			ref={ref}
			className={`hero-section relative flex h-[50vh] max-h-[1080px] min-h-[600px] w-full flex-col items-center justify-center  md:h-[75vh] lg:h-screen`}
		>
			<img
				src='./images/aqua-hero.webp'
				srcSet='./images/aqua-hero-mobile.webp 450w, ./images/aqua-hero-tablet.webp 1024w, ./images/aqua-hero.webp 1080w'
				sizes={`
    			(max-width: 600px) 450px,
					(max-width: 1024px) 1024,
    			1080px
  			`}
				className={`'hero-image w-full object-cover h-full ${inView ? 'opacity-100' : 'opacity-0'} transition-opacity 
				${inView ? 'opacity-100' : 'opacity-0'}  
				duration-500`}
				alt='aqua_banner'
			/>
			<Profile />
		</section>
	)
}
