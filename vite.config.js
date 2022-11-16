const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        about: './sida.html',
        capture: './capture.js',
        animation: './animation.js',
        mynd1: './anfield.jpg',
        mynd2: './KloppZoom2.jpg',
        mynd3: './liverpool.png'

        // ...
        // List all files you want in your build
      }
    }
  }
})