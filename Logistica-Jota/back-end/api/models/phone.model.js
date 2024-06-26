const { DataTypes } = require("sequelize");
const { connection } = require("../../database/index");

const Phone = connection.define(
  "phone",
  {
    phone: {
      type: DataTypes.STRING,
    },
  },
  {
    // Configuración adicional para el modelo
    timestamps: true,
  }
);

module.exports = Phone;
