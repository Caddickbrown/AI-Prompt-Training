// Expanded Course Data with 10 comprehensive modules
const courseData = {
    modules: [
        {
            id: 'intro',
            title: '🎯 Introduction to Prompt Engineering',
            duration: '10 min',
            level: 'beginner',
            content: `
                <h2>Welcome to Prompt Engineering! 🎓</h2>
                <p>Prompt engineering is the art and science of crafting effective instructions for AI models to achieve desired outputs. It's a crucial skill in the age of AI, enabling you to unlock the full potential of language models like GPT-4, Claude, and others.</p>
                
                <div class="info-box">
                    <h4>📚 What is Prompt Engineering?</h4>
                    <p>Prompt engineering involves designing, refining, and optimizing text inputs (prompts) to elicit specific, high-quality responses from AI models. It's the bridge between human intent and AI capability.</p>
                </div>

                <h3>What You'll Learn in This Course</h3>
                <ul>
                    <li><strong>Fundamental Concepts:</strong> Core principles of effective prompting</li>
                    <li><strong>Advanced Techniques:</strong> Few-shot learning, chain-of-thought, and more</li>
                    <li><strong>Practical Applications:</strong> Real-world use cases across industries</li>
                    <li><strong>Best Practices:</strong> Proven patterns and common pitfalls to avoid</li>
                    <li><strong>Hands-on Practice:</strong> Interactive exercises and quizzes</li>
                </ul>

                <div class="tip-box">
                    <h4>💡 Pro Tip</h4>
                    <p>Great prompt engineering is like being a good communicator - clarity, context, and specificity are key! Think of the AI as a highly capable assistant who needs clear instructions.</p>
                </div>

                <h3>Why Prompt Engineering Matters</h3>
                <p>In today's AI-driven world, knowing how to communicate effectively with AI systems is becoming as important as traditional programming. With well-crafted prompts, you can:</p>
                <ul>
                    <li>✅ Get more accurate and relevant responses</li>
                    <li>⚡ Reduce the need for multiple iterations</li>
                    <li>🎨 Control the tone, style, and format of outputs</li>
                    <li>🚀 Solve complex problems more efficiently</li>
                    <li>💡 Unlock creative and analytical capabilities</li>
                    <li>💰 Save time and increase productivity</li>
                </ul>

                <h3>Course Structure</h3>
                <p>This course is organized into 10 comprehensive modules, progressing from basics to advanced techniques. Each module includes:</p>
                <ul>
                    <li>Clear explanations with examples</li>
                    <li>Interactive exercises</li>
                    <li>Real-world applications</li>
                    <li>Best practices and tips</li>
                </ul>

                <div class="example-box">
                    <h4>🎯 Learning Outcomes</h4>
                    <p>By the end of this course, you'll be able to:</p>
                    <ul>
                        <li>Write clear, effective prompts for any task</li>
                        <li>Apply advanced techniques like few-shot learning</li>
                        <li>Optimize prompts for different AI models</li>
                        <li>Troubleshoot and refine underperforming prompts</li>
                        <li>Build a personal library of reusable prompt templates</li>
                    </ul>
                </div>
            `
        },
        {
            id: 'basics',
            title: '📝 Basic Prompt Engineering Concepts',
            duration: '15 min',
            level: 'beginner',
            content: `
                <h2>Basic Prompt Engineering Concepts</h2>
                <p>Let's start with the fundamental building blocks of effective prompt engineering.</p>
                
                <h3>1. Clarity and Specificity</h3>
                <p>The most important principle: be clear and specific about what you want. Vague prompts lead to vague responses.</p>
                
                <div class="example-box">
                    <h4>❌ Vague Prompt</h4>
                    <div class="code-block">
                        <button class="copy-btn">Copy</button>
                        <pre>Write about AI</pre>
                    </div>
                    <p><strong>Problem:</strong> Too broad, no direction, unclear audience or purpose.</p>
                </div>

                <div class="example-box">
                    <h4>✅ Specific Prompt</h4>
                    <div class="code-block">
                        <button class="copy-btn">Copy</button>
                        <pre>Write a 500-word article explaining how large language models work, 
targeted at beginners with no technical background, with three main 
sections: architecture, training process, and applications. Use 
simple analogies and avoid jargon.</pre>
                    </div>
                    <p><strong>Why it works:</strong> Clear length, audience, structure, and style requirements.</p>
                </div>

                <h3>2. Role Assignment</h3>
                <p>Assign a role or persona to the AI to get better context-specific responses. This primes the model to respond from a particular perspective or expertise level.</p>
                
                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>You are an expert Python developer with 10 years of experience 
in web development and database optimization. 

Explain how to optimize database queries in Django, focusing on:
- Query optimization techniques
- Indexing strategies
- Common performance pitfalls
- Best practices for large datasets</pre>
                </div>

                <div class="tip-box">
                    <h4>💡 Role Assignment Tips</h4>
                    <ul>
                        <li>Be specific about expertise level and domain</li>
                        <li>Include relevant context (years of experience, specialization)</li>
                        <li>Match the role to your task requirements</li>
                        <li>Consider the audience perspective (teacher, consultant, peer, etc.)</li>
                    </ul>
                </div>

                <h3>3. Step-by-Step Instructions</h3>
                <p>Break complex tasks into clear, numbered steps. This helps the AI understand the sequence and structure you want.</p>
                
                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>Analyze this code for security vulnerabilities. Follow these steps:

1. Check for SQL injection risks
2. Identify authentication weaknesses
3. Review input validation
4. Examine error handling
5. Provide specific recommendations for each issue found

Format your response with clear headings for each step.</pre>
                </div>

                <h3>4. Output Format Specification</h3>
                <p>Explicitly specify the desired format to ensure consistent, usable outputs.</p>
                
                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>Create a project plan in JSON format with the following structure:
{
  "project_name": "string",
  "description": "string",
  "tasks": [
    {
      "id": "number",
      "name": "string",
      "duration": "string",
      "dependencies": ["array of task ids"]
    }
  ],
  "timeline": "string",
  "resources": ["array of strings"]
}</pre>
                </div>

                <h3>5. Context Provision</h3>
                <p>Provide relevant background information to help the AI understand your specific situation.</p>

                <div class="example-box">
                    <h4>Example with Context</h4>
                    <div class="code-block">
                        <button class="copy-btn">Copy</button>
                        <pre>Context: I'm building a mobile app for a fitness startup. 
Our target users are busy professionals aged 25-40 who want 
quick, effective workouts. We have limited budget and a 
3-month timeline.

Task: Suggest 5 key features to include in our MVP, 
prioritized by impact and feasibility.</pre>
                    </div>
                </div>

                <div class="warning-box">
                    <h4>⚠️ Common Mistakes to Avoid</h4>
                    <ul>
                        <li>Being too vague or general</li>
                        <li>Assuming the AI knows your context</li>
                        <li>Not specifying output format</li>
                        <li>Mixing multiple unrelated requests</li>
                        <li>Forgetting to mention constraints or requirements</li>
                    </ul>
                </div>
            `
        },
        {
            id: 'techniques',
            title: '🚀 Advanced Techniques',
            duration: '20 min',
            level: 'intermediate',
            content: `
                <h2>Advanced Prompt Engineering Techniques</h2>
                <p>Now let's explore powerful advanced techniques that can dramatically improve your results.</p>
                
                <h3>1. Few-Shot Learning</h3>
                <p>Provide examples to guide the AI's output format and style. This is one of the most powerful techniques.</p>
                
                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>Convert these sentences to formal business language:

Example 1:
Input: "Hey, can you send me that file?"
Output: "Could you please forward the document at your earliest convenience?"

Example 2:
Input: "That's a great idea!"
Output: "That proposal demonstrates excellent strategic thinking."

Example 3:
Input: "We need to fix this ASAP"
Output: "This issue requires immediate attention and resolution."

Now convert these:
1. "Let's meet up tomorrow"
2. "Can you check this out?"
3. "This is taking forever"</pre>
                </div>

                <div class="tip-box">
                    <h4>💡 Few-Shot Best Practices</h4>
                    <ul>
                        <li>Use 2-5 examples (more isn't always better)</li>
                        <li>Make examples diverse and representative</li>
                        <li>Keep examples consistent in format</li>
                        <li>Include edge cases if relevant</li>
                    </ul>
                </div>

                <h3>2. Chain of Thought (CoT)</h3>
                <p>Encourage the AI to show its reasoning process step-by-step. This improves accuracy on complex problems.</p>
                
                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>Solve this problem step by step, showing your reasoning:

Problem: A store sells apples for $2 each and oranges for $3 each. 
If you buy 5 apples and 3 oranges, and you have a 10% discount 
coupon, how much do you spend?

Think through this step by step:
1. Calculate cost of apples
2. Calculate cost of oranges  
3. Add them together for subtotal
4. Apply the discount
5. State the final amount

Show all calculations.</pre>
                </div>

                <h3>3. Zero-Shot Chain of Thought</h3>
                <p>Simply adding "Let's think step by step" can dramatically improve reasoning.</p>

                <div class="example-box">
                    <h4>Example</h4>
                    <div class="code-block">
                        <button class="copy-btn">Copy</button>
                        <pre>Question: If a train travels 120 miles in 2 hours, then stops 
for 30 minutes, then travels another 90 miles in 1.5 hours, 
what is its average speed for the entire journey?

Let's think step by step:</pre>
                    </div>
                </div>

                <h3>4. Constraint Setting</h3>
                <p>Set clear boundaries and constraints to control output precisely.</p>
                
                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>Write a product description that meets ALL these constraints:
- Exactly 150 words (not 149, not 151)
- Uses active voice only
- Includes exactly 3 benefits
- Avoids superlatives (best, greatest, amazing, etc.)
- Targets professionals aged 30-50
- Mentions the price point naturally
- Ends with a clear call-to-action
- Uses a professional but friendly tone</pre>
                </div>

                <h3>5. Iterative Refinement</h3>
                <p>Build on previous responses for complex, multi-stage tasks.</p>
                
                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>Task: Write an article about renewable energy.

Step 1: First, create an outline with 5 main sections.

Step 2: For each section, write 3-4 key points.

Step 3: Expand section 1 into 2 paragraphs.

Step 4: Add an introduction that hooks the reader.

Step 5: Write a conclusion with actionable takeaways.</pre>
                </div>

                <h3>6. Perspective Taking</h3>
                <p>Ask the AI to consider multiple viewpoints or approaches.</p>

                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>Analyze this business decision from three perspectives:

1. Financial Perspective: Cost-benefit analysis
2. Customer Perspective: Impact on user experience
3. Technical Perspective: Implementation feasibility

For each perspective, provide:
- Key considerations
- Potential risks
- Recommendations</pre>
                </div>

                <h3>7. Template-Based Prompting</h3>
                <p>Create reusable templates for common tasks.</p>

                <div class="example-box">
                    <h4>Email Response Template</h4>
                    <div class="code-block">
                        <button class="copy-btn">Copy</button>
                        <pre>Generate an email response with this template:

Context: [Describe the situation]
Recipient: [Who you're writing to]
Tone: [Professional/Casual/Formal]
Key Points to Address:
1. [Point 1]
2. [Point 2]
3. [Point 3]
Call to Action: [What you want them to do]
Length: [Short/Medium/Long]</pre>
                    </div>
                </div>

                <div class="warning-box">
                    <h4>⚠️ Advanced Technique Pitfalls</h4>
                    <ul>
                        <li>Overcomplicating simple tasks</li>
                        <li>Using too many techniques at once</li>
                        <li>Not testing different approaches</li>
                        <li>Forgetting to validate outputs</li>
                    </ul>
                </div>
            `
        },
        {
            id: 'playground',
            title: '🎮 Interactive Playground',
            duration: '15 min',
            level: 'intermediate',
            content: `
                <h2>Interactive Prompt Playground</h2>
                <p>Practice your prompt engineering skills with these interactive exercises!</p>

                <div class="code-playground">
                    <div class="playground-header">
                        <span class="playground-title">Prompt Testing Ground</span>
                        <div class="playground-actions">
                            <button class="btn btn-secondary btn-sm" onclick="clearPlayground()">Clear</button>
                            <button class="btn btn-primary btn-sm" onclick="analyzePrompt()">Analyze Prompt</button>
                        </div>
                    </div>
                    <div class="playground-content">
                        <div class="playground-input">
                            <label class="playground-label">Your Prompt</label>
                            <textarea class="playground-textarea" id="playgroundInput" placeholder="Write your prompt here..."></textarea>
                        </div>
                        <div class="playground-output">
                            <label class="playground-label">Analysis & Suggestions</label>
                            <div class="playground-result" id="playgroundOutput">Your prompt analysis will appear here...</div>
                        </div>
                    </div>
                </div>

                <h3>Exercise 1: Improve This Prompt</h3>
                <div class="exercise-box">
                    <h4>🎯 Task: Rewrite for Maximum Clarity</h4>
                    <p>Original prompt:</p>
                    <div class="code-block">
                        <pre>Write something about marketing</pre>
                    </div>
                    <p>Rewrite this prompt to be specific, clear, and effective. Consider:</p>
                    <ul>
                        <li>What type of marketing content?</li>
                        <li>Who is the target audience?</li>
                        <li>What is the desired length?</li>
                        <li>What tone should it have?</li>
                        <li>What specific aspects should be covered?</li>
                    </ul>
                    <textarea class="interactive-input" id="exercise1" placeholder="Write your improved prompt here..."></textarea>
                    <button class="btn btn-primary" onclick="checkExercise(1)">Check Answer</button>
                    <div id="feedback1" class="exercise-feedback"></div>
                </div>

                <h3>Exercise 2: Role-Based Prompt</h3>
                <div class="exercise-box">
                    <h4>🎭 Task: Create a Role-Based Prompt</h4>
                    <p>Create a prompt that asks an AI to act as a specific expert and solve a problem. Include:</p>
                    <ul>
                        <li>Clear role definition</li>
                        <li>Expertise level and domain</li>
                        <li>Specific task or problem</li>
                        <li>Expected output format</li>
                    </ul>
                    <textarea class="interactive-input" id="exercise2" placeholder="Write your role-based prompt here..."></textarea>
                    <button class="btn btn-primary" onclick="checkExercise(2)">Get Feedback</button>
                    <div id="feedback2" class="exercise-feedback"></div>
                </div>

                <h3>Exercise 3: Few-Shot Learning</h3>
                <div class="exercise-box">
                    <h4>📚 Task: Create a Few-Shot Prompt</h4>
                    <p>Write a prompt using few-shot learning to teach the AI a specific pattern or style. Provide 2-3 examples.</p>
                    <textarea class="interactive-input" id="exercise3" placeholder="Write your few-shot prompt here..."></textarea>
                    <button class="btn btn-primary" onclick="checkExercise(3)">Get Feedback</button>
                    <div id="feedback3" class="exercise-feedback"></div>
                </div>

                <h3>Exercise 4: Chain of Thought</h3>
                <div class="exercise-box">
                    <h4>🔗 Task: Design a CoT Prompt</h4>
                    <p>Create a prompt that encourages step-by-step reasoning for a complex problem.</p>
                    <textarea class="interactive-input" id="exercise4" placeholder="Write your chain-of-thought prompt here..."></textarea>
                    <button class="btn btn-primary" onclick="checkExercise(4)">Get Feedback</button>
                    <div id="feedback4" class="exercise-feedback"></div>
                </div>
            `
        },
        {
            id: 'quiz',
            title: '✅ Knowledge Check Quiz',
            duration: '10 min',
            level: 'all',
            content: `
                <h2>Test Your Knowledge</h2>
                <p>Answer these questions to see how well you understand prompt engineering!</p>
                
                <div class="quiz-container">
                    <div class="quiz-question">
                        <h4>Question 1: What is the most important principle in prompt engineering?</h4>
                        <ul class="quiz-options">
                            <li class="quiz-option" data-correct="true" data-question="q1">Clarity and specificity</li>
                            <li class="quiz-option" data-correct="false" data-question="q1">Using as many words as possible</li>
                            <li class="quiz-option" data-correct="false" data-question="q1">Always using technical jargon</li>
                            <li class="quiz-option" data-correct="false" data-question="q1">Making prompts as short as possible</li>
                        </ul>
                        <div class="quiz-feedback" id="feedback-q1"></div>
                    </div>

                    <div class="quiz-question">
                        <h4>Question 2: What is few-shot learning in prompt engineering?</h4>
                        <ul class="quiz-options">
                            <li class="quiz-option" data-correct="false" data-question="q2">Using very few words</li>
                            <li class="quiz-option" data-correct="true" data-question="q2">Providing examples to guide the AI's output</li>
                            <li class="quiz-option" data-correct="false" data-question="q2">Asking the AI to learn quickly</li>
                            <li class="quiz-option" data-correct="false" data-question="q2">Using prompts only once</li>
                        </ul>
                        <div class="quiz-feedback" id="feedback-q2"></div>
                    </div>

                    <div class="quiz-question">
                        <h4>Question 3: Why is role assignment useful in prompts?</h4>
                        <ul class="quiz-options">
                            <li class="quiz-option" data-correct="false" data-question="q3">It makes prompts longer</li>
                            <li class="quiz-option" data-correct="true" data-question="q3">It provides context for better, domain-specific responses</li>
                            <li class="quiz-option" data-correct="false" data-question="q3">It's required for all prompts</li>
                            <li class="quiz-option" data-correct="false" data-question="q3">It makes the AI work faster</li>
                        </ul>
                        <div class="quiz-feedback" id="feedback-q3"></div>
                    </div>

                    <div class="quiz-question">
                        <h4>Question 4: What should you specify in a prompt to control output format?</h4>
                        <ul class="quiz-options">
                            <li class="quiz-option" data-correct="false" data-question="q4">Only the topic</li>
                            <li class="quiz-option" data-correct="true" data-question="q4">Format, length, tone, and constraints</li>
                            <li class="quiz-option" data-correct="false" data-question="q4">Just the length</li>
                            <li class="quiz-option" data-correct="false" data-question="q4">Nothing - let the AI decide</li>
                        </ul>
                        <div class="quiz-feedback" id="feedback-q4"></div>
                    </div>

                    <div class="quiz-question">
                        <h4>Question 5: What is "Chain of Thought" prompting?</h4>
                        <ul class="quiz-options">
                            <li class="quiz-option" data-correct="false" data-question="q5">Linking multiple prompts together</li>
                            <li class="quiz-option" data-correct="true" data-question="q5">Encouraging step-by-step reasoning</li>
                            <li class="quiz-option" data-correct="false" data-question="q5">Using a chain of AI models</li>
                            <li class="quiz-option" data-correct="false" data-question="q5">Connecting thoughts in a narrative</li>
                        </ul>
                        <div class="quiz-feedback" id="feedback-q5"></div>
                    </div>

                    <div class="quiz-question">
                        <h4>Question 6: When should you provide context in a prompt?</h4>
                        <ul class="quiz-options">
                            <li class="quiz-option" data-correct="false" data-question="q6">Never, it's unnecessary</li>
                            <li class="quiz-option" data-correct="false" data-question="q6">Only for technical tasks</li>
                            <li class="quiz-option" data-correct="true" data-question="q6">Whenever it helps the AI understand your specific situation</li>
                            <li class="quiz-option" data-correct="false" data-question="q6">Only at the end of the prompt</li>
                        </ul>
                        <div class="quiz-feedback" id="feedback-q6"></div>
                    </div>

                    <div class="quiz-question">
                        <h4>Question 7: What's a common mistake in prompt engineering?</h4>
                        <ul class="quiz-options">
                            <li class="quiz-option" data-correct="false" data-question="q7">Being too specific</li>
                            <li class="quiz-option" data-correct="true" data-question="q7">Being too vague or general</li>
                            <li class="quiz-option" data-correct="false" data-question="q7">Providing examples</li>
                            <li class="quiz-option" data-correct="false" data-question="q7">Specifying output format</li>
                        </ul>
                        <div class="quiz-feedback" id="feedback-q7"></div>
                    </div>

                    <div class="quiz-question">
                        <h4>Question 8: What is iterative refinement?</h4>
                        <ul class="quiz-options">
                            <li class="quiz-option" data-correct="true" data-question="q8">Building on previous responses for complex tasks</li>
                            <li class="quiz-option" data-correct="false" data-question="q8">Repeating the same prompt multiple times</li>
                            <li class="quiz-option" data-correct="false" data-question="q8">Refining the AI model itself</li>
                            <li class="quiz-option" data-correct="false" data-question="q8">Using refined language in prompts</li>
                        </ul>
                        <div class="quiz-feedback" id="feedback-q8"></div>
                    </div>
                </div>

                <div class="quiz-score" id="quizScore" style="display: none;">
                    <h3>Your Score: <span id="scoreValue">0</span>/8</h3>
                    <p id="scoreMessage"></p>
                    <button class="btn btn-primary" onclick="resetQuiz()">Retake Quiz</button>
                </div>
            `
        },
        {
            id: 'best-practices',
            title: '⭐ Best Practices & Pitfalls',
            duration: '15 min',
            level: 'intermediate',
            content: `
                <h2>Best Practices & Common Pitfalls</h2>
                <p>Learn what works, what doesn't, and why.</p>
                
                <h3>✅ Best Practices</h3>
                
                <div class="tip-box">
                    <h4>1. Start with Clear Objectives</h4>
                    <p>Know exactly what you want before writing your prompt. Define the goal, audience, and success criteria upfront.</p>
                    <p><strong>Example:</strong> Instead of "write about AI", think "I need a 500-word LinkedIn post about AI in healthcare for medical professionals, focusing on practical applications."</p>
                </div>

                <div class="tip-box">
                    <h4>2. Use Structured Prompts</h4>
                    <p>Organize prompts with clear sections: context, task, constraints, and output format.</p>
                    <div class="code-block">
                        <button class="copy-btn">Copy</button>
                        <pre>CONTEXT: [Background information]
TASK: [What you want done]
CONSTRAINTS: [Limitations and requirements]
OUTPUT FORMAT: [How you want the response structured]</pre>
                    </div>
                </div>

                <div class="tip-box">
                    <h4>3. Iterate and Refine</h4>
                    <p>Don't expect perfection on the first try. Refine prompts based on outputs, building on what works.</p>
                    <ul>
                        <li>Start simple, add complexity gradually</li>
                        <li>Test variations to find what works best</li>
                        <li>Keep a library of successful prompts</li>
                        <li>Learn from failures and adjust</li>
                    </ul>
                </div>

                <div class="tip-box">
                    <h4>4. Provide Sufficient Context</h4>
                    <p>Give relevant background information. The more context, the better the AI can understand your needs.</p>
                    <p><strong>Include:</strong> Industry, audience, purpose, constraints, preferences, and any relevant background.</p>
                </div>

                <div class="tip-box">
                    <h4>5. Test Different Approaches</h4>
                    <p>Experiment with various techniques (few-shot, chain-of-thought, role assignment) to find what works best for your specific use case.</p>
                </div>

                <div class="tip-box">
                    <h4>6. Be Explicit About Format</h4>
                    <p>Always specify the exact format you want: JSON, markdown, bullet points, tables, etc.</p>
                </div>

                <div class="tip-box">
                    <h4>7. Use Examples Wisely</h4>
                    <p>Provide 2-5 high-quality examples that represent the pattern you want. More isn't always better.</p>
                </div>

                <h3>❌ Common Pitfalls to Avoid</h3>
                
                <div class="warning-box">
                    <h4>1. Being Too Vague</h4>
                    <p><strong>Bad:</strong> "Write something about technology"</p>
                    <p><strong>Good:</strong> "Write a 300-word blog post about the impact of AI on healthcare, targeting medical professionals, with three specific examples of current applications."</p>
                </div>

                <div class="warning-box">
                    <h4>2. Overloading with Constraints</h4>
                    <p>Too many constraints at once can confuse the AI. Start simple and add complexity gradually.</p>
                    <p><strong>Instead of:</strong> 15 requirements at once</p>
                    <p><strong>Try:</strong> 3-5 key requirements, then refine</p>
                </div>

                <div class="warning-box">
                    <h4>3. Ignoring Context</h4>
                    <p>Failing to provide relevant context leads to generic responses. Always include necessary background.</p>
                </div>

                <div class="warning-box">
                    <h4>4. Not Specifying Format</h4>
                    <p>If you need a specific format (JSON, table, list), always specify it explicitly. Don't assume the AI will guess correctly.</p>
                </div>

                <div class="warning-box">
                    <h4>5. Forgetting to Iterate</h4>
                    <p>Don't accept the first output if it's not quite right. Refine your prompt and try again. Each iteration teaches you more.</p>
                </div>

                <div class="warning-box">
                    <h4>6. Mixing Multiple Tasks</h4>
                    <p>Trying to accomplish too many different things in one prompt often leads to poor results. Break complex requests into separate prompts.</p>
                </div>

                <div class="warning-box">
                    <h4>7. Assuming AI Knowledge</h4>
                    <p>Don't assume the AI knows your specific context, company details, or recent events. Provide all necessary information.</p>
                </div>

                <h3>Real-World Application Tips</h3>
                <div class="example-box">
                    <h4>📊 By Use Case</h4>
                    <ul>
                        <li><strong>Content Creation:</strong> Specify tone, length, audience, key points, and SEO keywords</li>
                        <li><strong>Code Generation:</strong> Include language, framework, style guide, error handling requirements</li>
                        <li><strong>Data Analysis:</strong> Provide data context, analysis type, output format, and key questions</li>
                        <li><strong>Problem Solving:</strong> Break into steps, show reasoning requirements, define success criteria</li>
                        <li><strong>Creative Writing:</strong> Set genre, style, character details, plot constraints, and tone</li>
                        <li><strong>Business Writing:</strong> Specify audience, purpose, tone, length, and key messages</li>
                        <li><strong>Research:</strong> Define scope, sources, depth, format, and citation requirements</li>
                    </ul>
                </div>

                <h3>The Prompt Engineering Checklist</h3>
                <div class="info-box">
                    <h4>✓ Before Submitting Your Prompt, Check:</h4>
                    <ul>
                        <li>☐ Is the objective clear and specific?</li>
                        <li>☐ Have I provided necessary context?</li>
                        <li>☐ Is the output format specified?</li>
                        <li>☐ Are constraints and requirements clear?</li>
                        <li>☐ Have I assigned a role if beneficial?</li>
                        <li>☐ Are examples provided if needed?</li>
                        <li>☐ Is the tone/style specified?</li>
                        <li>☐ Have I broken down complex tasks?</li>
                        <li>☐ Is the length/scope appropriate?</li>
                        <li>☐ Can I iterate if needed?</li>
                    </ul>
                </div>
            `
        },
        {
            id: 'examples',
            title: '💼 Real-World Examples',
            duration: '20 min',
            level: 'intermediate',
            content: `
                <h2>Real-World Prompt Examples</h2>
                <p>Here are practical, production-ready examples you can adapt for your own use cases.</p>
                
                <h3>Example 1: Content Writing</h3>
                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>You are a professional content writer specializing in technology. 
Write a blog post with the following requirements:

Topic: The future of remote work technology
Target Audience: HR professionals and team managers
Length: 800-1000 words
Tone: Professional but approachable
Structure:
  - Engaging introduction with a hook
  - 3 main sections with subheadings
  - Real-world examples in each section
  - Actionable conclusion with next steps

Include specific statistics and trends from 2024.
Use active voice and avoid jargon.
Include 2-3 relevant quotes or expert opinions.</pre>
                </div>

                <h3>Example 2: Code Review</h3>
                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>You are a senior software engineer reviewing Python code. 
Analyze the following code snippet:

[PASTE CODE HERE]

Provide feedback in this format:

1. **Security Issues**: List any vulnerabilities with severity ratings
2. **Performance**: Identify optimization opportunities with impact estimates
3. **Best Practices**: Note any style or convention issues
4. **Maintainability**: Assess code readability and structure
5. **Suggestions**: Provide specific improvement recommendations with code examples

Be constructive and prioritize issues by importance.
For each issue, explain WHY it's a problem and HOW to fix it.</pre>
                </div>

                <h3>Example 3: Data Analysis</h3>
                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>You are a data analyst with expertise in e-commerce analytics. 
Analyze the following dataset and provide insights:

Dataset: [DESCRIBE YOUR DATA]
Context: E-commerce sales data for Q4 2024
Business Goal: Increase conversion rate and average order value

Please provide:

1. **Summary Statistics**
   - Mean, median, mode for key metrics
   - Standard deviation and outliers
   - Trends over time

2. **Pattern Analysis**
   - Identify significant patterns
   - Seasonal trends
   - Customer behavior insights

3. **Key Insights** (3-5 insights)
   - Business implications for each
   - Supporting data
   - Confidence level

4. **Visualization Recommendations**
   - Describe what charts would be useful
   - What story each visualization tells

5. **Actionable Recommendations**
   - Prioritized by potential impact
   - Include expected outcomes
   - Implementation difficulty

Format the response as a structured report with clear sections.</pre>
                </div>

                <h3>Example 4: Problem Solving</h3>
                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>Solve this problem using structured problem-solving methodology:

Problem: [DESCRIBE YOUR PROBLEM]

Follow this approach:

1. **Problem Definition**
   - Restate the problem clearly
   - Identify key constraints
   - Define success criteria

2. **Analysis**
   - Break down into components
   - Identify root causes
   - List assumptions

3. **Solution Exploration**
   - Generate 3-5 possible solutions
   - For each solution, list:
     * Pros and cons
     * Resource requirements
     * Implementation timeline
     * Risk factors

4. **Evaluation**
   - Compare solutions against criteria
   - Rank by feasibility and impact
   - Identify best option

5. **Implementation Plan**
   - Step-by-step action items
   - Timeline and milestones
   - Success metrics
   - Risk mitigation strategies

Show your reasoning at each stage.</pre>
                </div>

                <h3>Example 5: Creative Writing</h3>
                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>Write a short story (1000-1500 words) with these specifications:

Genre: Science fiction
Setting: Near-future Earth, 2050
Main Character: A climate scientist working on geoengineering
Conflict: Ethical dilemma about deploying a new technology
Theme: Responsibility and consequences of scientific advancement

Requirements:
- Show, don't tell (use descriptive scenes)
- Include dialogue that reveals character
- Build tension through the middle act
- End with an open-ended conclusion that makes readers think
- Use vivid sensory details
- Include at least one plot twist
- Maintain consistent POV (third person limited)

Style preferences:
- Literary fiction quality
- Accessible to general readers
- Avoid info-dumping
- Natural dialogue</pre>
                </div>

                <h3>Example 6: Email Writing</h3>
                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>Compose a professional email with these parameters:

Context: Following up on a job interview from last week
Recipient: Hiring manager (Sarah Chen)
Your role: Software engineer candidate
Tone: Professional, enthusiastic, but not desperate

Email should include:
1. Thank you for the interview
2. Reiterate interest in the position
3. Mention a specific topic discussed that excited you
4. Add value (share a relevant article or insight)
5. Polite inquiry about next steps
6. Professional closing

Length: 150-200 words
Subject line: Include a compelling subject line
Avoid: Clichés, excessive flattery, or sounding generic</pre>
                </div>

                <h3>Example 7: Social Media Content</h3>
                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>Create a social media content series:

Platform: LinkedIn
Brand: B2B SaaS company selling project management software
Target Audience: Project managers and team leads at mid-size companies
Goal: Increase engagement and drive demo signups

Create 5 posts with this structure for each:

1. **Hook** (first line that stops scrolling)
2. **Value** (educational or entertaining content)
3. **Story/Example** (relatable scenario)
4. **Call-to-Action** (clear next step)

Requirements:
- Each post: 100-150 words
- Include relevant hashtags (3-5 per post)
- Vary content types: tips, case study, myth-busting, behind-the-scenes, question
- Professional but conversational tone
- Include emoji strategically (not excessively)
- Each post should work standalone

Provide posting schedule recommendation.</pre>
                </div>

                <h3>Example 8: Technical Documentation</h3>
                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>Create technical documentation for an API endpoint:

Endpoint: POST /api/v1/users
Purpose: Create a new user account

Documentation should include:

1. **Overview**
   - Brief description
   - Use cases

2. **Authentication**
   - Required auth method
   - Permission level needed

3. **Request**
   - HTTP method
   - URL structure
   - Headers required
   - Request body schema (JSON)
   - Parameter descriptions with types and constraints

4. **Response**
   - Success response (200)
   - Response body schema
   - Field descriptions

5. **Error Responses**
   - All possible error codes
   - Error message formats
   - Common causes and solutions

6. **Examples**
   - cURL example
   - JavaScript/Python example
   - Success response example
   - Error response example

7. **Notes**
   - Rate limiting
   - Best practices
   - Common pitfalls

Format: Markdown
Style: Clear, concise, developer-friendly</pre>
                </div>

                <div class="tip-box">
                    <h4>💡 Pro Tip: Template Library</h4>
                    <p>Save these templates and customize them for your specific needs. Build a personal library of prompts that work well for you. The key is maintaining the structure while adapting the content and requirements to your context.</p>
                </div>

                <div class="info-box">
                    <h4>🎯 Adaptation Strategy</h4>
                    <p>To adapt these examples:</p>
                    <ol>
                        <li>Identify the template closest to your need</li>
                        <li>Replace bracketed sections with your specifics</li>
                        <li>Adjust constraints and requirements</li>
                        <li>Add or remove sections as needed</li>
                        <li>Test and refine based on results</li>
                    </ol>
                </div>
            `
        },
        {
            id: 'advanced-strategies',
            title: '🎓 Advanced Strategies',
            duration: '25 min',
            level: 'advanced',
            content: `
                <h2>Advanced Prompt Engineering Strategies</h2>
                <p>Master-level techniques for complex scenarios and optimal results.</p>

                <h3>1. Prompt Chaining</h3>
                <p>Break complex tasks into a series of connected prompts, where each output feeds into the next.</p>

                <div class="example-box">
                    <h4>Example: Research Report Generation</h4>
                    <div class="code-block">
                        <button class="copy-btn">Copy</button>
                        <pre>Prompt 1: "List 10 key topics about [subject]"
→ Output: Topic list

Prompt 2: "For each topic in this list: [paste list], 
provide 3 key points and 2 sources"
→ Output: Detailed points

Prompt 3: "Using these points: [paste points], 
write a cohesive 1000-word report with introduction and conclusion"
→ Output: Final report</pre>
                    </div>
                </div>

                <h3>2. Self-Consistency</h3>
                <p>Generate multiple responses and synthesize the best elements.</p>

                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>Generate 3 different approaches to solve this problem: [problem]

For each approach:
1. Describe the method
2. List pros and cons
3. Estimate success probability

Then, synthesize the best elements from all three approaches 
into one optimal solution.</pre>
                </div>

                <h3>3. Constitutional AI Principles</h3>
                <p>Build in self-correction and ethical guidelines.</p>

                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>Generate a response to: [task]

Then, review your response against these criteria:
1. Is it accurate and factual?
2. Is it helpful and relevant?
3. Is it ethical and unbiased?
4. Is it clear and well-structured?

If any criteria aren't met, revise your response and explain the changes.</pre>
                </div>

                <h3>4. Meta-Prompting</h3>
                <p>Ask the AI to help you create better prompts.</p>

                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>I want to accomplish this task: [describe task]

Help me create an optimal prompt by:
1. Identifying what information is needed
2. Suggesting the best structure
3. Recommending relevant techniques (few-shot, CoT, etc.)
4. Drafting a complete, effective prompt

Then, use that prompt to complete the task.</pre>
                </div>

                <h3>5. Recursive Prompting</h3>
                <p>Use the output to refine and improve iteratively.</p>

                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>Task: [your task]

Step 1: Provide an initial solution
Step 2: Critique your own solution, identifying weaknesses
Step 3: Provide an improved solution addressing the weaknesses
Step 4: Repeat steps 2-3 two more times
Step 5: Present the final, optimized solution</pre>
                </div>

                <h3>6. Perspective Simulation</h3>
                <p>Simulate multiple expert perspectives for comprehensive analysis.</p>

                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>Analyze this decision: [decision]

Simulate perspectives from:
1. A financial analyst (focus: ROI, costs, revenue impact)
2. A UX designer (focus: user experience, usability)
3. A technical architect (focus: implementation, scalability)
4. A risk manager (focus: potential risks, mitigation)

For each perspective:
- Key considerations
- Recommendations
- Concerns

Finally, synthesize all perspectives into a balanced recommendation.</pre>
                </div>

                <h3>7. Constraint Relaxation</h3>
                <p>Solve constrained problems by temporarily removing constraints.</p>

                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>Problem: [constrained problem]
Constraints: [list constraints]

Step 1: Solve the problem ignoring all constraints
Step 2: Identify which constraints are violated
Step 3: Modify the solution to satisfy the most critical constraints
Step 4: Iteratively adjust to satisfy remaining constraints
Step 5: Present final solution that meets all constraints</pre>
                </div>

                <h3>8. Analogical Reasoning</h3>
                <p>Use analogies from different domains to spark creative solutions.</p>

                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>Problem: [your problem]

Find analogies from these domains:
1. Nature/Biology
2. Architecture/Engineering
3. Music/Art
4. Sports/Games

For each analogy:
- Explain the parallel
- Extract applicable principles
- Suggest how to apply to the original problem

Synthesize insights into novel solutions.</pre>
                </div>

                <h3>9. Socratic Method</h3>
                <p>Use questioning to explore and refine ideas deeply.</p>

                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>Topic: [your topic]

Engage in Socratic dialogue:
1. State your initial position
2. Ask 3 probing questions that challenge assumptions
3. Answer each question thoroughly
4. Identify weaknesses in your reasoning
5. Refine your position
6. Repeat steps 2-5 twice more
7. Present final, well-examined position</pre>
                </div>

                <h3>10. Ensemble Methods</h3>
                <p>Combine multiple techniques for robust results.</p>

                <div class="code-block">
                    <button class="copy-btn">Copy</button>
                    <pre>Task: [complex task]

Use these approaches in combination:
1. Few-shot learning (provide 2 examples)
2. Chain of thought (show reasoning)
3. Role assignment (act as expert)
4. Self-consistency (generate 2 versions)
5. Synthesis (combine best elements)

Structure:
- Context and role
- Examples
- Task with reasoning requirement
- Multiple solution attempts
- Final synthesized answer</pre>
                </div>

                <div class="warning-box">
                    <h4>⚠️ Advanced Strategy Considerations</h4>
                    <ul>
                        <li><strong>Token Limits:</strong> Complex prompts use more tokens - be mindful of limits</li>
                        <li><strong>Cost:</strong> Multiple iterations increase API costs</li>
                        <li><strong>Time:</strong> Advanced techniques take longer to execute</li>
                        <li><strong>Complexity:</strong> Don't over-engineer simple tasks</li>
                        <li><strong>Testing:</strong> Always validate outputs, especially with chained prompts</li>
                    </ul>
                </div>

                <div class="tip-box">
                    <h4>💡 When to Use Advanced Strategies</h4>
                    <ul>
                        <li>High-stakes decisions requiring thorough analysis</li>
                        <li>Complex problems with multiple dimensions</li>
                        <li>Creative tasks needing novel solutions</li>
                        <li>Quality-critical outputs (legal, medical, financial)</li>
                        <li>When simple prompts consistently underperform</li>
                    </ul>
                </div>
            `
        },
        {
            id: 'industry-applications',
            title: '🏢 Industry Applications',
            duration: '20 min',
            level: 'intermediate',
            content: `
                <h2>Industry-Specific Applications</h2>
                <p>Tailored prompt engineering strategies for different industries.</p>

                <h3>Healthcare & Medical</h3>
                <div class="example-box">
                    <h4>Medical Documentation</h4>
                    <div class="code-block">
                        <button class="copy-btn">Copy</button>
                        <pre>You are a medical documentation specialist.

Create a patient progress note from this information: [details]

Format: SOAP (Subjective, Objective, Assessment, Plan)
Requirements:
- Use standard medical terminology
- Be concise and precise
- Include relevant vitals and observations
- Ensure HIPAA compliance (no identifying information)
- Follow clinical documentation standards

Note: This is for educational purposes only.</pre>
                    </div>
                </div>

                <h3>Legal</h3>
                <div class="example-box">
                    <h4>Contract Analysis</h4>
                    <div class="code-block">
                        <button class="copy-btn">Copy</button>
                        <pre>You are a legal analyst specializing in contract review.

Analyze this contract clause: [clause]

Provide:
1. Plain English summary
2. Potential risks or concerns
3. Standard vs. unusual provisions
4. Suggested modifications for client protection
5. Related legal precedents or standards

Disclaimer: For informational purposes only, not legal advice.</pre>
                    </div>
                </div>

                <h3>Finance & Banking</h3>
                <div class="example-box">
                    <h4>Financial Analysis</h4>
                    <div class="code-block">
                        <button class="copy-btn">Copy</button>
                        <pre>You are a financial analyst with expertise in corporate finance.

Analyze this financial data: [data]

Provide:
1. Key financial ratios (liquidity, profitability, efficiency)
2. Trend analysis (3-year comparison)
3. Industry benchmarking
4. Risk assessment
5. Investment recommendation with justification

Format: Professional analyst report
Include: Charts descriptions, data tables, executive summary</pre>
                    </div>
                </div>

                <h3>Education</h3>
                <div class="example-box">
                    <h4>Lesson Plan Creation</h4>
                    <div class="code-block">
                        <button class="copy-btn">Copy</button>
                        <pre>You are an experienced educator specializing in [subject].

Create a lesson plan for:
Topic: [topic]
Grade Level: [level]
Duration: [time]
Learning Objectives: [objectives]

Include:
1. Introduction/Hook (5 min)
2. Direct Instruction (15 min)
3. Guided Practice (15 min)
4. Independent Practice (15 min)
5. Assessment (10 min)
6. Materials needed
7. Differentiation strategies
8. Common misconceptions to address

Format: Detailed, actionable lesson plan</pre>
                    </div>
                </div>

                <h3>Marketing & Advertising</h3>
                <div class="example-box">
                    <h4>Campaign Strategy</h4>
                    <div class="code-block">
                        <button class="copy-btn">Copy</button>
                        <pre>You are a marketing strategist with expertise in digital campaigns.

Create a marketing campaign strategy for:
Product: [product]
Target Audience: [audience]
Budget: [budget]
Timeline: [timeline]
Goals: [goals]

Provide:
1. Campaign concept and messaging
2. Channel strategy (paid, owned, earned)
3. Content calendar (4 weeks)
4. KPIs and success metrics
5. Budget allocation by channel
6. Creative brief for assets
7. Risk mitigation plan

Format: Comprehensive campaign deck</pre>
                    </div>
                </div>

                <h3>Software Development</h3>
                <div class="example-box">
                    <h4>Architecture Design</h4>
                    <div class="code-block">
                        <button class="copy-btn">Copy</button>
                        <pre>You are a senior software architect.

Design a system architecture for:
Requirements: [requirements]
Scale: [expected users/load]
Constraints: [budget, timeline, tech stack]

Provide:
1. High-level architecture diagram (describe components)
2. Technology stack recommendations with justifications
3. Data flow and storage strategy
4. Scalability considerations
5. Security architecture
6. API design principles
7. Deployment strategy
8. Monitoring and observability plan
9. Cost estimates
10. Risk assessment

Format: Technical architecture document</pre>
                    </div>
                </div>

                <h3>Human Resources</h3>
                <div class="example-box">
                    <h4>Job Description Creation</h4>
                    <div class="code-block">
                        <button class="copy-btn">Copy</button>
                        <pre>You are an HR professional specializing in talent acquisition.

Create a job description for:
Role: [role title]
Department: [department]
Level: [seniority]
Company: [company type/size]

Include:
1. Compelling role summary (2-3 sentences)
2. Key responsibilities (5-7 bullets)
3. Required qualifications
4. Preferred qualifications
5. Technical skills
6. Soft skills
7. What success looks like in this role
8. Growth opportunities
9. Company culture highlights
10. Benefits and perks

Tone: Professional yet engaging
Length: 400-500 words
Focus: Attract top talent while being realistic</pre>
                    </div>
                </div>

                <h3>E-commerce & Retail</h3>
                <div class="example-box">
                    <h4>Product Description</h4>
                    <div class="code-block">
                        <button class="copy-btn">Copy</button>
                        <pre>You are an e-commerce copywriter specializing in conversion optimization.

Write a product description for:
Product: [product name]
Category: [category]
Target Customer: [customer profile]
Price Point: [price]
Key Features: [features]
USP: [unique selling proposition]

Structure:
1. Attention-grabbing headline
2. Problem statement (pain point)
3. Solution (how product solves it)
4. Features and benefits (3-5 key points)
5. Social proof element
6. Call-to-action

Requirements:
- 150-200 words
- SEO-friendly (include keywords: [keywords])
- Scannable (use bullets, short paragraphs)
- Emotional + rational appeal
- Address common objections</pre>
                    </div>
                </div>

                <div class="tip-box">
                    <h4>💡 Industry Adaptation Tips</h4>
                    <ul>
                        <li><strong>Terminology:</strong> Use industry-specific language and acronyms</li>
                        <li><strong>Standards:</strong> Reference relevant regulations and standards</li>
                        <li><strong>Context:</strong> Include industry-specific constraints and considerations</li>
                        <li><strong>Format:</strong> Follow industry-standard document formats</li>
                        <li><strong>Compliance:</strong> Build in relevant compliance requirements</li>
                    </ul>
                </div>

                <div class="warning-box">
                    <h4>⚠️ Industry-Specific Cautions</h4>
                    <ul>
                        <li><strong>Regulated Industries:</strong> Always have human expert review (healthcare, legal, finance)</li>
                        <li><strong>Confidentiality:</strong> Never include sensitive or proprietary information in prompts</li>
                        <li><strong>Accuracy:</strong> Verify all facts, figures, and technical details</li>
                        <li><strong>Liability:</strong> Include appropriate disclaimers</li>
                        <li><strong>Ethics:</strong> Ensure outputs align with professional ethics codes</li>
                    </ul>
                </div>
            `
        },
        {
            id: 'conclusion',
            title: '🎓 Conclusion & Next Steps',
            duration: '10 min',
            level: 'all',
            content: `
                <h2>Congratulations! 🎉</h2>
                <p>You've completed the comprehensive Prompt Engineering & AI Usage training course! You now have a solid foundation in crafting effective prompts and communicating with AI systems.</p>
                
                <h3>What You've Learned</h3>
                <div class="info-box">
                    <h4>Key Takeaways</h4>
                    <ul>
                        <li>✅ <strong>Fundamentals:</strong> Clarity, specificity, and context are essential</li>
                        <li>✅ <strong>Techniques:</strong> Few-shot learning, chain-of-thought, role assignment</li>
                        <li>✅ <strong>Advanced Strategies:</strong> Prompt chaining, meta-prompting, ensemble methods</li>
                        <li>✅ <strong>Best Practices:</strong> Structured prompts, iteration, format specification</li>
                        <li>✅ <strong>Real-World Applications:</strong> Industry-specific use cases and templates</li>
                        <li>✅ <strong>Common Pitfalls:</strong> What to avoid and how to troubleshoot</li>
                    </ul>
                </div>

                <h3>Your Prompt Engineering Toolkit</h3>
                <p>You now have:</p>
                <ul>
                    <li>📚 A comprehensive understanding of prompt engineering principles</li>
                    <li>🛠️ Practical techniques for various scenarios</li>
                    <li>📋 Ready-to-use templates for common tasks</li>
                    <li>🎯 Industry-specific application knowledge</li>
                    <li>✅ A mental checklist for creating effective prompts</li>
                </ul>

                <h3>Next Steps</h3>
                
                <div class="tip-box">
                    <h4>1. Practice Regularly</h4>
                    <p>Apply these techniques in your daily work. The more you practice, the more intuitive it becomes.</p>
                    <ul>
                        <li>Start with simple tasks and gradually increase complexity</li>
                        <li>Try different techniques for the same task</li>
                        <li>Track what works well for different scenarios</li>
                    </ul>
                </div>

                <div class="tip-box">
                    <h4>2. Build Your Prompt Library</h4>
                    <p>Create a personal collection of effective prompts.</p>
                    <ul>
                        <li>Save prompts that work well</li>
                        <li>Organize by category or use case</li>
                        <li>Note what makes each prompt effective</li>
                        <li>Continuously refine and update</li>
                    </ul>
                </div>

                <div class="tip-box">
                    <h4>3. Experiment and Learn</h4>
                    <p>Don't be afraid to try new approaches.</p>
                    <ul>
                        <li>Test variations to find what works best</li>
                        <li>Learn from both successes and failures</li>
                        <li>Combine techniques in creative ways</li>
                        <li>Stay curious and keep exploring</li>
                    </ul>
                </div>

                <div class="tip-box">
                    <h4>4. Stay Updated</h4>
                    <p>AI technology evolves rapidly.</p>
                    <ul>
                        <li>Follow AI research and developments</li>
                        <li>Learn about new models and their capabilities</li>
                        <li>Join prompt engineering communities</li>
                        <li>Attend workshops and webinars</li>
                    </ul>
                </div>

                <div class="tip-box">
                    <h4>5. Share and Collaborate</h4>
                    <p>Learn from and contribute to the community.</p>
                    <ul>
                        <li>Share successful prompts with your team</li>
                        <li>Learn from others' approaches</li>
                        <li>Contribute to prompt libraries</li>
                        <li>Mentor others in prompt engineering</li>
                    </ul>
                </div>

                <h3>Resources for Further Learning</h3>
                <div class="example-box">
                    <h4>📖 Recommended Resources</h4>
                    <ul>
                        <li><strong>Communities:</strong> Join prompt engineering forums and Discord servers</li>
                        <li><strong>Repositories:</strong> Explore GitHub prompt libraries</li>
                        <li><strong>Research:</strong> Read papers on prompt engineering techniques</li>
                        <li><strong>Tools:</strong> Experiment with prompt optimization tools</li>
                        <li><strong>Courses:</strong> Take advanced courses on specific AI models</li>
                        <li><strong>Blogs:</strong> Follow AI researchers and practitioners</li>
                    </ul>
                </div>

                <h3>Final Challenge</h3>
                <div class="example-box">
                    <h4>🎯 Put It All Together</h4>
                    <p>Create a comprehensive prompt for a real project you're working on. Apply everything you've learned:</p>
                    <ul>
                        <li>✓ Clear objectives and context</li>
                        <li>✓ Role assignment</li>
                        <li>✓ Specific format requirements</li>
                        <li>✓ Step-by-step instructions if needed</li>
                        <li>✓ Constraints and boundaries</li>
                        <li>✓ Examples if beneficial</li>
                        <li>✓ Success criteria</li>
                    </ul>
                    <p>Then iterate and refine it until you get excellent results!</p>
                </div>

                <h3>Remember</h3>
                <div class="info-box">
                    <h4>🌟 Key Principles</h4>
                    <ul>
                        <li><strong>Clarity is king:</strong> Be specific about what you want</li>
                        <li><strong>Context matters:</strong> Provide relevant background</li>
                        <li><strong>Iterate always:</strong> First attempts are rarely perfect</li>
                        <li><strong>Learn continuously:</strong> Each interaction teaches you something</li>
                        <li><strong>Share knowledge:</strong> Help others improve their skills</li>
                    </ul>
                </div>

                <div style="text-align: center; margin-top: 3rem; padding: 2rem; background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1)); border-radius: 12px;">
                    <h2 style="font-size: 2rem; margin-bottom: 1rem;">🎓 You're Now a Prompt Engineer!</h2>
                    <p style="font-size: 1.2rem; margin-bottom: 1.5rem;">Thank you for completing this course. Now go forth and create amazing things with AI!</p>
                    <button class="btn btn-primary" id="getCertificateBtn" style="font-size: 1.1rem; padding: 1rem 2rem;">
                        📜 Get Your Certificate
                    </button>
                </div>

                <p style="margin-top: 2rem; text-align: center; font-size: 1.1rem; color: var(--text-secondary);">
                    <strong>Happy prompt engineering! 🚀</strong>
                </p>
            `
        }
    ]
};
