import { useEffect, useRef } from 'react'
import Accordion from './Accordion'
import BigBanner from './BigBanner'
import Header from './Header'
import Footer from './Footer'
import SpeedPaint from './SpeedPaint'
import ToTop from './ToTop'
import PhotoGallery from './PhotoGallery'
import { useState } from 'react'
import InfoSection from './InfoSection'
import PriceSection from './PriceSection'

function App() {
	const [headerHeight, setHeaderHeight] = useState('lg:h-20')
	const [fontSize, setFontSize] = useState('lg:text-5xl')
	const headerRef = useRef(null)
	const sectionRef = useRef(null)
	const [section, setSection] = useState(
		localStorage.getItem('section') || 'gallery'
	)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					entry.target.classList.toggle('show-entry', entry.isIntersecting)
					if (entry.isIntersecting) {
						observer.unobserve(entry.target)
					}
				})
			},
			{
				threshold: 0.1,
			}
		)

		const observerSlide = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					entry.target.classList.toggle(
						'show-entry-slide',
						entry.isIntersecting
					)
					if (entry.isIntersecting) {
						observerSlide.unobserve(entry.target)
					}
				})
			},
			{
				threshold: 0.1,
			}
		)
		const hiddenElements = document.querySelectorAll('.hidden-entry')
		hiddenElements.forEach((el) => observer.observe(el))
		const hiddenElementsslide = document.querySelectorAll('.hidden-entry-slide')
		hiddenElementsslide.forEach((el) => observerSlide.observe(el))

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
						setFontSize('lg:text-4xl')
					} else {
						setHeaderHeight('lg:h-20')
						setFontSize('lg:text-5xl')
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

	useEffect(() => {
		localStorage.setItem('section', section)
	}, [section])

	const handleSectionChange = (newSection) => {
		setSection(newSection)
	}

	return (
		<div className='App overflow-hidden '>
			<div ref={headerRef}>
				<Header
					section={section}
					setSection={handleSectionChange}
					headerHeight={headerHeight}
					fontSize={fontSize}
				/>
			</div>
			<div className='hidden-entry'>
				<BigBanner />
			</div>
			<div 
				ref={sectionRef}
				className="gradient-bg border-t-2 border-[#de928d] bg-[url('./images/dark.webp')]"
			>
				<div className='my-12 '>
					{section === 'gallery' ? (
						<div>
							<div className='hidden-entry flex justify-center px-4 motion-reduce:transition-none'>
								<Accordion />
							</div>
							<div className='hidden-entry motion-reduce:transition-none'>
								<PhotoGallery />
							</div>
							<div className='hidden-entry motion-reduce:transition-none'>
								<SpeedPaint />
							</div>
						</div>
					) : null}
					{section === 'price' ? (
						<div className='hidden-entry flex justify-center motion-reduce:transition-none'>
							<PriceSection />
						</div>
					) : null}
					{section === 'info' ? (
						<div className='hidden-entry flex justify-center motion-reduce:transition-none'>
							<InfoSection />
						</div>
					) : null}
				</div>

					<ToTop />
					<div className='mt-12 md:mt-0'>
						<Footer />
					</div>
			</div>
		</div>
	)
}

export default App
