const express = require('express');
const router = require('./routes');
const DbConnect = require('./database');
require("dotenv").config();
const app = express();

const PORT=process.env.PORT || 5555
app.use(express.json());// we use this code where we want to accept the json data from the front-end

DbConnect () // this is the function that we have exported from the database.js file
app.use(router)

app.listen(PORT, () => {
    console.log(`server is runing on port = ${PORT}`)
})