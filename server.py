#!/usr/bin/env python3
"""
Prompt Engineering Training Course Server
A Flask-based server for hosting the interactive training course
"""

from flask import Flask, render_template, send_from_directory, jsonify, request, abort
import os
import json
import base64
import urllib.request
import urllib.error
from datetime import datetime
from functools import wraps

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


# ── Journal ────────────────────────────────────────────────────────────────

JNL_PASSWORD = os.environ.get('JNL_PASSWORD', '')
JNL_GH_TOKEN = os.environ.get('JNL_GH_TOKEN', '')
JNL_GH_REPO  = 'Caddickbrown/jnl-store'
JNL_GH_FILE  = 'entries.json'
GH_API       = 'https://api.github.com'


def _gh_headers():
    return {
        'Authorization': f'Bearer {JNL_GH_TOKEN}',
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'Content-Type': 'application/json',
    }


def _gh_get():
    """Return (entries_list, sha) from GitHub."""
    url = f'{GH_API}/repos/{JNL_GH_REPO}/contents/{JNL_GH_FILE}'
    req = urllib.request.Request(url, headers=_gh_headers())
    try:
        resp = urllib.request.urlopen(req)
        data = json.loads(resp.read())
        content = json.loads(base64.b64decode(data['content']).decode())
        return content, data['sha']
    except Exception:
        return [], None


def _gh_put(entries_list, sha):
    """Write entries list back to GitHub."""
    url = f'{GH_API}/repos/{JNL_GH_REPO}/contents/{JNL_GH_FILE}'
    payload = {
        'message': 'jnl update',
        'content': base64.b64encode(json.dumps(entries_list, ensure_ascii=False).encode()).decode(),
        'sha': sha,
    }
    req = urllib.request.Request(
        url, data=json.dumps(payload).encode(), headers=_gh_headers(), method='PUT'
    )
    urllib.request.urlopen(req)


def require_jnl_password(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        pw = request.headers.get('X-JNL-Password', '')
        if not JNL_PASSWORD or pw != JNL_PASSWORD:
            abort(401)
        return f(*args, **kwargs)
    return decorated


@app.route('/jnl')
def jnl_page():
    return render_template('jnl.html')


@app.route('/api/jnl/entries', methods=['GET', 'POST', 'PUT', 'DELETE'])
@require_jnl_password
def jnl_entries():
    entries_list, sha = _gh_get()

    if request.method == 'GET':
        return jsonify({'entries': entries_list})

    data = request.get_json(force=True)

    if request.method == 'POST':
        entries_list.insert(0, {'id': data['id'], 'ts': data['ts'], 'text': data['text']})
        _gh_put(entries_list, sha)
        return jsonify({'ok': True})

    if request.method == 'PUT':
        for e in entries_list:
            if e['id'] == data['id']:
                e['text'] = data['text']
                if 'ts' in data:
                    e['ts'] = data['ts']
                break
        _gh_put(entries_list, sha)
        return jsonify({'ok': True})

    if request.method == 'DELETE':
        if data.get('all'):
            _gh_put([], sha)
        else:
            entries_list = [e for e in entries_list if e['id'] != data.get('id')]
            _gh_put(entries_list, sha)
        return jsonify({'ok': True})


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
