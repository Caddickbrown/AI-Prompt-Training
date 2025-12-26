# 🎓 Prompt Engineering & AI Usage Training Course

An interactive, modern, web-based training course for mastering prompt engineering and effective AI communication. Built with Flask, featuring a beautiful dark UI, progress tracking, achievements, and certificate generation.

![Course Preview](https://img.shields.io/badge/Status-Ready-brightgreen) ![Python](https://img.shields.io/badge/Python-3.8+-blue) ![Flask](https://img.shields.io/badge/Flask-3.0-lightgrey)

## ✨ Features

### 📚 Comprehensive Content
- **10 In-Depth Modules** covering beginner to advanced topics
- **Interactive Exercises** with real-time feedback
- **Knowledge Check Quizzes** with 8+ questions
- **Real-World Examples** with copy-paste ready prompts
- **Industry-Specific Applications** for various sectors

### 🎮 Interactive Learning
- **Live Prompt Playground** - Analyze and improve your prompts in real-time
- **Interactive Exercises** - Practice with immediate feedback
- **Quiz System** - Test your knowledge with instant scoring
- **Code Examples** - Copy-to-clipboard functionality

### 🏆 Gamification
- **Achievement System** - Unlock 7 unique achievements
- **Progress Tracking** - Visual progress bar and statistics
- **Time Tracking** - Monitor your learning time
- **Certificate Generation** - Get a completion certificate

### 📊 Analytics
- **Vercel Web Analytics** - Track visitor behavior and page views
- **Real-time Insights** - Monitor course engagement
- **Performance Metrics** - Understand user interaction patterns

### 🎨 Modern UI/UX
- **Dark Theme** with animated gradients
- **Responsive Design** - Works on all devices
- **Smooth Animations** - Professional transitions
- **Accessible** - Keyboard shortcuts and clear navigation

### 💾 Data Persistence
- **Auto-Save Progress** - Never lose your place
- **Local Storage** - Client-side progress tracking
- **Server Sync** - Optional backend progress storage
- **Bookmarks** - Save your favorite modules

## 📋 Course Modules

1. **🎯 Introduction to Prompt Engineering** (10 min)
2. **📝 Basic Prompt Engineering Concepts** (15 min)
3. **🚀 Advanced Techniques** (20 min)
4. **🎮 Interactive Playground** (15 min)
5. **✅ Knowledge Check Quiz** (10 min)
6. **⭐ Best Practices & Pitfalls** (15 min)
7. **💼 Real-World Examples** (20 min)
8. **🎓 Advanced Strategies** (25 min)
9. **🏢 Industry Applications** (20 min)
10. **🎓 Conclusion & Next Steps** (10 min)

**Total Duration:** ~2.5 hours

## 🚀 Quick Start

### Local Development

#### Option 1: Automatic Setup (Recommended)

##### Linux/Mac:
```bash
chmod +x start.sh
./start.sh
```

##### Windows:
```cmd
start.bat
```

The script will:
- ✅ Check for Python
- ✅ Create a virtual environment
- ✅ Install dependencies
- ✅ Start the server on port 3728

### Option 2: Manual Setup

1. **Clone or download this repository**

2. **Create a virtual environment:**
```bash
python3 -m venv venv
```

3. **Activate the virtual environment:**

Linux/Mac:
```bash
source venv/bin/activate
```

Windows:
```cmd
venv\Scripts\activate
```

4. **Install dependencies:**
```bash
pip install -r requirements.txt
```

5. **Run the server:**
```bash
python server.py
```

6. **Open your browser:**
```
http://localhost:3728
```

## 🎯 Usage

### Navigation
- **Sidebar Menu** - Click any module to jump to it
- **Previous/Next Buttons** - Navigate sequentially
- **Keyboard Shortcuts:**
  - `Alt + ←` - Previous module
  - `Alt + →` - Next module

### Features
- **Copy Code** - Click the copy button on any code block
- **Interactive Exercises** - Type your answers and get feedback
- **Quiz** - Select answers to check your understanding
- **Playground** - Analyze your prompts for quality
- **Achievements** - Click the trophy icon to view unlocked achievements
- **Certificate** - Complete all modules to generate your certificate
- **Bookmarks** - Save modules for later review
- **Reset Progress** - Start fresh anytime

### Progress Tracking
Your progress is automatically saved:
- ✅ Completed modules
- 🏆 Unlocked achievements
- ⏱️ Time spent learning
- 📊 Quiz scores
- 🔖 Bookmarked modules

## 📊 Vercel Web Analytics

This project includes Vercel Web Analytics for tracking course engagement and user behavior.

### Setup

1. **Create a Vercel Account** - Sign up at [vercel.com](https://vercel.com)
2. **Import Your Project** - Add this repository to Vercel
3. **Enable Analytics** - In your Vercel project dashboard:
   - Go to the **Analytics** tab
   - Click **Enable**
4. **Deploy** - Push your code to deploy on Vercel
5. **View Data** - Check your analytics dashboard after a few hours of traffic

> **Note:** Analytics requires the app to be deployed on Vercel. The tracking script is automatically included and will activate when deployed.

## 🛠️ Technical Stack

- **Backend:** Flask 3.0 (Python)
- **Frontend:** Vanilla JavaScript (ES6+)
- **Styling:** Custom CSS with CSS Variables
- **Fonts:** Inter, JetBrains Mono
- **Storage:** LocalStorage + Optional Server Sync
- **Analytics:** Vercel Web Analytics

## 📁 Project Structure

```
AITraining/
├── server.py                 # Flask server
├── requirements.txt          # Python dependencies
├── start.sh                  # Linux/Mac startup script
├── start.bat                 # Windows startup script
├── README.md                 # This file
├── templates/
│   └── index.html           # Main HTML template
└── static/
    ├── css/
    │   └── styles.css       # All styles
    ├── js/
    │   ├── course-data.js   # Course content
    │   └── script.js        # Application logic
    └── images/              # (Future assets)
```

## 🎨 Customization

### Adding New Modules
Edit `static/js/course-data.js` and add to the `modules` array:

```javascript
{
    id: 'your-module-id',
    title: '🎯 Your Module Title',
    duration: '15 min',
    level: 'beginner', // or 'intermediate', 'advanced'
    content: `
        <h2>Your Content Here</h2>
        <p>Module content in HTML...</p>
    `
}
```

### Changing Colors
Edit CSS variables in `static/css/styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... more colors ... */
}
```

### Changing Port
Edit `server.py` and change the port number:

```python
app.run(host='0.0.0.0', port=3728, debug=True)
```

## 🚀 Deployment to Vercel

### Deploy with Git

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Add Vercel Web Analytics"
   git push origin main
   ```

2. **Sign up/Login to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign up or log in with your GitHub account

3. **Import your project:**
   - Click "Add New" → "Project"
   - Select your repository from GitHub
   - Click "Import"

4. **Configure the project:**
   - Framework: Select "Other" (since it's Flask)
   - Root Directory: Leave as default
   - Build Command: Leave empty
   - Output Directory: Leave empty

5. **Deploy:**
   - Click "Deploy"
   - Wait for deployment to complete

6. **Enable Analytics:**
   - Go to your project's Analytics tab
   - Click "Enable"
   - Your app will start collecting data on the next deployment

### Using Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

## 🏆 Achievements

Unlock achievements as you progress:

- 🎯 **First Steps** - Complete your first module
- ⭐ **Halfway There** - Complete 50% of the course
- 🧠 **Quiz Master** - Complete the quiz
- 💪 **Practitioner** - Complete all exercises
- 🎓 **Graduate** - Complete all modules
- ⚡ **Speed Learner** - Complete a module in under 5 minutes
- 🔥 **Dedicated Learner** - Spend over 2 hours learning

## 📜 Certificate

Upon completing all modules, you can:
- Generate a personalized certificate
- Download it (feature coming soon)
- Share your achievement

## 🔒 Privacy & Data

- All progress is stored locally in your browser
- Optional server sync (can be disabled)
- No personal data is collected
- No tracking or analytics

## 🐛 Troubleshooting

### Port Already in Use
If port 3728 is already in use, edit `server.py` and change the port:
```python
app.run(host='0.0.0.0', port=8080, debug=True)  # Use any available port
```

### Module Not Loading
- Clear your browser cache
- Check browser console for errors
- Ensure JavaScript is enabled

### Progress Not Saving
- Check browser localStorage is enabled
- Ensure cookies are not blocked
- Try a different browser

## 🤝 Contributing

This is a training course project. Feel free to:
- Add new modules
- Improve existing content
- Fix bugs
- Enhance UI/UX
- Add new features

## 📄 License

This project is provided as-is for educational purposes.

## 🙏 Acknowledgments

Built with modern web technologies and best practices in prompt engineering.

---

## 🚀 Ready to Start?

Run the startup script and begin your prompt engineering journey!

```bash
./start.sh  # Linux/Mac
# or
start.bat   # Windows
```

Then visit: **http://localhost:3728**

**Happy Learning! 🎓✨**
