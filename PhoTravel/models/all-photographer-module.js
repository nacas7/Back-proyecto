const { executeQuery, executeQueryOne } = require('../utils');


const getAll = () => {
    return executeQuery('select usuarios.nombre, usuarios.apellidos, photographer.idphotographer, photographer.ubication, photographer.web, photographer.description FROM photographer, usuarios WHERE usuarios.idusuarios = photographer.idusuarios')
};

const getByInfo = (idUsuario) => {
    return executeQuery('select usuarios.*, photographer.*from photographer, usuarios where usuarios.idusuarios = ? and photographer.idusuarios = ?;', [idUsuario, idUsuario]);
};

module.exports = {
    getAll,
    getByInfo

}