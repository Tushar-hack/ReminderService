const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');

const setUpAndStartServer = () => {
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.listen(PORT, () => {
        console.log(`Server Started on Port: ${PORT}`);
    });
}

setUpAndStartServer();