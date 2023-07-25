import { exec } from 'child_process'

const code_names = [
	'Lucy',
	'kokomi',
	'Makima2',
	'alhaitam',
	'mybirthday',
	'komi',
	'himeno',
	'pochita2',
	'2B_9S',
	'milka',
	'redgirl',
	'purplegirl',
]

code_names.map((name) => {
	const input = `public/images-bg/${name}.webp`
	const output = `public/images-bg/${name}-blur.webp`
	const command = `ffmpeg -i ${input} -vf "boxblur=5" ${output}`

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    console.error(`stderr: ${stderr}`)
  })
})

