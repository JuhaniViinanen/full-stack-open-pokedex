const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (_req, res) => {
  res.send('11.17 testing')
})

app.get('/health', (_req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  throw new Error("this will fail");
  
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
