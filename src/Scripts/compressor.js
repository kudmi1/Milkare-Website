import { exec } from 'child_process'

const code_names = [
	'roadside-picnic'
]

code_names.map((name) => {
	const input = `public/images-sm/${name}-sm.webp`
	const output = `public/images-blur/${name}.webp`
	const command = `ffmpeg -i ${input} -vf "scale=40:-1,boxblur=5" ${output}`

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    console.error(`stderr: ${stderr}`)
  })
})



