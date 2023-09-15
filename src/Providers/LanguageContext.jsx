import React, { createContext, useContext, useState, useEffect } from 'react'
import { data } from '../Text.jsx'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState('english')
	const [content, setContent] = useState(data[language])

	useEffect(() => {
		setContent(data[language])
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
