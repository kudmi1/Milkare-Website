import Profile from './Profile'
import { useInView } from 'react-intersection-observer'

export default function BigBanner() {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	})

	return (
		<section
			ref={ref}
			className={`big-banner relative flex max-h-[100dvh] min-h-[600px] w-full flex-col items-center justify-center overflow-hidden md:h-screen ${
				inView ? 'opacity-100' : 'opacity-0'
			} transition-opacity duration-1000`}
		>
			{/* <img
				src='./images/aqua.webp'
				srcSet='./images-accordion/aqua.webp 600w, ./images/aqua.webp 800w'
				sizes={`
    			(max-width: 640px) 600px,
    			800px
  			`}
				className='h-[70vh] w-full object-cover md:h-full'
				alt='aqua_banner'
			/> */}
			<Profile />
		</section>
	)
}
