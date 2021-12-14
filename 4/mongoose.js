var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:admin123@cluster0.shtkc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
console.log("mongodb  connect...")
module.exports = mongoose;