/*
'use strict';
const mongoose = require('mongoose');

const bookSM = new mongoose.Schema({
    title: String,
    description: String,
    status: Boolean,
    email: String
});
//❤️Add Book❤️
let seedBook = () => {
    let newBook = new bookModel({
        title: "555555555",
        description: "55555555",
        status: true,
        email: "www.555555555555@gmail.com"
    });
    newBook.save();
}
//❤️❤️
const bookModel = mongoose.model('book', bookSM);

module.exports = {
    seedBook,
    bookModel
}
//mongoose.connect(`${MONGO_SERVER}/Book`, { useNewUrlParser: true, useUnifiedTopology: true });
//MONGO_SERVER=mongodb://localhost:27017
*/