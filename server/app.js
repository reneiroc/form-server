

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Informe = require('./models/informe.model');
const morgan = require('morgan');
const app = express();



const { mongoose } = require ('./database');//requero solo la conección
// const aa = x.informe;

// const route = require('./routes/informe');
// const indexRoute = require('./routes/index');
// app.use(bodyParser.json()); // soporte para bodies codificados en jsonsupport
// app.use(bodyParser.urlencodedclear({ extended: true })); // soporte para bodies codificados
// initialize our express app

// Middlewares
//incluimos la funcion middleware morgan
app.use ( morgan('dev'));
app.use(cors({origin: 'http://localhost:8080'}));
app.use(express.json());


//Routes

app.use('/api/informe', require('./routes/informe'));

var port = process.env.PORT || 8080;

app.listen(port, () =>{
  console.log('server ris up and running onport ' + port);
});
