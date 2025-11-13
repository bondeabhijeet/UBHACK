# UB Monopoly 🎲

> **Own every deadline.** A gamified academic tracking system for University at Buffalo students.

UB Monopoly transforms your course syllabus into an engaging board game experience. Complete assignments, roll dice based on your grades, and progress through a Monopoly-style board featuring iconic UB buildings. Your performance directly impacts your gameplay—higher grades mean better dice rolls and bigger rewards!

![UB Monopoly](https://img.shields.io/badge/MLH-Hackathon-blue) ![React](https://img.shields.io/badge/React-19.2.0-blue) ![Node.js](https://img.shields.io/badge/Node.js-Express-green)

---

## 🎯 Features

### 📚 Smart Syllabus Parsing
- **AI-Powered Extraction**: Upload your syllabus (PDF, DOCX, TXT) and let Google Gemini AI automatically extract:
  - Course name and term
  - All tasks, assignments, quizzes, and exams
  - Due dates and point values
  - Task descriptions

### 🎮 Gamified Task Management
- **Monopoly-Style Board**: Navigate through a board featuring real UB buildings (Capen Hall, Harriman Hall, Ellicott Complex, etc.)
- **Score-Based Dice System**: 
  - Higher grades = better minimum dice rolls
  - 0-49% → min roll 1
  - 50-69% → min roll 2
  - 70-84% → min roll 3
  - 85-94% → min roll 4
  - 95-99% → min roll 5
  - 100% → guaranteed roll 6
- **Reward System**: Collect ⭐ points as you progress through the semester
- **Milestone Celebrations**: Special animations when you hit point milestones (25, 50, 100, 200, etc.)

### 🤖 AI Academic Coach
- **Victor E. Bull Chatbot**: Chat with UB's mascot, Victor E. Bull, powered by Google Gemini
- **Smart Task Prioritization**: Get AI-powered recommendations on which tasks to focus on next
- **Academic-Focused**: Strictly focused on your studies—keeps you on track

### 🐂 3D Mascot Animations
- **Dynamic Victor E. Bull**: Interactive 3D model of UB's mascot in the center of the board
- **Performance-Based Animations**:
  - **Flare Mode** (roll 6): Celebration animation
  - **Samba Mode** (roll 4-5): Energetic dance
  - **Talking Mode** (roll 1-2): Gentle conversation
  - **Standing Mode** (roll 3): Default pose

### 👤 User Authentication
- **Auth0 Integration**: Secure login and profile management
- **Protected Routes**: All game features require authentication

---

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - Modern UI framework
- **React Router DOM** - Client-side routing
- **React Three Fiber** - 3D graphics and animations
- **@react-three/drei** - 3D helpers and utilities
- **Tailwind CSS** - Utility-first styling
- **Auth0 React SDK** - Authentication

### Backend
- **Node.js** - Runtime environment
- **Express 5.1.0** - Web framework
- **MongoDB + Mongoose** - Database and ODM
- **Multer** - File upload handling
- **PDF-parse / PDF.js** - PDF text extraction
- **Mammoth** - DOCX text extraction
- **Google Gemini API** - AI-powered syllabus parsing and chatbot

### Infrastructure
- **MongoDB** - Document database
- **Auth0** - Authentication service
- **Google Gemini** - AI/LLM service

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance)
- **Auth0 Account** (for authentication)
- **Google Gemini API Key** (for AI features)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd UBHACK
```

### 2. Install Dependencies

#### Frontend
```bash
cd client
npm install
```

#### Backend
```bash
cd server
npm install
```

### 3. Environment Configuration

#### Backend Environment Variables

Create a `.env` file in the `server/` directory:

```env
PORT=8000
MONGODB_URI=mongodb://127.0.0.1:27017/ubmonopoly
AUTH0_DOMAIN=your-auth0-domain.us.auth0.com
AUTH0_AUDIENCE=https://your-api-identifier
GEMINI_API_KEY=your-gemini-api-key
```

#### Frontend Environment Variables

Create a `.env` file in the `client/` directory:

```env
REACT_APP_AUTH0_DOMAIN=your-auth0-domain.us.auth0.com
REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id
REACT_APP_LOGIN_REDIRECT_URI=http://localhost:3000
REACT_APP_SERVER_URL=http://localhost:8000
```

> 💡 **Note**: Sample environment files (`.sample.env`) are provided in both directories for reference.

### 4. Set Up MongoDB

Make sure MongoDB is running on your system:

```bash
# If using local MongoDB
mongod

# Or use MongoDB Atlas (cloud) and update MONGODB_URI in .env
```

### 5. Set Up Auth0

1. Create an Auth0 account at [auth0.com](https://auth0.com)
2. Create a new Application (Single Page Application)
3. Configure allowed callback URLs: `http://localhost:3000`
4. Copy your Domain and Client ID to the frontend `.env`
5. Create an API and copy the Identifier to the backend `.env`

### 6. Get Google Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key to `GEMINI_API_KEY` in your backend `.env`

### 7. Run the Application

#### Start the Backend Server

```bash
cd server
npm start
# Server runs on http://localhost:8000
```

#### Start the Frontend Development Server

```bash
cd client
npm start
# App runs on http://localhost:3000
```

The application will automatically open in your browser at `http://localhost:3000`.

---

## 📖 Usage Guide

### 1. **Sign In**
- Click "Log In" to authenticate with Auth0
- Complete the login process

### 2. **Create Your Course**
- Navigate to **Syllabus** from the navigation bar
- **Option A**: Upload your syllabus file (PDF/DOCX)
  - Click "Import from Syllabus"
  - Select your file
  - AI will automatically extract course information
- **Option B**: Manually enter course details
  - Fill in course name and term
  - Add tasks with titles, types, due dates, and points
- Click **"Save Syllabus"** to create your course

### 3. **Play the Game**
- Navigate to **Board** to see your Monopoly-style game board
- View your tasks in the right panel
- **Complete a Task**:
  - Click "Complete" on any remaining task
  - Enter your score percentage (0-100)
  - The system calculates your dice minimum based on your grade
- **Roll the Dice**:
  - After completing a task, click "Roll Die"
  - Watch the dice animation
  - Advance on the board and collect ⭐ rewards
- **Track Progress**:
  - Monitor your position on the board
  - View total rewards collected
  - See completed vs. remaining tasks

### 4. **Chat with Victor E. Bull**
- Click the chat button in the START corner
- Ask questions about your tasks and progress
- Get AI-powered recommendations on what to focus on next

### 5. **View Your Profile**
- Navigate to **Profile** to see your account information
- View authentication details and user claims

---

## 🎲 How the Game Works

### Task Completion Flow

1. **Complete a Task**: Mark a task as done and enter your score
2. **Calculate Dice Minimum**: Based on your percentage score:
   - Higher scores = better minimum rolls
   - This rewards academic excellence
3. **Roll the Dice**: Roll between your minimum and 6
4. **Advance on Board**: Move forward by the number rolled
5. **Collect Rewards**: Earn ⭐ points based on the tile you land on
6. **Victor Animates**: Victor E. Bull reacts based on your roll!

### Board Structure

- **Path Vector**: A circular path of tiles (3× the number of tasks)
- **UB Buildings**: Each tile represents a real UB building
- **Ascending Rewards**: Rewards increase as you progress (1, 2, 3, ...)
- **Visual Feedback**: Your current position is highlighted on the board

### Scoring System

- **Points**: Each task has a point value
- **Percentage**: Your score is calculated as a percentage
- **Dice Minimum**: Determined by your performance tier
- **Total Rewards**: Accumulated ⭐ points from all completed tasks

---

## 🏗️ Project Structure

```
UBHACK/
├── client/                 # React frontend application
│   ├── public/
│   │   ├── models/        # 3D GLB model files for Victor
│   │   └── ...
│   ├── src/
│   │   ├── components/
│   │   │   ├── Board.js           # Main game board component
│   │   │   ├── Chatbot.js         # AI chatbot interface
│   │   │   ├── CenterVictor.js    # 3D mascot component
│   │   │   ├── HomeUB.js          # Landing page
│   │   │   ├── SyllabusFormPage.js # Syllabus creation/upload
│   │   │   ├── Profilepage.js     # User profile
│   │   │   └── ...
│   │   ├── App.js                 # Main app component
│   │   └── index.js              # Entry point
│   ├── package.json
│   └── .env                      # Frontend environment variables
│
├── server/                 # Node.js backend application
│   ├── models/
│   │   └── Task.js         # Mongoose schemas
│   ├── routes/
│   │   └── routes.js       # API routes
│   ├── services/
│   │   └── auth.js         # Auth0 middleware
│   ├── server.js           # Main server file
│   ├── package.json
│   └── .env                # Backend environment variables
│
└── README.md               # This file
```

---

## 🔌 API Endpoints

### Course Management
- `POST /api/course` - Create or update course
- `GET /api/course` - Get current course

### Student Progress
- `POST /api/student` - Initialize student
- `GET /api/student` - Get student progress
- `POST /api/student/reset` - Reset student progress
- `POST /api/student/move` - Move student on board
- `POST /api/student/complete-task` - Complete a task
- `POST /api/student/roll-die` - Roll pending die

### Syllabus Parsing
- `POST /api/syllabus/parse` - Upload and parse syllabus file

### AI Chat
- `POST /api/chat` - Send message to AI chatbot

### Health Check
- `GET /health` - Server health status

---

## 🎨 Design Philosophy

UB Monopoly combines:
- **Gamification**: Making academic work fun and engaging
- **Visual Feedback**: 3D animations and board game aesthetics
- **AI Integration**: Smart parsing and intelligent recommendations
- **University Branding**: Authentic UB colors, buildings, and mascot

---

## 🐛 Troubleshooting

### Common Issues

**"MongoDB connection error"**
- Ensure MongoDB is running
- Check `MONGODB_URI` in backend `.env`

**"Gemini API error"**
- Verify `GEMINI_API_KEY` is set correctly
- Check API quota limits

**"Auth0 login not working"**
- Verify Auth0 credentials in both frontend and backend `.env`
- Check callback URLs in Auth0 dashboard

**"3D models not loading"**
- Ensure model files exist in `client/public/models/`
- Check browser console for loading errors

**"File upload fails"**
- Check file size (max 15MB)
- Ensure file format is supported (PDF, DOCX, TXT)

---

## 🤝 Contributing

This project was developed for an MLH Hackathon. Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **University at Buffalo** - For inspiration and branding
- **MLH (Major League Hacking)** - For the hackathon platform
- **Google Gemini** - For AI capabilities
- **Auth0** - For authentication services
- **React Three Fiber** - For 3D graphics

---

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**Built with ❤️ for UB students by UB students**

*"Complete assignments → roll the dice → earn ⭐"*
