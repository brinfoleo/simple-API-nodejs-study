const express = require("express");
const app = express();
require('dotenv').config({path: "./src/.env"})


const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.status(200).send("<h1>Server NodeJS working...</h1>");
});

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server running on port ${port}`);
    }
});