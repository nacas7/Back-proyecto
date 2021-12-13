const { executeQuery } = require("../utils");

const registerPhotographer = ({ latitude, longitude, web }) => {
    return executeQuery('insert into photographer (latitude, longitude, web) values(?,?,?)', [latitude, longitude, web])
};



module.exports = {
    registerPhotographer
}