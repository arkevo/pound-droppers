const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.JAWSDB_URL || 'mysql://root:1234@localhost:3306/'
);

module.exports = sequelize;

module.exports = {

  "developmet": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_KEY,
    "database": process.env.MYSQL_DBNAME,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql"

},
"production": {
  "use_env_variable": "JAWSDB_URL",
  "dialect": "mysql"
}
}