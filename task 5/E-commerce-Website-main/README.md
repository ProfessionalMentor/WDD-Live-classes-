# E-commerce Website (Basic Structure)

This is a **basic e-commerce website** built with **React**, **JavaScript**, and **Tailwind CSS**.  

It currently has **3 main pages**:  
- **Home** – Displays some products and discounts  
- **All Products** – Shows all products in categories  
- **Cart** – Currently empty (no hooks yet; will be improved later)

> Note: The Cart page is empty for now as hooks/state management has not been implemented. This project serves as a basic structure and will be improved over time.

## Features
- Responsive layout using Tailwind CSS
- Horizontal scroll for category products
- Randomly selected discount items on the home page
- Navigation bar with links to all pages
- Footer included

## Technologies
- React 19
- JavaScript (ES6+)
- Tailwind CSS

## Getting Started

### Clone the repository
```
git clone https://github.com/inshaal1/E-commerce-Website.git

Navigate to the project folder
Install dependencies
npm install
Start the development server
npm run dev
The project will run at: http://localhost:5173.
```

```
Project Structure
E-COMMERCEWEBSITE/
│
├─ src/
│  ├─ components/   # Navbar, Footer
│  ├─ pages/        # Home, Product, Cart
│  ├─ data/         # Product data
│  └─ App.jsx
|  └─ main.jsx
│  └─ index.css
|  ├─ navigation/    # Routes
├─ public/
├─ package.json
├─ package-lock.json
├─ eslint.config.js
├─ vite.config.js
└─ README.md
```
### Future Improvements
Implement cart functionality with hooks or context

Add product details page

Implement user authentication

Improve UI/UX and add animations
