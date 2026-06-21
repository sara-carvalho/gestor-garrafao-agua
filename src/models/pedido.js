const { v4: uuidv4 } = require('uuid');

const STATUS = {
  PENDENTE: 'pendente',
  CONFIRMADO: 'confirmado',
  EM_ENTREGA: 'em_entrega',
  ENTREGUE: 'entregue',
  CANCELADO: 'cancelado',
};

function criarPedido({ clienteNome, apartamento, quantidade }) {
  return {
    id: uuidv4(),
    clienteNome,
    apartamento,
    quantidade,
    status: STATUS.PENDENTE,
    criadoEm: new Date().toISOString(),
    atualizadoEm: new Date().toISOString(),
  };
}

module.exports = { criarPedido, STATUS };
