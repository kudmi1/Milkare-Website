import Price from "./Price";

export default function SectionPrice() {
	return (
		<section
			className='section-entry flex scroll-m-12 justify-center motion-reduce:transition-none lg:scroll-m-0'
			id='price'
		>
			{/* <Suspense fallback={<h1>Loading...</h1>}> */}

			<Price />
			{/* </Suspense> */}
		</section>
	)
}
