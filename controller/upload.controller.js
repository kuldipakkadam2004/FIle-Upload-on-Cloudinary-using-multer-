const express = require("express");
const File = require("../models/file.model")
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

exports.uploadFile = async (req,res,next)=>{
    try{
        if(!req.file){
            return res.status(400).send({
                message : "File not uploaded"
            })
        }

        let resourceType = "image";
        if(req.file.mimetype.startsWith("video/")){
            resourceType = "video";
        }
        else if(! req.file.mimetype.startsWith("image/")){
            resourceType = "raw" ;
        }

        const result = await cloudinary.uploader.upload(req.file.path,{
            resource_type : resourceType ,
            folder : "uploads"
        });

        const newFile = new File({file_url : result.secure_url});
        await newFile.save();
        
        fs.unlink(req.file.path,(err)=>{
            if(err){
                console.log("Error while deleting the Local file" , err.message)
            }
            else{
                console.log("Local file deleted successfully ..!")
            }
        });

        return res.status(201).send({
            message : "File uploaded successfully...!",
            your_url : {
                file_url : result.secure_url
            }
        })

    }catch(err){
        next(err);
    }
}