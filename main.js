const signInContainer = document.getElementById('sign-in-container');
const signUpContainer = document.getElementById('sign-up-container');
const goToSignup = document.getElementById('go-to-signup');
const goToSignin = document.getElementById('go-to-signin');

goToSignup.addEventListener('click', (e) => {
  e.preventDefault();
  signInContainer.classList.add('hidden');
  signUpContainer.classList.remove('hidden');
});

goToSignin.addEventListener('click', (e) => {
  e.preventDefault();
  signUpContainer.classList.add('hidden');
  signInContainer.classList.remove('hidden');
});