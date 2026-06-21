const { v4: uuidv4 } = require('uuid');

const STATUS = {
  PENDENTE: 'pendente',
  CONFIRMADO: 'confirmado',
  EM_ENTREGA: 'em_entrega',
  ENTREGUE: 'entregue',
  CANCELADO: 'cancelado',
};

function criarPedido({ clienteNome, clienteTelefone, endereco, quantidade }) {
  return {
    id: uuidv4(),
    clienteNome,
    clienteTelefone,
    endereco,
    quantidade,
    status: STATUS.PENDENTE,
    criadoEm: new Date().toISOString(),
    atualizadoEm: new Date().toISOString(),
  };
}

module.exports = { criarPedido, STATUS };
