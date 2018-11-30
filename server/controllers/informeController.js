const Informe = require('../models/informe.model');

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
};

exports.createInforme = async (req, res) => {
    const informe = new Informe( req.body);
    await informe.save()
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