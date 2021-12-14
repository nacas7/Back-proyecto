const { executeQuery, executeQueryOne } = require("../utils");


const createRegister = ({ username, nombre, apellidos, email, password, fecha_nacimiento }) => {
    return executeQuery('insert into usuarios (username, nombre, apellidos, email, password, fecha_nacimiento) values(?,?,?,?,?,?)', [username, nombre, apellidos, email, password, fecha_nacimiento])
};
const getByEmail = ((email) => {
    return executeQueryOne('select * from usuarios where email=?', [email]);
});

const getById = ((usuarioId) => {
    return executeQueryOne('select * from usuarios where id =?', [usuarioId]);
});

const upDateDatos = (usuarioId, { nombre, apellidos, email, password }) => {
    console.log(usuarioId);
    return executeQuery('update usuarios set nombre =?, apellidos =?, email =?, password =? where idusuarios=?', [nombre, apellidos, email, password, usuarioId])
};



module.exports = {
    createRegister,
    getById,
    getByEmail,
    upDateDatos
}