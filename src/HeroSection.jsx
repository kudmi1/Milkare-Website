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
			className={`hero-section relative flex h-[50vh] max-h-[1080px] min-h-[600px] w-full flex-col items-center justify-center  sm:h-[75vh] lg:h-screen`}
		>
			<picture
			className='w-full h-full'
				// src='./images/aqua-hero.webp'
				// srcSet='./images/aqua-hero-mobile.webp 800w, ./images/aqua-hero-tablet.webp 1024w, ./images/aqua-hero.webp 1920w'
				// sizes={`
    		// 	(max-width: 800px) 800px,
				// 	(max-width: 1024px) 1024,
    		// 	1920px
  			// `}
				alt='aqua_banner'
			>
				<source media='(max-width: 500px)' srcSet='./images/aqua-hero-mobile.webp'/>
				<source media='(max-width: 1024px)' srcSet='./images/aqua-hero-tablet.webp'/>
				<img src="./images/aqua-hero.webp" type="image/webp" className={`'hero-image w-full object-cover h-full ${inView ? 'opacity-100' : 'opacity-0'} transition-opacity 
				${inView ? 'opacity-100' : 'opacity-0'}  
				duration-500`}/>
			</picture>
			
			<Profile />
		</section>
	)
}
