import { createContext, useContext, useEffect, useState } from 'react'

const CommissionContext = createContext()

export const useCommissionContext = () => {
	return useContext(CommissionContext)
}

export const CommissionProvider = ({ children }) => {
	const [commissionStatus, setCommissionStatus] = useState(true)

	useEffect(() => {
		// При монтировании компонента, получаем текущий статус с сервера
		const fetchCommissionStatus = async () => {
			try {
				const response = await fetch('http://localhost:3000/commission-status')
				if (response.ok) {
					const data = await response.json()
					setCommissionStatus(data.status)
				} else {
					throw new Error('Failed to fetch commission status')
				}
			} catch (error) {
				console.error('Error fetching commission status:', error)
			}
		}

		fetchCommissionStatus()
	}, []) 

	const updateCommissionStatus = async (newStatus) => {
		try {
			const response = await fetch('http://localhost:3000/commission-status', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ status: newStatus }),
				credentials: 'include',
			})

			if (!response.ok) {
				throw new Error('Failed to update commission status')
			}

			setCommissionStatus(newStatus)
		} catch (error) {
			console.error('Error updating commission status:', error)
		}
	}

	return (
		<CommissionContext.Provider
			value={{ commissionStatus, updateCommissionStatus }}
		>
			{children}
		</CommissionContext.Provider>
	)
}
