const express = require('express');
const mongoose = require("mongoose");
const app = express();

const dbConnection = async () => {
  try {
    // mongoose.set("strictQuery", false);
    // await mongoose.connect(process.env.MONGODB_ATLAS_CNN);
    console.log("Base de datos ATLAS ONLINsssssE.");
  } catch (error) {
    console.log(error);
    throw new Error("Error en inicializar la BD.");
  }
};

const dbConnectionCompass = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGODB_ATLAS_CNN);
    console.log("Base de datos COMPASS ONLINE.");

    // Define el esquema y el modelo para la colección (ajusta según tu estructura)
    const perfilSchema = new mongoose.Schema({
      nombre: String,
      // Puedes agregar otros campos aquí según lo que tenga tu documento
    });

    const Perfil = mongoose.model("Perfiles", perfilSchema); // Nombre de la colección: "perfil"

    // Buscar el documento por _id
    const document = await Perfil.findById("67c62485f2194c6e49fbd5d4");

    // Mostrar el documento en la consola
    if (document) {
      console.log("Documento encontrado:", document);
    } else {
      console.log("No se encontró el documento.");
    }

  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de inicializar BD.");
  }
};
// juandanielquispepanda 9gy8YUi1lt4q1ySp   9gy8YUi1lt4q1ySp

// mongodb+srv://juandanielquispepanda:<db_password>@proyectopersonal.fenum.mongodb.net/?retryWrites=true&w=majority&appName=ProyectoPersonal

// const dbConnectionCompass = async () => {
//   try {
//     mongoose.set("strictQuery", false);
//     await mongoose.connect(process.env.DB_CNN);
//     console.log("Base de datos COMPASS ONLINE.");
//   } catch (error) {
//     console.log(error);
//     throw new Error("Error a la hora de inicializar BD.");
//   }
// };

module.exports = {
  dbConnection,
  dbConnectionCompass,
};
