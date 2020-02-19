module.exports = {
  "development": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_KEY,
    "database": process.env.MYSQL_DBNAME,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": process.env.MYSQL_PROD_USER,
    "password": process.env.MYSQL_PROD_KEY,
    "database": process.env.MYSQL_PROD_DBNAME,
    "host": process.env.MYSQL_PROD_HOST,
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
