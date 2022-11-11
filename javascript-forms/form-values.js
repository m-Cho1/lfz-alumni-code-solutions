const $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const values = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value
  };
  console.log('values: ', values);
  $contactForm.reset();
});
