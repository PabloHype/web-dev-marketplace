// JavaScript for form handling and interactivity

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission
        // Handle form data here
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log('Form Data:', JSON.stringify(data));
        // You can also send the data to your server here using fetch or axios
    });

    // Add additional interactivity here
    const toggleButton = document.getElementById('toggle');
    toggleButton.addEventListener('click', () => {
        const content = document.getElementById('content');
        content.classList.toggle('hidden');
    });
});