# Node.js Express API with MySQL

This is a RESTful API built with Node.js, Express, and MySQL. The API allows CRUD operations on items, including authentication, rate limiting, and logging.

## 🚀 Features
- ✅ **CRUD Operations**: Create, Read, Update, and Delete items.
- ✅ **MySQL Database**: Uses MySQL for data storage.
- ✅ **JWT Authentication**: Secure endpoints with JSON Web Tokens.
- ✅ **Rate Limiting**: Prevent abuse by limiting requests.
- ✅ **Logging**: Logs API requests in a file.

---

## 📂 Project Structure
```
sss-intern-assignment/
│── node_modules/         # Installed dependencies
│── .env                  # Environment variables
│── server.js             # Main server file
│── index.js              # API routes and database logic
│── package.json          # Project metadata and dependencies
│── vercel.json           # Configuration for Vercel deployment
│── README.md             # Project documentation
```

---

## 🛠 Installation

### 1️⃣ Clone the Repository

git clone https://github.com/your-username/sss-intern-assignment.git
cd sss-intern-assignment
```

### 2️⃣ Install Dependencies

npm install
```

### 3️⃣ Create a `.env` File
Create a `.env` file in the project root and add:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=sss_db
JWT_SECRET=your_secret_key
```

### 4️⃣ Set Up MySQL Database
Open MySQL and run:
```sql
CREATE DATABASE sss_db;
USE sss_db;
CREATE TABLE items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 5️⃣ Start the Server

node server.js

Server runs on: `http://localhost:3000`

---

## 🔗 API Endpoints
| Method | Endpoint        | Description            |
|--------|----------------|------------------------|
| POST   | `/login`       | Get a JWT token       |
| GET    | `/api/items`   | Get all items         |
| GET    | `/api/items/:id` | Get item by ID     |
| POST   | `/api/items`   | Create a new item     |
| PUT    | `/api/items/:id` | Update an item    |
| DELETE | `/api/items/:id` | Delete an item    |

🔐 **Note:** All `/api/*` routes require a valid **JWT Token** in the `Authorization` header.

---

## 🚀 Deployment on Vercel
### 1️⃣ Install Vercel CLI

npm install -g vercel


### 2️⃣ Deploy the App

vercel



## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

