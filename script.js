let element = (id) => document.querySelector(id);

function onSubmit() {
  const name = element('#name');
  const phone = element('#phone');
  const email = element('#email');
  const nameError = element('#nameErrorMsg');
  const phoneError = element('#phoneErrorMsg');
  const emailError = element('#emailErrorMsg');

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

  
  // nameError.innerHTML = !name.value ? 'Name is required' : '';
  // phoneError.innerHTML = !phone.value ? 'Phone is required' : '';
  // emailError.innerHTML = !email.value ? 'Email is required' : '';
}
