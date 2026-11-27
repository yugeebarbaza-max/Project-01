
function showTime() {
  document.getElementById('currentTime').textContent = new Date().toLocaleString();
}
showTime();
setInterval(showTime, 1000);

var themeBtn = document.getElementById('themeToggle');

themeBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    themeBtn.textContent = 'Light mode';
  } else {
    themeBtn.textContent = 'Dark mode';
  }
});

var form = document.getElementById('contactForm');
var formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    formMessage.textContent = 'Please fill out all fields.';
    formMessage.className = 'error';
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.className = 'error';
    return;
  }

  formMessage.textContent = 'Thanks, ' + name + '! Your message was sent.';
  formMessage.className = 'success';
  form.reset();
});
