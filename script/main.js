 
function progressBarAndCountNumber() {
    const progress = document.querySelectorAll('.progress');
    let MAX = 80;

    // Initial animation for all skills when page loads
    progress.forEach(element => {
        let count = 0; // Initialize count to 0 for each element
        const progressValue = element.dataset.progress || MAX; // Use the data-progress attribute or default to MAX

        // Animate all progress bars when the page loads
        let run = setInterval(() => {
            count++;
            if (count <= progressValue) {
                element.parentElement.style.background = `conic-gradient(#f9004d ${count}%, #212428 0)`;
                element.firstElementChild.textContent = `${count}%`;
            }
            // Clear the interval once the progress reaches the target value
            if (count === progressValue) {
                clearInterval(run);
            }
        }, 20); // Change the speed by adjusting the interval (20ms in this case)
    });

    // Add hover functionality for individual skills
    progress.forEach(element => {
        let count = 0; // Reset count for hover animation
        const progressValue = element.dataset.progress || MAX; // Use the data-progress attribute or default to MAX

        element.addEventListener('mouseenter', () => {
            // Reset the progress when hovered
            count = 0;
            element.parentElement.style.background = `conic-gradient(#f9004d 0%, #212428 0)`;
            element.firstElementChild.textContent = `${count}%`;

            // Animate the progress for the hovered skill only
            let run = setInterval(() => {
                count++;
                if (count <= progressValue) {
                    element.parentElement.style.background = `conic-gradient(#f9004d ${count}%, #212428 0)`;
                    element.firstElementChild.textContent = `${count}%`;
                }

                // Clear the interval once the progress reaches the target value
                if (count === progressValue) {
                    clearInterval(run);
                }
            }, 20); // Change the speed by adjusting the interval (20ms in this case)
        });
    });
}


progressBarAndCountNumber();


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    /** ETAPE POUR CONNECTER EMAILJS AU FORMULAIRE DE CONTACT
    * 1. https://www.emailjs.com - Sign In our Sign Up
    * 2. "Email Services" => "Add New Service" => "Gmail" for example 
    * 3. "Connect Account" => "Create Service" => Copy the "Service ID"
    * 4. "Email Templates" => "Create New Template" 
    * Subject *
        New message from {{user_name}}
        Content *
            Names: {{user_name}}

            Email: {{user_email}}

            Subject: {{user_subject}}

            Message: {{user_message}}

            Best wishes,
            EmailJS team
    * => "Settings" => copy "Template ID
    * 5. "Integration" => "Copy the Form ID" in html page
    * 6. "API KEYS" => "Account" => "Create Key" => "Copy the Public Key"
    * 7. serviceID - templateID - #form - publicKey
    */
    emailjs.sendForm('', '', '#contact-form', '')
        .then(() => {
            // Affiche le message de réussite d'envoi du message
            contactMessage.textContent = 'Message sent successfully ✅'

            // Supprime le message après cinq secondes
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // Efface les champs de saisie après l'envoi du message
            contactForm.reset()
        }, () => {
            // Affiche un message d'erreur d'envoi du message en cas de problème avec le service
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}
contactForm.addEventListener('submit', sendEmail)


 