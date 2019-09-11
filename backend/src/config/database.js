const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb+srv://admin:admin@cluster0-a871c.mongodb.net/test?retryWrites=true&w=majority');