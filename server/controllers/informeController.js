const Informe = require('../models/informe.model');
const nodeMailer = require ('nodemailer');
// const nodeMailer = require('../mailer');
//Simple version whithout validation or sanitacion
exports.test = function (req, res) {
    res.json({
        status: 'Api Works'
    });

};
/*
exports.listInformes = function (req, res){
    Call back function way
    Informe.find(function (informe, error){
        ....
    });
    Promes Waye
    Informe.find()
        .then ()
        .catch(err => console.error(err));

    Async Await Way :) 
};
*/
exports.listInformes = async (req, res) => {
   const informe = await Informe.find();
   res.json( informe);
//    console.log('Perfect');
};

exports.createInforme = async (req, res) => {
    let doc = req.body;
    const informe = new Informe( req.body);
    await informe.save()
    .then(mail(doc)) //Envio el Emal
    .then(res.json({status: 'Informe Generado con exito'}));
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
        <p> Cliente: ${doc.cliente} </p>
        <p> Orden: ${doc.orden} </p>
        <p> Planta: ${doc.planta} </p>

      `

      let mailOptions = {
          from: '"Fred Foo 👻" <contacto@rcwebmaster.com>', // sender address
          to: 'reneiroc@gmail.com', // list of receivers
          subject: 'Hello ✔', // Subject line
          text: 'Hello world?', // plain text body
        
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