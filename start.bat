@echo off
REM Startup script for Prompt Engineering Training Course (Windows)

echo ==========================================
echo 🎓 Prompt Engineering Training Course
echo ==========================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python is not installed. Please install Python 3 first.
    pause
    exit /b 1
)

echo ✓ Python found

REM Check if virtual environment exists
if not exist "venv" (
    echo 📦 Creating virtual environment...
    python -m venv venv
)

REM Activate virtual environment
echo 🔧 Activating virtual environment...
call venv\Scripts\activate.bat

REM Install/upgrade dependencies
echo 📥 Installing dependencies...
python -m pip install -q --upgrade pip
pip install -q -r requirements.txt

echo.
echo ==========================================
echo ✅ Setup complete!
echo ==========================================
echo.
echo 🚀 Starting server on http://localhost:3728
echo.
echo Press CTRL+C to stop the server
echo.
echo ==========================================
echo.

REM Start the server
python server.py
