
export default function TitleComponent({ title }) {
	return (
		<div className='flex w-full items-center justify-center'>
			<div
				className={`relative flex h-12 md:h-16 items-center justify-center rounded-2xl border border-[#3b3b3b] bg-gradient-to-r from-[#212121d2] via-[#3f3f3fd2] to-[#212121d2] bg-cover px-4 backdrop-blur-[40px] min-w-[75%] md:min-w-[30rem] lg:h-16 mb-12 md:mb-24`}
			>
				<img
					src='icons/insta.svg'
					alt=''
					className='left-stroke absolute right-full top-1/2 -translate-y-1/2'
				/>
				<img
					src='icons/insta.svg'
					alt=''
					className='right-stroke absolute left-full top-1/2 -translate-y-1/2'
				/>
				<h1 className='header-section my-4 select-none text-center text-3xl text-mainText md:text-4xl'>
					{title}
				</h1>
			</div>
		</div>
	)
}
