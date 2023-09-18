import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LanguageProvider } from './Providers/LanguageContext'
import { BrowserRouter } from 'react-router-dom'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<LanguageProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
		</LanguageProvider>
	</React.StrictMode>
)
