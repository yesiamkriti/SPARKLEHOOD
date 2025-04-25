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
git clone https://github.com/yourusername/humanchain-ai-safety-api.git
cd humanchain-ai-safety-api
2. Install dependencies
bash
Copy
Edit
npm install
3. Setup Environment Variables
Create a .env file in the root directory:

env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/ai_safety_incidents
4. Run the application
bash
Copy
Edit
# Development mode
npx ts-node-dev src/server.ts
🗃️ Optional: Pre-populate the DB with sample data
You can run the seeder script:

bash
Copy
Edit
npx ts-node scripts/seed.ts
Or manually POST the sample incidents using Postman or curl.

📖 API Endpoints
GET /incidents
Fetch all incidents.

Response:

json
Copy
Edit
[
  {
    "id": "605f...",
    "title": "AI misdiagnosed patient",
    "description": "An AI suggested incorrect medication.",
    "severity": "High",
    "reported_at": "2025-04-02T18:00:00Z"
  }
]
POST /incidents
Log a new incident.

Request:

json
Copy
Edit
{
  "title": "Example Incident",
  "description": "Something went wrong with the AI.",
  "severity": "Medium"
}
Response:

json
Copy
Edit
{
  "id": "...",
  "title": "...",
  "description": "...",
  "severity": "...",
  "reported_at": "..."
}
GET /incidents/:id
Get a specific incident by ID.

Response: 200 OK or 404 Not Found

DELETE /incidents/:id
Delete an incident by ID.

Response: 204 No Content or 404 Not Found

📝 Design Notes
Incident severity is validated to be one of "Low", "Medium", or "High".

Errors are handled with a global error handler middleware.

MongoDB _id is used as the unique identifier for each incident.
```
