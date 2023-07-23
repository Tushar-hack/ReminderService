const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
const jobs = require('./utils/job');
const TicketController = require('./controller/ticket-controller');
// const {sendBasicEmail} = require('./services/emailService');

const setUpAndStartServer = () => {
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.post('/api/v1/tickets', TicketController.create);
    
    app.listen(PORT, () => {
        console.log(`Server Started on Port: ${PORT}`);
        jobs();
        // sendBasicEmail(
        //     'support@admin.com',
        //     'takaditya921@gmail.com',
        //     'This is a testing email',
        //     'Hey, how are you, I hope you like the support'
        // );
    });
    
}

setUpAndStartServer();