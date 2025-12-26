#!/bin/bash
# Startup script for Prompt Engineering Training Course

echo "=========================================="
echo "🎓 Prompt Engineering Training Course"
echo "=========================================="
echo ""

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3 first."
    exit 1
fi

echo "✓ Python 3 found"

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "🔧 Activating virtual environment..."
source venv/bin/activate

# Install/upgrade dependencies
echo "📥 Installing dependencies..."
pip install -q --upgrade pip
pip install -q -r requirements.txt

echo ""
echo "=========================================="
echo "✅ Setup complete!"
echo "=========================================="
echo ""

# Check if server is already running
PIDFILE="server.pid"
if [ -f "$PIDFILE" ]; then
    OLD_PID=$(cat "$PIDFILE")
    if ps -p "$OLD_PID" > /dev/null 2>&1; then
        echo "⚠️  Server is already running (PID: $OLD_PID)"
        echo "   To stop it, run: kill $OLD_PID"
        echo "   Or use: ./stop.sh (if available)"
        exit 1
    else
        echo "🧹 Cleaning up stale PID file..."
        rm -f "$PIDFILE"
    fi
fi

echo "🚀 Starting server in background on http://localhost:3728"
echo ""

# Start the server in background
nohup python3 server.py > server.log 2>&1 &
SERVER_PID=$!

# Save PID to file
echo $SERVER_PID > "$PIDFILE"

# Wait a moment to check if server started successfully
sleep 2

if ps -p "$SERVER_PID" > /dev/null 2>&1; then
    echo "✅ Server started successfully!"
    echo "   PID: $SERVER_PID"
    echo "   Logs: server.log"
    echo "   URL: http://localhost:3728"
    echo ""
    echo "To stop the server, run:"
    echo "   kill $SERVER_PID"
    echo "   or: kill \$(cat server.pid)"
    echo ""
    echo "To view logs:"
    echo "   tail -f server.log"
    echo ""
    echo "=========================================="
else
    echo "❌ Server failed to start. Check server.log for details."
    rm -f "$PIDFILE"
    exit 1
fi
