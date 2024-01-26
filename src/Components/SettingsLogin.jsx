import React, { useState } from 'react'
const envPassword = process.env.REACT_APP_VITE_MILKA_PASSWORD

const SettingsLogin = ({ setLogged }) => {
	const [password, setPassword] = useState('')
	const [showError, setShowError] = useState(false)

	const handleSubmit = (event) => {
		event.preventDefault()
		if (password === envPassword) {
			setLogged(true)
		} else {
			setShowError(true)
      setPassword('')
		}
	}
  console.log(envPassword);
	return (
		<div className='rounded-lg border border-thinLine bg-gradient-to-b from-[#191924ef] to-[#1600419a] px-12 py-4'>
			<form className='flex flex-col items-center gap-3'>
				<h4>Введи пароль</h4>
				<input
          value={password}
					onChange={(e) => setPassword(e.target.value)}
					className='rounded-md bg-black/20 p-2 outline outline-2 outline-thinLine focus:outline-secondaryText '
					type='password'
				/>
				<button
					onClick={handleSubmit}
					type='submit'
					className='rounded-md border border-thinLine bg-[#160041] px-4 py-2 text-mainText hover:shadow-lg hover:shadow-[#9562be9c] hover:outline-mainText/50'
				>
					Вход
				</button>
				{showError && <p className='text-red-700'>Неверный пароль!</p>}
			</form>
		</div>
	)
}

export default SettingsLogin
