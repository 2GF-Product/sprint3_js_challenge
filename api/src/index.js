const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});
const express = require('express')
const cors = require('cors')
const app = express()

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(cors());


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
const userRouter = require('./routes/user')
app.use('/user', userRouter)

app.listen(3001, function() {
  console.log('Servidor inicializado na porta 3001');
}) 