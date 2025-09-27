const express = require("express");
const app = express();
app.use(express.json());

require("dotenv").config();
const connectDB = require("./config/db");
const cloudinary = require("cloudinary").v2;
const uploadRoutes = require("./routes/upload.routes");

// Configure Cloudinary
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
});

connectDB();

app.use("/api/v1/upload", uploadRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
