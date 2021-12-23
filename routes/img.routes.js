const express = require("express");
const routes = express.Router();

const {create, list} = require('../controller/img.controller');

routes.get('/', list);
routes.post('/', create);

module.exports = routes;