// api/documento.js

const { DataPerfil } = require('../models');

module.exports = async (req, res) => {
  console.log("ingreso felix");

  try {
    const getDataPersonal = await DataPerfil.find();
    if (!getDataPersonal || getDataPersonal.length === 0) {
      return res.status(404).send('No data found');
    }
    return res.status(200).json(getDataPersonal);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensaje: '¡Todo Salió Mal' });
  }
};
