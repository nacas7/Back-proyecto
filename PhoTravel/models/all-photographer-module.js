const { executeQuery } = require("../utils");


const getAll = () => {
    return executeQuery('select usuarios.nombre, usuarios.apellidos, photographer.idphotographer, photographer.ubication, photographer.web, photographer.description FROM photographer, usuarios WHERE usuarios.idusuarios = photographer.idusuarios')
};


module.exports = {
    getAll
}