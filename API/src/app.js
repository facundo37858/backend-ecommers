const express=require('express')
const cors=require('cors')
const morgan = require('morgan');
const routes=require('./routes/index.js')
const app= express()
app.name = 'API';

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use('/api',routes)

module.exports = app;