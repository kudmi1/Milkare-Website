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
			<div className={`big-banner w-full h-full bg-[url('/images/aqua.webp')] transition-opacity 
			${inView ? 'opacity-100' : 'opacity-0'}  
			duration-500`}>

			</div>
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
