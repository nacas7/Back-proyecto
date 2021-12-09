const executeQuery = (query, data = []) => {
    return new Promise((resolve, reject) => {
        db.query(query, data, (err, result) => {
            if (err) return reject(err);
            resolve(result)
        })
    })
};


const executeQueryOne = (query, data = []) => {
    return new Promise((resolve, reject) => {
        db.query(query, data, (err, result) => {
            if (err) return reject(err);
            if (result.length === 0) return resolve(null)
            resolve(result[0])
        })
    })
};




module.exports = {
    executeQuery,
    executeQueryOne
};