const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
//Crear esquema de la base de datos
let InformeSchema= new Schema ({
    
    orden: { type:String },
    planta: { type: String },
    cliente: { type: String },
    container: { type: String },
    motonave: {  type: String  },
    importer: { type: String },
    portDest: {  type: String },
    portOrig: { type: String },
    espices: { type: String },
    patenteCamion: { type: String } ,
    patenteCarro: { type: String },
    booking: { type: String },
    empresaTrasnporte: { type: String },
    cantPallets: { type: Number },
    horaCarga: { Date },
    nroSeroContainer: { Number },
    nroBolsas: { Number },
    limpio: { type: Boolean },
    preEnfriado: { type: Boolean },
    buenEstado: { type: Boolean },
    tipoCarga: { type: String},
    seteoContainer: { type: Number },
    ventilacion: { type: Number },
    coments: { type: String}
});
//esportar el model Informe con el esquema definido
module.exports = mongoose.model('Informe', InformeSchema);

