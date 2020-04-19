const express = require("express");

const routes = express.Router();

//Controllers
const ongsController = require("./controllers/ongController");
const incidentsController = require("./controllers/incidentsController");

routes.post("/ongs", ongsController.create);
routes.get("/ongs", ongsController.index);

routes.get("/incidents", incidentsController.index);
routes.post("/incidents", incidentsController.create);
routes.delete("/incidents/:id", incidentsController.delete);

module.exports = routes;
