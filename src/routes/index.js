const {Router} = require("express");
const routes = Router();

const usersRoutes = require("./users.routes");
const moviesRoutes = require("./movies.routes");
const tagsRoutes = require("./tags.routes");

routes.use("/users", usersRoutes);
routes.use("/movies", moviesRoutes);
routes.use("/tags", tagsRoutes);

module.exports = routes;






