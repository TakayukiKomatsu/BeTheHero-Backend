const express = require("express");

const routes = express.Router();

//Controllers
const ongsController = require("./controllers/ongController");
const incidentsController = require("./controllers/incidentsController");

const profileController = require("./controllers/profileController");

const sessionController = require("./controllers/sessionController");

routes.post("/ongs", ongsController.create);
routes.get("/ongs", ongsController.index);

routes.get("/incidents", incidentsController.index);
routes.post("/incidents", incidentsController.create);
routes.delete("/incidents/:id", incidentsController.delete);

routes.get("/profile", profileController.index);

routes.post("/sessions", sessionController.create);
module.exports = routes;
