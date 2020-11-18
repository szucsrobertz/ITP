const express = require('express');
const Appointment = require('../models/Appointment');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const appointment = await Appointment.find();
        res.json(appointment);
    } catch (err) {
        res.json({ message: err })
    }
});

router.post('/register', async (req, res) => {
    const Appointments = new Appointment({
        name: req.body.name,
        telephone: req.body.telephone,
        brand: req.body.brand,
        date: req.body.date,
        hour: req.body.hour
    });

    try {
        await Appointments.save();
        res.status(200).json({ message: "ok" })
    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router;