document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent actual form submission for now

  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const errorMessage = document.getElementById('errorMessage');

  let hasError = false;

  // Reset styles
  username.classList.remove('error');
  password.classList.remove('error');
  errorMessage.textContent = '';

  // Validate username
  if (username.value.trim() === '') {
    username.classList.add('error');
    hasError = true;
  }

  // Validate password
  if (password.value.trim() === '') {
    password.classList.add('error');
    hasError = true;
  }

  if (hasError) {
    errorMessage.textContent = 'لطفاً همه فیلدها را پر کنید.';
  } else {
    // To simulate a login for now
    alert('ورود موفقیت‌آمیز بود!');
    // this.submit();
  }
});
