const mongoose = require('mongoose');
const Useschema =new mongoose.Schema({
    countries: {
        type: Array,
        required: true
    }

})
const Use= mongoose.model('cts', Useschema);
module.exports = Use;