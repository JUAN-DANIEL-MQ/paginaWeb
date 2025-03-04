const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // Cargar las variables de entorno

const app = express();
const PORT = process.env.PORT || 5000;

// Conexión a MongoDB Atlas
mongoose
  .connect(process.env.MONGODB_ATLAS_CNN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((err) => console.log("Error al conectar a MongoDB: ", err));

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Backend funcionando correctamente!");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
