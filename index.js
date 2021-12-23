const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

//use methods libs
const app = express();
require('dotenv').config();

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//Database connection
mongoose.connect(process.env.DATABASE,{
 useNewUrlParser: true,
 useUnifiedTopology: true
}).then(() => console.log('Connect databse sucess'))

//routes setup
app.use('/api/img', require('./routes/img.routes'));

//listen to port
app.listen(process.env.PORT || 5000, () => console.log(`Servidor corriendo en el puerto ${process.env.PORT ? process.env.PORT : 5000}`))

