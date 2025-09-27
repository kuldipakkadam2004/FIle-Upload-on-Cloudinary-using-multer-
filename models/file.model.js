const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    file_url : {
        type : String,
        required : true 
    }
})

module.exports = mongoose.model("files" , fileSchema);
