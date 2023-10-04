import Profile from '../Components/Profile'
import { useInView } from 'react-intersection-observer'
import Gallery from '../Components/Gallery'

export default function SectionHome() {
	return (
			<div className='flex flex-col items-center'>
				<section
					
					// className={`hero-section relative w-full md:h-[646px]`}
					className={`hero-section relative h-[20vh] max-h-[1440px] min-h-[646px] w-full md:h-screen `}
				>
					<div className='relative h-full w-full'>
						<picture>
							
							<source
								srcSet='./images/milka.webp'
								media='(max-width: 1024px)'
							/>
							<img
								src='./images/milka4x.webp'
								alt='hero-image'
								className={`h-full w-full rounded-b-lg object-cover object-center`}
							/>
						</picture>
					</div>
					<Profile />
				</section>
				<Gallery />
			</div>
	)
}
