const request = require('supertest');
const app = require('../src/app');

describe('Pedidos API', () => {
  let pedidoId;

  it('GET /api/pedidos - lista vazia inicial', async () => {
    const res = await request(app).get('/api/pedidos');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/pedidos - cria pedido', async () => {
    const res = await request(app)
      .post('/api/pedidos')
      .send({ clienteNome: 'Maria', endereco: 'Rua A, 10', quantidade: 2 });
    expect(res.status).toBe(201);
    expect(res.body.status).toBe('pendente');
    pedidoId = res.body.id;
  });

  it('POST /api/pedidos - erro sem campos obrigatórios', async () => {
    const res = await request(app).post('/api/pedidos').send({ clienteNome: 'João' });
    expect(res.status).toBe(400);
  });

  it('GET /api/pedidos/:id - busca pedido criado', async () => {
    const res = await request(app).get(`/api/pedidos/${pedidoId}`);
    expect(res.status).toBe(200);
    expect(res.body.clienteNome).toBe('Maria');
  });

  it('PATCH /api/pedidos/:id/status - atualiza status', async () => {
    const res = await request(app)
      .patch(`/api/pedidos/${pedidoId}/status`)
      .send({ status: 'confirmado' });
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('confirmado');
  });

  it('PATCH /api/pedidos/:id/status - status inválido', async () => {
    const res = await request(app)
      .patch(`/api/pedidos/${pedidoId}/status`)
      .send({ status: 'voando' });
    expect(res.status).toBe(400);
  });

  it('DELETE /api/pedidos/:id - remove pedido', async () => {
    const res = await request(app).delete(`/api/pedidos/${pedidoId}`);
    expect(res.status).toBe(204);
  });

  it('GET /api/pedidos/:id - 404 após remoção', async () => {
    const res = await request(app).get(`/api/pedidos/${pedidoId}`);
    expect(res.status).toBe(404);
  });
});
