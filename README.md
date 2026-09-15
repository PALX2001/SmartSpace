# SmartSpace

SmartSpace is a modern, full-stack real estate web application that allows users to easily search, view, and list properties for rent or sale. It features a sleek, interactive map integration, robust filtering options, and real-time chat capabilities.

## 🌟 Features

- **Modern & Responsive UI**: Fully redesigned user interface with a sleek, full-screen aesthetic and smooth animations.
- **Interactive Map**: Visualize property locations instantly on an integrated map view using Leaflet.
- **Advanced Filtering**: Filter properties by type (rent/buy), property category, price range, and location.
- **User Authentication**: Secure sign-up and login functionality powered by JWT and bcrypt.
- **Real-Time Messaging**: Built-in chat feature using Socket.io to connect buyers/renters with property owners.
- **Save & Manage Properties**: Users can save their favorite listings and view them later on their profile page.

## 🛠️ Tech Stack

### Frontend
- **React.js (v18)** - Component-based UI library.
- **Vite** - Extremely fast frontend build tool.
- **Zustand** - Lightweight state management for authentication and notifications.
- **Sass (SCSS)** - Powerful CSS preprocessor for styling.
- **React Router Dom** - Client-side routing.
- **Leaflet & React-Leaflet** - Interactive maps.

### Backend
- **Node.js & Express** - Fast and minimalist web framework.
- **MongoDB** - NoSQL database for flexible data storage.
- **Prisma** - Next-generation ORM for Node.js and TypeScript.
- **Socket.io** - Enables real-time, bidirectional communication for the chat system.
- **JWT (JSON Web Tokens)** - Secure stateless authentication.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB instance (local or Atlas)

### Installation

1. **Clone the repository** (or download the source code):
   ```bash
   git clone <your-repository-url>
   cd SmartSpace
   ```

2. **Setup the Backend (API)**
   ```bash
   cd api
   npm install
   ```
   - Create a `.env` file in the `api` directory with the following variables:
     ```env
     DATABASE_URL="your_mongodb_connection_string"
     JWT_SECRET_KEY="your_secret_key"
     CLIENT_URL="http://localhost:5173"
     ```
   - Push the Prisma schema to your database:
     ```bash
     npx prisma db push
     ```
   - (Optional) Seed the database with dummy data:
     ```bash
     node seed.js
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Setup the Socket Server**
   ```bash
   cd ../socket
   npm install
   ```
   - Start the socket server:
     ```bash
     npm start
     ```

4. **Setup the Frontend (Client)**
   ```bash
   cd ../client
   npm install
   ```
   - Start the Vite development server:
     ```bash
     npm run dev
     ```

5. **Open the App**
   - Navigate to `http://localhost:5173` in your browser.

## 💡 Recent Updates
- Complete UI/UX overhaul of the Homepage, List Page, and Single Property Page.
- Replaced rigid constraints with a fluid, full-screen layout.
- Added dynamic entrance animations.
- Fixed case-sensitive search issues for cities.
- Implemented a clean, intuitive notification badge in the navbar profile section.

## 📄 License
This project is open-source and available under the [ISC License](LICENSE).
