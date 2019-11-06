const express = require("express")

const routes = express.Router()
const UserController = require("./controllers/UserController")

routes.post("/", UserController.store)

routes.post("/usuario", UserController.store)

routes.get("/usuario", UserController.list)

routes.get("/usuario/:id", UserController.index)

routes.put("/usuario/:id", UserController.update)

routes.delete("/usuario/:id", UserController.destroy)
module.exports = routes
