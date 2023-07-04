export default function Socials() {
	return (
		<ul
			className={`social-links fixed bottom-0 right-0 z-10 flex h-screen flex-col items-center justify-center gap-x-3 bg-black/30 px-3 py-5`}
		>
			<li className="social-item">
				<a href="#">
					<img src="icons/insta.svg" alt="insta" className="social-icon " />
				</a>
			</li>
			<li className="social-item">
				<a href="#">
					<img src="icons/twitter.svg" alt="twitter" className="social-icon" />
				</a>
			</li>
			<li className="social-item">
				<a href="#">
					<img
						src="icons/pinterest.svg"
						alt="pinterest"
						className="social-icon"
					/>
				</a>
				
			</li>
			<li className="social-item">
				<a href="#">
					<img
						src="icons/artstation.svg"
						alt="artstation"
						className="social-icon"
					/>
				</a>
			</li>
			<li className="social-item boosty-item">
				<a href="#">
					<img
						src="icons/boosty.svg"
						alt="boosty"
						className="social-icon boosty"
					/>
				</a>
			</li>

			<li className="social-item boosty-item">
				<a href="#">
					<ion-icon
						name="logo-deviantart"
						className="social-icon devian"
					></ion-icon>
				</a>
			</li>
		</ul>
	)
}
