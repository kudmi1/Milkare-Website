export default function InfoSection({ language, content }) {
	return (
		<div className="max-w-7xl h-screen flex justify-center items-center " id="info">
			<p>
				{content.infoSection}
			</p>
		</div>
	)
}
