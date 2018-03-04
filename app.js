const express = require('express')
const app = express()

// app.use('/static', express.static('./build/static'))

app.get('/example', (req, res) => {
  res.json({ user: 'EXAMPLE' })
})

const port = 3001

// Start server
app.listen(port, () => {
  console.log(`Listening on ${port}`);
})
