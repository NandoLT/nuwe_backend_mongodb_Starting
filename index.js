const express = require('express');
const server = express();

const { SERVER_PORT } = require('./config');




server.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${ SERVER_PORT }`);
})