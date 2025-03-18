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

// Conectar a MongoDB y mostrar los perfiles en la consola
mongoose
  .connect(mongoURI)
  .then(async () => {
    console.log("Conectado a MongoDB Atlas");

    try {
      const perfiles = await Perfil.find(); // Obtener todos los perfiles
      if (perfiles.length > 0) {
        console.log("Aquí están los perfiles en la base de datos:");
        perfiles.forEach((perfil) => {
          console.log(`- ${perfil.nombre}`);
        });
      } else {
        console.log("No se encontraron perfiles en la base de datos.");
      }
    } catch (error) {
      console.error("Error al obtener los perfiles:", error);
    }
  })
  .catch((err) => console.error("Error al conectar a MongoDB:", err));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
