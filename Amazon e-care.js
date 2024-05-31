 <script>
        document.getElementById('signUpBtn').addEventListener('click', function () {
            document.getElementById('signUpForm').style.display = 'block';
            document.getElementById('signInForm').style.display = 'none';
        });

        document.getElementById('signInBtn').addEventListener('click', function () {
            document.getElementById('signUpForm').style.display = 'none';
            document.getElementById('signInForm').style.display = 'block';
        });

        document.getElementById('signupForm').addEventListener('submit', function (event) {
            event.preventDefault();
            // Sign up logic here
            alert('Sign up successful!');
            window.location.href = 'help.html';
        });

        document.getElementById('signinForm').addEventListener('submit', function (event) {
            event.preventDefault();
            // Sign in logic here
            alert('Sign in successful!');
            window.location.href = 'help.html';
        });

        document.querySelector('.feedback-form').addEventListener('submit', function (event) {
            event.preventDefault();
            // Feedback form logic here
            alert('Feedback submitted!');
        });
    </script>
