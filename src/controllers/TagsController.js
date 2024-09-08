const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class TagsController{
    async create(request, response){
        const {note_id} = request.params;
        const {user_id, name} = request.body;

        const tag_id = await knex("movie_tags").insert({
                user_id,
                name,
                note_id
            });  


            return response.json(); 
        } 
    }
    
module.exports = TagsController;