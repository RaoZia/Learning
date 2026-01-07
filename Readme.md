# Signup Form

A modern, responsive signup form built with React and Tailwind CSS. This project features a beautiful gradient design with a clean user interface for user registration.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient background with a clean, professional form design
- **Form Fields**: 
  - First Name and Last Name inputs
  - Email input with icon
  - Password and Confirm Password fields with eye icon
  - Terms and conditions checkbox
- **React Router**: Integrated routing for navigation between different pages
- **Tailwind CSS**: Styled with Tailwind CSS for rapid UI development
- **React Icons**: Beautiful icons from react-icons library

##  Technologies Used

- **React 19.2.0** - Modern React library for building user interfaces
- **Vite 7.2.4** - Fast build tool and development server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **React Router 7.11.0** - Declarative routing for React
- **React Icons 5.5.0** - Popular icons library for React

##  Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher recommended)
- **npm** or **yarn** package manager

##  Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd signup-form
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development Mode

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Build for Production

Create an optimized production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check for code quality issues:
```bash
npm run lint
```

##  Project Structure

```
signup-form/
├── public/
│   ├── Frame 3961.png      # Form illustration image
│   └── vite.svg            # Vite logo
├── src/
│   ├── assets/
│   │   └── react.svg       # React logo
│   ├── components/
│   │   └── Signup.jsx      # Main signup form component
│   ├── App.jsx             # Main app component with routing
│   ├── App.css             # App-specific styles
│   ├── index.css           # Global styles
│   └── main.jsx            # Application entry point
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
└── package.json            # Project dependencies and scripts
```

##  Routes

The application uses React Router with the following routes:
- `/signup` - Signup form page
- `/todo` - Todo page (component referenced but may need implementation)

##  Design Features

- **Gradient Background**: Beautiful purple-to-pink gradient (`from-[#9F7AEA] to-[#FEE2FE]`)
- **Card Layout**: Clean white card with shadow for the form
- **Split Layout**: Image on the left (desktop) and form on the right
- **Icon Integration**: Email and password visibility icons
- **Hover Effects**: Interactive button with hover states

##  Form Fields

- First Name
- Last Name
- Email (with email icon)
- Password (with eye icon)
- Confirm Password (with eye icon)
- Terms & Conditions checkbox

##  Future Enhancements

- Form validation
- Password strength indicator
- Show/hide password toggle functionality
- Form submission handling
- Backend integration
- User authentication

##  Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

##  License

This project is private and not licensed for public use.

##  Author

Created with using React and Tailwind CSS

---

**Note**: Make sure to update the image path in `Signup.jsx` if the image location changes. Currently references `public/frame 3961.png`.
