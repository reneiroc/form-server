
exports.contenidoHtml = function (doc){
    // return `
    // <h1>Cliente:  ${datos.cliente} PDF para usarse en email</h1>
    // <p>PDF a partir de este código HTML sencillo</p>
    // `;
    return `
    <div id="pageHeader">Default header</div>
    <div id="pageFooter">Default footer</div>
    <div style= "padding-left: 20px;">

    <h1>Informe de Consolidación</h1>
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
    <p> Comentarios: <strong> ${doc.coments } </strong></p> 
    </div>
    `
}