const { executeQuery, executeQueryOne } = require('../utils')

const getAll = () => {
    return executeQuery('select * from usuarios')

}


module.exports = {
    getAll
}