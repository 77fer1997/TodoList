const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/ToDoRoute')
require('dotenv').config()
const app = express()
console.log(process.env.MONGODB_URL)
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('MongoDB connected')).catch(err => console.log(err))
app.use(routes)
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))