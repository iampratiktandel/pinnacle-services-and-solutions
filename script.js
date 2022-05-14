let element = (id) => document.querySelector(id);

function onSubmit() {
  const name = element('#name');
  const phone = element('#phone');
  const email = element('#email');
  const password = element('#password');
  const confirmPassword = element('#confirm-password');
  const nameError = element('#name-error-msg');
  const phoneError = element('#phone-error-msg');
  const emailError = element('#email-error-msg');
  const passwordError = element('#password-error-msg');
  const confirmPasswordError = element('#confirm-password-error-msg');

  if (!name.value) {
    nameError.innerHTML = 'Name is required';
  } else {
    nameError.innerHTML = '';
  }

  if (!phone.value) {
    phoneError.innerHTML = 'Phone is required';
  } else {
    if (phone.value.length < 10) {
      phoneError.innerHTML = 'Phone should consists of 10 digits';
    } else {
      phoneError.innerHTML = '';
    }
  }
  
  if (!email.value) {
    emailError.innerHTML = 'Email is required';
  } else {
    emailError.innerHTML = '';
  }

  if (!password.value) {
    passwordError.innerHTML = 'Password is required';
  } else {
    passwordError.innerHTML = '';
  }

  if (!confirmPassword.value) {
    confirmPasswordError.innerHTML = 'Confirm Password is required';
  } else {
    confirmPasswordError.innerHTML = '';
  }

  if (password.value.length && confirmPassword.value.length) {
    if (password.value !== confirmPassword.value) {
      confirmPasswordError.innerHTML = 'Passwords do not match';
    } else {
      confirmPasswordError.innerHTML = '';
    }
  }
  // nameError.innerHTML = !name.value ? 'Name is required' : '';
  // phoneError.innerHTML = !phone.value ? 'Phone is required' : '';
  // emailError.innerHTML = !email.value ? 'Email is required' : '';
}
