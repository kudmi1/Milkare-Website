import { NavLink } from "react-router-dom";
import Accordion from "./Accordion";
import PhotoGallery from "./PhotoGallery";
import SpeedPaint from "./SpeedPaint";

export default function SectionGallery() {
	return (
		<section className='section-entry scroll-m-12 lg:scroll-m-0' id='gallery'>
			<Accordion />
			<PhotoGallery />
			<SpeedPaint />
		</section>
	)
}
