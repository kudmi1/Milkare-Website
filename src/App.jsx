import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import Accordion from './Components/Accordion'
import HeroSection from './Components/HeroSection'
import Header from './Components/Header'
import Footer from './Components/Footer'
import SpeedPaint from './Components/SpeedPaint'
import ToTop from './Components/ToTop'
import PhotoGallery from './Components/PhotoGallery'
import InfoSection from './Components/InfoSection'
import PriceSection from './Components/PriceSection'
import { useSectionContext } from './Providers/SectionContext'

// const InfoSection = lazy(() =>  import('./InfoSection'))
// const PriceSection = lazy(() =>  import('./PriceSection'))

function App() {
	const { section, handleSectionChange } = useSectionContext()
	const [isScrollToSection, setIsScrollToSection] = useState(false)
	const [headerHeight, setHeaderHeight] = useState('lg:h-20')
	const [fontSize, setFontSize] = useState('lg:text-5xl')
	const headerRef = useRef(null)
	const sectionRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsScrollToSection(true)
					} else if (!entry.isIntersecting) {
						setIsScrollToSection(false)
					}
				})
			},
			{
				threshold: 0.1,
			}
		)
		const hiddenElements = document.querySelectorAll('.section-entry')
		hiddenElements.forEach((el) => observer.observe(el))

		return () => observer.disconnect()
	}, [section])

	useEffect(() => {
		const section = sectionRef.current

		const options = {
			threshold: 0.1,
		}

		const handleIntersection = (entries) => {
			entries.forEach((entry) => {
				if (entry.target === section) {
					if (entry.isIntersecting) {
						setHeaderHeight('lg:h-14')
						setFontSize('lg:h-10')
					} else {
						setHeaderHeight('lg:h-20')
						setFontSize('lg:h-12')
					}
				}
			})
		}

		const observer = new IntersectionObserver(handleIntersection, options)

		observer.observe(section)

		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		<div className='App'>
			<header ref={headerRef}>
				<Header
					setSection={handleSectionChange}
					headerHeight={headerHeight}
					fontSize={fontSize}
					isScrollToSection={isScrollToSection}
				/>
			</header>
			<HeroSection />
			<main ref={sectionRef} className='gradient-bg border-t border-[#3b3b3b]'>
				{section === 'gallery' ? (
					<section
						className='section-entry scroll-m-12 lg:scroll-m-0'
						id='gallery'
					>
						<Accordion />
						<PhotoGallery />
						<SpeedPaint />
					</section>
				) : null}
				{section === 'price' ? (
					<section
						className='section-entry flex scroll-m-12 justify-center motion-reduce:transition-none lg:scroll-m-0'
						id='price'
					>
						{/* <Suspense fallback={<h1>Loading...</h1>}> */}

						<PriceSection />
						{/* </Suspense> */}
					</section>
				) : null}
				{section === 'info' ? (
					<section
						className='section-entry flex scroll-m-12 justify-center motion-reduce:transition-none lg:scroll-m-0'
						id='info'
					>
						{/* <Suspense fallback={<h1>Loading...</h1>}> */}
						<InfoSection />
						{/* </Suspense> */}
					</section>
				) : null}

				<ToTop />
			</main>
			<footer className='mt-12 md:mt-0'>
				<Footer />
			</footer>
		</div>
	)
}

export default App
