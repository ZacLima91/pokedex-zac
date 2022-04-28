const Sequelize = require("sequelize");
const connection = require("../database/db");

const Pokemon = connection.define(
  "pokemon",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name_pokemon: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type_pokemon: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    height: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    weight: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    abilities: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTabbleName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Pokemon;
