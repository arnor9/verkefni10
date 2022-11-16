const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        about: './sida.html',
        capture: './capture.js',
        animation: './animation.js'
        // ...
        // List all files you want in your build
      }
    }
  }
})