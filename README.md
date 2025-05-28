# 🛒 Shopocalypse - E-Commerce Project 🛍️

## 📋 Overview
Shopocalypse is a comprehensive e-commerce platform built with modern web technologies. The application features a customer-facing storefront, an admin dashboard for store management, and a robust backend API.

## 🏗️ Project Structure
The project is organized into three main components:

### 🖥️ Frontend
Customer-facing storefront built with React and Vite.

### ⚙️ Backend
RESTful API service built with Express.js and MongoDB.

### 👑 Admin
Administrative dashboard for managing products, orders, and users.

## 🚀 Technologies Used

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **React Router** - For navigation
- **Axios** - For API requests
- **TailwindCSS** - For styling
- **React Icons** - For UI icons
- **React Toastify** - For notifications
- **EmailJS** - For sending emails

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database (via Mongoose)
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Multer** - File uploads
- **Cloudinary** - Image storage
- **Stripe & Razorpay** - Payment processing

### Admin Dashboard
- **React** - UI library
- **Vite** - Build tool
- **Headless UI** - Accessible UI components
- **Framer Motion** - Animations
- **TailwindCSS** - For styling

## 🔧 Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB instance
- Cloudinary account (for image storage)
- Stripe and/or Razorpay account (for payments)

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```
4. Start the development server:
   ```
   npm run server
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

### Admin Setup
1. Navigate to the admin directory:
   ```
   cd admin
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## 🌟 Features

### Customer Features
- 🔍 Product search and filtering
- 🛒 Shopping cart functionality
- 💳 Secure checkout with multiple payment options
- 👤 User account management
- 📦 Order tracking
- 📱 Responsive design for mobile and desktop

### Admin Features
- 📊 Dashboard with sales analytics
- 📝 Product management (CRUD operations)
- 👥 User management
- 📦 Order management and processing
- 🏷️ Category and tag management
- 🖼️ Image upload and management

## 🔒 Security
- JWT authentication
- Password hashing with bcrypt
- Input validation
- Secure payment processing

## 🔄 API Endpoints

The backend provides RESTful API endpoints for:
- User authentication
- Product management
- Order processing
- Payment integration
- Image uploads

## 🧪 Testing
Instructions for running tests will be added soon.

## 📈 Future Enhancements
- Integration with additional payment gateways
- Enhanced analytics dashboard
- Mobile app development
- Internationalization support
- AI-powered product recommendations

## 👨‍💻 Contributors
- Sanjeev P

## 📄 License
This project is licensed under the ISC License.

## 📩 Contact  
Feel free to reach out via [ LinkedIn: https://www.linkedin.com/in/sanjeev-dev7714/ ].

---

⭐ **Star this repository if you find it useful!** ⭐

📧 For questions or support, please contact [sanjeev.dev7714@gmail.com]
