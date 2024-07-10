// // Using the URL Constructor

// let myUrl = new URL('https://DeathGrips.com:8000/path')

// // The values you provide are automatically URL-encoded
// myUrl.searchParams.set('album', 'Exmilitary')
// myUrl.searchParams.set('songName', 'Takyon (Death Yon)')

// // Can extract different parts of the URL and manipulate them with ease
// let firstUrl = myUrl.href

// // Manually Constructing the URL

// let baseUrl = 'https://DeathGrips.com:8000/path?'

// // Manually encoding the URI component
// let album = encodeURIComponent('Exmilitary')

// // encodeURIComponent does not encode: ~!@#$&*()=:/,;?+'
// let songName = encodeURIComponent('Takyon (Death Yon)')

// // Construct the URL manually with encoded parameters
// let manualUrl = `${baseUrl}album=${album}&songName=${songName}`

// // Correcting the encoding for parentheses manually
// songName = songName.replace(/\(/g, '%28').replace(/\)/g, '%29')
// let correctedManualUrl = `${baseUrl}album=${album}&songName=${songName}`

// function layoutOutput(title, content) {
//   const boxWidth = 80
//   const horizontalLine = '═'.repeat(boxWidth)
//   const emptyLine = `║${' '.repeat(boxWidth - 2)}║`

//   console.log(`╔${horizontalLine}╗`)
//   console.log(
//     `║${title.padStart((boxWidth + title.length) / 2).padEnd(boxWidth - 1)}║`
//   )
//   console.log(`╠${horizontalLine}╣`)

//   content.forEach((line) => {
//     let wrappedLines = line.match(new RegExp(`.{1,${boxWidth - 4}}`, 'g')) || []
//     wrappedLines.forEach((wrappedLine) => {
//       console.log(`║ ${wrappedLine.padEnd(boxWidth - 3)} ║`)
//     })
//   })

//   console.log(`╚${horizontalLine}╝`)
// }

// layoutOutput('Using the URL Constructor', [`First URL: ${firstUrl}`])
// layoutOutput('Manually Constructing the URL', [
//   `Second URL: ${manualUrl}`,
//   `Corrected Second URL: ${correctedManualUrl}`,
// ])

