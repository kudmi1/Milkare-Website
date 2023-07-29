export default function Profile() {
	return (
		<footer className='info-footer absolute bottom-0 left-0 flex h-60 w-full justify-center bg-gradient-to-br from-mainGray to-mainGrayTransparent backdrop-blur-[10px]'>
			<div className='footer-content relative z-50 flex w-full max-w-7xl flex-col items-center'>
				<div className='profile-pic-container absolute bottom-[77%] left-[50%] h-28 w-28 -translate-x-1/2'>
					<img
						src='images/milka-pic.webp'
						alt='profile-pic'
						className='profile-pic h-full w-full'
					/>
				</div>
				<div className='pointer-events-none flex h-2/3 w-full select-none items-center justify-center'>
					<p className='mt-12 text-2xl'>
						Commission:
						<span className='text-green-500'> Open</span>
					</p>
				</div>

				<div className='flex h-1/3 w-[90%] items-center justify-between md:mb-2 md:w-3/5  lg:w-2/5'>
					<button className='effect-shine flex h-10 w-10 items-center justify-center rounded-full bg-mainGray md:h-14 md:w-14'>
						<a href='https://twitter.com/milkareart' target={'_blank'}>
							<img
								src='./svg/twitter.svg'
								alt='twitter-logo'
								className='h-6 w-6 md:h-8 md:w-8'
							/>
						</a>
					</button>
					<button className='effect-shine flex h-10 w-10 items-center justify-center rounded-full bg-mainGray md:h-14 md:w-14'>
						<a href='http://instagram.com/milkareart/' target={'_blank'}>
							<img
								src='./svg/instagram.svg'
								alt='instagram-logo'
								className='h-6 w-6 md:h-8 md:w-8'
							/>
						</a>
					</button>
					<button className='effect-shine flex h-10 w-10 items-center justify-center rounded-full bg-mainGray md:h-14 md:w-14'>
						<a href='http://boosty.to/milkareart' target={'_blank'}>
							<img
								src='./svg/boosty.svg'
								alt='boosty-logo'
								className='h-7 w-7 md:h-9 md:w-9'
							/>
						</a>
					</button>
					<button className='effect-shine flex h-10 w-10 items-center justify-center rounded-full bg-mainGray md:h-14 md:w-14'>
						<a href='https://www.artstation.com/milkareart' target={'_blank'}>
							<img
								src='./svg/artstation.svg'
								alt='artstation-logo'
								className='h-5 w-5 md:h-7 md:w-7'
							/>
						</a>
					</button>
					<button className='effect-shine flex h-10 w-10 items-center justify-center rounded-full bg-mainGray md:h-14 md:w-14'>
						<a href='https://www.deviantart.com/milkareart' target={'_blank'}>
							<img
								src='./svg/deviantart.svg'
								alt='deviantart-logo'
								className='h-6 w-6 md:h-8 md:w-8'
							/>
						</a>
					</button>
					<button className='effect-shine flex h-10 w-10 items-center justify-center rounded-full bg-mainGray md:h-14 md:w-14'>
						<a href='https://www.pixiv.net/en/users/78324163' target={'_blank'}>
							<img
								src='./svg/Pixiv.svg'
								alt='pixiv-logo'
								className='h-6 w-6 md:h-8 md:w-8'
							/>
						</a>
					</button>
					<button className='effect-shine flex h-10 w-10 items-center justify-center rounded-full bg-mainGray md:h-14 md:w-14'>
						<a href='https://youtube.com/@milkareart' target={'_blank'}>
							<img
								src='./svg/youtube.svg'
								alt='youtube-logo'
								className='h-6 w-6 md:h-8 md:w-8'
							/>
						</a>
					</button>
				</div>
			</div>
		</footer>
	)
}
