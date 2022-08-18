import { renderItem } from './render.js';
import { hostname, request } from './request.js';

document.addEventListener('DOMContentLoaded', async () => {
  const contacts = await request(hostname);
  const form = document.querySelector('form');

  Object.values(contacts).forEach(renderItem);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const body = new FormData(form);

    const isValid = [...form.elements]
      .filter((input) => input.tagName === 'INPUT')
      .every((input) => checkInput(input));

    if (isValid) {
      const contact = await request(hostname, 'POST', body);
      renderItem(contact);
      form.reset();
    }
  });

  form.addEventListener('change', ({ target }) => {
    checkInput(target);
  });
});

function checkInput(input) {
  const { min, max } = input.dataset;

  if (!input.value) {
    input.nextElementSibling.innerText = 'This field is required';

    return false;
  }

  if (input.value.length < min) {
    input.nextElementSibling.innerText = `This field has to have the value at least - ${min}`;

    return false;
  }

  if (input.value.length > max) {
    input.nextElementSibling.innerText = `This field has to have the value no more than - ${max}`;

    return false;
  }

  input.nextElementSibling.innerText = '';

  return true;
}
