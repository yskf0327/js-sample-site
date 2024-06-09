hamburgerButton = document.getElementById('js-hamburger-button');
hamburgerButton.addEventListener('click', () => {
  document.body.classList.toggle('is-opened');
});