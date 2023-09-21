import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ToTop from './Components/ToTop'
import { useInView } from 'react-intersection-observer'
import SectionPrice from './Pages/SectionPrice'
import SectionInfo from './Pages/SectionInfo'
import { Route, RouterProvider, Routes, useLocation } from 'react-router-dom'
import { NotFoundPage } from './Pages/NotFoundPage'
import SectionHome from './Pages/HomeSection'

// const InfoSection = lazy(() =>  import('./InfoSection'))
// const PriceSection = lazy(() =>  import('./PriceSection'))

function App() {
	const [toTopPos, setToTopPos] = useState('md:bottom-12 bottom-8')
	const location = useLocation()
	const [page, setPage] = useState(null)
	const headerRef = useRef(null)
	const sectionRef = useRef(null)

	useEffect(() => {
		switch (location.pathname) {
			case '/':
				setPage('home')
				break
			case '/price':
				setPage('price')
				break
			case '/info':
				setPage('info')
				break
			default:
				setPage(null)
		}
	}, [location])

	const { ref, inView } = useInView({
		threshold: 0.5,
	})
	useEffect(() => {
		setToTopPos(inView ? 'bottom-56' : 'md:bottom-12 bottom-8')
	}, [inView])

	return (
		<div className='App flex flex-col min-h-screen '>
			
			<header ref={headerRef}>
				<Header page={page} setPage={setPage} />
			</header>
			<main ref={sectionRef} className='gradient-bg border-t border-[#3b3b3b] '>
				<Routes>
					<Route path='/' element={<SectionHome />} />
					<Route path='/price' element={<SectionPrice id={'price'} />} />
					<Route path='/info' element={<SectionInfo id={'info'} />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
				<ToTop position={toTopPos} />
			</main>
			<footer ref={ref} className="mt-auto">
				<Footer />
			</footer>
		</div>
	)
}

export default App
