require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Database connection
const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'sss_db'
});

// Middleware to attach database connection
app.use((req, res, next) => {
    req.db = db;
    next();
});

// Test route
app.get('/', (req, res) => {
    res.send('🚀 Server is running!');
});

// Sample database query route
app.get('/api/items', async (req, res) => {
    try {
        const [rows] = await req.db.execute('SELECT * FROM items');
        res.json(rows);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Database error' });
    }
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

