const mongoose = require("mongoose");

const Celebrity= mongoose.model('Celebrity', {
    name: String, occupation: String, catchPhrase: String
});


module.exports = Celebrity;