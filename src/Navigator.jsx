export default function Navigator() {
	function ul(index) {
		console.log("click!" + index)

		let underlines = document.querySelectorAll(".underline")

		for (let i = 0; i < underlines.length; i++) {
			underlines[i].style.transform = "translate3d(" + index * 100 + "%,0,0)"
		}
	}

	return (
		<div>
			<nav className="mynav black w-[300px] flex justify-center items-center sticky bottom-0 left-0 z-[100] h-16 bg-[#212121]">
				<div className="pointer-events-none absolute bottom-0 left-0 z-0 block h-2 w-1/3 bg-black underline mix-blend-multiply transition-transform duration-200"></div>
				<div className="pointer-events-none absolute bottom-0 left-0 z-0 block h-2 w-1/3 bg-black underline mix-blend-multiply transition-transform duration-200"></div>
				<div className="pointer-events-none absolute bottom-0 left-0 z-0 block h-2 w-1/3 bg-black underline mix-blend-multiply transition-transform duration-200"></div>
				<a
					href="#"
					className="z-10 inline-block w-1/3 cursor-pointer px-4 text-center"
					onClick={() => ul(0)}
				>
					Gallery
				</a>
				<a
					href="#"
					className="z-10 inline-block w-1/3 cursor-pointer px-4 text-center"
					onClick={() => ul(1)}
				>
					Price
				</a>
				<a
					href="#"
					className="z-10 inline-block w-1/3 cursor-pointer px-4 text-center"
					onClick={() => ul(2)}
				>
					Info
				</a>
			</nav>
		</div>
	)
}
