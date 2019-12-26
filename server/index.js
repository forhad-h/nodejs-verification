const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 4500
const host = 'localhost'

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// load APIs
require('./APIs/')(app)

  ; (async () => {
    try {
      // connect to localhost mongodb instance
      await mongoose.connect(`mongodb://${host}/nodejs_verification`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })

      // start server with express
      app.listen(port, () => {
        console.log("Server running at", "http://localhost:" + port)
      })
    } catch (err) {
      console.error(err)
    }

  })()