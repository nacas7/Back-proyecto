const { executeQuery, executeQueryOne } = require("../utils");

const registerPhotographer = ({ ubication, web, description }, idusuarios) => {
    return executeQuery('insert into photographer (ubication, web, description, idusuarios) values (?,?,?,?)', [ubication, web, description, idusuarios])
};

const getById = ((idPhotographer) => {
    return executeQueryOne('select * from usuarios where idusuarios=?', [idPhotographer]);
});

const getAll = () => {
    return executeQuery('select usuarios.nombre, usuarios.apellidos, photographer.idphotographer, photographer.ubication, photographer.web, photographer.description FROM photographer, usuarios WHERE usuarios.idusuarios = photographer.idusuarios')
};


const deletedByIdPhotographer = (idPhotographer) => {
    return executeQuery('delete from photographer where idusuarios=?', [idPhotographer])
};

const getByInfo = (idUsuario) => {
    return executeQuery('select usuarios.*, photographer.* from photographer, usuarios where usduarios.idusuarios = ? and photographer.idusuarios = ?;', [idUsuario, idUsuario]);
};



module.exports = {
    registerPhotographer,
    getById,
    getAll,
    deletedByIdPhotographer,
    getByInfo

}