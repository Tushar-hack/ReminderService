const sender = require('../config/emailConfig');
const TicketRepository = require('../repository/ticket-repository');

const ticketRepo = new TicketRepository();

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

const fetchPendingEmails = async (timestamp) => {
    try {
        const response = await ticketRepo.get({status: "PENDING"});
        return response;
    } catch (error) {
        console.log(error);
    }
}

const updateTicket = async (ticketId, data) => {
    try {
        const response = await ticketRepo.update(ticketId , data);
        return response; 
    } catch (error) {
        console.log(error);
    }
};

const createNotification = async (data) => {
    try {
        const newNotification =  await ticketRepo.createTicket(data);
        return newNotification;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}