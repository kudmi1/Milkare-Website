import React, { useEffect, useState } from 'react'
import SettingsLogin from '../Components/SettingsLogin'
import { useCommissionContext } from '../Providers/CommissionContext'

const SettingsPage = () => {
	const { commissionStatus, updateCommissionStatus } = useCommissionContext()
	const [logged, setLogged] = useState(false)

	useEffect(() => {
		// При загрузке компонента, получаем текущий статус с сервера
		// fetch('http://localhost:3000/commission-status')
		fetch('https://milkare.art/commission-status')
			.then((response) => response.json())
			.then((data) => updateCommissionStatus(data.status))
			.catch((error) =>
				console.error('Error fetching commission status:', error)
			)
	}, [])

	const toggleCommissions = () => {
		// При нажатии кнопки, отправляем запрос на сервер для изменения статуса
		// fetch('http://localhost:3000/commission-status', {
		fetch('https://milkare.art/commission-status', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ status: !commissionStatus }),
		})
			.then((response) => response.json())
			.then((data) => updateCommissionStatus(data.status))
			.catch((error) =>
				console.error('Error toggling commission status:', error)
			)
	}

	return (
		<div className='flex h-screen w-screen flex-col items-center justify-center px-6 py-4'>
			{logged ? (
				<div className='flex flex-col items-center bg-gradient-to-b from-[#191924ef] to-[#1600419a] gap-6 py-6 border border-thinLine rounded-lg w-full max-w-[400px] lg:w-1/2'>
					<h5>{commissionStatus ? 'Комишки включены' : 'Комишки выключены'}</h5>
					<button
						onClick={toggleCommissions}
						className='w-full max-w-[250px] rounded-md border border-thinLine bg-[#160041] px-4 py-2 text-mainText hover:shadow-lg hover:shadow-[#9562be9c] hover:outline-mainText/50'
					>
						{commissionStatus ? 'Выключить' : 'Включить'}
					</button>
				</div>
			) : <SettingsLogin setLogged={setLogged}/>}
		</div>
	)
}

export default SettingsPage
