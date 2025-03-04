const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Cargar variables de entorno

const app = express();
const PORT = process.env.PORT || 5000; // Usa la variable de entorno PORT
const mongoURI = process.env.MONGODB_ATLAS_CNN; // Usa la variable de entorno MONGODB_ATLAS_CNN

// Conexión a MongoDB Atlas
mongoose.connect(mongoURI)
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch((err) => console.error('Error al conectar a MongoDB:', err));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Backend funcionando correctamente!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
