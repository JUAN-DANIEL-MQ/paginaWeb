require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT|| 5000;

// Reemplaza con tu URI de conexión de MongoDB Atlas
// const mongoURI = process.env.MONGODB_ATLAS_CNN;

// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGODB_ATLAS_CNN, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch((err) => console.log('Error al conectar a MongoDB: ', err));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Backend funcionando correctamente!');
});

// Ruta de prueba para base de datos
app.get('/test-db', (req, res) => {
  mongoose.connection.db.admin().ping((err, result) => {
    if (err) {
      return res.status(500).send('Error de conexión a la base de datos');
    }
    res.send('Conexión exitosa a MongoDB Atlas');
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
