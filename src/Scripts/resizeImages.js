import ffmpeg from 'fluent-ffmpeg'
import { existsSync } from 'fs'

// Function to resize an image using FFmpeg
function resizeImage(inputPath, outputPath, size) {
	return new Promise((resolve, reject) => {
		ffmpeg()
			.input(inputPath)
			.outputOptions([
				`-vf scale=w='if(lt(iw,ih),-1,${size})':h='if(lt(iw,ih),${size},-1)'`,
			])
			.toFormat('webp')
			.on('end', () => resolve(outputPath))
			.on('error', (err) => reject(err))
			.save(outputPath)
	})
}

function blurAndResizeImage(inputPath, outputPath, blurRadius, size) {
	return new Promise((resolve, reject) => {
		ffmpeg()
			.input(inputPath)
			.outputOptions([
				`-vf scale=w='if(lt(iw,ih),-1,${size})':h='if(lt(iw,ih),${size},-1)',boxblur=${blurRadius}`,
			])
			.toFormat('webp')
			.on('end', () => resolve(outputPath))
			.on('error', (err) => reject(err))
			.save(outputPath)
	})
}

// Example paths and sizes
const name = 'alan_wake2' // Replace with the actual name
const inputImagePath = `client/public/images/${name}.jpg`
const outputPaths = [
	{ path: `client/public/images-sm/${name}-sm.webp`, size: 320 },
	{ path: `client/public/images-md/${name}-md.webp`, size: 768 },
	{ path: `client/public/images-accordion/${name}.webp`, size: 1080 },
	{ path: `client/public/images-accordion/${name}-small.webp`, size: 480 },
	{ path: `client/public/images-blur/${name}-blur.webp`, size: 40 },
]

// Resize and save images to specified paths
async function resizeImages() {
	try {
		if (!existsSync(inputImagePath)) {
			console.error('Input image not found!')
			return
		}

		for (const { path: outputPath, size } of outputPaths) {
			if (outputPath.includes('blur')) {
				await blurAndResizeImage(inputImagePath, outputPath, 5, size)
			} else {
				await resizeImage(inputImagePath, outputPath, size)
			}
			console.log(`Image resized and saved to ${outputPath}`)
		}
	} catch (err) {
		console.error('Error resizing images:', err)
	}
}

// Execute the resizing function
resizeImages()
