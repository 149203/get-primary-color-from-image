const use_vibrant = require('node-vibrant')
const rgb_to_hex = require('rgb-hex')

const image_path = 'images/logo.jpg'

use_vibrant
   .from(image_path)
   .getPalette()
   .then(palette => {
      console.log(rgb_to_hex(...palette.DarkVibrant._rgb))
   })
