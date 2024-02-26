
const linkRussian =
	'https://docs.google.com/forms/d/e/1FAIpQLSdrOU24svdQmsWdWPuXI9JL9ZEj1BtEq0HX7szUjU_MwaVaMg/viewform'
const linkEnglish =
	'https://docs.google.com/forms/d/e/1FAIpQLScMtnQm8ZwWmlKhVttIbN7cjKSQglqyukuUINlBvIhbvRHGCA/viewform'

const CommissionMobile = ({ commissionStatus, language }) => {
	return (
		<div className='absolute bottom-full flex w-full items-center justify-between bg-gradient-to-r from-[#191924b2] to-[#191924b2] px-6 py-2 sm:hidden'>
			<h1 className='hero-text-mobile via-mainGray flex'>
				{commissionStatus ? 'Commission Open' : 'Commission Closed'}
			</h1>
			<button
				className={`${
					commissionStatus
						? 'hero-btn-mobile bg-homeColor hover:shadow-lg hover:shadow-[#9562be77]'
						: 'cursor-not-allowed bg-slate-500 text-slate-600'
				}  min-w-[100px] rounded-md `}
			>
				<a
					href={`${language === 'english' ? linkEnglish : linkRussian}`}
					target='_blank'
					className={`flex items-center justify-between rounded-md px-2 py-2 ${
						commissionStatus ? '' : 'pointer-events-none cursor-not-allowed'
					}`}
					onClick={(event) =>
						commissionStatus ? null : event.preventDefault()
					}
				>
					<p className='hero-btn-text-mobile h-full w-full'>
						{language === 'english' ? (
							<>
								<span className='hidden xs:inline-block'>Google </span> Form
							</>
						) : (
							<>
								<span className='hidden xs:inline-block'>Гугл </span> Форма
							</>
						)}
					</p>
					{commissionStatus ? (
						<img
							src='/svg/chevron-right.svg'
							alt=''
							className='hero-chevron ml-2 w-4 transition-all duration-300 group-hover:translate-x-1'
						/>
					) : null}
				</a>
			</button>
		</div>
	)
}

export default CommissionMobile
