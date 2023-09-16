import React, { createContext, useContext, useEffect, useState } from 'react'

const SectionContext = createContext()

export const SectionProvider = ({ children }) => {

	const [section, setSection] = useState(() => {
		const storedSection = sessionStorage.getItem('section')
		return storedSection !== null ? storedSection : 'home'
	})

  const handleSectionChange = (newSection) => {
		setSection(newSection)
	}

	useEffect(() => {
		sessionStorage.setItem('section', section)
	}, [section])

	return (
		<SectionContext.Provider value={{ section, setSection, handleSectionChange }}>
			{children}
		</SectionContext.Provider>
	)
}

export const useSectionContext = () => {
	return useContext(SectionContext)
}
