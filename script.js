// script.js

document.addEventListener('DOMContentLoaded', () => {
    
    const contactForm = document.querySelector('.contact-form');
    
    if (!contactForm) return;

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Get form fields
        const nameInput = this.querySelector('input[placeholder="Your Name"]');
        const emailInput = this.querySelector('input[placeholder="Your Email"]');
        const messageInput = this.querySelector('textarea');

        // Clear previous errors
        clearErrors();

        let isValid = true;

        // Validate Name
        if (!nameInput.value.trim()) {
            showError(nameInput, "Name is required");
            isValid = false;
        } else if (nameInput.value.trim().length < 3) {
            showError(nameInput, "Name must be at least 3 characters");
            isValid = false;
        }

        // Validate Email
        if (!emailInput.value.trim()) {
            showError(emailInput, "Email is required");
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, "Please enter a valid email address");
            isValid = false;
        }

        // Validate Message
        if (!messageInput.value.trim()) {
            showError(messageInput, "Message is required");
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            showError(messageInput, "Message must be at least 10 characters");
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        // Show loading state
        const submitBtn = this.querySelector('button');
        const originalBtnText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <span class="spinner"></span> Sending...
        `;

        try {
            // Simulate API call (Replace with real backend later)
            await simulateFormSubmission();

            // Success Message
            showSuccessMessage();

            // Reset form
            this.reset();

        } catch (error) {
            showErrorMessage("Something went wrong. Please try again later.");
        } finally {
            // Reset button
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
});

// Helper Functions

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(input, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ef4444';
    errorDiv.style.fontSize = '0.9rem';
    errorDiv.style.marginTop = '5px';
    errorDiv.textContent = message;
    
    input.parentNode.appendChild(errorDiv);
    input.style.border = '2px solid #ef4444';
}

function clearErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(err => err.remove());
    
    const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    inputs.forEach(input => {
        input.style.border = '';
    });
}

function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.background = '#10b981';
    successDiv.style.color = 'white';
    successDiv.style.padding = '16px';
    successDiv.style.borderRadius = '12px';
    successDiv.style.marginTop = '20px';
    successDiv.style.textAlign = 'center';
    successDiv.innerHTML = `
        <strong>✅ Message Sent Successfully!</strong><br>
        Thank you! I'll get back to you soon.
    `;
    
    const form = document.querySelector('.contact-form');
    form.appendChild(successDiv);

    // Remove success message after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.background = '#ef4444';
    errorDiv.style.color = 'white';
    errorDiv.style.padding = '16px';
    errorDiv.style.borderRadius = '12px';
    errorDiv.style.marginTop = '20px';
    errorDiv.style.textAlign = 'center';
    errorDiv.textContent = message;
    
    const form = document.querySelector('.contact-form');
    form.appendChild(errorDiv);

    setTimeout(() => errorDiv.remove(), 4000);
}

// Simulate sending data to server
function simulateFormSubmission() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1800); // 1.8 seconds delay
    });
}