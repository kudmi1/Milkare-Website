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
			className={`big-banner relative flex h-[50vh] max-h-[1080px] min-h-[600px] w-full flex-col items-center justify-center bg-[url('/public/images/aqua.webp')] transition-opacity 
			${inView ? 'opacity-100' : 'opacity-0'}  
			duration-1000 md:h-[70vh] lg:h-screen`}
		>
			{/* <img
				src='./images/aqua.jpg'
				srcSet='./images-accordion/aqua.webp 768w, ./images/aqua.jpg 800w'
				// sizes={`
    		// 	(max-width: 768px) 600px,
    		// 	800px
  			// `}
				className='hero-image w-full object-cover h-full '
				alt='aqua_banner'
			/> */}
			<Profile />
		</section>
	)
}
