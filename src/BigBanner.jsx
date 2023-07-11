import { useState, useEffect } from "react"
import Profile from "./Profile"
export default function BigBanner() {
	
	return (
		<section className="big-banner relative min-h-[600px] max-h-[100dvh] flex flex-col w-full justify-center items-center overflow-hidden" 
		>
			<img src="https://ik.imagekit.io/kudmi/images/Aqua.webp" className="h-[70vh] w-full md:h-full object-cover" alt="aqua_banner"/>
			<Profile />
			
		</section>
	)
}
