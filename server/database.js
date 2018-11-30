// export const informe = {
//     planta: 'planta',
//     container: 'MHJL8767541',
//     puerto: 'valparaiso',

// };

const mongoose = require('mongoose');


const URI = 'mongodb://localhost/rsk-informe';

mongoose.connect(URI)
    .then( db => console.log('Base de Datos Conectada'))
    .catch( err => console.error(err));//Promesa

module.exports = mongoose;