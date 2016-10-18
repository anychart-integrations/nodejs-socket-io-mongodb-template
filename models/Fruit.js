var mongoose = require('mongoose');

var FruitSchema = mongoose.Schema({
    name: String,
    value: Number
});

module.exports = mongoose.model("Fruit", FruitSchema);
