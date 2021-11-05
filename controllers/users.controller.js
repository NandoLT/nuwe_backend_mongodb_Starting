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
            const { username } = req.body;
            
            await Users.findOneAndDelete({username});

            res.status(200).json({
                result: `User ${username} deleted`
            })
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getUser (req, res) {
        try {
            const user= req.params.username;

            const getUser = await Users.findOne({ username: user });

            if(!!getUser){
                res.status(200).json({
                    result: 'User found',
                    user: getUser
                })
            } else {
                res.status(200).json({
                    result: 'User not found',
    
                })
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateUser (req, res) {
        try {
            const data = req.body;
            const filter = data.username;

            const updateUser = await Users.findOneAndUpdate(filter, data, {
                new: true
            });

            res.status(200).json({
                result: 'User Updated',
                user: updateUser
            })

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new userController();