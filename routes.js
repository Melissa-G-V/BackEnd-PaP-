const express = require("express");
const routes = express.Router();
const cors = require("cors");

routes.use(cors());

const ProdutoController = require('./controllers/CarroController')
const UsuarioController = require('./controllers/UsuarioController')
const CompraController = require('./controllers/CompraController')
const login = require("./middleware/login");


routes.get("/produtos", ProdutoController.index)
      .get("/produtos2", ProdutoController.index2)
      .post("/produtos", ProdutoController.store)
      .put("/produtos/destaque/:id", ProdutoController.destaque)
      .get("/produtos/destaques", ProdutoController.destaques)
      .post("/produtos/pesq/:palavra", ProdutoController.search)
      .get("/produtos/:id", ProdutoController.show)
      .get("/estatistica", ProdutoController.estatistica)
      .delete("/produtos/:id", ProdutoController.destroy)

routes.get("/usuarios",  UsuarioController.index)
      .post("/usuarios",  UsuarioController.store)
      .post("/login", UsuarioController.login);


routes.get("/compras",  CompraController.index)
      .post("/interese",  CompraController.store)
      .post("/interese2",  CompraController.store2)
      .post("/reviews/pesq/:usuarios_id/:produtos_id", CompraController.pesq)

      
module.exports = routes;
