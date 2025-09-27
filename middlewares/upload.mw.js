const multer = require("multer");
const { v4 : uuidv4} = require("uuid");


const storage = multer.diskStorage({
    destination : function (req , file , cb){
        cb(null , "./uploads")
    },
    filename : function(req , file , cb){
        const random = uuidv4();
        cb(null , random + "-" + file.originalname)
    }
});

const fileFilter = (req,file,cb)=>{
    const allowedTypes = [
        "image/jpeg",
        "image/png",
        "video/mp4",
        "application/pdf"
    ];
    if(allowedTypes.includes(file.mimetype)){
        //file is accepted
        cb(null,true);
    }else{
        cb(new Error("Invalid file type"),false)
    }
};

const upload = multer({
    storage,
    limits : {fileSize : 5 * 1024 * 1024}, //max 5mb
    fileFilter
});

module.exports = upload; 

