const express = require('express');
const router = express.Router();

// Sample route
router.get('/', (req, res) => {
    res.send('API is working!');
});

module.exports = router; // ✅ Ensure router is exported properly




// Project setup instructions
/*
1. Install dependencies:
   npm install express mysql2 dotenv express-rate-limit jsonwebtoken

2. Set up environment variables:
   Create a .env file and add:
   JWT_SECRET=your_secret_key
   PORT=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=sss_db

3. Start MySQL and create database:
   CREATE DATABASE sss_db;
   CREATE TABLE items (
       id INT PRIMARY KEY AUTO_INCREMENT,
       name VARCHAR(255),
       description TEXT,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

4. Run the application:
   node index.js
*/
