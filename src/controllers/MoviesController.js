const { type } = require("os");
const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const { use } = require("express/lib/router");

class MoviesController{
    async create(request, response){
        const {title, description, rating} = request.body;
        const {user_id} = request.params;

        const responseObject = JSON.parse(rating);
        const checkRating = parseInt(responseObject);
  
        if(checkRating >= 0 && checkRating <= 5){
            const note_id = await knex("movie_notes").insert({
                title,
                description,
                rating,
                user_id
            });                  
        } else {
            throw new AppError("The number has to be between 0 and 5!");
        }

        response.json();
    }

    async delete(request, response){
        const {id} = request.params;

        await knex("movie_notes").where({id}).delete();

        return response.json();
    }
}

module.exports = MoviesController;