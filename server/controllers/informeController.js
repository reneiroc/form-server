const Informe = require('../models/informe.model');
const nodeMailer = require ('nodemailer');
// const nodeMailer = require('../mailer');
//Simple version whithout validation or sanitacion
exports.test = function (req, res) {
    res.json({ status: 'Api Works'  });
};

exports.listInformes = async (req, res) => {
   
    informe = await Informe.find();
   console.log('Perfect');
   res.json( informe);
};

// exports.createInforme = async (req, res) => {
//     let doc = req.body;
//     const informe = new Informe( req.body);
//     await informe.save()
//     .then(mail(doc)) //Envio el Emal
//     .then(res.json({status: 'Informe Generado con exito'}));
// };
exports.createInforme = async (req, res) => {
    let doc = req.body;
    const informe = new Informe( req.body);
    // console.log('*****************************');
    // console.log( doc);
    // console.log('*****************************');
    

    await informe.save()
    .then(mail(doc)) //Envio el Emal
    .then(res.json({status: true}));
};

exports.editInforme = function (req, res) {
    res.send ('editado');

};
exports.getInforme = async (req, res) => {
   const informe = await Informe.findById(req.params.id);
   res.json(informe);
    // .then(res.json('Recivido con exito'));
   console.log(informe);

};



//*************************************** */
/*                mail                   */
//************************************* */  
  // send mail with defined transport object
let mail = function(informe){
    let doc = informe;
    var smtpConfig = {
        host: 'smtp.ionos.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'contacto@rcwebmaster.com', // generated ethereal user
            pass: 'Maya0978*' // generated ethereal password
        }
      };
      var transporter = nodeMailer.createTransport(smtpConfig);
      
    //   setup email data with unicode symbols

      let datos = `
        <p> <h1><strong> Datos de Reporte de Consolidación </strong> </h1></p>
        <p> Cliente: <strong> ${doc.cliente} </strong> </p>
        <p> Orden: <strong> ${doc.orden} </strong></p>
        <p> Planta: <strong> ${doc.planta} </strong></p>
        <p> Container: <strong> ${doc.container } </strong></p>
        <p> Motonave: <strong> ${doc.motonave } </strong></p>
        <p> Importador: <strong> ${doc.inporter } </strong></p>
        <p> Puerto Destino: <strong> ${doc.portDest } </strong></p>
        <p> Puerto Origen: <strong> ${doc.portOrig } </strong></p>
        <p> Especie: <strong> ${doc.espices } </strong></p>
        <p> Patente Camión: <strong> ${doc.patenteCamion } </strong></p>
        <p> Patente Carro: <strong> ${doc.patenteCarro } </strong></p>
        <p> Booking: <strong> ${doc.booking } </strong></p>
        <p> Empresa Transporte: <strong> ${doc.empresaTransporte } </strong></p>
        <p> Cantidad de Pallets: <strong> ${doc.cantPallets } </strong></p>
        <p> Hora de Carga: <strong> ${doc.horaCarga } </strong></p>
        <p> Nro. Seteo Container: <strong> ${doc.numeroSeteoContainer } </strong></p>
        <p> Nro. Bolsas: <strong> ${doc.nroBolsas } </strong></p>
        <p> Limpio: <strong> ${doc.limpio = true ? 'Si': 'No'} </strong></p>
        <p> Pre-Enfriad: <strong> ${doc.preEnfriado = true ? 'Si': 'No'} </strong></p>
        <p> En buen estado: <strong> ${doc.buenEstado = true ? 'Si': 'No'} </strong></p>
        <p> Tipo de Carga: <strong> ${doc.tipoCarga } </strong></p>
        <p> Ventilación: <strong> ${doc.ventilacion } </strong></p>
        <p> Comentarios: <strong> ${doc.coments } </strong></p> `

      let mailOptions = {
          from: '"RSK Chile 📃" <contacto@rcwebmaster.com>', // sender address
          to: 'reneiroc@gmail.com', // list of receivers
          subject: 'Reporte de Consolidación ✔', // Subject line
          text: datos, // plain text body
        
          html: datos// html body
      };



      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
          // Preview only available when sending through an Ethereal account
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      });

  }




// var smtpConfig = {
//     host: 'smtp.ionos.com',
//     port: 465,
//     secure: true, // true for 465, false for other ports
//     auth: {
//         user: 'contacto@rcwebmaster.com', // generated ethereal user
//         pass: 'Maya0978*' // generated ethereal password
//     }
// };
// var transporter = nodemailer.createTransport(smtpConfig);

// // setup email data with unicode symbols
// let mailOptions = {
//     from: '"Fred Foo 👻" <contacto@rcwebmaster.com>', // sender address
//     to: 'reneiroc@gmail.com', // list of receivers
//     subject: 'Hello ✔', // Subject line
//     text: 'Hello world?', // plain text body
//     html: '<b>Hello world?</b>' // html body
// };

// // send mail with defined transport object
// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log('Message sent: %s', info.messageId);
//     // Preview only available when sending through an Ethereal account
//     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// });