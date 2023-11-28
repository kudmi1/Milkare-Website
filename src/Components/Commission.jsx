
const linkRussian =
	'https://docs.google.com/forms/d/e/1FAIpQLSdMrGRP2JTpwU4VkqhPhsYqKAk-c4XNz3SwnECJ2hJgWh5IZA/viewform'
const linkEnglish =
	'https://docs.google.com/forms/d/e/1FAIpQLSdKLe0F1y2OMIlAqpVCzP7wjb3a-83MXBjvB_XeIs84xaGsQA/viewform'

const Commission = ({ loaded, commissionStatus, language }) => {
	return (
		<div className='absolute bottom-[100%] left-0 flex h-[100dvh] w-full justify-center'>
			<div
				className={`relative h-full w-full max-w-[1920px] ${
					loaded ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
				} transition-all duration-500`}
			>
				<h1
					className={`hero-text absolute hidden translate-y-1/2 text-mainText sm:bottom-[80px] sm:left-12 sm:block md:bottom-[120px] lg:bottom-[150px] 2xl:left-24 `}
				>
					Commission <br /> {commissionStatus ? 'Open' : 'Closed'}
				</h1>
				<button
					className={`group absolute z-40 mt-12 hidden translate-y-1/2 items-center justify-center rounded-lg ${
						commissionStatus
							? 'hero-btn bg-homeColor text-mainText  hover:shadow-lg hover:shadow-[#9562bebe]'
							: 'cursor-not-allowed bg-slate-500 text-slate-600'
					} 
						 bg-cover outline outline-2 outline-offset-0 outline-thinLine transition-all duration-200  sm:bottom-[80px] sm:right-12 sm:flex md:bottom-[120px] lg:bottom-[150px] 2xl:right-24`}
				>
					<a
						href={language === 'english' ? linkEnglish : linkRussian}
						target='_blank'
						className={`hero-btn flex h-full w-full items-center justify-center rounded-lg px-4 py-4 ${
							commissionStatus ? '' : 'pointer-events-none cursor-not-allowed'
						}`}
						onClick={(event) =>
							commissionStatus ? null : event.preventDefault()
						}
					>
						<p className='hero-btn-text h-full w-full text-lg transition-all duration-200  lg:text-2xl'>
							{language === 'english' ? 'Google Form' : 'Гугл Форма'}
						</p>
						{commissionStatus ? (
							<img
								src='/svg/chevron-right.svg'
								alt=''
								className='hero-chevron ml-2 h-5 transition-all duration-300 group-hover:translate-x-1 lg:h-6'
							/>
						) : null}
					</a>
				</button>
			</div>
		</div>
	)
}

export default Commission
