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
            const attendance = document.querySelector('.rsvp-form input[name="attendance"]:checked').value;
            
            // Here you would typically send this data to a server
            let message;
            if (attendance === 'yes') {
                message = `Thank you ${name}! We're excited to see you at our wedding.`;
            } else {
                message = `Thank you ${name} for letting us know. We understand if you can't make it.`;
            }
            
            alert(message);
            rsvpForm.reset();
        });
    }
});
