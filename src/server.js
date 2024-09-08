require('express-async-errors')

const AppError = require("./utils/AppError");
const express = require("express");

const migrationRun = require("./database/sqlite/migrations");
migrationRun();

const routes = require("./routes/index");


const app = express();
app.use(express.json());

app.use(routes);
app.use((error, request, response, next) => {
    if(error instanceof AppError){
        return response.status(error.statuscode).json({
            status: "error",
            message: error.message
        })
    }

    console.log(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

PORT = 3333;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})
