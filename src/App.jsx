import "./App.css"
import Accordion from "./Accordion"
import BigBanner from "./BigBanner"
import Header from "./Header"
import Footer from "./Footer"
import GridImages from "./GridImages"
import Socials from "./Socials"
import MediumImages from "./MediumImages"
import LightBoxImages from "./LightBoxImages"

function App() {
	return (
		<div className="App" >
			<Header />
			{/* <Socials /> */}
			
			<BigBanner />

			{/* <div className="border-t-2 border-[#de928d] bg-[url('images/blurry-gradient-4.svg')] bg-cover"> */}
			<div className="gradient-bg border-t-2 border-[#de928d] ">
				<div>
					{/* <div className="gallery-header flex justify-center bg-gradient-to-r from-transparent via-[#2121213f] to-transparent text-6xl font-semibold text-white backdrop-blur-[10px]">
						<h1 className="header-section my-8 select-none">Recent Works</h1>
					</div> */}
					<div className="flex flex-col justify-center backdrop-blur-[2px]">
						{/* <div className="div-acc absolute h-full w-full"></div> */}

						<div className="flex justify-center px-4 py-24 ">
							<Accordion />
						</div>
					</div>
				</div>

				<div>
					{/* <div className="gallery-header flex justify-center bg-gradient-to-r from-transparent via-[#2121213f] to-transparent text-6xl font-semibold text-white backdrop-blur-[5px]">
						<h1 className="header-section my-8 select-none">Gallery</h1>
					</div> */}
					<div className="backdrop-blur-[0px] ">
						<LightBoxImages />
					</div>
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default App
