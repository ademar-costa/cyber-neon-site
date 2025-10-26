const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001; // Usamos 3001 para não conflitar com o front (5173)

// Middlewares
app.use(cors()); // Permite requisições do frontend
app.use(express.json()); // Permite o body parser para JSON

// Rota de teste
app.get('/api', (req, res) => {
  res.json({ message: 'API Ciberfuturista no ar!  cyberpunk 2077' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});