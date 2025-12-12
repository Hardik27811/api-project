This project is a simple API-backed mini application 

Fetches data from JSONPlaceholder public API

Caches the data locally in data.json

Serves custom API endpoints using Express.js

Displays posts on a frontend using HTML + JavaScript

This is a complete beginner–friendly project that covers:
API fetching, data caching, server routing, and frontend consumption.

Features
Fetch & Cache API Data

Data is fetched once at server startup from:

/posts

/users
Then stored locally in data.json.

Custom Express Endpoints

clean API endpoints for:

Listing posts

Getting a post by ID

Merging post with the username

Simple Frontend




1GET /api/posts

Returns all posts from cached data.

Example Response:

[
  {
    "userId": 1,
    "id": 1,
    "title": "Post Title",
    "body": "Post body..."
  }
]

GET /api/posts/:id

Returns a single post + attached username.

Example Response:

{
  "userId": 1,
  "id": 1,
  "title": "Post Title",
  "body": "Post body...",
  "username": "Leanne Graham"
}

Filters Available (Frontend)

On the frontend, you can filter posts by:

Post Title (search)
Post ID
User ID


Public API data from JSONPlaceholder
Project built using Node.js, Express, Axios
