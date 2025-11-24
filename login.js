
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }

    
    alert(`Welcome, ${email}! Redirecting to homepage...`);

   
    window.location.href = 'index.html';
});
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert("Please fill in both email and password.");
        return;
    }

    alert("Login successful!");
    window.location.href = "index.html";
});
 <script src="cart.js"></script>
