# Full-Stack Employee Management System
A comprehensive Full-Stack Employee Management System that enables users to perform CRUD operations on employee records, including uploading profile pictures using Cloudinary. This project incorporates MongoDB, Express.js, React.js, Redux, and JWT-based authentication to ensure secure, scalable, and responsive functionality.

  # Features
- Employee CRUD (Create, Read, Update, Delete) Operations-
- JWT-Based Authentication & Authorization
- Secure Profile Picture Upload with Cloudinary + Multer
- Search & Pagination on Employee Listing
- Responsive UI with React.js & Redux for State Management
- API Communication via Axios

# Tech Stack
# Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- Multer (File Upload)
- Cloudinary (Image Hosting)
- JWT (Authentication)

# Frontend:
- React.js
- Redux Toolkit
- React Router
- Axios
# API Endpoints
🔐 ## Authentication Routes
- Method	Endpoint	Protection	Description
- POST:/auth/register	Public	Register a new user
- POST:/auth/login	Public	Login a user and get JWT token
- POST:/auth/logout	Public	Logout user (client-side token removal)
👨‍💼  ## Employee Management Routes
- Method	Endpoint	Protection	Description
- POST:/employees/	Protected	Create new employee with profile picture upload (Cloudinary)
- GET	:/employees/	Protected	Get list of employees with pagination & search
- PUT	:/employees/:id	Protected	Update employee details by ID
- DELETE:/employees/:id	Protected	Delete employee by ID







