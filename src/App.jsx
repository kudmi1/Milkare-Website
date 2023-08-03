import { useEffect, useRef } from 'react'
import { useState } from 'react'
import Accordion from './Accordion'
import HeroSection from './HeroSection'
import Header from './Header'
import Footer from './Footer'
import SpeedPaint from './SpeedPaint'
import ToTop from './ToTop'
import PhotoGallery from './PhotoGallery'
import InfoSection from './InfoSection'
import PriceSection from './PriceSection'
import Translation from './text.json'

function App() {
	const [language, setLanguage] = useState('english')
	const [content, setContent] = useState({})
	const [isScrollToSection, setIsScrollToSection] = useState(false)
	const [headerHeight, setHeaderHeight] = useState('lg:h-20')
	const [fontSize, setFontSize] = useState('lg:text-5xl')
	const headerRef = useRef(null)
	const sectionRef = useRef(null)
	const [section, setSection] = useState(
		sessionStorage.getItem('section') || 'gallery'
	)

	// const [section, setSection] = useState('gallery')

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
		sessionStorage.setItem('section', section)
	}, [section])

	const handleSectionChange = (newSection) => {
		setSection(newSection)
	}

	useEffect(() => {
		switch (language) {
			case 'english':
				setContent(Translation.english)
				break
			case 'russian':
				setContent(Translation.russian)
				break
		}
	}, [language])

	useEffect(() => {
		console.log(section)

	}, [section])

	return (
		<div className='App'>
			<header ref={headerRef}>
				<Header
					section={section}
					setSection={handleSectionChange}
					headerHeight={headerHeight}
					fontSize={fontSize}
					isScrollToSection={isScrollToSection}
					language={language}
					setLanguage={setLanguage}
					content={content}
				/>
			</header>
			<div className=''>
				
			</div>
				<HeroSection />
			<main
				ref={sectionRef}
				className='gradient-bg border-t border-[#3b3b3b]'
			>
				{section === 'gallery' ? (

					<section className='section-entry' id='gallery'>
						<Accordion language={language} content={content} />
						<PhotoGallery language={language} content={content} />
						<SpeedPaint language={language} content={content} />
					</section>
				) : null}
				{section === 'price' ? (
					<section className='section-entry flex justify-center motion-reduce:transition-none'>
						<PriceSection language={language} content={content} />
					</section>
				) : null}
				{section === 'info' ? (
					<section className='section-entry flex justify-center motion-reduce:transition-none'>
						<InfoSection language={language} content={content} />
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
