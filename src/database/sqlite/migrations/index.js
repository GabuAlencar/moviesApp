const sqlConnection = require("../index");
const users = require("./users");

async function migrationRun(){
    const schemas = [
        users,
    ].join('');

    sqlConnection()
    .then((db) => db.exec(schemas))
    .catch((error) => console.error(error));
}

module.exports = migrationRun;