'use strict';
const { bookModel } = require('../models/feedback.models');
// Retern All Data From DB
let bookController = (req, res) => {
    bookModel.find().then(data => {
        res.status(200).json(data);
    })
}
// Post New Book 
const createBookController = async (req, res) => {
    let bookData = req.body;
    let newBook = bookModel(bookData);
    newBook.save();
    let data = await bookModel.find({});
    res.status(201).json(data);
}
// UPDATE BOOK 
const updateBookController = async (req, res) => {
    let bookId = req.params.id;
    let update = req.body;
    bookModel.findOne({ _id: bookId }).then(book => {
        book.title = update.title,
            book.description = update.description,
            book.email = update.email
        book.save();
    });
    let up = await bookModel.find({});
    res.status(200).send(up);
}
// DELETE BOOK
const deleteBookController = (req, res) => {
    let id = req.params.id;
    bookModel.findByIdAndDelete(id, (error, data) => {
        if (error) {
            res.status(500).send("ERROR ❌");
        } else {
            bookModel.find({}).then(books => {
                res.json(books);
            })
        }
    })
}
module.exports = {
    bookController,
    createBookController,
    deleteBookController,
    updateBookController
}