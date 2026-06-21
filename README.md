# Gestor de Pedidos de Garrafão de Água

API REST + interface web para gerenciar pedidos de garrafão de água.

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/pedidos` | Lista todos os pedidos |
| GET | `/api/pedidos/:id` | Busca um pedido |
| POST | `/api/pedidos` | Cria um novo pedido |
| PATCH | `/api/pedidos/:id/status` | Atualiza o status |
| DELETE | `/api/pedidos/:id` | Remove um pedido |

### Status disponíveis
`pendente` → `confirmado` → `em_entrega` → `entregue` / `cancelado`

## Rodando localmente

```bash
npm install
npm run dev
# Acesse http://localhost:3000
```

## Testes

```bash
npm test
```

## Deploy no Firebase

```bash
npm install -g firebase-tools
firebase login
firebase use --add   # selecione seu projeto
firebase deploy
```

> **Nota:** na primeira vez, crie o projeto no [Firebase Console](https://console.firebase.google.com) e atualize o `.firebaserc` com o ID correto.
