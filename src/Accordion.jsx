/* eslint-disable react/prop-types */
import { useState, memo } from "react"

const names = ["Aqua", "milka", "himeno", "redgirl", "purplegirl"]

const Panel = memo(({ handlePanelClick, expandedPanel, index }) => {
	const name = names[index]

	return (
		<div
			className={`accordion_panel ${expandedPanel === index ? "expanded" : ""} overflow-hidden`}
			onClick={expandedPanel === index ? null : handlePanelClick}
		>
			<div className="inner-text pointer-events-none absolute bottom-2 left-6 z-20 mb-2 h-[4rem] rounded-2xl bg-[#212121] p-4 opacity-0 md:bottom-0 md:left-1/2 md:-translate-x-1/2 lg:translate-x-0 lg:left-6 xl:px-4  xl:w-1/3">
				<h2 className="text-center text-2xl md:text-lg lg:text-2xl font-semibold leading-tight text-white">
					{name}
				</h2>
			</div>
			<h2 id={`panel${index}_heading`}></h2>
			<div
				className="accordion_content h-full"
				id={`panel${index}_content`}
				aria-labelledby={`panel${index}_heading`}
				aria-hidden={`${expandedPanel === index ? "false" : "true"}`}
				role="region"
			>
				<button
					className="accordion_trigger bottom-0 left-3"
					aria-controls={`panel${index}_content`}
					aria-expanded="true"
				>
				</button>
				<img
					className={`accordion_image absolute inset-0 -z-10 h-full w-full object-cover ${index > 2 ? "object-top" : ""}`}
					src={`https://ik.imagekit.io/kudmi/accordion/${name}.jpeg`}
					alt={`image${index}`}
				/>
			</div>
		</div>
	)
})

export default function Accordion() {
	const [expandedPanel, setExpandedPanel] = useState(0)

	function handlePanelClick(panelIndex) {
		if (panelIndex === expandedPanel) {
			setExpandedPanel(null)
		} else {
			setExpandedPanel(panelIndex)
		}
	}

	return (
		<div className="accordion flex w-full max-w-7xl flex-col items-center border-[#212121] pt-12 md:px-14 lg:px-28" id="gallery">
			<div className=" my-12 flex h-24  w-1/2 items-center justify-center rounded-2xl border-2 border-[#212121] bg-[#212121d2] bg-cover backdrop-blur-[10px] max-w-lg lg:top-16 lg:h-16">
				<h1 className="header-section my-4 select-none text-center text-4xl">
					Recent Works
				</h1>
			</div>
			<div className="mt-12 flex h-[1000px] w-full flex-col gap-4 md:h-[700px] md:flex-row">
				{names.map((_, index) => (
					<Panel
						key={index}
						index={index}
						handlePanelClick={() => handlePanelClick(index)}
						expandedPanel={expandedPanel}
					/>
				))}
			</div>
		</div>
	)
}
