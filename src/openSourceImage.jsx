export default function openSourceImage(image) {
  getImageDimensions(image).then(({ width, height }) => {
    void image.offsetWidth
    // image.style.transform = "scale(1)"
    // image.style.top = "0px"
    // image.style.left = "0px"
    image.style.maxWidth = `${width}px`
    image.style.maxHeight = `${height}px`
  })
}

export function getImageDimensions(img) {
  return new Promise((resolve, reject) => {
    const src = img.getAttribute("src")
    const newImg = new Image()
    newImg.src = src

    newImg.addEventListener("load", function () {
      const width = this.naturalWidth
      const height = this.naturalHeight
      resolve({ width, height })
    })

    newImg.addEventListener("error", function () {
      reject("Failed to load the image.")
    })
  })
}