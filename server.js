const data = require('./data.json')
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => res.json(data))
//testing
app.listen(port, () => console.log(`Example app listening on port ${port}!`))