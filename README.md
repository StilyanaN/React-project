# 🍦 Ice Dream

**Ice Dream** is your go-to online shop for indulging in a variety of delicious ice cream flavors. Whether you’re looking to buy, review, or manage products, Ice Dream offers a delightful experience for both customers and admins.

## 🌐 Visit the Site here

[Ice Dream](https://ice-dream-7621c.web.app/)

## 🛠 Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool and development server that provides fast and optimized builds.
- **Firebase**: A cloud-based platform providing backend services, including authentication and real-time database.

- **SoftUni Practice Server**: Used for backend practice and API services.

## 🚀 Features

### 👤 User Authentication

- **Register:** Create an account with a username, email, password, and confirm password.
- **Login:** Access your account with your credentials.
- **Logout:** Sign out from your account whenever needed.

### 🍨 Product Catalog

- **Dynamic Home Page:** View a dynamic showcase of featured ice creams.
- **Catalog Page:** Browse through a catalog of all available ice cream products.
- **Product Details:** Get detailed information about each ice cream.

### 🛒 User Profile and Orders

- **Buy Products:** Purchase your favorite ice creams.
- **Comment on Products:** Leave reviews and share your thoughts.
- **View Cart:** Manage and review items in your cart.
- **Order History:** Track your past orders.

### 🛠 Admin Capabilities

- **Add Products:** Add new products to the catalog.
- **Edit Products:** Modify existing product details.
- **Delete Products:** Remove products from the catalog.

## 🔑 Authentication

The service is initialized with three users for immediate testing:

- **Peter**: 
  - **Email:** peter@abv.bg 
  - **Password:** 123456
  
- **George**: 
  - **Email:** george@abv.bg 
  - **Password:** 123456
  
- **Admin**: 
  - **Email:** admin@abv.bg 
  - **Password:** admin

## 📦 Installation and Running the Application

### Client Setup

1. Navigate to the client directory:

    ```bash
    cd client
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create environment files:
    - **Create `.env.development`** in the `client` directory with the following content:

        ```plaintext
        VITE_API_URL=http://localhost:3030
        ```

    - **Create `.env.production`** in the `client` directory with the following content:

        ```plaintext
        VITE_API_URL=https://api.example.com
        ```

    - **Replace** `https://api.example.com` with your actual production API URL.

4. Start the development server:

    ```bash
    npm run dev
    ```

### Server Setup

1. Navigate to the server directory:

    ```bash
    cd server
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    node server.js
    ```

## 🗂 Project Structure

Here’s a breakdown of the project structure:

- **/client:** Frontend application built with React.
  - **/public:** Static assets and HTML template.
  - **/src:** React components, styles, and application logic.

- **/server:** Backend application built with Node.js and Express.
  - **/src:** Contains server logic, including controllers and business logic.

## 🎥 Credits

- **Design Inspiration and HTML Layout:** [HTML Codex](https://www.htmlcodex.com)
- **Video Tutorial:** [@emotionreal](https://www.youtube.com/@emotionreal)
