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
    var img5 = 'file://' + __dirname + '/uploads/' + images[4];
    var img6 = 'file://' + __dirname + '/uploads/' + images[5];
    var img7 = 'file://' + __dirname + '/uploads/' + images[6];
    var img8 = 'file://' + __dirname + '/uploads/' + images[7];
    var img9 = 'file://' + __dirname + '/uploads/' + images[8];
    var img10 = 'file://' + __dirname + '/uploads/' + images[9];
    var img11= 'file://' + __dirname + '/uploads/' + images[10];
    var img12 = 'file://' + __dirname + '/uploads/' + images[11];
    var img13 = 'file://' + __dirname + '/uploads/' + images[12];
    var img14 = 'file://' + __dirname + '/uploads/' + images[13];
    var img15 = 'file://' + __dirname + '/uploads/' + images[14];
    var img16 = 'file://' + __dirname + '/uploads/' + images[15];
    var img17 = 'file://' + __dirname + '/uploads/' + images[16];
    var logo = 'file://' + __dirname + '/uploads/logo.jpg'; 
    logo = path.normalize(logo);
    img1 = path.normalize(img1);
    img2 = path.normalize(img2);
    img3 = path.normalize(img3);
    img4 = path.normalize(img4);
    img5 = path.normalize(img5);
    img6 = path.normalize(img6);
    img7 = path.normalize(img7);
    img8 = path.normalize(img8);
    img9 = path.normalize(img9);
    img10 = path.normalize(img10);
    img11 = path.normalize(img11);
    img12 = path.normalize(img12);
    img14 = path.normalize(img13);
    img15 = path.normalize(img14);
    img16 = path.normalize(img15);
    img17 = path.normalize(img16);

    var anoContainer = new Date(doc.anoContainer);    
    var a = anoContainer.getFullYear();
    var m = anoContainer.getMonth()+1;
    var m = (m < 10) ? m + "0" : m.toString();  
    m = '' + m;
    a = '' + a;
    var aContainer = m + a;
    console.log(aContainer);
    var pti = new Date(doc.pti);
    var pti = pti.toLocaleDateString();
    console.log(pti);
    return `
    
    
    <!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
       <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"> -->
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" integrity="sha384-PmY9l28YgO4JwMKbTvgaS7XNZJ30MK9FAZjjzXtlqyZCqBY6X6bXIkM++IkyinN+" crossorigin="anonymous">
        
        <link href="https://fonts.googleapis.com/css?family=Libre+Barcode+128|Libre+Barcode+39+Text" rel="stylesheet">
        <title>Hello, world!</title>
    
        <style type="text/css">
        body{
          width:590px; 
          font-size: small;
      }
      
      tr{
        text-align: center;
      }
      table {
        width: 550px;

      }

    .seccionA tr th{
        padding: 4px;
        font-size: 8px;
        /* border: 1px;
        border-style: solid; */
        text-align: center;
          
    
      }
      .seccionA tr td{
          padding: 4px;
          color: grey;          
          font-size: 10px;
          background-color: red;
          
    
      }
      .seccionComments{
        width: 550px;
        text-align: left !important;
        font-size: 10px;
    }
      .seccionFoto tr td {
          
          padding-top: 0px;
          padding-left: 5px;
          padding-right: 5px;
          padding-bottom: 5px;
          font-size: 10px;
    
    
      }
    
      tfoot, tr{ /* TAbla footer */
                 text-align: center;
               
              }
            hr{
            border-bottom: 1px solid green;
            width:93%; 
            margin-left: 0;
        }

        .seccionPallets{
            width: 550px;
            font-size: 8px;
            
        }
        .seccionPallets td{
            border: thin solid;
        }
        .tdPos{
            width: 10px;
        }
        .tdUbic{
            width: 40px;
        }
        .tdTemp{
            width: 50px
        }
        .tdPallet{
            width: 170px;
        }
        .codebar{
            padding-top: 0px; 
            font-family: 'Libre Barcode 39 Text', cursive;
            font-size:18px;
        }
    
        </style>
</head>
<body style="width: 617px; padding: 10px; align">

   <!-- <div id="pageHeader">
    <img style= "width: 150px; height: 73px; src = "${logo}" >
    </div>
    -->
    <div id="pageFooter"></div>
    <div >
    <img src = "${logo}" >
    </div>
    <h6  style= "text-align: center;"> <strong>REGITRO DE CONSOLIDACION DE </strong></h6>
    <h6 style="text-align: center;"><strong> CONTENEDOR REFRIGERADO </strong> </h6>
   <!-- <hr> -->
<!-- HTML Code -->

  <table class="seccionA" style="border-style: solid; border-width: 1px;">
    <thead>
    <tr>
    <th style="width:130px;">FECHA</th>
    <th style="width:200px;">ORDEN DE EMBARQUE</th>
    <th style="width:200px;">EXPORTADOR</th>
    <th style="width:200px;">PLANTA FRIGORIFICO</th>
    
    </tr>
    </thead>
    
    <tr>
    <td><span class = "label label-default">10/12/2019 <span></td>
    <td style="width:130px;"><span class="label label-default">${doc.orden}</span></td>

    <td style="width:200px;"><span class="label label-default">${doc.cliente}</span></td>
    <td style="width:200px;"><span class="label label-default">${doc.planta}</span></td>

    </tr>

    
  </table>

   

  <!-- <hr> -->

  <h6  style= "text-align: center;"> <strong>IDENTIFICACION DE CARGA </strong></h6>

  <table class="seccionA" style="border-style: solid; border-width: 1px;">
    <thead>
    <tr>
    <th style="width:130px;">CONTAINER</th>
    <th style="width:200px;">MOTONAVE</th>
    <th  style="width:200px;">IMPORTADOR</th>  
    <th style="width:130px;">PUERTO DE CARGA</th>  
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><span class="label label-default"> ${doc.container}</sapan></td>
    <td ><span class="label label-default">${doc.motonave}</sapan></td>
    <td ><span class="label label-default">${doc.inporter}</sapan></td> 
    <td>  <span class="label label-default">${doc.portOrig } </span></td>
    </tr>
    </tbody>
        <thead>
        <tr>
        <th style="width:200px;">PUERTO DE DESTINO</th>
        <th style="width:200px;">ESPECIE</th>    
        <th style="width:170px;">PATENTE CAMION</th>
        <th style="width:180px;">PATENTE CARRO</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        
        <td> <span class="label label-default">${doc.portDest }</span></td>
        <td> <span class="label label-default">${doc.espices }</span></td> 
        <td>  <span class="label label-default"> ${doc.patenteCamion } </span></td>
        <td> <span class="label label-default"> ${doc.patenteCarro } </span></td>
        </tr>
        </tbody>

        <thead>
        <tr>

        
        <th style="width:100px;">BOOKING</th>    
        <th style="width:200px;">EMPRESA DE TRANSPORTE</th>    
        <th style="width:150px;">CANT. PALLETS</th>
        <th style="width:150px;">HORA CARGA</th>
        </tr>
        </thead>
        <tbody>
        <tr >

        <td> <span class="label label-default">${doc.booking } </span></td> 
        <td> <span class="label label-default">${doc.empresaTransporte } </span></td> 
        <td> <span class="label label-default"> ${doc.cantPallets }</span></td>
        <td><span class="label label-default"> ${doc.horaCarga }</span></td>
        </tr>
        </tbody>
      <thead>
      <tr>
      
      
      <th style="width:130px;"># TERMOGRAFO</th>    
      <th style="width:130px;"># PALLETS</th>    
      <th style="width:150px;"># CANT. CAJAS</th>    
      <th></th>
      </tr>
      </thead>
      <tbody>
      <tr>

      <td><span class="label label-default">${doc.termografo1 } </span> </td> 
      <td><span class="label label-default">${doc.termografoPallet1 }</span></td> 
      <td><span class="label label-default">${doc.cantPallets }</span></td> 
      <td></td>
      </tr>
      <tr>
      <td style= "padding-top: 0px"><span class="label label-primary">${doc.termografo1 } </span> </td> 
      <td style= "padding-top: 0px"><span class="label label-primary">${doc.termografoPallet2 }</span></td> 
      <td> </td>

      <td></td> 
      
      

      </tr>
      </tbody>
    </table>

    <!-- <hr> -->

    <h6  style= "text-align: center;"> <strong>ESPECIFICACION DE CONTENEDOR </strong></h6>

    <table class="seccionA" style="border-style: solid; border-width: 1px;">
        <thead>
        <tr>
        <th style="width:130px;">PRE ENFRIADO</th>
        <th style="width:200px;">LIMPIO Y SIN OLORES</th>
        <th style="width:200px;">CONTENEDOR EN BUEN ESTADO</th>    
        <th style="width:200px;">TIPO DE CARGA</th>    
        <th style="width:200px;">SETEO CONTENEDOR</th>    
           
        </tr>
        </thead>
        <tbody>
        <tr>
        <td> <span class="label label-primary">${doc.preEnfriado = true ? 'Si': 'No'}</span></td>
        <td><span class="label label-primary">${doc.limpio = true ? 'Si': 'No'}</span></td>
        <td><span class="label label-primary">${doc.buenEstado = true ? 'Si': 'No'}</span></td>
        <td><span class="label label-primary">${doc.tipoCarga }</span></td>
        <td><span class="label label-primary">${doc.seteoContainer }</span></td>
        
        </tr>
        </tbody>
      <thead>
      <tr>
        <th style="width:200px;">VENTILACION</th> 
        <th> AÑO DE CONTENEDOR</td>
        <th> PTI</td>
        <th> QUEST</td>
        <th> ADMOSFERA CONTROLADA</td>
        
       </tr>
      </thead>
      <tbody>
      <tr>
      <td><span class="label label-primary">${doc.ventilacion }</span></td>
        <td><span class="label label-primary"> ${ aContainer}</span></td>
        <td><span class="label label-primary"> ${ pti}</span></td>
        <td><span class="label label-primary"> ${doc.quest = true ? 'Si': 'No'}</span></td>
        <td><span class="label label-primary"> # ${ doc.admosferaNumero } / ${doc.admosferaPorcentaje} %</span></td>
      </tr>
      </tbody>
  </table>

            <!-- <hr> -->

          <h6  style= "text-align: center;"> <strong>OBSERVAICONES Y COMENTARIOS </strong></h6>
        <table class = "seccionComments" style="border-style: solid; border-width: 1px;">
        
            <tr>
                <td><p class="text-left"> ${doc.coments } </p></td>
            </tr>
        </table>
          
        
        <br>
        <br>
        <br>
        <br>
        <h6 style="text-align: center;"><strong> ESTIBA DE PALETS </strong> </h6>       
       
        <table class="seccionPallets" > 
            <thead>
            <tr> </tr>
                <tr>
                    <td class="tdUbic">UBIC.</td>
                    <td class="tdPallet">Nº DE PALLET</td>
                    <td class="tdTempo">Temp. ºC</td>
                    <td class="tdPos">Posi.</td>
                    <td class="tdUbic">Ubic.</td>
                    <td class="tdPallet">Nº PALLET</td>
                    <td class="tdTempo">Temp. ºC</td>
                    <td class="tdPos"> Posic.</td>
                </tr>
            </thead>
        <tbody>
            <tr>
                <td class="tdUbic" style="height:28px;">1A</td>
                <td class="tdPallet codebar">${doc.a1}</td>
                <td class="tdTempo">${doc.ta1}</td>
               <td class="tdPos"> P</td>
                <td class="tdUbic"> 1B</td>
                <td class="tdPallet codebar"> ${doc.b1}  </td>
                <td class="tdTempo"> ${doc.tb1} </td>
                <td class="tdPos"> E</td>
            </tr>
            <tr>
                <td class="tdUbic" style="height:28px;">2A</td>
                <td class="tdPallet codebar">${doc.a2}</td>
                <td class="tdTempo">${doc.ta2}</td>
               <td class="tdPos"> P</td>
                <td class="tdUbic"> 2B</td>
                <td class="tdPallet codebar"> ${doc.b2}  </td>
                <td class="tdTempo"> ${doc.tb2} </td>
                <td class="tdPos"> E</td>
            </tr>
            <tr>
                <td class="tdUbic" style="height:28px;">3A</td>
                <td class="tdPallet codebar">${doc.a3}</td>
                <td class="tdTempo">${doc.ta3}</td>
               <td class="tdPos"> P</td>
                <td class="tdUbic"> 3B</td>
                <td class="tdPallet codebar"> ${doc.b3}  </td>
                <td class="tdTempo"> ${doc.tb3} </td>
                <td class="tdPos"> E</td>
            </tr>
            <tr>
                <td class="tdUbic" style="height:28px;">4A</td>
                <td class="tdPallet codebar">${doc.a4}</td>
                <td class="tdTempo">${doc.ta4}</td>
               <td class="tdPos"> P</td>
                <td class="tdUbic"> 4B</td>
                <td class="tdPallet codebar"> ${doc.b4}  </td>
                <td class="tdTempo"> ${doc.tb4} </td>
                <td class="tdPos"> E</td>
            </tr>
            <tr>
                <td class="tdUbic" style="height:28px;">5A</td>
                <td class="tdPallet codebar">${doc.a5}</td>
                <td class="tdTempo">${doc.ta5}</td>
               <td class="tdPos"> P</td>
                <td class="tdUbic"> 5B</td>
                <td class="tdPallet codebar"> ${doc.b5}  </td>
                <td class="tdTempo"> ${doc.tb5} </td>
                <td class="tdPos"> E</td>
            </tr>
            <tr>
                <td class="tdUbic" style="height:28px;">6A</td>
                <td class="tdPallet codebar">${doc.a6}</td>
                <td class="tdTempo">${doc.ta6}</td>
               <td class="tdPos"> P</td>
                <td class="tdUbic"> 6B</td>
                <td class="tdPallet codebar"> ${doc.b6}  </td>
                <td class="tdTempo"> ${doc.tb6} </td>
                <td class="tdPos"> E</td>
            </tr>
            <tr>
                <td class="tdUbic" style="height:28px;">7A</td>
                <td class="tdPallet codebar">${doc.a7}</td>
                <td class="tdTempo">${doc.ta7}</td>
               <td class="tdPos"> P</td>
                <td class="tdUbic"> 7B</td>
                <td class="tdPallet codebar"> ${doc.b7}  </td>
                <td class="tdTempo"> ${doc.tb7} </td>
                <td class="tdPos"> E</td>
            </tr>
            <tr>
                <td class="tdUbic" style="height:28px;">8A</td>
                <td class="tdPallet codebar">${doc.a8}</td>
                <td class="tdTempo">${doc.ta8}</td>
               <td class="tdPos"> P</td>
                <td class="tdUbic"> 8B</td>
                <td class="tdPallet codebar"> ${doc.b8}  </td>
                <td class="tdTempo"> ${doc.tb8} </td>
                <td class="tdPos"> E</td>
            </tr>
            <tr>
                <td class="tdUbic" style="height:28px;">9A</td>
                <td class="tdPallet codebar">${doc.a9}</td>
                <td class="tdTempo">${doc.ta9}</td>
               <td class="tdPos"> P</td>
                <td class="tdUbic"> 9B</td>
                <td class="tdPallet codebar"> ${doc.b9}  </td>
                <td class="tdTempo"> ${doc.tb9} </td>
                <td class="tdPos"> E</td>
            </tr>
            <tr>
                <td class="tdUbic" style="height:28px;">10A</td>
                <td class="tdPallet codebar">${doc.a10}</td>
                <td class="tdTempo">${doc.ta10}</td>
               <td class="tdPos"> P</td>
                <td class="tdUbic"> 10B</td>
                <td class="tdPallet codebar"> ${doc.b10}  </td>
                <td class="tdTempo"> ${doc.tb10} </td>
                <td class="tdPos"> E</td>
            </tr>
        </tbody>
    
        </table>
        <br>
        <br>

        <h6 style="text-align: center;"><strong> FOTOS DE CONSOLIDACION  DECARGA </strong> </h6>    
            <br>
        <table class="seccionFoto" >
            <tr>
              <td>
                <img  src="${img1}" style="width: 160px; height: 160px; padding-right: 10px; padding-bottom: 10px;" >
              </td>
              <td>
                <img src="${img4}" style="width: 160px; height: 160px; padding-right: 10px; padding-bottom: 10px;" >
              </td>
              <td>
              <img src="${img2}" style="width: 160px; height: 160px; padding-right: 10px; padding-bottom: 10px;" >
              </td>
            </tr>
            <tfoot>
                <tr>
                    <td>NRO CONTENEDOR</td>
                    <td>PATENTE DE CAMION</td>
                    <td>PATENTE DE CARRO</td>
                </tr>
                <tr style="height: 20px;"></tr>
                
            </tfoot>

        </table>
        <table class="seccionFoto">
          <tr>
            <td>
                <img src="${img3}" style="width: 160px; height: 160px; padding-right: 10px; padding-bottom: 10px;" >
            </td>
            <td>
                <img src="${img4}" style="width: 160px; height: 160px; padding-right: 10px; padding-bottom: 10px;" >

            </td>

            <td>
                    <img src="${img5}" style="width: 160px; height: 160px; padding-right: 10px; padding-bottom: 10px;" >
            </td>
          </tr>
          <tfoot>

            <tr>
                <td>SETE DE CONTENEDOR</td>
                <td>LAMPA DE CONTENEDOR</td>
                <td>DETALLE LAMPA</td>
            </tr>
            </tfoot>
            </table>
        
            <table class="seccionFoto">

        <tr style="height: 20px;"></tr>
        <tr>
            <td>
                <img src="${img6}" style="width: 160px; height: 160px; padding-right: 10px; padding-bottom: 10px;" >
            </td>
            <td>
                <img src="${img7}" style="width: 160px; height: 160px; padding-right: 10px; padding-bottom: 10px;" >
            </td>
            <td>
                <img src="${img8}" style="width: 160px; height: 160px; padding-right: 10px; padding-bottom: 10px;" >
            </td>
            <tfoot>
        <tr>
            <td>CARTONES INICIO CARGA</td>
            <td>ENCENDIDO TERMOGRAFO1</td>
            <td>ENCENDIDO TERMOGRAFO2</td>
        </tr>
        </tfoot>
        </table>
        <table class="seccionFoto">
        <tr style="height: 20px;"></tr>
        <tr>
            <td>
                <img src="${img9}" style="width: 160px; height: 160px; padding-right: 10px; padding-bottom: 10px;" >
            </td>
            <td>
                <img src="${img10}" style="width: 160px; height: 160px; padding-right: 10px; padding-bottom: 10px;" >
            </td>
            <td>
                <img src="${img11}" style="width: 160px; height: 160px; padding-right: 10px; padding-bottom: 10px;" >
            </td>
            <tfoot>
        <tr>

            <td>NUMERO TERMOGRAFO</td>
            <td>POSTURA TERMOGRAFO - INICIO</td>
            <td>POSTURA TERMOGRAFO - PUERTA</td>
        </tr>     
        </tfoot>
        <tr style="height: 20px;"></tr>
        </table>
        <table class="seccionFoto">
        <tr style="height: 20px;"></tr>
        <tr>
            <td>
                <img src="${img12}" style="width: 160px; height: 160px; padding-right: 10px; padding-bottom: 10px;" >
            </td>
            <td>
                <img src="${img13}" style="width: 160px; height: 160px; padding-right: 10px; padding-bottom: 10px;" >
            </td>
            <td>
                <img src="${img14}" style="width: 160px; height: 160px; padding-right: 10px; padding-bottom: 10px;" >
            </td>
            <tfoot>
        <tr>

            <td>ALTURA DE PALLETS</td>
            <td>CHIMENEAS</td>
            <td>BUFANDAS</td>
        </tr>     
        </tfoot>
        <tr style="height: 20px;"></tr>
        </table>
        <table class="seccionFoto">
        <tr style="height: 20px;"></tr>
        <tr>
            <td>
                <img src="${img15}" style="width: 160px; height: 160px; padding-right: 10px; padding-bottom: 10px;" >
            </td>
            <td>
                <img src="${img16}" style="width: 160px; height: 160px; padding-right: 10px; padding-bottom: 10px;" >
            </td>
            <td>
                <img src="${img17}" style="width: 160px; height: 160px; padding-right: 10px; padding-bottom: 10px;" >
            </td>
            <tfoot>
        <tr>

            <td>CARTON DE PISO</td>
            <td>CARTONE CIERRE DE CAJAS</td>
            <td>AÑO DE COTENEDOR</td>
        </tr>     
        </tfoot>
        <tr style="height: 20px;"></tr>
        </table>
        
    
  </body>
</html>
    `
}

