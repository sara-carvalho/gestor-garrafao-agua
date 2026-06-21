const app = require('./src/app');

// Firebase Functions export
const functions = require('firebase-functions');
exports.api = functions.https.onRequest(app);

// Local development server
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
}
