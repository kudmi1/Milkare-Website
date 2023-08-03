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
			className={`hero-section relative flex h-[50vh] max-h-[1080px] min-h-[600px] w-full flex-col items-center justify-center  md:h-[75vh] lg:h-screen -z-50`}
		>
			<img
				src='./images/aqua.jpg'
				srcSet='./images-accordion/aqua.webp 768w, ./images/aqua.jpg 800w'
				sizes={`
    			(max-width: 768px) 600px,
    			800px
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
