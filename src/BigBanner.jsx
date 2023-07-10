import Socials from "./Socials";

export default function BigBanner() {
	return (
		<section className="big-banner relative h-[100dvh] max-w-full bg-[url(https://ik.imagekit.io/kudmi/images/Aqua.webp)] bg-cover flex flex-col">
			<div className="flex-grow"></div>
			<footer className="info-footer flex h-60 w-full justify-center bg-gradient-to-br from-[#212121] to-[#212121d2] backdrop-blur-[10px]">
				<div className="footer-content grid w-full max-w-7xl items-center justify-between z-50">
					<div className="profile-pic absolute bottom-[80%] left-[50%] h-28 w-28 -translate-x-1/2 rounded-full">
						<img src="./images/milka-pic.png" alt="" className="rounded-full" />
					</div>
					{/* <Socials /> */}
					<div>
						Russia
					</div>
					
					<div>
						moscow
					</div>
				</div>

			</footer>
		</section>
	)
}
