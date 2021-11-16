const express = require('express');
const server = express();
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');


const { SERVER_PORT, URL_BASE } = require('./config');
const { userRoutes } = require('./routes')

const swaggerOptions = {
    swaggerDefinition: {
      openapi: "3.0.1",
      info: {
        title: "User Management API",
        version: "1.0.0",
      },
      servers: [
        {
          url: `${URL_BASE}:${SERVER_PORT}`,
        },
      ],
      // components: {
      //   securitySchemes: {
      //     bearerAuth: {
      //       type: "http",
      //       scheme: "bearer",
      //       bearerFormat: "JWT",
      //     },
      //   },
      // },
      // security: [
      //   {
      //     bearerAuth: [],
      //   },
      // ],
    },
    apis: ["./routes/*.js"],
  };
const swaggerDocs = swaggerJSDoc(swaggerOptions);
server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));



server.use(express.json());
server.use(cors());
server.use(express.urlencoded({ extended: false }));


server.use('/api/users', userRoutes);

server.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${ SERVER_PORT }`);
})