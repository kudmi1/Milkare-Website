// import sizeOf from 'image-size'
// import fs from 'fs/promises'

export const imageInfo = [
	{ width: 1748, height: 2480, code_name: 'fern',  name: 'Fern'},
	{ width: 2448, height: 1724, code_name: 'alan_wake2',  name: 'Alan Wake 2'},
	{ width: 2480, height: 1748, code_name: 'clara',  name: 'Clara'},
	{ width: 2483, height: 3511, code_name: 'ineri-yorha',  name: 'Ineri Yorha from FFXIV Commission'},
	{ width: 2483, height: 3511, code_name: 'frieren',  name: 'Frieren' },
	{ width: 2121, height: 3000, code_name: 'lucy1',  name: 'Lucy' },
	{ width: 1536, height: 2048, code_name: 'eleonora',  name: 'Eleonora' },
	{ width: 3001, height: 2720, code_name: 'aqua',  name: 'Aqua Hoshino' },
	{ width: 2048, height: 2048, code_name: 'kokomi',  name: 'Sangonomiya Kokomi' },
	{ width: 2700, height: 2700, code_name: 'makima1',  name: 'Makima' },
	{ width: 2048, height: 2048, code_name: 'alhaitam',  name: 'Alhaitam' },
	{ width: 2048, height: 2048, code_name: 'mybirthday',  name: 'My Birthday' },
	{ width: 2388, height: 3196, code_name: 'komi',  name: 'Komi-san' },
	{ width: 3000, height: 3000, code_name: 'himeno',  name: 'Himeno' },
	{ width: 2706, height: 2706, code_name: 'pochita',  name: 'Pochita' },
	{ width: 2121, height: 3000, code_name: '2b_9s1',  name: '2B & 9S' },
	{ width: 1429, height: 1904, code_name: 'milka',  name: 'My workplace' },
	{ width: 4967, height: 7022, code_name: 'roadside-picnic',  name: 'Roadside Picnic' },
	{ width: 1080, height: 1920, code_name: 'redgirl',  name: 'Edelgard' },
	{ width: 1920, height: 1080, code_name: 'bladerunner2049',  name: 'Blade Runner 2049' },
	{ width: 1080, height: 1920, code_name: 'purplegirl',  name: 'Lady Nagant' },
]

// SERVER
// export const dimensions = []

// const getImageDimensions = async () => {
// 	for (const imageName of code_names) {
// 		try {
// 			const imagePath = `public/images/${imageName}.webp`
// 			const buffer = await fs.readFile(imagePath)
// 			const { width, height } = sizeOf(buffer)
// 			dimensions.push({ width, height, fileName: imageName })
// 		} catch (error) {
// 			console.error(`Error processing image ${imageName}:`, error)
// 		}
// 	}

// 	return dimensions
// }

// export const imageDimensions = await getImageDimensions()


