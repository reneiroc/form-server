const express = require ( 'express');
const router = express.Router();


const informe = require ('../controllers/informeController');


router.get('/', informe.listInformes);
router.post('/', informe.createInforme);
router.get('/:id', informe.getInforme);
router.put('/:id', informe.editInforme);

 
module.exports = router;

