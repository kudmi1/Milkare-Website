import { useEffect, useRef, useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ToTop from './Components/ToTop'
import SectionPrice from './Pages/SectionPrice'
import SectionInfo from './Pages/SectionInfo'
import { Route, Routes, useLocation } from 'react-router-dom'
import { NotFoundPage } from './Pages/NotFoundPage'
import SectionHome from './Pages/HomeSection'
import SettingsPage from './Pages/SettingsPage'

function App() {
	const location = useLocation()
	const [page, setPage] = useState(null)
	// const [isPageLoaded, setPageLoaded] = useState(false)

	const loaderContainer = document.querySelector('.loader-container')
	const loader = document.querySelector('.loader')

	useEffect(() => {

			// setTimeout(() => {
				// setPageLoaded(true)
				loaderContainer.style.opacity = 0
				loader.style.transform = 'scale(0.5)'
				loaderContainer.addEventListener(
					'transitionend',
					() => (loaderContainer.style.display = 'none')
					)
				// }, 500)
	}, [])

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
		<div className={`App min-h-screen flex flex-col bg-[url("/images/bg.webp")] md:bg-[url("/images/bg-transformed.webp")]`}>
			<Header page={page} setPage={setPage} />
			<main>
				<Routes>
					<Route path='/' element={<SectionHome />} />
					<Route path='/price' element={<SectionPrice id={'price'} />} />
					<Route path='/info' element={<SectionInfo id={'info'} />} />
					<Route path='/settings' element={<SettingsPage id={'settings'} />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
				<ToTop />
			</main>
				<Footer />
		</div>
	)
}

export default App
