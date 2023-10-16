import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LanguageProvider } from './Providers/LanguageContext'
import { BrowserRouter } from 'react-router-dom'
import { CommissionProvider } from './Providers/CommissionContext'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<LanguageProvider>
			<CommissionProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</CommissionProvider>
		</LanguageProvider>
	</React.StrictMode>
)
