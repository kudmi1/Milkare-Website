export default function Profile() {
	return (
		<footer className="info-footer absolute bottom-0 left-0 flex h-60 w-full justify-center bg-gradient-to-br from-[#212121] to-[#212121d2] backdrop-blur-[10px]">
			<div className="footer-content relative z-50 flex w-full max-w-7xl flex-col items-center">
				<div className="profile-pic absolute bottom-[77%] left-[50%] h-28 w-28 -translate-x-1/2 rounded-full">
					<img
						src="https://ik.imagekit.io/kudmi/accordion/milka-pic.png"
						alt="profile-pic"
						className="h-full w-full rounded-full"
					/>
				</div>
				<div className="h-2/3 w-full flex justify-center items-center">
					<p className="mt-8 text-2xl">Commision:
						<span className="text-green-500"> Open</span>
					</p>
				</div>

				<div className="h-1/3 w-[90%] md:w-3/4 lg:w-1/2 flex items-center justify-between md:mb-2">
					<button className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#212121] effect-shine">
						<a href="https://twitter.com/milkareart" target={"_blank"}>
							<img src="./svg/twitter.svg" alt="twitter-logo" className="w-6 h-6 md:w-8 md:h-8" />
						</a>
					</button>
					<button className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#212121] effect-shine">
						<a href="http://instagram.com/milkareart/" target={"_blank"}>
							<img src="./svg/instagram.svg" alt="instagram-logo" className="w-6 h-6 md:w-8 md:h-8"/>
						</a>
					</button>
					<button className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#212121] effect-shine">
						<a href="http://boosty.to/milkareart" target={"_blank"}>
							<img src="./svg/boosty.svg" alt="boosty-logo" className="w-6 h-6 md:w-8 md:h-8"/>
						</a>
					</button>
					<button className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#212121] effect-shine">
						<a href="https://www.artstation.com/milkareart" target={"_blank"}>
							<img src="./svg/artstation.svg" alt="artstation-logo" className="w-6 h-6 md:w-8 md:h-8"/>
						</a>
					</button>
					<button className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#212121] effect-shine">
						<a href="https://www.deviantart.com/milkareart" target={"_blank"}>
							<img src="./svg/deviantart.svg" alt="deviantart-logo" className="w-6 h-6 md:w-8 md:h-8"/>
						</a>
					</button>
					<button className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#212121] effect-shine">
						<a href="https://www.pixiv.net/en/users/78324163" target={"_blank"}>
							<img src="./svg/Pixiv.svg" alt="pixiv-logo" className="w-6 h-6 md:w-8 md:h-8"/>
						</a>
					</button>
					<button className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#212121] effect-shine">
						<a href="https://youtube.com/@milkareart" target={"_blank"}>
							<img src="./svg/youtube.svg" alt="youtube-logo" className="w-6 h-6 md:w-8 md:h-8"/>
						</a>
					</button>
				</div>
			</div>
		</footer>
	)
}
