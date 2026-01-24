# 🎯 React Quiz App

A modern, interactive quiz application built with React that challenges users with timed questions and tracks their performance. Test your knowledge, beat the clock, and compete on the leaderboard!

## ✨ Features

- **⏱️ Timed Questions**: Each question has a 15-second timer to keep you on your toes
- **📊 Progress Tracking**: Visual progress bar shows your advancement through the quiz
- **🏆 Leaderboard**: View top performers and see where you rank
- **💾 Persistent Scores**: Your scores are saved locally in your browser
- **🎨 Modern UI**: Beautiful, responsive design built with Tailwind CSS
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🔄 State Management**: Efficient state management using React Context API

## 🛠️ Tech Stack

- **React 19** - Modern React with the latest features
- **Vite** - Next-generation frontend tooling
- **React Router** - Client-side routing for seamless navigation
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Context API** - Built-in React state management solution

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

You can check if you have Node.js installed by running:
```bash
node --version
npm --version
```

## 🚀 Getting Started

### Installation

1. **Clone the repository** (or download the project)
   ```bash
   git clone <your-repo-url>
   cd Quiz-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

That's it! You're ready to start quizzing! 🎉

## 📖 How to Use

1. **Enter Your Name**: On the home page, type your name in the input field
2. **Start the Quiz**: Click the "Start Quiz" button to begin
3. **Answer Questions**: 
   - Read each question carefully
   - Select your answer from the options
   - You have 15 seconds per question
   - If time runs out, the question is automatically skipped
4. **View Results**: After completing all questions, see your score and percentage
5. **Check Leaderboard**: Click "View LeaderBoard" to see all participants' scores

## 📁 Project Structure

```
Quiz-App/
├── public/              # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── ProgressBar.jsx
│   │   ├── QuestionCard.jsx
│   │   ├── Test.jsx
│   │   └── Timer.jsx
│   ├── context/        # State management
│   │   └── QuizContext.jsx
│   ├── data/           # Quiz questions
│   │   └── questions.json
│   ├── hooks/          # Custom React hooks
│   │   └── useTimer.js
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Quiz.jsx
│   │   ├── Result.jsx
│   │   └── LeaderBoard.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## 🎮 Key Features Explained

### Timer System
Each question comes with a 15-second countdown timer. If you don't answer in time, the question is automatically marked as incorrect and you move to the next one.

### Progress Tracking
A visual progress bar at the top of the quiz page shows how many questions you've completed and how many remain.

### Leaderboard
All quiz results are stored in your browser's local storage. The leaderboard automatically sorts participants by their scores, with the highest scores at the top.

### State Management
The app uses React's Context API with a reducer pattern to manage quiz state, including:
- Username
- Current question index
- Score
- Completion status
- Questions data

## 🎨 Customization

### Adding Your Own Questions

Edit `src/data/questions.json` to add, remove, or modify questions:

```json
{
  "id": 3,
  "question": "Your question here?",
  "options": [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4"
  ],
  "answer": "Correct Answer"
}
```

### Changing Timer Duration

In `src/pages/Quiz.jsx`, modify the timer duration:
```javascript
const { time, reset } = useTimer(15); // Change 15 to your desired seconds
```

### Styling

The app uses Tailwind CSS. You can customize styles by:
- Modifying Tailwind classes in components
- Adding custom CSS in `src/index.css`
- Configuring Tailwind in `tailwind.config.js` (if you create one)

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🐛 Troubleshooting

**Issue**: Dependencies won't install
- **Solution**: Try deleting `node_modules` and `package-lock.json`, then run `npm install` again

**Issue**: Port already in use
- **Solution**: Vite will automatically try the next available port, or you can specify one in `vite.config.js`

**Issue**: Leaderboard not showing
- **Solution**: Make sure you've completed at least one quiz. The leaderboard uses browser local storage, so clearing your browser data will reset it.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available for personal and educational use.

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Bundled with [Vite](https://vitejs.dev/)

---

**Happy Quizzing!** 🎓✨

If you enjoy this project, consider giving it a star ⭐!
