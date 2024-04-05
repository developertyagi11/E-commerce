# E-Commerce Website

This project is an eCommerce website built using React.js, Firebase, and Redux. It serves as a platform for users to browse and purchase products online. The website incorporates authentication, product management, and shopping cart functionalities.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely using Firebase Authentication.
- **Product Catalog**: Browse a wide range of products with detailed descriptions and images.
- **Product Search**: Search for products based on keywords or categories.
- **Shopping Cart**: Add products to the shopping cart and manage quantities before checkout.
- **Checkout Process**: Secure checkout process integrated with Firebase for payment and order management.
- **Admin Dashboard**: Admin users can manage products, categories, and orders through a dedicated dashboard.

## Technologies Used

- **React.js**: Frontend library for building user interfaces.
- **Redux**: State management library for managing application state.
- **Firebase**: Platform for building web and mobile applications, used for authentication, database, and hosting.
- **React Router**: Library for routing and navigation in React applications.
- **Bootstrap**: CSS framework for responsive and mobile-first front-end web development.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/e-commerce-website.git`
2. Navigate to the project directory: `cd e-commerce-website`
3. Install dependencies: `npm install`
4. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication, Firestore Database, and Hosting services
   - Set up Firebase configuration in `src/firebase/firebase.js`
5. Start the development server: `npm start`
6. Open your browser and visit `http://localhost:3000` to view the website.

## Folder Structure

The project follows a typical React folder structure:

e-commerce-website/
│
├── public/
│ ├── index.html
│ └── ...
│
└── src/
├── components/
│ ├── Auth/
│ ├── Cart/
│ ├── Product/
│ └── ...
│
├── firebase/
│ └── firebase.js
│
├── redux/
│ ├── actions/
│ ├── reducers/
│ ├── store.js
│ └── ...
│
├── App.js
├── index.js
└── ...
