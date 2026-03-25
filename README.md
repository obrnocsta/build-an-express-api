# Build an Express.js API

A comprehensive guide to getting up and running with Express.js by building a simple API from scratch. You'll learn how to set up routes, use query and path parameters, serve data, handle errors, and structure your code effectively.

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Running the Server

```bash
npm start
```

The server runs on `http://localhost:3000`

## 📍 Project Structure

```
build-an-express-api/
├── server.js                      # Main server with Express setup
├── package.json                   # Project metadata and dependencies
├── controllers/                   # Request handlers and business logic
│   └── itemController.js          # Controller for item operations
├── routes/                        # API route definitions
│   ├── index.js                   # Main routes file
│   └── items.js                   # Item-specific routes
├── data/
│   └── items.json                 # Data storage (JSON file)
└── middleware/
    └── errorHandler.js            # Error handling middleware
```

## 🔗 API Endpoints

### Get All Items

**GET** `/api/items`

Returns all items stored in the database.

**Query Parameters:**
- `filter` - Filter items by specific criteria
- `limit` - Limit the number of results

**Response Example:**
```json
[
  {
    "id": 1,
    "name": "Item 1",
    "description": "Description of item 1",
    "created_at": "2026-03-25"
  }
]
```

### Get Item by ID

**GET** `/api/items/:id`

Returns a specific item by its ID.

**Path Parameters:**
- `id` - The ID of the item

**Response Example:**
```json
{
  "id": 1,
  "name": "Item 1",
  "description": "Description of item 1",
  "created_at": "2026-03-25"
}
```

### Create a New Item

**POST** `/api/items`

Submit a new item to the database.

**Request Body:**
```json
{
  "name": "New Item",
  "description": "Description of the new item"
}
```

**Response:** 
Returns the newly created item object with HTTP 201 status.

### Update an Item

**PUT** `/api/items/:id`

Update an existing item.

**Path Parameters:**
- `id` - The ID of the item to update

**Request Body:**
```json
{
  "name": "Updated Item",
  "description": "Updated description"
}
```

### Delete an Item

**DELETE** `/api/items/:id`

Delete an item by ID.

**Path Parameters:**
- `id` - The ID of the item to delete

## 📚 What We Studied

Throughout this project, you will learn:

- **Creating a server** - Setting up an Express.js server to handle incoming requests
- **Sending status codes** - Using appropriate HTTP status codes (200, 201, 400, 404, 500, etc.)
- **Setting headers** - Customizing response headers like Content-Type and CORS headers
- **Handling requests/responses** - Processing incoming requests and sending proper responses
- **Filtering data** - Implementing query parameters to filter results
- **Extracting path/query params** - Accessing dynamic values from URLs and query strings
- **CORS** - Implementing Cross-Origin Resource Sharing to allow requests from different domains

## 🎯 Stretch Goals

As you progress, aim to achieve these goals:

- [x] Create basic API structure with Express.js
- [x] Set up routes and controllers
- [ ] Handle POST requests (ignore authentication for now)
- [ ] Add better filtering with multiple query parameters
- [ ] Add input validation and error handling
- [ ] Make this real! - Deploy the API to a cloud service
- [ ] Connect to a real database (MongoDB, PostgreSQL, etc.)
- [ ] Implement pagination
- [ ] Add authentication/authorization
- [ ] Write unit tests

## 🛠️ Core Technologies

- **Node.js** - JavaScript runtime for the server
- **Express.js** - Web framework for building APIs
- **JavaScript (ES6+)** - Modern JavaScript syntax
- **HTTP Module** - Native Node.js HTTP handling
- **File System API** - `node:fs` for data persistence

## 📦 Dependencies

- **express** ^4.18.2 - Web framework for Node.js
- **cors** ^2.8.5 - Enable CORS for your API

## 📝 How It Works

### Backend Flow

1. **Request Routing** - Incoming requests are matched to routes defined in the `routes/` directory
2. **Path/Query Parameter Extraction** - Extract dynamic values from URLs (`/items/:id`) and query strings (`?filter=active`)
3. **Controller Logic** - Business logic processes the request and determines response
4. **Data Retrieval/Modification** - Read from or write to `data/items.json`
5. **Response Sending** - Send appropriate status code, headers, and response body back to client

### Example Request Flow

```
Client Request
    ↓
Express Routes
    ↓
Controllers (Business Logic)
    ↓
Data Layer (Read/Write JSON)
    ↓
Response (Status Code + Data + Headers)
    ↓
Client
```

## 💡 Key Concepts Learned

- **HTTP Methods** - GET (retrieve), POST (create), PUT (update), DELETE (remove)
- **Status Codes** - Understanding when to use 200, 201, 400, 404, 500, etc.
- **Headers** - Setting Content-Type, CORS headers, and custom headers
- **Route Parameters** - Dynamic segments in URLs like `/items/:id`
- **Query Parameters** - Optional parameters in the URL like `?filter=active&limit=10`
- **Middleware** - Functions that run before reaching route handlers
- **Error Handling** - Graceful error responses for invalid requests
- **RESTful Design** - Following REST conventions for API design
- **CORS** - Managing cross-origin requests safely

## 🌍 Testing Your API

You can test your API using tools like:
- **Postman** - GUI application for testing APIs
- **cURL** - Command-line tool for making requests
- **Thunder Client** - VS Code extension for API testing

Example with cURL:
```bash
# GET all items
curl http://localhost:3000/api/items

# GET item with ID 1
curl http://localhost:3000/api/items/1

# POST a new item
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name":"New Item","description":"Test"}'

# GET items with filter
curl http://localhost:3000/api/items?filter=active&limit=5
```

---

Made with ❤️ for learning Express.js and API development
