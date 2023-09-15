import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App'
import { LanguageProvider } from './Providers/LanguageContext'
import { SectionProvider } from './Providers/SectionContext'
import { BrowserRouter } from 'react-router-dom'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<LanguageProvider>
			<SectionProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</SectionProvider>
		</LanguageProvider>
	</React.StrictMode>
)
