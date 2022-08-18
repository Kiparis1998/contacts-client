const contacts = document.querySelector('.contacts');

export function renderItem({ name, id, number }) {
  const li = document.createElement('li');
  li.classList.add('contact');

  li.innerHTML = `
        <h2 class='contact__title'>
        ${name}
        </h2>
        <a href='tel:${number}'>${number}</a>
    `;

  contacts.append(li);
}
