const express = require('express');
const router = express.Router();
const Author = require('../model/authorschema');

router.post('/', async (req, res) => {
    try {
        const { _id, name, age, totalBooks, description } = req.body;
        const author = new Author({ _id, name, age, totalBooks, description });
        await author.save();
        res.status(201).send({ message: `Author ${name} Saved` });
    } catch (err) {
        console.error(err); // Log the error
        res.status(500).send(err.message);
    }
});

router.get('/', async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).send(authors);
    } catch (err) {
        console.error(err); // Log the error
        res.status(500).send(err.message);
    }
});

module.exports = router;
