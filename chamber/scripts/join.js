// Handle form submission and pass data to thankyou.html
document.getElementById('joinForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const mobilePhone = document.getElementById('mobile-phone').value;
    const orgName = document.getElementById('org-name').value;
    const timestamp = new Date().toISOString();

    // Redirect to thankyou.html with data in URL 
    const queryString = `?first-name=${encodeURIComponent(firstName)}&last-name=${encodeURIComponent(lastName)}&email=${encodeURIComponent(email)}&mobile-phone=${encodeURIComponent(mobilePhone)}&org-name=${encodeURIComponent(orgName)}&timestamp=${encodeURIComponent(timestamp)}`;
    
    window.location.href = `thankyou.html${queryString}`;
});
