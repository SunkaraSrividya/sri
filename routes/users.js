const express = require('express');
const router = express.Router();
const User = require('../model/userSchema');

// REST API POST METHOD TO HANDLE POST REQUEST
router.post('/', async (req, res) => {
    try {
        const { _id, bookname,publisher,description} = req.body;
        const userQuery = new User({ _id, bookname,publisher,description });
        await userQuery.save();
        res.status(201).send({ message: "User Created" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// GET the data
router.get('/', async (req, res) => {
    try {
        const data = await User.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// PUT the data (update the data)
router.put('/:id', async (req, res) => {
    try {
        const { password } = req.body;
        const userId = req.params.id;
        const updatedUser = await User.updateOne({ _id: userId }, { $set: { password } });
        if (updatedUser.nModified === 0) {
            return res.status(404).send({ message: "User not found" });
        }
        res.status(200).send({ message: "Password updated successfully", updatedUser });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// DELETE a user
router.delete('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.deleteOne({ _id: userId });
        if (deletedUser.deletedCount === 0) {
            return res.status(404).send({ message: "User not found" });
        }
        res.status(200).send({ message: "User deleted", deletedUser });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

module.exports = router;
