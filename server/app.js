const express = require('express');
// const path = require('path');
const cors = require('cors');
// const Informe = require('./models/informe.model');
// const multer = require('multer');//Agregado para usar upload file 18/12/2018
// const upload = multer({ dest: 'publics/uploads/' })
const morgan = require('morgan');
// const formidable = require('formidable');
const app = express();
const { mongoose } = require ('./database');//requiero solo la conección

// Middlewares
//incluimos la funcion middleware morgan
app.use ( morgan('dev'));

app.use(cors({origin: 'http://35.211.175.246:80'}));//HAbilitar counicación con el frontend server
// app.use(cors({origin: 'http://localhost:4200', optionsSuccessStatus: 200}));//HAbilitar counicación con el frontend server
// app.use(cors({origin: 'http://192.168.0.15:4200', optionsSuccessStatus: 200}));//HAbilitar counicación con el frontend server
app.use(express.json());


//Routes
app.use('/api/informe', require('./routes/informe'));
app.use('/img', express.static(__dirname + '/public/uploads'));
// headers and content type

var port = process.env.PORT || 3000;

app.listen(port, () =>{
  console.log('server risk up and running onport ' + port);
});
