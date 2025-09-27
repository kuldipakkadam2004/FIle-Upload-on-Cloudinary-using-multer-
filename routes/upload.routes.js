const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload.mw");
const {uploadFile} = require("../controller/upload.controller");

router.post("/",upload.single("myFile"),uploadFile);

module.exports = router ;
