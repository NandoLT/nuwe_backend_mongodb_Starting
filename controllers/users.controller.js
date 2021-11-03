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
        try {
            const userData = req.body;

            const user = new Users(userData);
            await user.save();

            res.status(200).json({
                result:'User saved',
                data: user
            })
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteUser (req, res) {
        try {
            
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getUser (req, res) {
        try {
            
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateUser (req, res) {
        try {
            
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new userController();