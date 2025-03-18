const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGODB_ATLAS_CNN;

// Definir el esquema y modelo de Mongoose
const perfilSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
});

const Perfil = mongoose.model("Perfil", perfilSchema, "perfiles"); // Especifica la colección "perfiles"

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Conectar a MongoDB y obtener los perfiles
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Conectado a MongoDB Atlas");
  })
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

// Ruta para obtener los perfiles
app.get("/perfiles", async (req, res) => {
  try {
    const perfiles = await Perfil.find(); // Obtener todos los perfiles
    res.json(perfiles); // Enviar los perfiles como respuesta JSON
  } catch (error) {
    console.error("Error al obtener los perfiles:", error);
    res.status(500).send("Error al obtener los perfiles");
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
