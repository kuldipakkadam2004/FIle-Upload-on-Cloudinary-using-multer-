const mongoose = require("mongoose");

const connectDb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
    }catch(err){
        console.log("Connection Failed...!" , err.message);
    }
}

module.exports = connectDb;