import Accordion from "../Components/Accordion";
import PhotoGallery from "../Components/PhotoGallery";
import SpeedPaint from "../Components/SpeedPaint";

export default function SectionGallery({ id }) {
	return (
		<section className='section-entry mt-6 lg:mt-0 mb-12 lg:mb-0 scroll-m-12 lg:scroll-m-0' id={id}>
			<Accordion />
			<PhotoGallery />
			<SpeedPaint />
		</section>
	)
}
