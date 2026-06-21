const express = require('express');
const pedidosRouter = require('./routes/pedidos');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensagem: 'Gestor de Pedidos de Garrafão de Água', versao: '1.0.0' });
});

app.use('/api/pedidos', pedidosRouter);

app.use((req, res) => {
  res.status(404).json({ erro: 'Rota não encontrada' });
});

module.exports = app;
