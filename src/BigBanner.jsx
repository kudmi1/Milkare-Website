import Profile from "./Profile"
import { useInView } from 'react-intersection-observer'

export default function BigBanner() {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	})
	
	return (
		<section ref={ref} className={`big-banner relative min-h-[600px] md:h-screen max-h-[100dvh] flex flex-col w-full justify-center items-center overflow-hidden ${inView ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`} 
		>
			<img src="./images/aqua.webp" className="h-[70vh] w-full md:h-full object-cover" alt="aqua_banner"/>
			<Profile />
			
			
		</section>
	)
}
