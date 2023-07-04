import "react-medium-image-zoom/dist/styles.css"
import "photoswipe/dist/photoswipe.css"
import { Gallery, Item } from "react-photoswipe-gallery"

const names = [
	"milka",
	"redgirl",
	"purplegirl",
	"Lucy",
	"kokomi",
	"Makima",
	"alhaitam",
	"mybirthday",
	"komi",
	"himeno",
	"pochita",
	"2B_9S",
]

const options = {
	zoom: false,
	padding: { top: 20, bottom: 20, right: 20, left: 20 },
}

const imagesPath = names.map((name) => {
	const img = new Image()
	img.src = `https://ik.imagekit.io/kudmi/images/${name}.webp`
	return {
		path: `https://ik.imagekit.io/kudmi/images/${name}.webp`,
		width: img.width,
		height: img.height,
	}
})

export default function LightBoxImages() {

	const uiElements = [
    {
      name: 'bulletsIndicator',
      order: 9,
      isButton: false,
      appendTo: 'wrapper',
      onInit: (el, pswpInstance) => {
        let prevIndex = -1
        const thumbnails = []

        
        el.style.position = 'absolute'
        el.style.bottom = '20px'
        el.style.left = '10px'
        el.style.right = '0'
        el.style.display = 'grid'
        el.style.gridGap = '10px'
        el.style.gridTemplateColumns = 'repeat(auto-fit, 40px)'
        el.style.gridTemplateRows = 'repeat(auto-fit, 40px)'
        el.style.justifyContent = 'center'
        

        const dataSource = pswpInstance.options.dataSource 

        for (let i = 0; i < dataSource.length; i++) {
          const slideData = dataSource[i]

          const thumbnail = document.createElement('div')
          thumbnail.style.transition = 'transform 0.15s ease-in'
          thumbnail.style.opacity = '0.6'
          thumbnail.style.cursor = 'pointer'
          thumbnail.onclick = (e) => {
            const target = e.target 
            const thumbnailEl =
              target.tagName === 'IMG'
                ? target.parentElement
                : (e.target )
            if (thumbnailEl) {
              pswpInstance.goTo(thumbnails.indexOf(thumbnailEl))
            }
          }

          const thumbnailImage = document.createElement('img')
          thumbnailImage.setAttribute('src', slideData.msrc || '')
          thumbnailImage.style.width = '100%'
          thumbnailImage.style.height = '100%'
          thumbnailImage.style.objectFit = 'cover'

          thumbnail.appendChild(thumbnailImage)

          el.appendChild(thumbnail)

          thumbnails.push(thumbnail)
        }

        pswpInstance.on('change', () => {
          if (prevIndex >= 0) {
            const prevThumbnail = thumbnails[prevIndex]
            prevThumbnail.style.opacity = '0.6'
            prevThumbnail.style.cursor = 'pointer'
            prevThumbnail.style.transform = 'scale(1)'
          }

          const currentThumbnail = thumbnails[pswpInstance.currIndex]
          currentThumbnail.style.opacity = '1'
          currentThumbnail.style.cursor = 'unset'
          currentThumbnail.style.transform = 'scale(1.2)'

          prevIndex = pswpInstance.currIndex
        })
      },
    },
  ]

	return (
		<>
			<div className="mediumWrapper relative flex flex-col items-center justify-center py-24">

				<div className="grid-images grid max-w-7xl ">
					<Gallery options={options} uiElements={uiElements}>
						{imagesPath.map((image, index) => (
							<div key={index}>
								<div
									className={`grid-block relative h-96 overflow-hidden medium-block${index} cursor-pointer rounded-xl`}
								>
									<Item
										original={image.path}
										thumbnail={image.path}
										width={image.width}
										height={image.height}
									>
										{({ ref, open }) => (
											<img
												ref={ref}
												onClick={open}
												src={image.path}												
												className={`zoom-image w-full medium-image${index} transition-[filter] duration-300 hover:contrast-[.85]`}
												loading="lazy"
											/>
										)}
									</Item>

									<div className="inner-text absolute bottom-0 left-0 z-20 rounded-se-2xl bg-[#212121] p-4 opacity-0 transition-opacity duration-300">
										<h2 className="text-2xl font-semibold leading-tight text-white">
											{names[index]}
										</h2>
									</div>
								</div>
							</div>
						))}
					</Gallery>
				</div>
			</div>
		</>
	)
}
