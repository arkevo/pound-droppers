module.exports = {
  development: {
    username: "root",
    password: null,
    database: "pound_droppers_db",
    host: "localhost",
    dialect: "mysql"
  },
  production: {
    username: process.env.MYSQL_PROD_USER,
    password: process.env.MYSQL_PROD_KEY,
    database: process.env.MYSQL_PROD_DBNAME,
    host: process.env.MYSQL_PROD_HOST,
    dialect: "mysql",
    operatorsAliases: false
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};

// process.env.MYSQL_PROD_USER=zm7uztyi3jyhp33p
// process.env.MYSQL_PROD_KEY=tiqr9pd0ohlf1bi3
// process.env.MYSQL_PROD_DBNAME=ujuz5sf7p8cq4j5s
// process.env.MYSQL_PROD_HOST=l6slz5o3eduzatkw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com
