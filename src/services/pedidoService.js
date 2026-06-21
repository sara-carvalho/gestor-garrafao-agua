const { criarPedido, STATUS } = require('../models/pedido');

const pedidos = [];

function listarPedidos() {
  return pedidos;
}

function buscarPedido(id) {
  const pedido = pedidos.find((p) => p.id === id);
  if (!pedido) throw new Error('Pedido não encontrado');
  return pedido;
}

function criarNovoPedido(dados) {
  const pedido = criarPedido(dados);
  pedidos.push(pedido);
  return pedido;
}

function atualizarStatus(id, novoStatus) {
  if (!Object.values(STATUS).includes(novoStatus)) {
    throw new Error(`Status inválido: ${novoStatus}`);
  }
  const pedido = buscarPedido(id);
  pedido.status = novoStatus;
  pedido.atualizadoEm = new Date().toISOString();
  return pedido;
}

function removerPedido(id) {
  const index = pedidos.findIndex((p) => p.id === id);
  if (index === -1) throw new Error('Pedido não encontrado');
  pedidos.splice(index, 1);
}

module.exports = { listarPedidos, buscarPedido, criarNovoPedido, atualizarStatus, removerPedido };
