# Movie Registration - Back-End API

This project consists of a back-end application for movie registration, developed using Node.js with the **Express** framework. The application is responsible for managing CRUD operations for movies, connecting to a SQL database, and using the **Knex** query builder to facilitate database interactions.

## Technologies Used

- **Node.js**, **Express**, **Knex.js Query Builder**, **SQL Database**.

## Features

The application has the following features:

- **User Registration**: Allows the registration of users with their name, email, and password.
- **Update User**: Enables updating the registered user's password and email.
- **Movie Registration**: Allows the registration of movies by adding their title, description, and rating (with a rating scale from 0 to 5).
- **Tag Creation**: Allows the creation of tags for registered movies, such as action, suspense, horror.
- **Middleware Implementation**: For handling exceptions and errors.
- **Delete**: Provides functionality to delete a registered user or movie. When deleting a registered movie, a cascade mode is implemented to also delete any linked tags.
