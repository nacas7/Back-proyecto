const { executeQuery, executeQueryOne } = require("../utils");


const createRegister = ({ username, nombre, apellidos, email, password, fecha_nacimiento }) => {
    return executeQuery('insert into usuarios (username, nombre, apellidos, email, password, fecha_nacimiento) values(?,?,?,?,?,?)', [username, nombre, apellidos, email, password, fecha_nacimiento])
};
const getByEmail = ((email) => {
    return executeQueryOne('select * from usuarios where email=?', [email]);
});

const getById = ((usuarioId) => {
    return executeQueryOne('select * from usuarios where id =?', [usuarioId]);
})


module.exports = {
    createRegister,
    getById,
    getByEmail,
}