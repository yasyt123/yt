document.addEventListener('DOMContentLoaded', function() {
    // Navigation buttons functionality
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');
    
    // Set default active section
    document.getElementById('about-section').classList.add('active');
    document.getElementById('about-btn').classList.add('active');
    
    // Add click event listeners to navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and sections
            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding section
            const sectionId = this.id.replace('-btn', '-section');
            document.getElementById(sectionId).classList.add('active');
            
            // Smooth scroll to section
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon at ${email}.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Add hover effect to project images
    const projectImages = document.querySelectorAll('.gallery img');
    projectImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(1deg)';
            this.style.boxShadow = '5px 5px 15px rgba(0, 0, 0, 0.3)';
            this.style.zIndex = '1';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            this.style.zIndex = '';
        });
    });
    
    // Add animation to profile image
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        setInterval(() => {
            profileImg.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                profileImg.style.transform = 'translateY(0)';
            }, 1000);
        }, 2000);
    }
    
    // Add floating animation to social icons
    const socialIcons = document.querySelectorAll('.social-links a');
    socialIcons.forEach((icon, index) => {
        icon.style.animation = `float 3s ease-in-out ${index * 0.2}s infinite`;
    });
});