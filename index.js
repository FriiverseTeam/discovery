const express = require('express');
const logger = require('./logger');
const database = require('./database');
const dotenv = require('dotenv');
dotenv.config();

const routes = require('./routes');

const serve = express();

serve.use(routes);

serve.get('/', (req, res) => {
    res.redirect('/v1/endpoint');
})

serve.listen(process.env.PORT, async () => {
    database.connectDB();
    logger.success(`Discovery started on port ${process.env.PORT}.`);
});