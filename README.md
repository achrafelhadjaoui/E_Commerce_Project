# Electric Products E-Commerce Platform


A full-stack e-commerce solution specializing in electric products like **phones, watches, TVs, and printers**. Built with the **MERN stack** (MongoDB, Express.js, React, Node.js), this platform offers a seamless shopping experience for users and a robust **admin dashboard** for product management. It features efficient search capabilities and a modern, responsive UI designed with **Tailwind CSS**.

---

## 🌟 Features

* **Product Catalog:** Browse and discover a wide range of electric products.
* **Product Search:** Efficient search functionality to quickly find desired items.
* **Shopping Cart:** Add, view, and manage items in your shopping cart.
* **User Authentication:** Secure user registration, login, and authentication.
* **Admin Dashboard:**
    * Manage product listings (Add, Edit, Delete products).
    * Oversee product inventory.
* **RESTful API:** Robust backend API for seamless data communication.
* **Responsive Design:** Optimized for various screen sizes using Tailwind CSS.
* **Intuitive UI:** Clean and modern user interface enhanced with React Icons.

---

## 🛠 Technologies Used

* **Frontend:**
    * **React.js:** JavaScript library for building user interfaces.
    * **Redux:** For predictable state management across the application.
    * **Tailwind CSS:** Utility-first CSS framework for rapid and consistent styling.
    * **React Icons:** For easily incorporating scalable vector icons.
* **Backend:**
    * **Node.js:** JavaScript runtime environment.
    * **Express.js:** Fast, minimalist web framework for Node.js.
    * **Mongoose:** MongoDB object data modeling (ODM) for Node.js.
* **Database:**
    * **MongoDB:** NoSQL database for flexible data storage.
* **Development Practices:**
    * **REST API:** Standard for building web services.
    * **Modular Design:** Codebase organized into reusable and independent modules.
    * **Best Practices:** Adherence to industry standards for clean and maintainable code.
    * **Clean Code:** Emphasis on readable and understandable code.

---



## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Before you begin, ensure you have the following installed:

* [Node.js](https://nodejs.org/en/) (v14.x or higher recommended)
* [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager
* [MongoDB](https://www.mongodb.com/try/download/community) (Community Server or MongoDB Atlas account)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/achrafelhadjaoui/E_Commerce_Project.git
    cd E_Commerce_Project
    ```

2.  **Install Backend Dependencies & Start Server:**
    ```bash
    cd backend
    npm install
    npm run dev # Starts the backend server
    ```
    * *Note: Ensure your MongoDB server is running or your MongoDB Atlas connection string is configured in your backend's `.env` or config files.*

3.  **Install Frontend Dependencies & Start Application:**
    ```bash
    cd ../frontend # Navigate back to the root, then into the frontend
    npm install
    npm start # Starts the React development server
    ```

### Usage

Open your browser and navigate to `http://localhost:3000` (or whatever port your frontend starts on).

* Browse products, use the search bar, and add items to your cart.
* Only admin can access the dashboard

---

## ⚙️ Customization & Extension

* **API Integration:** Extend the REST API to include more features (e.g., order processing, payment gateway integration).
* **Advanced Search/Filtering:** Implement more sophisticated search parameters or filtering options.
* **User Roles:** Add different user roles (e.g., customer, admin, super admin) with specific permissions.
* **Payment Gateway:** Integrate with a third-party payment provider like Stripe or PayPal.
* **Deployment:** Set up deployment pipelines for both frontend and backend to services like Vercel, Netlify, Heroku, or AWS.

---

## ✨ Code Quality & Best Practices

* **Modular Design:** The project adheres to a modular structure, separating concerns between models, routes, controllers, and frontend components.
* **RESTful API Principles:** Backend API is designed following RESTful conventions for clear and consistent communication.
* **Redux State Management:** Centralized state management for predictable data flow on the frontend.
* **Clean Code:** Emphasis on readable, maintainable, and self-documenting code throughout the project.
* **Responsive UI:** Frontend is built with Tailwind CSS for an adaptive user experience across devices.

---



---

## ✉️ Contact

* **Created by:** Achraf Elhadjaoui
* **GitHub:** [https://github.com/achrafelhadjaoui](https://github.com/achrafelhadjaoui) 
* **Email:** [aelhadjaoui23@gmail.com](aelhadjaoui23@gmail.com) 

---