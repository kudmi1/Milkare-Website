import Accordion from './Accordion'
import GalleryWrapper from './GalleryWrapper'
import SpeedPaint from './SpeedPaint'

export default function Gallery({ id }) {
	return (
		<section
			className='section-entry mb-12 mt-6 scroll-m-12 lg:mb-0 lg:mt-0 lg:scroll-m-0 w-full'
			id={id}
		>
			<Accordion />
			<GalleryWrapper />
			<SpeedPaint />
		</section>
	)
}
