import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import HeroSection from './Components/HeroSection'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ToTop from './Components/ToTop'
import { useSectionContext } from './Providers/SectionContext'
import { useInView } from 'react-intersection-observer'
import SectionGallery from './Components/SectionGallery'
import SectionPrice from './Components/SectionPrice'
import SectionInfo from './Components/SectionInfo'
import { router } from './Router'
import { Route, RouterProvider, Routes } from 'react-router-dom'

// const InfoSection = lazy(() =>  import('./InfoSection'))
// const PriceSection = lazy(() =>  import('./PriceSection'))

function App() {
	const { section, handleSectionChange } = useSectionContext()
	const [isScrollToSection, setIsScrollToSection] = useState(false)
	const [headerHeight, setHeaderHeight] = useState('lg:h-20')
	const [toTopPos, setToTopPos] = useState('md:bottom-12 bottom-8')
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

	const { ref, inView } = useInView({
		threshold: 0.5,
	})
	useEffect(() => {
		setToTopPos(inView ? 'bottom-56' : 'md:bottom-12 bottom-8')
	}, [inView])

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
				<Routes>
					<Route path='/' element={<SectionGallery/>}/>
					<Route path='/gallery' element={<SectionGallery id={'gallery'} />}/>
					<Route path='/price' element={<SectionPrice id={'price'}/>}/>
					<Route path='/info' element={<SectionInfo id={'info'}/>}/>
					{/* <Route path='*' element={<SectionGallery/>}/> */}
				</Routes>
				<ToTop position={toTopPos} />
			</main>
			<footer className='mt-12 md:mt-0' ref={ref}>
				<Footer />
			</footer>

		</div>
	)
}

export default App
