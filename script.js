document.addEventListener('DOMContentLoaded', () => {
    // Add animation to the invitation
    const invitationContent = document.querySelector('.invitation-content');
    invitationContent.style.opacity = '0';
    invitationContent.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        invitationContent.style.opacity = '1';
        invitationContent.style.transform = 'translateY(0)';
        invitationContent.style.transition = 'all 0.8s ease-out';
    }, 100);

    // Handle RSVP form submission
    const rsvpForm = document.querySelector('.rsvp-form');
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.querySelector('.rsvp-form input[type="text"]').value;
            const email = document.querySelector('.rsvp-form input[type="email"]').value;
            
            // Here you would typically send this data to a server
            alert(`Thank you ${name}! Your RSVP has been received.`);
            rsvpForm.reset();
        });
    }
});
