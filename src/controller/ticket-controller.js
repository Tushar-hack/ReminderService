const TicketService = require('../services/emailService');

const create = async (req, res) => {
    try {
        const response = await TicketService.createNotification(req.body);
        return res.status(201).json({
            success: true,
            data: response,
            err: {},
            message: 'Successfully Registered an Email Reminder'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            err: error,
            message: 'Unable to Register an Email Reminder'
        });
    }
}

module.exports = {
    create
}