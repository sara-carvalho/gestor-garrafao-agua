const service = require('../services/pedidoService');

function listar(req, res) {
  res.json(service.listarPedidos());
}

function buscar(req, res) {
  try {
    const pedido = service.buscarPedido(req.params.id);
    res.json(pedido);
  } catch (e) {
    res.status(404).json({ erro: e.message });
  }
}

function criar(req, res) {
  const { clienteNome, clienteTelefone, endereco, quantidade } = req.body;
  if (!clienteNome || !endereco || !quantidade) {
    return res.status(400).json({ erro: 'clienteNome, endereco e quantidade são obrigatórios' });
  }
  const pedido = service.criarNovoPedido({ clienteNome, clienteTelefone, endereco, quantidade });
  res.status(201).json(pedido);
}

function atualizarStatus(req, res) {
  try {
    const pedido = service.atualizarStatus(req.params.id, req.body.status);
    res.json(pedido);
  } catch (e) {
    res.status(400).json({ erro: e.message });
  }
}

function remover(req, res) {
  try {
    service.removerPedido(req.params.id);
    res.status(204).send();
  } catch (e) {
    res.status(404).json({ erro: e.message });
  }
}

module.exports = { listar, buscar, criar, atualizarStatus, remover };
