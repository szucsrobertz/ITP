const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('./initDB')();

app.use(cors());
app.use(bodyParser.json());

const AppointmentRoute = require('./routes/appointments');

app.use('/appointment', AppointmentRoute)

app.listen(3000);