const express = require('express');
const app = express();

// Configuración del servidor

app.use(express.json());

// Rutas
app.use('/users', require('./routes/userRoutes'));
app.use('/products', require('./routes/productRoutes'));
app.use('/carts', require('./routes/cartRoutes'));

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Error interno del servidor');
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
