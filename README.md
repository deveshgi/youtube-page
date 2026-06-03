# YouTube Page Clone

A full-stack YouTube-inspired web application built using modern JavaScript technologies. This project demonstrates backend API development, frontend UI implementation, authentication, file uploads, and database integration.

## Features

### User Features

* User registration and login
* JWT-based authentication
* User profile management
* Subscribe and unsubscribe to channels
* Like videos and comments
* Create and manage playlists
* Upload and manage videos
* Comment on videos
* Dashboard and analytics endpoints

### Backend Features

* RESTful API architecture
* MongoDB database integration
* Authentication and authorization middleware
* Cloudinary file upload support
* Error handling utilities
* Modular folder structure
* Environment variable configuration

## Tech Stack

### Frontend

* React
* Vite
* JavaScript
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer
* Cloudinary
* Bcrypt

## Project Structure

```text
youtube-page/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   ├── utils/
│   │   └── connection/
│   ├── package.json
│   └── .env.example
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/deveshgi/youtube-page.git
cd youtube-page
```

## Backend Setup

Navigate to backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start development server:

```bash
npm run dev
```

## Frontend Setup

Navigate to frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

## API Modules

* Authentication
* Users
* Videos
* Comments
* Likes
* Playlists
* Subscriptions
* Dashboard
* Health Check

## Environment Variables

Create a `.env` file using the provided `.env.example` template.

Never commit your `.env` file to GitHub.

## Learning Objectives

This project was built to practice:

* REST API development
* Authentication and Authorization
* MongoDB and Mongoose
* File uploads with Cloudinary
* React frontend development
* Full-stack project architecture
* Git and GitHub workflows

## Future Improvements

* Video streaming support
* Search functionality
* Video recommendations
* Notifications
* Real-time comments
* Responsive UI improvements
* Admin dashboard

## Author

**Devesh Kumar**

GitHub: https://github.com/deveshgi

## License

This project is created for learning and educational purposes.
