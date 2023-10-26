import Accordion from './Accordion'
import GalleryWrapper from './GalleryWrapper'
import SpeedPaint from './SpeedPaint'

export default function Gallery({ id }) {
	return (
		<section
			className='section-entry relative mt-6 w-full scroll-m-12 lg:mb-0 lg:mt-0 lg:scroll-m-0'
			id={id}
		>
			<img
				src='/images/sticker-milka.png'
				alt='sticker-milka'
				className='absolute left-12 top-24'
			/>
			<img
				src='/images/sticker-art.png'
				alt='sticker-milka'
				className='absolute bottom-24 right-12'
			/>
			<Accordion />
			<GalleryWrapper />
			<SpeedPaint />
		</section>
	)
}
