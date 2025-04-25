# HumanChain AI Safety Incident Log API

A simple RESTful API built with Node.js, TypeScript, Express, and MongoDB to log and manage hypothetical AI safety incidents.

## 🔧 Tech Stack

- Node.js
- Express
- TypeScript
- MongoDB + Mongoose

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yesiamkriti/Sparklehood_humanchain-ai-safety-api.git
cd sparklehood_humanchain-ai-safety-api
```
2. Install dependencies
```bash
npm install
```

4. Run the application
```bash
# Development mode
npx ts-node-dev src/server.ts
```
I have create Ai-Saftey.postman_collection.json
Use Postman and import the data there.

## 📖 API Endpoints

## GET /incidents  ----> Fetch all incidents.

```bash
# Response:
[
  {
    "id": "605f...",
    "title": "AI misdiagnosed patient",
    "description": "An AI suggested incorrect medication.",
    "severity": "High",
    "reported_at": "2025-04-02T18:00:00Z"
  }
]
```

## POST /incidents  ----> Log a new incident.

```bash
# Request:
{
  "title": "Example Incident",
  "description": "Something went wrong with the AI.",
  "severity": "Medium"
}
# Response:
{
  "id": "...",
  "title": "...",
  "description": "...",
  "severity": "...",
  "reported_at": "..."
}
```
## GET /incidents/:id ----> Get a specific incident by ID.

Response: 200 OK or 404 Not Found

## DELETE /incidents/:id ----> Delete an incident by ID.

Response: 204 No Content or 404 Not Found

## 📝 Design Notes
Incident severity is validated to be one of "Low", "Medium", or "High".

Errors are handled with a global error handler middleware.

MongoDB _id is used as the unique identifier for each incident.
