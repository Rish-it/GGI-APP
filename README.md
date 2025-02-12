
# GGI App

## Overview
GGI App is a basic form-collecting application built with **Next.js**. It allows users to submit a name through a form, validates the input using **Zod**, and prevents duplicate submissions. The project follows best practices for UI/UX and can be expanded with additional features like authentication, database storage, and enhanced UI components.

## Features
- **Form validation**: Ensures input follows specific rules using Zod.
- **Duplicate submission prevention**: Displays a warning if the same name is submitted twice.
- **Toast notifications**: Provides feedback on form submission success or failure.
- **State management**: Uses React state to store submitted names and manage form behavior.
- **Optimized UI**: Built with shadcn/ui components for an intuitive user experience.

## Tech Stack
- **Framework**: Next.js
- **Language**: TypeScript
- **Validation**: Zod
- **State Management**: React Hooks
- **UI Components**: shadcn/ui
- **Notifications**: Custom toast notifications

## Installation & Setup
1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/ggi-app.git
   cd ggi-app
   ```

2. **Install dependencies**:
   ```sh
   yarn install
   # or
   npm install
   ```

3. **Run the development server**:
   ```sh
   yarn dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure
```
/ggi-app
│── /components         # Reusable UI components
│── /pages              # Next.js page routes
│── /public             # Static assets (e.g., favicon)
│── /styles            # Global styles
│── /utils              # Helper functions
│── package.json        # Project dependencies & scripts
│── README.md           # Project documentation
```

## API Routes
The form submits data to a backend API at `/api/backend`. Ensure that your backend endpoint is properly configured to handle POST requests.

## Scalability & Future Enhancements
The project is designed with scalability in mind. Below are some areas for future improvements:

### 1. **Authentication & User Management**
- Implement **NextAuth.js** for authentication.
- Support OAuth providers like Google and GitHub.
- Use **JWT-based authentication** for secure API access.

### 2. **Database Integration**
- Store submitted names in a **PostgreSQL database** using Prisma.  (completed)
- Implement **Redis caching** for fast access to frequently used data.

### 3. **Role-Based Access Control (RBAC)**
- Define user roles (Admin, User, Guest).
- Restrict access to certain API routes.

### 4. **UI & UX Enhancements**
- Add a **dark mode toggle**.    (completed)
- Use **Framer Motion** for animations.(completed)

### 5. **Enhanced API & Error Handling**
- Implement better error logging with **Sentry**.  (completed)
- Improve response handling with **Zod-safe API parsing**.(completed)
- Add **Rate Limiting** to prevent spam submissions.

### 6. **Deployment & CI/CD**
- Deploy the app on **Vercel** for production. (completed)
- Set up **GitHub Actions** for automated testing & deployment.
- Monitor performance using **Lighthouse & Vercel Analytics**.

## Contribution Guidelines
1. **Fork the repository**.
2. **Create a new branch** for your feature:
   ```sh
   git checkout -b feature-name
   ```
3. **Commit your changes**:
   ```sh
   git commit -m "Add feature: feature description"
   ```
4. **Push to GitHub & submit a Pull Request**:
   ```sh
   git push origin feature-name
   ```

## License
This project is licensed under the **MIT License**.

---
**Author:** Rishit Sharma 🚀
