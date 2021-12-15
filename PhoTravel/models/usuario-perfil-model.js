const { executeQuery, executeQueryOne } = require("../utils");


const createRegister = ({ username, nombre, apellidos, email, password, fecha_nacimiento }) => {
    return executeQuery('insert into usuarios (username, nombre, apellidos, email, password, fecha_nacimiento) values(?,?,?,?,?,?)', [username, nombre, apellidos, email, password, fecha_nacimiento])
};

const getAll = () => {
    return executeQuery('select * from usuarios')
}

const getByEmail = ((email) => {
    return executeQueryOne('select * from usuarios where email=?', [email]);
});

const getById = ((idUsuario) => {
    return executeQueryOne('select * from usuarios where idusuarios =?', [idUsuario]);
});

const upDateDatos = (usuarioId, { nombre, apellidos, email, password }) => {
    console.log(usuarioId);
    return executeQuery('update usuarios set nombre =?, apellidos =?, email =?, password =? where idusuarios=?', [nombre, apellidos, email, password, usuarioId])
};

const deletedByIdUsuario = (usuarioId) => {
    return executeQuery('delete from usuarios where idusuarios =?', [usuarioId])

}


module.exports = {
    createRegister,
    getById,
    getByEmail,
    upDateDatos,
    getAll,
    deletedByIdUsuario
}