import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ToTop from './Components/ToTop'
import SectionPrice from './Pages/SectionPrice'
import SectionInfo from './Pages/SectionInfo'
import { Route, RouterProvider, Routes, useLocation } from 'react-router-dom'
import { NotFoundPage } from './Pages/NotFoundPage'
import SectionHome from './Pages/HomeSection'


function App() {
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



	return (
		<div className='App relative flex min-h-screen flex-col md:bg-[url("/images/bg-transformed.webp")] bg-[url("/images/bg.webp")]'>
			
			<header ref={headerRef}>
				<Header page={page} setPage={setPage} />
			</header>
			<main ref={sectionRef}>
				<Routes>
					<Route path='/' element={<SectionHome />} />
					<Route path='/price' element={<SectionPrice id={'price'} />} />
					<Route path='/info' element={<SectionInfo id={'info'} />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
				<ToTop />
			</main>
			<footer className='mt-auto'>
				<Footer />
			</footer>
		</div>
	)
}

export default App
