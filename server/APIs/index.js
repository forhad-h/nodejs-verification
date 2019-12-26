module.exports = (app) => {

  app.get('/', (req, res) => {
    res.send([{ id: "1", name: "nothing" }])
  })

  app.post('/signup', (req, res) => {

  })

  app.post('/signin', (req, res) => {

  })
}