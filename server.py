#!/usr/bin/env python3
"""
Prompt Engineering Training Course Server
A Flask-based server for hosting the interactive training course
"""

from flask import Flask, render_template, send_from_directory, jsonify, request
import os
import json
from datetime import datetime

app = Flask(__name__, 
            static_folder='static',
            template_folder='templates')

# Store user progress (in production, use a database)
user_progress = {}

@app.route('/')
def index():
    """Serve the main course page"""
    return render_template('index.html')

@app.route('/api/progress', methods=['GET', 'POST'])
def progress():
    """Handle progress tracking"""
    if request.method == 'POST':
        data = request.json
        user_id = data.get('user_id', 'default')
        user_progress[user_id] = {
            'completed_modules': data.get('completed_modules', []),
            'quiz_scores': data.get('quiz_scores', {}),
            'last_updated': datetime.now().isoformat()
        }
        return jsonify({'status': 'success', 'progress': user_progress[user_id]})
    else:
        user_id = request.args.get('user_id', 'default')
        return jsonify(user_progress.get(user_id, {}))

@app.route('/api/certificate', methods=['POST'])
def generate_certificate():
    """Generate course completion certificate data"""
    data = request.json
    name = data.get('name', 'Student')
    completion_date = datetime.now().strftime('%B %d, %Y')
    
    certificate_data = {
        'name': name,
        'course': 'Prompt Engineering & AI Usage',
        'completion_date': completion_date,
        'certificate_id': f'PE-{datetime.now().strftime("%Y%m%d%H%M%S")}'
    }
    
    return jsonify(certificate_data)

@app.route('/health')
def health():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'timestamp': datetime.now().isoformat()})

if __name__ == '__main__':
    # Create necessary directories
    os.makedirs('templates', exist_ok=True)
    os.makedirs('static/css', exist_ok=True)
    os.makedirs('static/js', exist_ok=True)
    os.makedirs('static/images', exist_ok=True)
    
    # Check if running in background (when stdout is redirected)
    import sys
    is_background = not sys.stdout.isatty()
    debug_mode = not is_background  # Only enable debug in foreground mode
    
    print("=" * 60)
    print("🎓 Prompt Engineering Training Course Server")
    print("=" * 60)
    print(f"🚀 Starting server on http://localhost:3728")
    print(f"📚 Course ready at http://localhost:3728")
    print(f"💚 Health check at http://localhost:3728/health")
    if is_background:
        print(f"📝 Running in background mode")
        print(f"📋 Logs are being written to server.log")
    print("=" * 60)
    if not is_background:
        print("\nPress CTRL+C to stop the server\n")
    
    app.run(host='0.0.0.0', port=3728, debug=debug_mode, use_reloader=False)
