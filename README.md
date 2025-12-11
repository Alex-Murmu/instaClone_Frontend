# 📸 InstaClone Frontend

A modern, responsive social media application frontend built with the latest React ecosystem. This project mimics core Instagram functionality including a feed, user authentication, and profile management.

## 🚀 Tech Stack

This project uses a cutting-edge stack focused on performance and developer experience:

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Library:** [Shadcn/UI](https://ui.shadcn.com/) (based on Radix UI)
- **Icons:** [Lucide React](https://lucide.dev/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
- **Routing:** [React Router DOM v7](https://reactrouter.com/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/)

## ✨ Features

- **Authentication:** - Login and Signup pages with form validation.
  - Redux integration for managing user sessions.
- **Responsive Layout:** - Sidebar navigation for desktop.
  - Bottom navigation bar for mobile devices.
- **Feed System:**
  - Scrollable post feed.
  - Post interaction UI (Like, Comment, Share, Save).
- **Interactive Components:**
  - Dialog modals for comments and post details.
  - Hover cards and optimized Avatar components.
- **Dark Mode Support:** (Configured via Tailwind CSS variables).

## 🛠️ Installation & Setup

Follow these steps to clone and run the project locally.

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd instaclone_frontend

2. Install Dependencies
Bash

npm install
3. Configure Environment
Create a .env file in the root directory if your API endpoints are dynamic. By default, the project points to localhost:8000.

4. Run the Development Server
Bash

npm run dev
The app will typically start at http://localhost:5173.

📂 Project Structure
src/
├── assets/          # Static images and icons
├── components/      
│   ├── Auth_Components/  # Login/Signup forms
│   ├── comp/             # Feed, Post, and Home components
│   ├── outlates/         # Page layouts (Feed, Profile, Create)
│   ├── sideBar/          # Navigation (Sidebar, RightSidebar)
│   └── ui/               # Reusable Shadcn UI components (Buttons, Dialogs, etc.)
├── lib/             # Utility functions (cn class merger)
├── redux/           # Redux slices and store configuration
├── App.jsx          # Main application component with Routes
├── MainLayout.jsx   # Layout wrapper with Sidebar
└── index.css        # Tailwind directives and global styles