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

The server runs on `http://localhost:8000`

## 📍 Project Structure

```
build-an-express-api/
├── server.js                              # Main Express server setup
├── package.json                           # Project metadata and dependencies
├── routes/
│   └── apiRoutes.js                       # API route definitions
├── controllers/
│   ├── filerByParamsController.js         # Handle path parameter filtering
│   └── filerByQueryController.js          # Handle query parameter filtering
└── data/
    └── data.js                            # Dataset of world's most promising startups
```

## 🌍 What This Project Does

This API provides access to a curated dataset of **the world's most promising startups**. Users can browse, filter, and search through startup information using different query and path parameters. It's a great learning project that demonstrates real-world API patterns for data retrieval and filtering.

## 🔗 API Endpoints

### Get All Startups

**GET** `/api/startups`

Returns all startups in the dataset.

**Response Example:**
```json
[
  {
    "id": 1,
    "name": "OpenAI",
    "industry": "Artificial Intelligence",
    "country": "United States",
    "founded": 2015,
    "funding": 1000000000
  },
  {
    "id": 2,
    "name": "Stripe",
    "industry": "Fintech",
    "country": "Ireland",
    "founded": 2010,
    "funding": 500000000
  }
]
```

### Get Startup by ID (Path Parameters)

**GET** `/api/startups/:id`

Retrieve a specific startup by its ID.

**Path Parameters:**
- `id` - The unique identifier of the startup

**Example:** `GET /api/startups/1`

**Response:**
```json
{
  "id": 1,
  "name": "OpenAI",
  "industry": "Artificial Intelligence",
  "country": "United States",
  "founded": 2015,
  "funding": 1000000000
}
```

### Filter Startups by Query Parameters

**GET** `/api/startups/filter`

Filter startups using query parameters like industry, country, funding range, etc.

**Query Parameters:**
- `industry` - Filter by industry
- `country` - Filter by country
- `minFunding` - Filter by minimum funding amount
- `maxFunding` - Filter by maximum funding amount

**Examples:**
- `GET /api/startups/filter?industry=Artificial%20Intelligence`
- `GET /api/startups/filter?country=United%20States`
- `GET /api/startups/filter?minFunding=100000000&maxFunding=500000000`

**Response:** Returns array of startups matching the filter criteria

## 📚 What We Studied

Throughout this project, you will learn:

- **Creating a server** - Setting up an Express.js server with proper configuration
- **Sending status codes** - Using appropriate HTTP status codes (200, 404, etc.)
- **Setting headers** - Configuring response headers and enabling CORS
- **Handling requests/responses** - Processing incoming requests and sending JSON responses
- **Filtering data** - Implementing filtering logic based on query parameters
- **Extracting path/query params** - Accessing dynamic values from URLs (`/startups/:id`) and query strings (`?industry=...`)
- **CORS** - Enabling Cross-Origin Resource Sharing to allow requests from different domains

## 🎯 Stretch Goals

As you progress, aim to achieve these goals:

- [x] Create basic API structure with Express.js
- [x] Set up routes and controllers
- [ ] Handle POST requests to add new startups (ignore authentication for now)
- [ ] Add better filtering with multiple combined parameters
- [ ] Add input validation and error handling
- [ ] Implement pagination for large datasets
- [ ] Add sorting capabilities (by funding, founding date, etc.)
- [ ] Persist data to a real database (MongoDB, PostgreSQL)
- [ ] Add authentication/authorization
- [ ] Write unit and integration tests

## 🛠️ Core Technologies

- **Node.js** - JavaScript runtime for the server
- **Express.js** - Web framework for building REST APIs
- **JavaScript (ES6+ Modules)** - Modern JavaScript with ES modules
- **CORS** - Cross-Origin Resource Sharing middleware

## 📦 Dependencies

- **express** ^5.2.1 - Web framework for building APIs
- **cors** ^2.8.6 - Enable CORS for cross-origin requests

## 📝 How It Works

### Backend Flow

1. **Request Arrives** - Client makes a request to an endpoint like `/api/startups/:id` or `/api/startups/filter`
2. **Route Matching** - Express routes the request to the appropriate controller
3. **Parameter Extraction** - Extract path parameters (`:id`) or query parameters (`?industry=...`)
4. **Filtering Logic** - Controller filters the startup data based on extracted parameters
5. **Response Sending** - Returns filtered data with appropriate status code and CORS headers
6. **Client Receives** - Client gets the JSON response with startup information

### Example Request Flow

```
Client: GET /api/startups/1
  ↓
Express Routes (apiRoutes.js)
  ↓
filerByParamsController (extracts id=1)
  ↓
Filters data/data.js for startup with id=1
  ↓
Sends JSON response with status 200
  ↓
Client receives startup data
```

## 💡 Key Concepts Learned

- **HTTP Methods** - Understanding GET requests for data retrieval
- **Status Codes** - Using 200 for success, 404 for not found, 500 for errors
- **Path Parameters** - Dynamic URL segments like `/startups/:id`
- **Query Parameters** - Optional filtering parameters like `?industry=AI&country=US`
- **Routing** - Organizing endpoints and mapping them to controllers
- **Controllers** - Separating business logic from route definitions
- **CORS** - Allowing requests from different origins/domains
- **Data Structure** - Organizing and accessing large datasets

## 🌍 Testing Your API

You can test your API using:

**cURL:**
```bash
# Get all startups
curl http://localhost:8000/api/startups

# Get startup by ID
curl http://localhost:8000/api/startups/1

# Filter by industry
curl "http://localhost:8000/api/startups/filter?industry=Artificial%20Intelligence"

# Filter by country
curl "http://localhost:8000/api/startups/filter?country=United%20States"
```

**Postman or Thunder Client:**
- Create GET requests to the endpoints listed above
- Add query parameters in the params section
- View formatted JSON responses

## 🎓 Learning Outcomes

After completing this project, you'll understand:
- How to structure an Express.js API
- How to work with route parameters and query strings
- How to organize code with controllers and routes
- How to filter and manipulate data
- How CORS works and why it's important
- How to return proper HTTP responses

---

Made with ❤️ for learning Express.js and API development
