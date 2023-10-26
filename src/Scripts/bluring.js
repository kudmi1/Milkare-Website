import { exec } from 'child_process'

const gitTrigger = 'Some text'

const code_names = [
	'milka-blur'
]

code_names.map((name) => {
	const input = `public/images/${name}.webp`
	const output = `public/images/${name}-blur.webp`
	const command = `ffmpeg -i ${input} -vf "boxblur=10" ${output}`

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    console.error(`stderr: ${stderr}`)
  })
})

