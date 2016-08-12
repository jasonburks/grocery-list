const mongoose = require('mongoose');

const Schema   = mongoose.Schema;

const grocerySchema = new Schema({
    'item' : {
      type: String,
      required: true
    },
    'qty' : {
      type: Number,
      required: true
    }
});

module.exports = mongoose.model('Grocery', grocerySchema);
