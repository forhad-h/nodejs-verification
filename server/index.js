const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 2000
const host = 'localhost'

  ; (async () => {
    try {
      // connect to localhost mongodb instance
      await mongoose.connect(`mongodb://${host}/nodejs_verification`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })

      // start server with express
      app.listen(port, () => {
        console.log("Server running at", port)
      })
    } catch (err) {
      console.error(err)
    }

  })()