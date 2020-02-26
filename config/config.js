module.exports = {
  development: {
    username: "root",
    password: null,
    database: "pound_droppers_db",
    host: "localhost",
    dialect: "mysql"
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
