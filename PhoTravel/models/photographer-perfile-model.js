const { executeQuery, executeQueryOne } = require("../utils");

const registerPhotographer = ({ ubication, web, description }, id) => {
    return executeQuery('insert into photographer (ubication, web, description, idusuarios) values(?,?,?,?)', [ubication, web, description, id])
};

const getById = ((idUsuario) => {
    return executeQueryOne('select * from usuarios where idusuarios =?', [idUsuario]);
});

const getAll = () => {
    return executeQuery('select usuarios.*, photographer.idphotographer, photographer.ubication, photographer.web, photographer.description FROM photographer, usuarios WHERE usuarios.idusuarios = photographer.idusuarios')
}

const deletedByIdPhotographer = (idPhotographer) => {
    return executeQuery('delete from photograper where idphotographer=?', [idPhotographer])
}



module.exports = {
    registerPhotographer,
    getById,
    getAll,
    deletedByIdPhotographer
}