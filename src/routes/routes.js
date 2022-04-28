const routes = require("express").Router();
const pokemonController = require("../controllers/pokemonController");

routes.get("/", pokemonController.getAll);

module.exports = routes;
