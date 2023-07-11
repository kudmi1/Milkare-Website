export default function Profile() {

  return(
    <footer className="info-footer absolute left-0 bottom-0 flex h-60 w-full justify-center bg-gradient-to-br from-[#212121] to-[#212121d2] backdrop-blur-[10px]">
				<div className="footer-content relative grid w-full max-w-7xl items-center justify-between z-50">
					<div className="profile-pic absolute bottom-[77%] left-[50%] h-28 w-28 -translate-x-1/2 rounded-full">
						<img src="./images/milka-pic.png" alt="" className="rounded-full" />
					</div>
					<div>
						Russia
					</div>
					
					<div>
						moscow
					</div>
				</div>

			</footer>
  )
}