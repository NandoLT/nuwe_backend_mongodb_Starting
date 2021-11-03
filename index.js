const express = require('express');
const server = express();
const cors = require('cors');


const { SERVER_PORT } = require('./config');
const { userRoutes } = require('./routes')

server.use(express.json());
server.use(cors());
server.use(express.urlencoded({ extended: false }));


server.use('/api/users', userRoutes);

server.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${ SERVER_PORT }`);
})