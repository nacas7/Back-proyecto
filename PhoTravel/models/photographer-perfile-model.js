const { executeQuery, executeQueryOne } = require("../utils");

const registerPhotographer = ({ latitude, longitude, web }) => {
    return executeQuery('insert into photographer (latitude, longitude, web) values(?,?,?)', [latitude, longitude, web])
};

const getById = ((idUsuario) => {
    return executeQueryOne('select * from photographer where idusuarios =?', [idUsuario]);
})



module.exports = {
    registerPhotographer,
    getById
}