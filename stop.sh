#!/bin/bash
# Stop script for Prompt Engineering Training Course Server

PIDFILE="server.pid"

if [ ! -f "$PIDFILE" ]; then
    echo "❌ PID file not found. Server may not be running."
    exit 1
fi

PID=$(cat "$PIDFILE")

if ! ps -p "$PID" > /dev/null 2>&1; then
    echo "⚠️  Process $PID not found. Cleaning up PID file."
    rm -f "$PIDFILE"
    exit 1
fi

echo "🛑 Stopping server (PID: $PID)..."
kill "$PID"

# Wait for process to stop
sleep 2

if ps -p "$PID" > /dev/null 2>&1; then
    echo "⚠️  Process still running, forcing shutdown..."
    kill -9 "$PID"
    sleep 1
fi

if ps -p "$PID" > /dev/null 2>&1; then
    echo "❌ Failed to stop server."
    exit 1
else
    echo "✅ Server stopped successfully."
    rm -f "$PIDFILE"
fi
