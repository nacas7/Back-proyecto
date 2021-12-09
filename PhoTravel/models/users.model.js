const { executeQuery, executeQueryOne } = require("../utils")

const createRegister = ({ username, email, password, repit_password }) => {
    return executeQuery('insert into users (username, email, password, repit_password) values(?,?,?,?)', [username, email, password, repit_password])
};

const getByEmail = ((email) => {
    return executeQueryOne('select * from users where email=?', [email]);
});

const getById = ((usuarioId) => {
    return executeQueryOne('select * from users where id =?', [usuarioId]);
})


module.exports = {
    createRegister,
    getByEmail,
    getById
}


