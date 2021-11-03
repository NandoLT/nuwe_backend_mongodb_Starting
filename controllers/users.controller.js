const mongoose = require('mongoose');
const { Users } = require('../models');

class userController {

    async getUserSchema (req, res) {
        try {
            const userSchema =  await Users.schema.paths;
            res.status(200).json({
                result: userSchema
            })
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    
    async addUser (req, res) {
        tr
    }

    async deleteUser (req, res) {

    }

    async getUser (req, res) {

    }

    async updateUser (req, res) {
        
    }
}

module.exports = new userController();