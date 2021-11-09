const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.json())


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


const userRouter = require('./routes/user')
app.use('/userRouter', userRouter)

app.listen(3001, function() {
  console.log('Servidor inicializado na porta 3001');
}) 