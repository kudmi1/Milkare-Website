export default function Profile() {
	return (
		<footer className="info-footer absolute bottom-0 left-0 flex h-60 w-full justify-center bg-gradient-to-br from-[#212121] to-[#212121d2] backdrop-blur-[10px]">
			<div className="footer-content relative z-50 grid w-full max-w-7xl items-center justify-between">
				<div className="profile-pic absolute bottom-[77%] left-[50%] h-28 w-28 -translate-x-1/2 rounded-full">
					<img src="https://ik.imagekit.io/kudmi/accordion/milka-pic.png" alt="" className="rounded-full w-full h-full" />
				</div>
				<div>Russia</div>

				<div>moscow</div>
			</div>
		</footer>
	)
}
