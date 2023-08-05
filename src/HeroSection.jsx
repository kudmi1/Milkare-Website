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
			className={`hero-section relative flex h-[50vh] max-h-[1080px] min-h-[600px] w-full flex-col sm:h-[60vh] 
			lg:h-screen`}
		>
			<picture
			className='w-full h-1/2 grow '
				alt='aqua_banner'
			>
				<source media='(max-width: 500px)' srcSet='./images/aqua-hero-mobile.webp' type="image/webp"/>
				<source media='(max-width: 1024px)' srcSet='./images/aqua-hero-tablet.webp' type="image/webp"/>
				<img src="./images/aqua-hero.jpg" alt='Aqua hero' className={`'hero-image w-full object-cover object-top sm:object-top lg:object-center h-full ${inView ? 'opacity-100' : 'opacity-0'} transition-opacity 
				${inView ? 'opacity-100' : 'opacity-0'}  
				duration-500`}/>
			</picture>
			<Profile />

		</section>
	)
}
