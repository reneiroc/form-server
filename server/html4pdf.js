const path = require('path');

exports.contenidoHtml = function (doc, images){
    // return `
    // <h1>Cliente:  ${datos.cliente} PDF para usarse en email</h1>
    // <p>PDF a partir de este código HTML sencillo</p>
    // `;

    var img1 = 'file://' + __dirname + '/uploads/' + images[0];
    var img2 = 'file://' + __dirname + '/uploads/' + images[1];
    var img3 = 'file://' + __dirname + '/uploads/' + images[2];
    var img4 = 'file://' + __dirname + '/uploads/' + images[3];
    img1 = path.normalize(img1);
    img2 = path.normalize(img2);
    img3 = path.normalize(img3);
    img4 = path.normalize(img4);
    


    return `
    
    <html>
<head>
    <style type="text/css">
    body{

        font-size: small;

    }
    </style>
</head>
<body>
    <div id="pageHeader">Default header</div>
    <div id="pageFooter">Default footer</div>
    <div style= "padding-left: 20px;">


    <h1>Informe de Consolidación</h1>
    <p> <h2><strong> Datos de Reporte de Consolidación </strong> </h2></p>
   
    <table style="width: 100%; font-size: small;"
        <tbody>
        <tr >
        <td >ORDEN</td>
        <td > <strong> ${doc.orden} </strong></td>
        <td >EMPRESA TRANSPORTE</td>
        <td ><strong> ${doc.empresaTransporte } </strong></td>
        </tr>
        <tr >
        <td >PLANTA</td>
        <td ><strong> ${doc.planta} </strong><</td>
        <td >CANTIDAD PALLETS</td>
        <td ><strong> ${doc.cantPallets } </strong></td>
        </tr>
        <tr >
        <td >CONTAINER</td>
        <td > <strong> ${doc.container } </strong></td>
        <td >HORA DE CARGA</td>
        <td ><strong> ${doc.horaCarga } </strong></td>
        </tr>
        <tr >
        <td >MOTONAVE</td>
        <td ><strong> ${doc.motonave } </strong></td>
        <td >SETEO CONTENEDOR</td>
        <td ><strong> ${doc.numeroSeteoContainer } </strong></td>
        </tr>
        <tr >
        <td >IMPORTADOR</td>
        <td ><strong> ${doc.inporter } </strong></td>
        <td >NO. BOLSAS</td>
        <td ><strong> ${doc.nroBolsas } </strong></td>
        </tr>
        <tr >
        <td >PUERTO DESTINO</td>
        <td ><strong> ${doc.portDest } </strong></td>
        <td >LIMPIO</td>
        <td ><strong> ${doc.limpio = true ? 'Si': 'No'} </strong></td>
        </tr>
        <tr >
        <td >PUERTO ORIGEN</td>
        <td ><strong> ${doc.portOrig } </strong></td>
        <td >PRE-ENFRIADO</td>
        <td ><strong> ${doc.preEnfriado = true ? 'Si': 'No'} </strong></td>
        </tr>
        <tr >
        <td >ESPECE</td>
        <td ><strong> ${doc.espices } </strong></td>
        <td >EN BUEN ESTADO</td>
        <td ><strong> ${doc.buenEstado = true ? 'Si': 'No'} </strong></td>
        </tr>
        <tr >
        <td >PATENTE CAMION</td>
        <td ><strong> ${doc.patenteCamion } </strong></td>
        <td >TIPO DE CARGA</td>
        <td ><strong> ${doc.tipoCarga } </strong></td>
        </tr>
        <tr >
        <td >BOOKING</td>
        <td ><strong> ${doc.booking } </strong></td>
        <td >VENTILACION&nbsp;</td>
        <td ><strong> ${doc.ventilacion } </strong></td>
        </tr>
        </tbody>
        </table>
        <h2> *** FOTOS DE CONSOLIDACIÓN DE CARGA*** </h2>
        <div> Comentarios: <strong> ${doc.coments } </strong> </div>
        <br>
        <br>
        <div>
            <img src="${img1}" style="width: 230px; height: 230px; padding-right: 10px; padding-bottom: 10px;" >
            <img src="${img2}" style="width: 230px; height: 230px; padding-right: 10px; padding-bottom: 10px;" >
            <img src="${img3}" style="width: 230px; height: 230px; padding-right: 10px; padding-bottom: 10px;" >
            <img src="${img4}" style="width: 230px; height: 230px; padding-right: 10px; padding-bottom: 10px;" >
        </div>
 </body>
</div>
</html>
    `
}




// <div id="pageHeader">Default header</div>
//     <div id="pageFooter">Default footer</div>
//     <div style= "padding-left: 20px;">


//     <h1>Informe de Consolidación</h1>
//     <p> <h2><strong> Datos de Reporte de Consolidación </strong> </h2></p>
   
    
//     <p> Cliente: <strong> ${doc.cliente} </strong> </p>
//     <p> Orden: <strong> ${doc.orden} </strong></p>
//     <p> Planta: <strong> ${doc.planta} </strong></p>
//     <p> Container: <strong> ${doc.container } </strong></p>
//     <p> Motonave: <strong> ${doc.motonave } </strong></p>
//     <p> Importador: <strong> ${doc.inporter } </strong></p>
//     <p> Puerto Destino: <strong> ${doc.portDest } </strong></p>
//     <p> Puerto Origen: <strong> ${doc.portOrig } </strong></p>
//     <p> Especie: <strong> ${doc.espices } </strong></p>
//     <p> Patente Camión: <strong> ${doc.patenteCamion } </strong></p>
//     <p> Patente Carro: <strong> ${doc.patenteCarro } </strong></p>
//     <p> Booking: <strong> ${doc.booking } </strong></p>
//     <p> Empresa Transporte: <strong> ${doc.empresaTransporte } </strong></p>
//     <p> Cantidad de Pallets: <strong> ${doc.cantPallets } </strong></p>
//     <p> Hora de Carga: <strong> ${doc.horaCarga } </strong></p>
//     <p> Nro. Seteo Container: <strong> ${doc.numeroSeteoContainer } </strong></p>
//     <p> Nro. Bolsas: <strong> ${doc.nroBolsas } </strong></p>
//     <p> Limpio: <strong> ${doc.limpio = true ? 'Si': 'No'} </strong></p>
//     <p> Pre-Enfriad: <strong> ${doc.preEnfriado = true ? 'Si': 'No'} </strong></p>
//     <p> En buen estado: <strong> ${doc.buenEstado = true ? 'Si': 'No'} </strong></p>
//     <p> Tipo de Carga: <strong> ${doc.tipoCarga } </strong></p>
//     <p> Ventilación: <strong> ${doc.ventilacion } </strong></p>
//     <p> Comentarios: <strong> ${doc.coments } </strong></p> 
//     <h2> *** FOTOS DE CONSOLIDACIÓN DE CARGA*** </h2>
//     <div>
//     <img src="${img1}" style="width: 150px; height: 150px;" >
//     <img src="${img2}" style="width: 150px; height: 150px;" >
//     <img src="${img3}" style="width: 150px; height: 150px;" >
//     <img src="${img4}" style="width: 150px; height: 150px;" >
//     </div>