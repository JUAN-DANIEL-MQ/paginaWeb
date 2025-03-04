const { Schema, model } = require('mongoose');


const DataPerfilesSchema = Schema({
    nombre:{
        type: String,
        default: 'SIN NOMBRE',
    },
});

DataPerfilesSchema.methods.toJSON = function() {
    const { __v, _id, ...dataPerfil } = this.toObject();
    dataPerfil.uid = _id;
    return dataPerfil;
};

module.exports = model('DataPerfil', DataPerfilesSchema, 'perfiles');