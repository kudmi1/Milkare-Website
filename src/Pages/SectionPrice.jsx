import Price from '../Components/Price'

export default function SectionPrice({ id }) {
	return (
		<section
			className='section-entry relative mb-12 flex scroll-m-12 justify-center motion-reduce:transition-none lg:mb-0 lg:mt-0 lg:scroll-m-0'
			id={id}
		>
			<img
				src='/images/sticker-milka.png'
				alt='sticker-milka'
				className='absolute left-12 top-24 z-0'
			/>
			<img
				src='/images/sticker-art.png'
				alt='sticker-milka'
				className='absolute bottom-24 right-12 z-0'
			/>
			<Price />
		</section>
	)
}
