import React, { createContext, useContext, useState, useEffect } from 'react'
import { data } from '../Text.jsx'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
	const initialLanguage = sessionStorage.getItem('language') || 'english'
	const [language, setLanguage] = useState(initialLanguage)
	const [content, setContent] = useState(data[language])

	useEffect(() => {
		setContent(data[language])
		sessionStorage.setItem('language', language);
	}, [language])

	return (
		<LanguageContext.Provider value={{ language, setLanguage, content }}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguageContext = () => {
	return useContext(LanguageContext)
}
