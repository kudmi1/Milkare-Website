import Price from "../Components/Price";

export default function SectionPrice({ id }) {
	return (
		<section
			className='section-entry flex mt-6 lg:mt-0 mb-12 lg:mb-0 scroll-m-12 justify-center motion-reduce:transition-none lg:scroll-m-0'
			id={id}
		>
			<Price />
		</section>
	)
}
