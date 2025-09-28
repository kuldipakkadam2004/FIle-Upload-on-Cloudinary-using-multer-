📂 Secure File Upload Backend (Node.js, Express, MongoDB, Cloudinary)

A production-ready backend API built with Node.js, Express, MongoDB, Multer, and Cloudinary to handle secure file uploads (images, videos, PDFs).
Implements MVC architecture, Cloudinary cloud storage, local file cleanup, and error handling for scalable and maintainable file management.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
🚀 Features

📤 Upload images, videos, and documents securely.

☁️ Cloud storage with Cloudinary (no permanent local storage).

🗂 MVC project structure (controllers, routes, models, config).

🛡 File size & type validation (image, video, pdf).

🧹 Deletes local temp files after successful upload.

📦 MongoDB integration to store uploaded file URLs.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------
🛠 Tech Stack

Backend: Node.js, Express.js

Database: MongoDB (Mongoose ODM)

File Handling: Multer, UUID

Cloud Storage: Cloudinary

Environment Variables: dotenv

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

📂 Project Structure
project/
 ┣ 📂 config/        # Database connection
 ┣ 📂 controllers/   # Business logic
 ┣ 📂 models/        # MongoDB schemas
 ┣ 📂 routes/        # API routes
 ┣ 📂 middlewares/   # Multer upload middleware
 ┣ 📂 uploads/       # Temp storage (auto deleted after upload)
 ┣ 📜 app.js
 ┣ 📜 server.js
 ┣ 📜 .env
 ┗ 📜 README.md
 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 📡 API Endpoints
➤ Upload File

POST /api/v1/upload

Body: form-data → key: myfile, value: (file)

Response:

{
  "success": true,
  "msg": "File uploaded successfully",
  "data": {
    "url": "https://res.cloudinary.com/demo/image/upload/xyz.png",
    "type": "image"
  }
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
