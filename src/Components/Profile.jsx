import { useState } from "react"
import Socials from "./Socials"

export default function Profile() {
	const [loaded, setLoaded] = useState(false)
	return (
		<footer className='flex min-h-[208px] h-52 lg:h-60 max-h-[25vh] w-full justify-center bg-gradient-to-r from-mainGray via-[#292929] to-mainGray'>
			<div className='footer-content relative z-40 flex w-full max-w-7xl flex-col items-center'>
				<div className='profile-pic-container absolute top-0 -translate-y-1/2 left-[50%] h-24 w-24 lg:h-28 lg:w-28 -translate-x-1/2 rounded-full overflow-hidden'>
					<img
					onLoad={() => setLoaded(true)}
						src='images/milka-pic.webp'
						alt='profile-pic'
						className={`profile-pic h-full w-full ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
					/>
				</div>
				<div className='pointer-events-none flex h-2/3 w-full select-none items-center justify-center'>
					<p className='mt-12 text-2xl'>
						Commission:
						<span className='text-green-500'> Open</span>
					</p>
				</div>

				<div className='flex h-1/3 w-[90%] items-center justify-between md:mb-2 md:w-3/5  lg:w-2/5'>
					<Socials/>
				</div>
			</div>
		</footer>
	)
}
