const { executeQueryOne, executeQuery } = require('../utils');

const createMessage = ({ idSentTo, message }, idSentBy,) => {
    return executeQuery('INSERT INTO mensajes (created_at, sent_to, sent_by, message) VALUES (NOW(), ?, ?, ?)', [idSentTo, idSentBy, message])

}

//todos los mensjaes que el usuario envía
const getAllSent = (idsentby) => {
    return executeQuery('SELECT m.*, sto.* FROM mensajes m INNER JOIN usuarios sto ON sto.idusuarios = m.sent_to where m.sent_by = ? ORDER BY created_at DESC', [idsentby])

}

//todos los mensajes que el usuario a recibido
const getAllBy = (idsetTo) => {
    return executeQuery('SELECT m.*, sby.* FROM mensajes m INNER JOIN usuarios sby ON sby.idusuarios = m.sent_by where m.sent_to = ?  ORDER BY created_at DESC', [idsetTo])
}

const deleteByMessage = (idusuario) => {
    return executeQuery('delete from mensajes where sent_by =? or sent_to=?', [idusuario, idusuario])
}



module.exports = {
    createMessage,
    getAllSent,
    getAllBy,
    deleteByMessage
}