const express = require('express');
const router = express.Router();
const controller = require('../controllers/pedidoController');

router.get('/', controller.listar);
router.get('/:id', controller.buscar);
router.post('/', controller.criar);
router.patch('/:id/status', controller.atualizarStatus);
router.delete('/:id', controller.remover);

module.exports = router;
