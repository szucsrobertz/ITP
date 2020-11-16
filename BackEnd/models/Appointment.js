const mongoose = require('mongoose');

const AppointmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    hour: {
        type: Date,
        deafult: Date.now
    }


})

module.exports = mongoose.model('Appointment', AppointmentSchema);