# Movie Explorer

A modern, responsive React application for searching and exploring movie information using the OMDB API. Built with React 19, Vite, and Tailwind CSS.

## Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [API Configuration](#-api-configuration)
- [Available Scripts](#-available-scripts)
- [Contributing](#-contributing)
- [License](#-license)

## Features

- **Movie Search**: Search for movies by title with real-time results
- **Movie Cards**: Beautiful card-based display of movie posters, titles, and release years
- **Movie Details**: View comprehensive movie information including:
  - Genre
  - Release date
  - Plot summary
  - Poster image
- **Dark Theme UI**: Modern dark-themed interface for comfortable viewing
- **Fast & Responsive**: Built with Vite for lightning-fast development and optimized builds
- **Client-Side Routing**: Seamless navigation using React Router

## Tech Stack

- **React** 19.2.0 - UI library
- **Vite** 7.2.4 - Build tool and dev server
- **React Router** 7.11.0 - Client-side routing
- **Tailwind CSS** 4.1.18 - Utility-first CSS framework
- **OMDB API** - Movie database API

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher recommended)
- **npm** or **yarn** package manager

## Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd Movie-Explorer
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure API Key** (Optional)

   The project currently uses a demo API key. For production use, you should:
   - Get your own API key from [OMDB API](http://www.omdbapi.com/apikey.aspx)
   - Replace the API key in `src/pages/Home.jsx` and `src/pages/MovieDetails.jsx`
   - Consider using environment variables for better security

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## Usage

### Searching for Movies

1. On the home page, you'll see a search bar
2. By default, "Avengers" movies are loaded
3. Type a movie title in the search bar and click "Search" or press Enter
4. Browse through the movie cards displayed in a grid layout

### Viewing Movie Details

1. Click the "Details" button on any movie card
2. View comprehensive information about the selected movie
3. Use the navigation bar to return to the home page

## 📁 Project Structure

```
Movie-Explorer/
├── public/
│   └── vite.svg              # Vite logo
├── src/
│   ├── assets/
│   │   └── react.svg         # React logo
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.jsx        # Navigation bar component
│   │   ├── MovieList.jsx     # Movie list container component
│   │   └── MovieCard.jsx     # Individual movie card component
│   ├── layout/
│   │   └── Applayout.jsx     # Main layout wrapper with Navbar
│   ├── pages/                # Page components
│   │   ├── Home.jsx          # Home page with search functionality
│   │   └── MovieDetails.jsx  # Movie detail page
│   ├── App.jsx               # Main app component with routing
│   ├── App.css               # App-specific styles
│   ├── index.css             # Global styles
│   └── main.jsx              # Application entry point
├── .eslintrc.js              # ESLint configuration
├── index.html                # HTML template
├── package.json              # Project dependencies and scripts
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation
```

## 🔑 API Configuration

This project uses the [OMDB API](http://www.omdbapi.com/) to fetch movie data.

### Getting Your API Key

1. Visit [OMDB API](http://www.omdbapi.com/apikey.aspx)
2. Choose a plan (free tier available)
3. Register and receive your API key
4. Replace the API key in the following files:
   - `src/pages/Home.jsx` (line 13)
   - `src/pages/MovieDetails.jsx` (line 11)

### Using Environment Variables (Recommended)

For better security, consider using environment variables:

1. Create a `.env` file in the root directory:

   ```env
   VITE_OMDB_API_KEY=your_api_key_here
   ```

2. Update the API calls to use the environment variable:
   ```javascript
   const apiKey = import.meta.env.VITE_OMDB_API_KEY;
   const res = await fetch(
     `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`,
   );
   ```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Developed with ❤️ using React and Vite

---

**Note**: This project is for educational purposes. Make sure to use your own API key for production deployments.
