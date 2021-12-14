const { executeQuery, executeQueryOne } = require("../utils");

const registerPhotographer = ({ ubication, web, description }, id) => {
    return executeQuery('insert into photographer (ubication, web, description, idusuarios) values(?,?,?,?)', [ubication, web, description, id])
};

const getById = ((idUsuario) => {
    console.log(idUsuario)
    return executeQueryOne('select * from usuarios where idusuarios =?', [idUsuario]);
});



module.exports = {
    registerPhotographer,
    getById
}