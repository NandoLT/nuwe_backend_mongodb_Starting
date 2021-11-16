const express = require('express');
const router = express.Router();

const { userController } = require('../controllers');

/**
 * @swagger
 * definitions:
 *  Users: 
 *      type: object
 *      properties:
 *          username:
 *              type: string
 *              required: true  
 *              desription: User name
 *              example: 'NandoLT'
 *          age:
 *              type: integer
 *              desription: User age
 *              example: 36
 *          city:
 *              type: string
 *              desription: User city
 *              example: 'Cádiz'
 *  User_updated: 
 *      type: object
 *      properties:
 *          result:
 *              type: string
 *              example: 'User updated'
 *          user:
 *              type: object
 *              properties:
 *                  username:
 *                      type: string
 *                      desription: User name
 *                      example: 'NandoLT'
 *                  age:
 *                      type: integer
 *                      desription: User age
 *                      example: 36
 *                  city:
 *                      type: string
 *                      desription: User city
 *                      example: 'Cádiz'
 *  User_to_delete: 
 *      type: object
 *      properties:
 *          username:
 *              type: string
 *              example: 'NandoLT'
 *  User_deleted: 
 *      type: object
 *      properties:
 *          result:
 *              type: string
 *              example: 'User deleted'
 *  User_created:
 *      type: object
 *      properties:
 *          result:
 *              type: string
 *              example: 'User saved'
 *          data:
 *              type: object
 *              properties:
 *                  username:
 *                      type: string
 *                      desription: User name
 *                      example: 'NandoLT'
 *                  age:
 *                      type: integer
 *                      desription: User age
 *                      example: 36
 *                  city:
 *                      type: string
 *                      desription: User city
 *                      example: 'Cádiz'
 */

/**
 * @swagger
 * tags:
 *  name: Users Operations
 *  description: This is for check the diferents operations about users
 * /api/users:
 *  get:
 *      tags: [Users Operations]
 *      description: 'get user Schema'
 *      responses: 
 *          200: 
 *              decription: succes
 *          500: 
 *              description: Server Error
 */
router.get('/', userController.getUserSchema);

/**
 * @swagger
 * /api/users/getUser/{username}:
 *  get:
 *      tags: [Users Operations]
 *      description: 'get specific user'
 *      parameters:
 *          - in: path
 *            name: username
 *            schema: 
 *              type: string
 *            required: true
 *            description: user name
 *            example: 'NanodLT'
 *      responses: 
 *          200: 
 *              decription: succes
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/definitions/Users'
 *          500: 
 *              description: Error
 */
router.get('/getUser/:username', userController.getUser);

/**
 * @swagger
 * /api/users/create:
 *  post:
 *      tags: [Users Operations]
 *      description: 'create new user'
 *      consumes: 
 *          - application/json
 *      produces: 
 *          - application/json
 *      parameters:
 *      - in: body
 *        name: body
 *        required: true
 *        description: body object
 *        schema:
 *          $ref: '#/definitions/Users'
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Users'
 *      responses:
 *          200: 
 *              decription: succes
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/definitions/User_created'
 *          500: 
 *              description: Server Error
 */
router.post('/create', userController.addUser);

/**
 * @swagger
 * /api/users/deleteUser/:
 *  delete:
 *      tags: [Users Operations]
 *      description: 'delete specific user'
 *      consumes:
 *          - application/json
 *      produces:
 *          - application/json
 *      parameters:
 *          - in: body
 *            name: body
 *            required: true
 *            description: body object
 *            schema:
 *              $ref: '#/definitions/User_to_delete'
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/definitions/User_to_delete'
 *      responses:
 *          200: 
 *              decription: succes
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/definitions/User_deleted'
 *          500: 
 *              description: Server Error
 */
router.delete('/deleteUser', userController.deleteUser);

/**
 * @swagger
 * /api/users/updateUser/:
 *  put:
 *      tags: [Users Operations]
 *      description: 'update specific user'
 *      consumes:
 *          - application/json
 *      produces:
 *          - application/json
 *      parameters:
 *          - in: body
 *            name: body
 *            required: true
 *            description: body object
 *            schema:
 *              $ref: '#/definitions/Users'
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Users'
 *      responses:
 *          200: 
 *              decription: succes
 *              content:
 *                  application/json: 
 *                      schema: 
 *                          $ref: '#/definitions/User_updated'
 *          500: 
 *              description: Server Error
 */
router.put('/updateUser', userController.updateUser);

module.exports = router;