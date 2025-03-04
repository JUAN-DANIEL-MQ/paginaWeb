const { Router } = require('express');
const { DataPerfil } = require("../models");

const router = Router();

router.get('/documento', async  (req, res) => {
  console.log("ingreso felix");

  try {
    const getDataPersonal = await DataPerfil.find();
    if (!getDataPersonal) {
      return res.status(404).send();
    }
    return res.status(200).json(getDataPersonal);
  } catch (error) {
    // return handleErrorDatabase(res, error);
    res.json({ mensaje: '¡Todo Salio Mal' });
  }
  console.log("jajajaj")

  
});
// router.get('/documento', (req, res) => {
//   console.log("ingreso felix");




//   res.json({ mensaje: '¡Hola! Este es un saludo desde la ruta /api/documento en el backend.' });
// });

module.exports = router;
