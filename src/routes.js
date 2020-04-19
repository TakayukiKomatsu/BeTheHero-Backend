const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ ProjectName: "Be The Hero" });
});

module.exports = routes;
