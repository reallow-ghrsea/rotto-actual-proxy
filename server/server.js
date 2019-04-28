const express = require('express');
const path = require('path');

const app = express();

const port = 8989;

app.use('/:id', express.static(path.join(__dirname, './../public')));

app.listen(port);
