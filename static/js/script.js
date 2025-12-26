// Main Application JavaScript with Advanced Features

// Application state
let currentModuleIndex = 0;
let completedModules = new Set();
let quizAnswers = {};
let achievements = [];
let startTime = Date.now();
let timeSpent = 0;
let userId = 'user_' + Math.random().toString(36).substr(2, 9);

// Achievement definitions
const achievementDefinitions = [
    { id: 'first_step', icon: '🎯', title: 'First Steps', description: 'Complete your first module', condition: () => completedModules.size >= 1 },
    { id: 'halfway', icon: '⭐', title: 'Halfway There', description: 'Complete 50% of the course', condition: () => completedModules.size >= Math.floor(courseData.modules.length / 2) },
    { id: 'quiz_master', icon: '🧠', title: 'Quiz Master', description: 'Complete the quiz', condition: () => completedModules.has('quiz') },
    { id: 'practitioner', icon: '💪', title: 'Practitioner', description: 'Complete all exercises', condition: () => completedModules.has('playground') },
    { id: 'graduate', icon: '🎓', title: 'Graduate', description: 'Complete all modules', condition: () => completedModules.size === courseData.modules.length },
    { id: 'speed_learner', icon: '⚡', title: 'Speed Learner', description: 'Complete a module in under 5 minutes', condition: () => false }, // Tracked separately
    { id: 'dedicated', icon: '🔥', title: 'Dedicated Learner', description: 'Spend over 2 hours learning', condition: () => timeSpent > 7200000 }
];

// Initialize the application
function init() {
    loadProgress();
    renderNavigation();
    renderModule(currentModuleIndex);
    updateProgress();
    setupEventListeners();
    startTimeTracking();
    updateAchievementPreview();
}

// Time tracking
function startTimeTracking() {
    setInterval(() => {
        timeSpent = Date.now() - startTime;
        updateTimeDisplay();
        checkAchievements();
    }, 60000); // Update every minute
}

function updateTimeDisplay() {
    const minutes = Math.floor(timeSpent / 60000);
    const hours = Math.floor(minutes / 60);
    const displayMinutes = minutes % 60;
    
    const timeDisplay = hours > 0 ? `${hours}h ${displayMinutes}m` : `${minutes}m`;
    document.getElementById('timeSpent').textContent = timeDisplay;
}

// Save and load progress
function saveProgress() {
    const progress = {
        currentModuleIndex,
        completedModules: Array.from(completedModules),
        achievements,
        timeSpent,
        lastUpdated: new Date().toISOString()
    };
    localStorage.setItem('courseProgress', JSON.stringify(progress));
    
    // Also send to server if available
    fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId, ...progress })
    }).catch(() => {}); // Fail silently if server unavailable
}

function loadProgress() {
    const saved = localStorage.getItem('courseProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        currentModuleIndex = progress.currentModuleIndex || 0;
        completedModules = new Set(progress.completedModules || []);
        achievements = progress.achievements || [];
        timeSpent = progress.timeSpent || 0;
        startTime = Date.now() - timeSpent;
    }
}

// Render navigation sidebar
function renderNavigation() {
    const moduleList = document.getElementById('moduleList');
    moduleList.innerHTML = courseData.modules.map((module, index) => {
        const isCompleted = completedModules.has(module.id);
        const isActive = index === currentModuleIndex;
        return `
            <li>
                <a href="#" 
                   class="${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}"
                   onclick="navigateToModule(${index}); return false;">
                   <span class="module-number">${index + 1}</span>
                   <span class="module-title">${module.title}</span>
                </a>
            </li>
        `;
    }).join('');
}

// Render current module
function renderModule(index) {
    const module = courseData.modules[index];
    const moduleElement = document.getElementById('courseModule');
    
    // Add module metadata
    const metadata = `
        <div class="module-metadata">
            <span class="badge badge-${module.level}">${module.level}</span>
            <span class="module-duration">⏱️ ${module.duration}</span>
        </div>
    `;
    
    moduleElement.innerHTML = metadata + module.content;
    
    // Re-attach event listeners for interactive elements
    attachEventListeners();
    
    // Update navigation
    renderNavigation();
    
    // Update buttons
    updateButtons();
    
    // Don't auto-complete - require user interaction
    // Modules should be marked complete through actual engagement (quiz, exercises, etc.)
}

// Navigate to a specific module
function navigateToModule(index) {
    if (index >= 0 && index < courseData.modules.length) {
        currentModuleIndex = index;
        renderModule(currentModuleIndex);
        updateProgress();
        saveProgress();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Update progress bar and stats
function updateProgress() {
    const total = courseData.modules.length;
    const completed = completedModules.size;
    const progress = (completed / total) * 100;
    
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = `${Math.round(progress)}%`;
    document.getElementById('completedCount').textContent = completed;
    document.getElementById('totalCount').textContent = total;
    
    // Certificate button is only shown in the conclusion module, not in header
}

// Update navigation buttons
function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.disabled = currentModuleIndex === 0;
    
    if (currentModuleIndex === courseData.modules.length - 1) {
        nextBtn.innerHTML = 'Finish <span class="btn-icon-right">✓</span>';
    } else {
        nextBtn.innerHTML = 'Next <span class="btn-icon-right">→</span>';
    }
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentModuleIndex > 0) {
            navigateToModule(currentModuleIndex - 1);
        }
    });
    
    document.getElementById('nextBtn').addEventListener('click', () => {
        const currentModule = courseData.modules[currentModuleIndex];
        
        // Special handling for quiz module - must answer all questions
        if (currentModule && currentModule.id === 'quiz') {
            const totalQuestions = document.querySelectorAll('.quiz-question').length;
            const answeredQuestions = Object.keys(quizAnswers).length;
            
            if (answeredQuestions < totalQuestions) {
                showToast(`Please answer all ${totalQuestions} questions before continuing!`, 'info');
                return; // Don't proceed
            }
        }
        
        // Mark current module as complete when moving to next (if not quiz, or quiz is fully answered)
        if (currentModule) {
            markModuleComplete(currentModule.id);
        }
        
        if (currentModuleIndex < courseData.modules.length - 1) {
            navigateToModule(currentModuleIndex + 1);
        } else {
            showToast('🎉 Congratulations! You\'ve completed the course!', 'success');
            checkAchievements();
        }
    });
    
    document.getElementById('achievementsBtn').addEventListener('click', showAchievements);
    // Certificate button removed from header - only shown in conclusion module
    document.getElementById('resetBtn').addEventListener('click', resetProgress);
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('.theme-icon');
        const savedTheme = localStorage.getItem('theme') || 'dark';
        // Set on html element (documentElement) - CSS variables are defined on :root
        document.documentElement.setAttribute('data-theme', savedTheme);
        // Also set on body for any body-specific selectors
        document.body.setAttribute('data-theme', savedTheme);
        themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme') || document.documentElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            // Set on html element (documentElement) - CSS variables are defined on :root
            document.documentElement.setAttribute('data-theme', newTheme);
            // Also set on body for any body-specific selectors
            document.body.setAttribute('data-theme', newTheme);
            
            // Force a reflow to ensure CSS variables are recalculated
            void document.body.offsetHeight;
            
            localStorage.setItem('theme', newTheme);
            themeIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
            
            showToast(`Switched to ${newTheme} theme`, 'info');
        });
    }
    
    // Sidebar collapse functionality (desktop)
    const collapseBtn = document.getElementById('collapseBtn');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    if (collapseBtn && sidebar && mainContent) {
        collapseBtn.addEventListener('click', () => {
            const isCollapsing = !sidebar.classList.contains('collapsed');
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('sidebar-collapsed', isCollapsing);
            collapseBtn.querySelector('span').textContent = sidebar.classList.contains('collapsed') ? '▶' : '◀';
        });
    }
    
    // Mobile menu functionality with swipe gestures
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    if (mobileMenuBtn && sidebar && sidebarOverlay) {
        // Check if we're on mobile
        const isMobile = () => window.innerWidth <= 968;
        
        // Touch/swipe tracking
        let touchStartX = 0;
        let touchStartY = 0;
        let touchEndX = 0;
        let touchEndY = 0;
        let isSwiping = false;
        
        // Toggle mobile menu
        const toggleMobileMenu = (open = null) => {
            if (isMobile()) {
                const shouldOpen = open !== null ? open : !sidebar.classList.contains('mobile-open');
                sidebar.classList.toggle('mobile-open', shouldOpen);
                sidebarOverlay.classList.toggle('active', shouldOpen);
                mobileMenuBtn.classList.toggle('active', shouldOpen);
                // Prevent body scroll when menu is open
                if (shouldOpen) {
                    document.body.style.overflow = 'hidden';
                    // Add class for animation
                    document.body.classList.add('menu-open');
                } else {
                    document.body.style.overflow = '';
                    document.body.classList.remove('menu-open');
                }
            }
        };
        
        mobileMenuBtn.addEventListener('click', () => toggleMobileMenu());
        
        // Close menu when clicking overlay
        sidebarOverlay.addEventListener('click', () => {
            if (sidebar.classList.contains('mobile-open')) {
                toggleMobileMenu(false);
            }
        });
        
        // Swipe gestures for sidebar
        const handleTouchStart = (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            isSwiping = false;
        };
        
        const handleTouchMove = (e) => {
            if (!isMobile()) return;
            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            const deltaX = currentX - touchStartX;
            const deltaY = currentY - touchStartY;
            
            // Detect horizontal swipe
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
                isSwiping = true;
                e.preventDefault();
                
                // Swipe right from left edge to open menu
                if (deltaX > 0 && touchStartX < 50 && !sidebar.classList.contains('mobile-open')) {
                    const progress = Math.min(deltaX / 320, 1);
                    sidebar.style.transform = `translateX(${-320 + (deltaX * progress)}px)`;
                    sidebarOverlay.style.opacity = (progress * 0.7).toString();
                }
                // Swipe left to close menu
                else if (deltaX < 0 && sidebar.classList.contains('mobile-open')) {
                    const progress = Math.min(Math.abs(deltaX) / 320, 1);
                    sidebar.style.transform = `translateX(${-deltaX * progress}px)`;
                    sidebarOverlay.style.opacity = (0.7 * (1 - progress)).toString();
                }
            }
        };
        
        const handleTouchEnd = (e) => {
            if (!isSwiping || !isMobile()) return;
            
            const deltaX = touchEndX - touchStartX;
            const threshold = 100; // Minimum swipe distance
            
            // Reset transform
            sidebar.style.transform = '';
            sidebarOverlay.style.opacity = '';
            
            // Swipe right to open
            if (deltaX > threshold && touchStartX < 50) {
                toggleMobileMenu(true);
            }
            // Swipe left to close
            else if (deltaX < -threshold && sidebar.classList.contains('mobile-open')) {
                toggleMobileMenu(false);
            }
            
            isSwiping = false;
        };
        
        // Track touch end position
        document.addEventListener('touchstart', handleTouchStart, { passive: true });
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].clientX;
            touchEndY = e.changedTouches[0].clientY;
            handleTouchEnd(e);
        }, { passive: true });
        
        // Close menu when clicking a module link on mobile
        document.addEventListener('click', (e) => {
            if (isMobile() && e.target.closest('.module-list a')) {
                setTimeout(() => {
                    if (sidebar.classList.contains('mobile-open')) {
                        toggleMobileMenu(false);
                    }
                }, 300);
            }
        });
        
        // Close menu on window resize if switching to desktop
        window.addEventListener('resize', () => {
            if (!isMobile() && sidebar.classList.contains('mobile-open')) {
                toggleMobileMenu(false);
            }
        });
        
        // Close menu on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sidebar.classList.contains('mobile-open')) {
                toggleMobileMenu(false);
            }
        });
    }
    
    // Certificate modal button (in conclusion module)
    // This will be attached when the conclusion module is rendered
}

// Mark module as complete
function markModuleComplete(moduleId) {
    if (!completedModules.has(moduleId)) {
        completedModules.add(moduleId);
        updateProgress();
        renderNavigation();
        saveProgress();
        checkAchievements();
    }
}

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Randomize quiz answer order
function randomizeQuizAnswers() {
    document.querySelectorAll('.quiz-question').forEach(question => {
        const optionsList = question.querySelector('.quiz-options');
        if (optionsList) {
            const options = Array.from(optionsList.querySelectorAll('.quiz-option'));
            const shuffled = shuffleArray(options);
            
            // Clear and re-append in shuffled order
            optionsList.innerHTML = '';
            shuffled.forEach(option => {
                optionsList.appendChild(option);
            });
        }
    });
}

// Attach event listeners for interactive elements
function attachEventListeners() {
    // Copy buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            copyCode(this);
        });
    });
    
    // Randomize quiz answers if we're on the quiz module
    const currentModule = courseData.modules[currentModuleIndex];
    if (currentModule && currentModule.id === 'quiz') {
        randomizeQuizAnswers();
    }
    
    // Quiz options
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', function() {
            selectOption(this);
        });
    });
    
    // Certificate button in conclusion module
    const certBtn = document.getElementById('getCertificateBtn');
    if (certBtn) {
        // Remove any existing listeners by cloning
        const newCertBtn = certBtn.cloneNode(true);
        certBtn.parentNode.replaceChild(newCertBtn, certBtn);
        newCertBtn.addEventListener('click', showCertificate);
    }
}

// Copy code to clipboard
function copyCode(button) {
    const codeBlock = button.parentElement;
    const code = codeBlock.querySelector('pre').textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.textContent;
        button.textContent = '✓ Copied!';
        button.style.background = 'var(--success-color)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = 'var(--primary-color)';
        }, 2000);
        
        showToast('Code copied to clipboard!', 'success');
    });
}

// Quiz functionality
function selectOption(element) {
    const question = element.closest('.quiz-question');
    const questionId = element.dataset.question;
    
    // Check if this question has already been answered
    if (question.classList.contains('answered')) {
        return; // Don't allow changing answers
    }
    
    const options = question.querySelectorAll('.quiz-option');
    const feedback = question.querySelector('.quiz-feedback');
    
    // Mark question as answered
    question.classList.add('answered');
    
    // Disable all options for this question
    options.forEach(opt => {
        opt.style.pointerEvents = 'none';
        opt.style.cursor = 'default';
    });
    
    // Mark selected
    element.classList.add('selected');
    
    // Check answer
    const isCorrect = element.dataset.correct === 'true';
    
    if (isCorrect) {
        element.classList.add('correct');
        feedback.textContent = '✓ Correct! Well done.';
        feedback.className = 'quiz-feedback show correct';
        quizAnswers[questionId] = true;
    } else {
        element.classList.add('incorrect');
        feedback.textContent = '✗ Not quite. Try again!';
        feedback.className = 'quiz-feedback show incorrect';
        quizAnswers[questionId] = false;
        
        // Show correct answer
        options.forEach(opt => {
            if (opt.dataset.correct === 'true') {
                opt.classList.add('correct');
            }
        });
    }
    
    // Check if quiz is complete
    updateQuizScore();
}

function updateQuizScore() {
    const totalQuestions = document.querySelectorAll('.quiz-question').length;
    const answeredQuestions = Object.keys(quizAnswers).length;
    
    if (answeredQuestions === totalQuestions) {
        const correctAnswers = Object.values(quizAnswers).filter(a => a).length;
        const scoreElement = document.getElementById('quizScore');
        const scoreValue = document.getElementById('scoreValue');
        const scoreMessage = document.getElementById('scoreMessage');
        
        if (scoreElement && scoreValue && scoreMessage) {
            scoreValue.textContent = correctAnswers;
            
            const percentage = (correctAnswers / totalQuestions) * 100;
            if (percentage === 100) {
                scoreMessage.textContent = '🎉 Perfect score! You\'re a prompt engineering expert!';
            } else if (percentage >= 80) {
                scoreMessage.textContent = '🌟 Great job! You have a strong understanding.';
            } else if (percentage >= 60) {
                scoreMessage.textContent = '👍 Good work! Review the modules for areas to improve.';
            } else {
                scoreMessage.textContent = '📚 Keep learning! Review the course materials.';
            }
            
            scoreElement.style.display = 'block';
            
            // Quiz module is marked complete when user clicks Next after answering all questions
            // (handled in the Next button click handler)
        }
    }
}

function resetQuiz() {
    quizAnswers = {};
    document.querySelectorAll('.quiz-question').forEach(question => {
        question.classList.remove('answered');
        const options = question.querySelectorAll('.quiz-option');
        options.forEach(opt => {
            opt.classList.remove('selected', 'correct', 'incorrect');
            opt.style.pointerEvents = '';
            opt.style.cursor = '';
        });
    });
    document.querySelectorAll('.quiz-feedback').forEach(fb => {
        fb.className = 'quiz-feedback';
    });
    const scoreElement = document.getElementById('quizScore');
    if (scoreElement) {
        scoreElement.style.display = 'none';
    }
}

// Exercise checking
function checkExercise(exerciseNum) {
    const input = document.getElementById(`exercise${exerciseNum}`);
    const feedback = document.getElementById(`feedback${exerciseNum}`);
    const answer = input.value.trim();
    
    if (!answer) {
        feedback.textContent = '⚠️ Please write your answer first!';
        feedback.style.display = 'block';
        feedback.style.background = 'rgba(245, 158, 11, 0.2)';
        feedback.style.color = 'var(--warning-color)';
        feedback.style.border = '1px solid var(--warning-color)';
        return;
    }
    
    let feedbackText = '';
    let isGood = false;
    
    switch(exerciseNum) {
        case 1:
            // Check for specificity improvements
            const hasSpecificity = answer.length > 50 && 
                                 (answer.toLowerCase().includes('write') || answer.toLowerCase().includes('create') || answer.toLowerCase().includes('explain')) &&
                                 (answer.match(/\d+/) || answer.toLowerCase().includes('words') || answer.toLowerCase().includes('length'));
            if (hasSpecificity) {
                feedbackText = '✓ Excellent improvement! Your prompt is much more specific and actionable. Keep practicing!';
                isGood = true;
            } else {
                feedbackText = '💡 Try adding: specific topic, target audience, length, format requirements, and tone.';
            }
            break;
            
        case 2:
            // Check for role assignment
            const hasRole = answer.toLowerCase().includes('you are') || 
                          answer.toLowerCase().includes('act as') ||
                          answer.toLowerCase().includes('as a') ||
                          answer.toLowerCase().includes('as an');
            if (hasRole && answer.length > 80) {
                feedbackText = '✓ Perfect! You\'ve assigned a clear role and provided context. This will help the AI provide expert responses.';
                isGood = true;
            } else {
                feedbackText = '💡 Try starting with "You are a [role]" or "Act as a [role]" and include expertise details.';
            }
            break;
            
        case 3:
            // Check for format specification
            const hasFormat = answer.toLowerCase().includes('json') ||
                           answer.toLowerCase().includes('table') ||
                           answer.toLowerCase().includes('list') ||
                           answer.toLowerCase().includes('format') ||
                           answer.toLowerCase().includes('structure') ||
                           answer.toLowerCase().includes('markdown');
            if (hasFormat) {
                feedbackText = '✓ Great work! You\'ve specified the output format clearly. This ensures consistent, usable results.';
                isGood = true;
            } else {
                feedbackText = '💡 Try mentioning the desired format explicitly: "in JSON format", "as a table", "in a bulleted list", etc.';
            }
            break;
            
        case 4:
            // Check for chain of thought
            const hasCoT = (answer.toLowerCase().includes('step') && answer.toLowerCase().includes('step')) ||
                         answer.toLowerCase().includes('reasoning') ||
                         answer.toLowerCase().includes('think through') ||
                         (answer.match(/\d+\./g) && answer.match(/\d+\./g).length >= 3);
            if (hasCoT) {
                feedbackText = '✓ Excellent! Your prompt encourages step-by-step reasoning, which improves accuracy on complex problems.';
                isGood = true;
            } else {
                feedbackText = '💡 Try adding phrases like "step by step", "show your reasoning", or numbered steps to guide the AI.';
            }
            break;
    }
    
    feedback.textContent = feedbackText;
    feedback.style.display = 'block';
    feedback.style.background = isGood ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)';
    feedback.style.color = isGood ? 'var(--success-color)' : 'var(--warning-color)';
    feedback.style.border = `1px solid ${isGood ? 'var(--success-color)' : 'var(--warning-color)'}`;
    
    if (isGood) {
        // Mark playground module as complete when an exercise is completed successfully
        if (exerciseNum === 1 || exerciseNum === 2 || exerciseNum === 3 || exerciseNum === 4) {
            markModuleComplete('playground');
        }
        
        setTimeout(() => {
            feedback.style.display = 'none';
        }, 5000);
    }
}

// Playground functionality
function analyzePrompt() {
    const input = document.getElementById('playgroundInput');
    const output = document.getElementById('playgroundOutput');
    const prompt = input.value.trim();
    
    if (!prompt) {
        output.textContent = '⚠️ Please enter a prompt to analyze.';
        return;
    }
    
    // Analyze the prompt
    const analysis = {
        length: prompt.length,
        hasRole: /you are|act as|as a/i.test(prompt),
        hasFormat: /json|table|list|format|structure/i.test(prompt),
        hasConstraints: /must|should|exactly|between|at least/i.test(prompt),
        hasExamples: /example|for instance|such as/i.test(prompt),
        hasSteps: /step|first|then|finally|\d+\./g.test(prompt),
        specificity: prompt.split(' ').length
    };
    
    let score = 0;
    let feedback = '📊 Prompt Analysis:\n\n';
    
    // Length check
    if (analysis.length > 100) {
        feedback += '✓ Good length - detailed prompt\n';
        score += 15;
    } else if (analysis.length > 50) {
        feedback += '⚠️ Moderate length - could be more detailed\n';
        score += 10;
    } else {
        feedback += '❌ Too short - add more details\n';
        score += 5;
    }
    
    // Role assignment
    if (analysis.hasRole) {
        feedback += '✓ Includes role assignment\n';
        score += 20;
    } else {
        feedback += '💡 Consider adding a role (e.g., "You are an expert...")\n';
    }
    
    // Format specification
    if (analysis.hasFormat) {
        feedback += '✓ Specifies output format\n';
        score += 20;
    } else {
        feedback += '💡 Specify desired output format\n';
    }
    
    // Constraints
    if (analysis.hasConstraints) {
        feedback += '✓ Includes constraints\n';
        score += 15;
    } else {
        feedback += '💡 Add constraints for better control\n';
    }
    
    // Examples
    if (analysis.hasExamples) {
        feedback += '✓ Provides examples (few-shot learning)\n';
        score += 15;
    } else {
        feedback += '💡 Consider adding examples\n';
    }
    
    // Steps
    if (analysis.hasSteps) {
        feedback += '✓ Includes step-by-step structure\n';
        score += 15;
    } else {
        feedback += '💡 Break complex tasks into steps\n';
    }
    
    feedback += `\n📈 Overall Score: ${score}/100\n\n`;
    
    if (score >= 80) {
        feedback += '🌟 Excellent prompt! Well-structured and comprehensive.';
    } else if (score >= 60) {
        feedback += '👍 Good prompt! A few improvements would make it even better.';
    } else if (score >= 40) {
        feedback += '📚 Decent start! Review the course modules for improvement tips.';
    } else {
        feedback += '💪 Keep practicing! Focus on clarity, specificity, and structure.';
    }
    
    output.textContent = feedback;
}

function clearPlayground() {
    document.getElementById('playgroundInput').value = '';
    document.getElementById('playgroundOutput').textContent = 'Your prompt analysis will appear here...';
}

// Achievements system
function checkAchievements() {
    achievementDefinitions.forEach(achievement => {
        if (!achievements.includes(achievement.id) && achievement.condition()) {
            unlockAchievement(achievement);
        }
    });
}

function unlockAchievement(achievement) {
    achievements.push(achievement.id);
    saveProgress();
    updateAchievementPreview();
    
    // Show notification
    showToast(`🏆 Achievement Unlocked: ${achievement.title}!`, 'success');
}

function updateAchievementPreview() {
    const preview = document.getElementById('achievementPreview');
    if (!preview) return;
    
    const unlockedAchievements = achievementDefinitions.filter(a => achievements.includes(a.id));
    
    if (unlockedAchievements.length === 0) {
        preview.innerHTML = '<p style="color: var(--text-tertiary); font-size: 0.9rem;">Complete modules to unlock achievements!</p>';
    } else {
        preview.innerHTML = unlockedAchievements.slice(0, 4).map(a => 
            `<span class="achievement-badge" title="${a.title}: ${a.description}" data-achievement-id="${a.id}">${a.icon}</span>`
        ).join('');
        
        // Add tooltip functionality
        preview.querySelectorAll('.achievement-badge').forEach(badge => {
            const achievementId = badge.dataset.achievementId;
            const achievement = achievementDefinitions.find(a => a.id === achievementId);
            if (achievement) {
                badge.setAttribute('title', `${achievement.title}: ${achievement.description}`);
            }
        });
    }
}

function showAchievements() {
    const modal = document.getElementById('achievementModal');
    const list = document.getElementById('achievementsList');
    
    list.innerHTML = achievementDefinitions.map(achievement => {
        const unlocked = achievements.includes(achievement.id);
        return `
            <div class="achievement-card ${unlocked ? 'unlocked' : 'locked'}">
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-title">${achievement.title}</div>
                <div class="achievement-description">${achievement.description}</div>
                ${unlocked ? '<div style="color: var(--success-color); font-weight: 600; margin-top: 0.5rem;">✓ Unlocked</div>' : '<div style="color: var(--text-tertiary); font-size: 0.9rem; margin-top: 0.5rem;">🔒 Locked</div>'}
            </div>
        `;
    }).join('');
    
    modal.classList.add('show');
}

// Certificate generation
function showCertificate() {
    // Check if course is complete
    const total = courseData.modules.length;
    const completed = completedModules.size;
    
    if (completed < total) {
        showToast(`Complete all ${total} modules to earn your certificate! (${completed}/${total} complete)`, 'info');
        return;
    }
    
    const modal = document.getElementById('certificateModal');
    const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const certId = 'PE-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substr(2, 6).toUpperCase();
    
    document.getElementById('certificateDate').textContent = date;
    document.getElementById('certificateId').textContent = certId;
    
    // Load saved name if available
    const savedName = localStorage.getItem('certificateName');
    if (savedName) {
        document.getElementById('certificateName').textContent = savedName;
        document.getElementById('nameInput').value = savedName;
    }
    
    modal.classList.add('show');
}

function updateCertificate() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim() || 'Your Name';
    document.getElementById('certificateName').textContent = name;
    
    // Save name for future use
    localStorage.setItem('certificateName', name);
    
    showToast('Certificate updated!', 'success');
}

async function downloadCertificate() {
    const certificateElement = document.getElementById('certificate');
    if (!certificateElement) {
        showToast('Certificate not found', 'error');
        return;
    }
    
    // Check if html2canvas is available
    if (typeof html2canvas === 'undefined') {
        showToast('Certificate download feature is loading. Please wait a moment and try again.', 'info');
        return;
    }
    
    try {
        showToast('Generating certificate...', 'info');
        
        // Get the name for the filename
        const name = document.getElementById('certificateName').textContent || 'Certificate';
        const sanitizedName = name.replace(/[^a-z0-9]/gi, '_').substring(0, 30);
        
        // Use html2canvas to capture the certificate
        const canvas = await html2canvas(certificateElement, {
            backgroundColor: '#ffffff',
            scale: 2, // Higher quality
            logging: false,
            useCORS: true,
            width: certificateElement.offsetWidth,
            height: certificateElement.offsetHeight,
            windowWidth: certificateElement.offsetWidth,
            windowHeight: certificateElement.offsetHeight
        });
        
        // Convert canvas to blob and download
        canvas.toBlob((blob) => {
            if (!blob) {
                showToast('Failed to generate certificate', 'error');
                return;
            }
            
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `Prompt_Engineering_Certificate_${sanitizedName}_${Date.now()}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            showToast('Certificate downloaded successfully! 🎉', 'success');
        }, 'image/png', 1.0);
    } catch (error) {
        console.error('Error generating certificate:', error);
        showToast('Error generating certificate. Please try again.', 'error');
    }
}

// Modal functions
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
}

// Click outside modal to close
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('show');
    }
});

// Reset progress
function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        localStorage.clear();
        completedModules.clear();
        achievements = [];
        quizAnswers = {};
        currentModuleIndex = 0;
        timeSpent = 0;
        startTime = Date.now();
        
        renderNavigation();
        renderModule(0);
        updateProgress();
        updateAchievementPreview();
        
        showToast('Progress reset successfully', 'info');
    }
}

// Toast notifications
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.className = `toast show ${type}`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Alt + Left Arrow: Previous module
    if (e.altKey && e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentModuleIndex > 0) {
            navigateToModule(currentModuleIndex - 1);
        }
    }
    
    // Alt + Right Arrow: Next module
    if (e.altKey && e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentModuleIndex < courseData.modules.length - 1) {
            navigateToModule(currentModuleIndex + 1);
        }
    }
});

// Mobile-specific optimizations
if (window.innerWidth <= 968) {
    // Improve scroll performance on mobile
    let ticking = false;
    const optimizeScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                // Smooth scroll handling
                ticking = false;
            });
            ticking = true;
        }
    };
    
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(optimizeScroll, 10);
    }, { passive: true });
    
    // Prevent double-tap zoom on buttons
    let lastTap = 0;
    document.addEventListener('touchend', (e) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        if (tapLength < 300 && tapLength > 0) {
            e.preventDefault();
        }
        lastTap = currentTime;
    }, false);
    
    // Improve code block interaction
    document.querySelectorAll('.code-block').forEach(block => {
        let isScrolling = false;
        block.addEventListener('touchstart', () => {
            isScrolling = false;
        }, { passive: true });
        
        block.addEventListener('touchmove', () => {
            isScrolling = true;
        }, { passive: true });
        
        block.addEventListener('touchend', (e) => {
            if (!isScrolling) {
                // User tapped, not scrolled - could trigger copy or highlight
                const copyBtn = block.querySelector('.copy-btn');
                if (copyBtn && e.target !== copyBtn) {
                    // Visual feedback for tap
                    block.style.opacity = '0.9';
                    setTimeout(() => {
                        block.style.opacity = '';
                    }, 150);
                }
            }
        }, { passive: true });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);

// Auto-save progress periodically
setInterval(saveProgress, 30000); // Save every 30 seconds
