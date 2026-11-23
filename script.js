// 1. Mobile Navigation Toggle
function toggleMenu() {
    const navList = document.getElementById('nav-list');
    if (navList) {
        navList.classList.toggle('show');
    }
}

// 2. Academics Course Filter (Used on academics.html)
function filterCourses(category, btnElement) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    const cards = document.querySelectorAll('.course-card');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }       
    });
}

// 3. Admissions Tuition Calculator (Used on admissions.html)
function calculateFee() {
    const programSelect = document.getElementById('program-select');
    const hostelCheck = document.getElementById('hostel-check');
    const feeOutput = document.getElementById('fee-output');

    if (programSelect && hostelCheck && feeOutput) {
        const baseFee = parseInt(programSelect.value);
        const includeHostel = hostelCheck.checked;
        const total = includeHostel ? baseFee + 20000 : baseFee;
        feeOutput.textContent = total.toLocaleString();
    }
}

// 4. Contact Form Handler (Used on contact.html)
function handleContactSubmit(event) {
    event.preventDefault();
    const feedback = document.getElementById('form-feedback');
    const form = document.getElementById('contact-form');

    if (feedback && form) {
        feedback.style.display = 'block';
        form.reset();

        setTimeout(() => {
            feedback.style.display = 'none';
        }, 5000);
    }
}
