/* eslint-disable react/prop-types */
import { useState } from "react"

function Panel1({ handlePanelClick, expandedPanel }) {
	return (
		<div
			className={`accordion_panel ${expandedPanel === 1 ? "expanded" : ""}`}
			onClick={expandedPanel === 1 ? null : handlePanelClick}
		>
			<h2 id="panel1_heading"></h2>
			<div
				className="accordion_content h-full"
				id="panel1_content"
				aria-labelledby="panel1_heading"
				aria-hidden={`${expandedPanel === 1 ? "false" : "true"}`}
				role="region"
			>
				<button
					className="accordion_trigger bottom-0 left-3"
					aria-controls="panel1_content"
					aria-expanded="true"
				>
					<span className="panel5_title absolute bottom-4 left-12 isolate grid items-center text-2xl font-bold decoration-slate-50 decoration-2 underline-offset-4 after:absolute after:-left-12 after:-z-10 after:h-12 after:w-[162px] after:rounded-2xl after:bg-black/70  hover:underline ">
						Aqua
					</span>
				</button>

				<img
					className={`accordion_image absolute inset-0 -z-10 h-full w-full object-cover `}
					src="https://ik.imagekit.io/kudmi/images/Aqua.webp"
					alt="image1"
				/>
			</div>
		</div>
	)
}

function Panel2({ handlePanelClick, expandedPanel }) {
	return (
		<div
			className={`accordion_panel ${expandedPanel === 2 ? "expanded" : ""}`}
			onClick={expandedPanel === 2 ? null : handlePanelClick}
		>
			<h2 id="panel2_heading"></h2>
			<div
				className="accordion_content h-full"
				id="panel2_content"
				aria-labelledby="panel2_heading"
				aria-hidden={`${expandedPanel === 2 ? "false" : "true"}`}
				role="region"
			>
				<button
					className="accordion_trigger bottom-0 left-3"
					aria-controls="panel2_content"
					aria-expanded="false"
				>
					<span className="panel5_title absolute bottom-4 left-12 isolate grid items-center text-2xl font-bold decoration-slate-50 decoration-2 underline-offset-4 after:absolute after:-left-12 after:-z-10 after:h-12 after:w-[132px] after:rounded-2xl after:bg-black/70  hover:underline ">
						Me
					</span>
				</button>

				<img
					className={`accordion_image absolute inset-0 -z-10 h-full w-full object-cover transition-all duration-500`}
					src="https://ik.imagekit.io/kudmi/images/milka.webp"
					alt="image2"
				/>
			</div>
		</div>
	)
}

function Panel3({ handlePanelClick, expandedPanel }) {
	return (
		<div
			className={`accordion_panel ${expandedPanel === 3 ? "expanded" : ""}`}
			onClick={expandedPanel === 3 ? null : handlePanelClick}
		>
			<h2 id="panel3_heading">
				<button
					className="accordion_trigger bottom-0 left-3"
					aria-controls="panel3_content"
					aria-expanded="false"
				>
					<span className="panel5_title absolute bottom-4 left-12 isolate grid items-center text-2xl font-bold decoration-slate-50 decoration-2 underline-offset-4 after:absolute after:-left-12 after:-z-10 after:h-12 after:w-[184px] after:rounded-2xl after:bg-black/70  hover:underline ">
						Himeno
					</span>
				</button>
			</h2>
			<div
				className="accordion_content h-full"
				id="panel3_content"
				aria-labelledby="panel3_heading"
				aria-hidden={`${expandedPanel === 3 ? "false" : "true"}`}
				role="region"
			>
				<img
					className={`accordion_image absolute inset-0 -z-10 h-full w-full object-cover transition-all duration-500`}
					src="https://ik.imagekit.io/kudmi/images/himeno.webp"
					alt="image3"
				/>
			</div>
		</div>
	)
}

function Panel4({ handlePanelClick, expandedPanel }) {
	return (
		<div
			className={`accordion_panel ${expandedPanel === 4 ? "expanded" : ""} `}
			onClick={expandedPanel === 4 ? null : handlePanelClick}
		>
			<h2 id="panel4_heading"></h2>
			<div
				className="accordion_content h-full"
				id="panel4_content"
				aria-labelledby="panel4_heading"
				aria-hidden={`${expandedPanel === 4 ? "false" : "true"}`}
				role="region"
			>
				<button
					className="accordion_trigger bottom-0 left-3"
					aria-controls="panel4_content"
					aria-expanded="false"
				>
					<span className="panel5_title absolute bottom-4 left-12 isolate grid items-center text-2xl font-bold decoration-slate-50 decoration-2 underline-offset-4 after:absolute after:-left-12 after:-z-10 after:h-12 after:w-44 after:rounded-2xl after:bg-black/70  hover:underline ">
						Red
					</span>
				</button>

				<img
					className={`accordion_image absolute inset-0 -z-10 h-full w-full object-cover transition-all duration-500`}
					src="https://ik.imagekit.io/kudmi/images/redgirl.webp"
					alt="image4"
				/>
			</div>
		</div>
	)
}

function Panel5({ handlePanelClick, expandedPanel }) {
	return (
		<div
			className={`accordion_panel ${expandedPanel === 5 ? "expanded" : ""}`}
			onClick={expandedPanel === 5 ? null : handlePanelClick}
		>
			<h2 id="panel5_heading"></h2>

			<div
				className="accordion_content h-full "
				id="panel5_content"
				aria-labelledby="panel5_heading"
				aria-hidden={`${expandedPanel === 5 ? "false" : "true"}`}
				role="region"
			>
				<button
					className="accordion_trigger bottom-0"
					aria-controls="panel5_content"
					aria-expanded="false"
				>
					<span className="panel5_title absolute bottom-4 left-12 isolate grid items-center text-2xl font-bold decoration-slate-50 decoration-2 underline-offset-4 after:absolute after:-left-12 after:-z-10 after:h-12 after:w-44 after:rounded-2xl after:bg-black/70  hover:underline ">
						Purple
					</span>
				</button>

				<img
					className={`accordion_image absolute inset-0 -z-10 h-full w-full object-cover 
					transition-all duration-500`}
					src="https://ik.imagekit.io/kudmi/images/purplegirl.webp"
					alt="image5"
				/>
			</div>
		</div>
	)
}

export default function Accordion() {
	const [expandedPanel, setExpandedPanel] = useState(1)

	function handlePanelClick(panelIndex) {
		if (panelIndex === expandedPanel) {
			setExpandedPanel(null)
		} else {
			setExpandedPanel(panelIndex)
		}
	}

	return (
		<div className="accordion flex w-full max-w-7xl flex-col items-center border-t-2 border-[#212121] pt-24 md:px-14 lg:px-28  ">
			<div className="absolute top-12 flex h-24 w-1/2  items-center justify-center rounded-2xl border-2 border-[#212121] bg-[#212121d2] bg-cover backdrop-blur-[10px] md:w-1/3 lg:top-16 lg:h-16 ">
				<h1 className="header-section my-4  select-none text-center text-4xl">
					Recent Works
				</h1>
			</div>
			<div className="flex h-[70vh] w-full flex-col gap-4 md:h-[700px] md:flex-row">
				<Panel1
					handlePanelClick={() => handlePanelClick(1)}
					expandedPanel={expandedPanel}
				/>
				<Panel2
					handlePanelClick={() => handlePanelClick(2)}
					expandedPanel={expandedPanel}
				/>
				<Panel3
					handlePanelClick={() => handlePanelClick(3)}
					expandedPanel={expandedPanel}
				/>
				<Panel4
					handlePanelClick={() => handlePanelClick(4)}
					expandedPanel={expandedPanel}
				/>
				<Panel5
					handlePanelClick={() => handlePanelClick(5)}
					expandedPanel={expandedPanel}
				/>
			</div>
		</div>
	)
}
