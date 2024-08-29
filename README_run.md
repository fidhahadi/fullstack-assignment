# Full-Stack Application

This project is a full-stack application consisting of a React frontend and a Node.js backend. The frontend allows users to view and interact with card data, while the backend provides API endpoints to manage cards.

## Prerequisites

The following should be installed on the machine to run the application:

- Node.js
- MongoDB

## Setup Instructions

### 1. **Clone the Repository**

Clone the repository to the local machine:

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. **Backend Setup**

### Navigate to the backend directory

- cd backend

### Install backend dependencies

- npm install

### Configure the mongodb connection

Ensure MongoDB is running on your machine.
By default, the backend connects to mongodb://localhost:27017/carddb.

### Run the backend server

Start the backend server
 
- npm start

The backend server will run on http://localhost:3000 by default.

### 3. Frontend Setup
Navigate to the frontend directory:

 - Install Frontend Dependencies:
 - Install the required Node.js packages for the frontend:

### Run the Frontend Development Server:

Start the frontend development server:

- npm start

The frontend application will run on http://localhost:3001 by default.

### Project Structure

**Backend**

backend/server.js: Main entry point for the backend server.
backend/db.js: MongoDB connection setup.
backend/models/Card.js: Mongoose model for the card.
backend/routes/cardRoutes.js: API routes for managing cards.


**Frontend**

frontend/src/App.js: Main React component rendering the application.
frontend/src/components/CardGallery.js: Component to display a gallery of cards.
frontend/src/components/Card.js: Reusable card component.
frontend/src/components/Navbar.js: Navbar component.
frontend/src/components/Footer.js: Footer component.
frontend/src/components/Banner.js: Banner component with search functionality.


**API Endpoints**
POST /api/cards: Create a new card.
GET /api/cards: Retrieve all cards.
GET /api/cards/:title: Retrieve a specific card by title.