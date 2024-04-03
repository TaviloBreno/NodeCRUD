const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("crud_clientes", "root", "root", {
  host: "localhost",
  port: 3307,
  dialect: "mysql",
});

module.exports = sequelize;
