import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LanguageProvider } from './Providers/LanguageContext'
import { SectionProvider } from './Providers/SectionContext'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <SectionProvider>
        <App />
      </SectionProvider>
    </LanguageProvider>
  </React.StrictMode>,
)
