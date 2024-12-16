const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const app = express();

// Configuración de Swagger
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Hello World API-Rest Dayanara Churaco',
      version: '1.0.0',
      description: 'Simple Hello World API with Swagger',
    },
  },
  apis: ['server.js'],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Definir el endpoint Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Endpoint para servir el HTML con el estilo embebido
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint REST de ejemplo
/**
 * @swagger
 * /:
 *   get:
 *     description: Returns a Hello World message with Dayanara Churaco
 *     responses:
 *       200:
 *         description: Hello World message
 */
app.get('/api', (req, res) => {
  res.send('Hello World - REST API');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
