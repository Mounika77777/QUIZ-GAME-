// Quiz Game Logic
class QuizGame {
    constructor() {
        this.currentCourse = null;
        this.currentDifficulty = null;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.questions = [];
        this.selectedAnswer = null;
        
        this.initializeEventListeners();
        this.loadQuestions();
    }

    // Fisher-Yates shuffle
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Initialize all event listeners
    initializeEventListeners() {
        // Remove existing event listeners first to prevent duplicates
        this.removeEventListeners();
        
        // Course selection
        document.querySelectorAll('.course-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectCourse(e.target.dataset.course));
        });

        // Difficulty selection
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectDifficulty(e.target.dataset.difficulty));
        });

        // Start quiz button
        const startBtn = document.getElementById('start-quiz-btn');
        if (startBtn) {
            startBtn.addEventListener('click', () => this.startQuiz());
        }

        // Next question button
        const nextBtn = document.getElementById('next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextQuestion());
        }

        // Restart button
        const restartBtn = document.getElementById('restart-btn');
        if (restartBtn) {
            restartBtn.addEventListener('click', () => this.goHome());
        }

        // Review button
        const reviewBtn = document.getElementById('review-btn');
        if (reviewBtn) {
            reviewBtn.addEventListener('click', () => this.showReview());
        }

        // Back to results button
        const backToResultsBtn = document.getElementById('back-to-results-btn');
        if (backToResultsBtn) {
            backToResultsBtn.addEventListener('click', () => this.showResults());
        }

        // Quit quiz button
        const quitBtn = document.getElementById('quit-quiz-btn');
        if (quitBtn) {
            quitBtn.addEventListener('click', () => this.quitQuiz());
        }

        // Home button
        const homeBtn = document.getElementById('home-btn');
        if (homeBtn) {
            homeBtn.addEventListener('click', () => this.goHome());
        }
    }

    // Remove existing event listeners to prevent duplicates
    removeEventListeners() {
        // Clone and replace elements to remove all event listeners
        document.querySelectorAll('.course-btn').forEach(btn => {
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
        });

        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
        });

        // Clone and replace buttons
        const buttons = ['start-quiz-btn', 'next-btn', 'restart-btn', 'review-btn', 'back-to-results-btn', 'quit-quiz-btn', 'home-btn'];
        buttons.forEach(id => {
            const btn = document.getElementById(id);
            if (btn) {
                const newBtn = btn.cloneNode(true);
                btn.parentNode.replaceChild(newBtn, btn);
            }
        });
    }

    // Course selection handler
    selectCourse(course) {
        this.currentCourse = course;
        document.querySelectorAll('.course-btn').forEach(btn => btn.classList.remove('selected'));
        document.querySelector(`[data-course="${course}"]`).classList.add('selected');
        this.updateStartButton();
    }

    // Difficulty selection handler
    selectDifficulty(difficulty) {
        this.currentDifficulty = difficulty;
        document.querySelectorAll('.difficulty-btn').forEach(btn => btn.classList.remove('selected'));
        document.querySelector(`[data-difficulty="${difficulty}"]`).classList.add('selected');
        this.updateStartButton();
    }

    // Update start button state
    updateStartButton() {
        const startBtn = document.getElementById('start-quiz-btn');
        if (this.currentCourse && this.currentDifficulty) {
            startBtn.disabled = false;
        } else {
            startBtn.disabled = true;
        }
    }

    // Start the quiz
    startQuiz() {
        this.questions = this.questionBank[this.currentCourse][this.currentDifficulty];
        // Shuffle options and update correct index for each question
        this.questions.forEach(q => {
            const optionObjs = q.options.map((opt, idx) => ({ opt, isCorrect: idx === q.correct }));
            this.shuffleArray(optionObjs);
            q.options = optionObjs.map(o => o.opt);
            q.correct = optionObjs.findIndex(o => o.isCorrect);
        });
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.selectedAnswer = null;

        this.showScreen('quiz-screen');
        this.updateQuizHeader();
        this.displayQuestion();
    }

    // Show specific screen
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    }

    // Update quiz header information
    updateQuizHeader() {
        document.getElementById('current-course').textContent = this.currentCourse.toUpperCase();
        document.getElementById('current-difficulty').textContent = this.currentDifficulty.charAt(0).toUpperCase() + this.currentDifficulty.slice(1);
        document.getElementById('question-counter').textContent = `Question ${this.currentQuestionIndex + 1} of ${this.questions.length}`;
        
        const progressFill = document.getElementById('progress-fill');
        const progressPercent = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        progressFill.style.width = `${progressPercent}%`;
    }

    // Display current question
    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        document.getElementById('question-text').textContent = question.question;
        
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            button.addEventListener('click', () => this.selectAnswer(index));
            optionsContainer.appendChild(button);
        });

        // Hide feedback and next button
        document.getElementById('feedback').classList.add('hidden');
        document.getElementById('next-btn').classList.add('hidden');
        this.selectedAnswer = null;
    }

    // Handle answer selection
    selectAnswer(answerIndex) {
        if (this.selectedAnswer !== null) return; // Prevent multiple selections

        this.selectedAnswer = answerIndex;
        const question = this.questions[this.currentQuestionIndex];
        const isCorrect = answerIndex === question.correct;

        // Update user answers
        this.userAnswers.push({
            question: question.question,
            userAnswer: answerIndex,
            correctAnswer: question.correct,
            options: question.options,
            explanation: question.explanation,
            isCorrect: isCorrect
        });

        if (isCorrect) {
            this.score++;
        }

        // Update option buttons
        const optionButtons = document.querySelectorAll('.option-btn');
        optionButtons.forEach((btn, index) => {
            btn.disabled = true;
            if (index === question.correct) {
                btn.classList.add('correct');
            } else if (index === answerIndex && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });

        // Show feedback
        this.showFeedback(isCorrect, question.explanation);
        
        // Show next button
        document.getElementById('next-btn').classList.remove('hidden');
    }

    // Show feedback for the answer
    showFeedback(isCorrect, explanation) {
        const feedback = document.getElementById('feedback');
        feedback.classList.remove('hidden', 'correct', 'incorrect');
        
        if (isCorrect) {
            feedback.classList.add('correct');
            feedback.innerHTML = `<strong>Correct!</strong> ${explanation}`;
        } else {
            feedback.classList.add('incorrect');
            feedback.innerHTML = `<strong>Incorrect.</strong> ${explanation}`;
        }
    }

    // Move to next question or show results
    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex < this.questions.length) {
            this.updateQuizHeader();
            this.displayQuestion();
        } else {
            this.showResults();
        }
    }

    // Show final results
    showResults() {
        this.showScreen('results-screen');
        
        const finalScore = document.getElementById('final-score');
        const correctCount = document.getElementById('correct-count');
        const incorrectCount = document.getElementById('incorrect-count');
        const accuracy = document.getElementById('accuracy');
        const scoreMessage = document.getElementById('score-message');
        
        finalScore.textContent = this.score;
        correctCount.textContent = this.score;
        incorrectCount.textContent = this.questions.length - this.score;
        accuracy.textContent = `${Math.round((this.score / this.questions.length) * 100)}%`;
        
        // Set score message based on performance
        const percentage = (this.score / this.questions.length) * 100;
        if (percentage >= 90) {
            scoreMessage.textContent = "Excellent! You're a master of this topic! 🏆";
        } else if (percentage >= 70) {
            scoreMessage.textContent = "Great job! You have a solid understanding! 👍";
        } else if (percentage >= 50) {
            scoreMessage.textContent = "Good effort! Keep practicing to improve! 📚";
        } else {
            scoreMessage.textContent = "Keep studying! Practice makes perfect! 💪";
        }
    }

    // Show answer review
    showReview() {
        this.showScreen('review-screen');
        
        const reviewContent = document.getElementById('review-content');
        reviewContent.innerHTML = '';
        
        this.userAnswers.forEach((answer, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';
            
            reviewItem.innerHTML = `
                <div class="review-question">
                    <strong>Question ${index + 1}:</strong> ${answer.question}
                </div>
                <div class="review-answer user">
                    <strong>Your Answer:</strong> ${answer.options[answer.userAnswer]}
                </div>
                <div class="review-answer ${answer.isCorrect ? 'correct' : 'incorrect'}">
                    <strong>Correct Answer:</strong> ${answer.options[answer.correctAnswer]}
                </div>
                <div class="review-explanation">
                    <strong>Explanation:</strong> ${answer.explanation}
                </div>
            `;
            
            reviewContent.appendChild(reviewItem);
        });
    }

    // Restart the quiz
    restartQuiz() {
        this.currentCourse = null;
        this.currentDifficulty = null;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.selectedAnswer = null;
        
        // Reset UI
        document.querySelectorAll('.course-btn').forEach(btn => btn.classList.remove('selected'));
        document.querySelectorAll('.difficulty-btn').forEach(btn => btn.classList.remove('selected'));
        document.getElementById('start-quiz-btn').disabled = true;
        
        this.showScreen('selection-screen');
    }

    // Quit the quiz and return to home
    quitQuiz() {
        // Reset all quiz data
        this.currentCourse = null;
        this.currentDifficulty = null;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.selectedAnswer = null;
        
        // Reset UI
        document.querySelectorAll('.course-btn').forEach(btn => btn.classList.remove('selected'));
        document.querySelectorAll('.difficulty-btn').forEach(btn => btn.classList.remove('selected'));
        document.getElementById('start-quiz-btn').disabled = true;
        
        // Clear quiz screen content
        document.getElementById('question-text').textContent = '';
        document.getElementById('options-container').innerHTML = '';
        document.getElementById('feedback').classList.add('hidden');
        document.getElementById('next-btn').classList.add('hidden');
        
        // Use the proper showScreen method instead of manipulating style directly
        this.showScreen('selection-screen');
        
        // Re-initialize event listeners to ensure they work after quitting
        this.initializeEventListeners();
    }

    // Go back to home page
    goHome() {
        // Reset all quiz data
        this.currentCourse = null;
        this.currentDifficulty = null;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.selectedAnswer = null;
        
        // Reset UI
        document.querySelectorAll('.course-btn').forEach(btn => btn.classList.remove('selected'));
        document.querySelectorAll('.difficulty-btn').forEach(btn => btn.classList.remove('selected'));
        document.getElementById('start-quiz-btn').disabled = true;
        
        // Clear all quiz screen content
        document.getElementById('question-text').textContent = '';
        document.getElementById('options-container').innerHTML = '';
        document.getElementById('feedback').classList.add('hidden');
        document.getElementById('next-btn').classList.add('hidden');
        
        // Clear quiz header content
        document.getElementById('current-course').textContent = '';
        document.getElementById('current-difficulty').textContent = '';
        document.getElementById('question-counter').textContent = '';
        document.getElementById('progress-fill').style.width = '0%';
        
        // Clear results screen content
        document.getElementById('final-score').textContent = '0';
        document.getElementById('correct-count').textContent = '0';
        document.getElementById('incorrect-count').textContent = '0';
        document.getElementById('accuracy').textContent = '0%';
        document.getElementById('score-message').textContent = '';
        
        // Clear review screen content
        document.getElementById('review-content').innerHTML = '';
        
        // Hide all screens first
        document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
        
        // Show only the selection screen (home page)
        document.getElementById('selection-screen').classList.add('active');
        
        // Re-initialize event listeners to ensure they work after going home
        this.initializeEventListeners();
    }

    // Load all questions for different courses and difficulties
    loadQuestions() {
        // Use the questions from additional-questions.js
        if (typeof additionalQuestions !== 'undefined') {
            this.questionBank = additionalQuestions;
        } else {
            console.error('Additional questions not loaded. Please check if additional-questions.js is included.');
            this.questionBank = {};
        }
    }
}

// Initialize the quiz game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizGame();
});
