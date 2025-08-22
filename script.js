// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle mobile menu
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// Course navigation function
function startCourse(courseType) {
    // Store the selected course in localStorage
    localStorage.setItem('selectedCourse', courseType);
    
    // Navigate to quiz page
    window.location.href = 'quiz.html';
}

// Auto-select course if coming from courses page
document.addEventListener('DOMContentLoaded', function() {
    const selectedCourse = localStorage.getItem('selectedCourse');
    
    if (selectedCourse && window.location.pathname.includes('quiz.html')) {
        // Find and click the corresponding course button
        const courseBtn = document.querySelector(`[data-course="${selectedCourse}"]`);
        if (courseBtn) {
            courseBtn.click();
            // Clear the stored course
            localStorage.removeItem('selectedCourse');
        }
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to current page navigation link
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
