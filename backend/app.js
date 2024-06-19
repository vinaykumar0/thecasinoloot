const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes/routes')
require('./config/database')
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))


app.use('/api/v1', routes)



app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`)
})