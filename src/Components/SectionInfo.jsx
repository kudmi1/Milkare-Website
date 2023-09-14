import Info from "./Info";

export default function SectionInfo({ id }) {
	return (
		<section
			className='section-entry flex scroll-m-12 justify-center motion-reduce:transition-none lg:scroll-m-0'
			id={id}
		>
			{/* <Suspense fallback={<h1>Loading...</h1>}> */}
			<Info />
			{/* </Suspense> */}
		</section>
	)
}
