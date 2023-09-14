import { NavLink } from "react-router-dom";
import Accordion from "./Accordion";
import PhotoGallery from "./PhotoGallery";
import SpeedPaint from "./SpeedPaint";

export default function SectionGallery({ id }) {
	return (
		<section className='section-entry scroll-m-12 lg:scroll-m-0' id={id}>
			<Accordion />
			<PhotoGallery />
			<SpeedPaint />
		</section>
	)
}
