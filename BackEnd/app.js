const express = require('express');
const app = express();

require('./initDB')();

app.listen(3000);