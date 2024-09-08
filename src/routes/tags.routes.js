const {Router} = require("express");

const tagsRoutes = Router();

const TagsController = require("../controllers/TagsController");

const tagsController = new TagsController;


tagsRoutes.post("/:note_id", tagsController.create);

module.exports = tagsRoutes;