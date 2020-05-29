document.getElementById('fe-addburger').addEventListener('click', (event) => {
  event.preventDefault();
  axios
    .post('/api/burgers', {
      burger_name: document.getElementById('fe-burgername').value,
    })
    .then(({ data }) => {
      let burgerElem = document.createElement('li');
      burgerElem.innerHTML = `
        ${document.getElementById('fe-burgername').value}
        <button class="devourBurger" data-id="${data.insertId}">Devour it!</button>
        `;
      document.getElementById('fe-burgers').append(burgerElem);
    });
});

document.addEventListener('click', (event) => {
  if (event.target.className === 'devourBurger') {
    axios.delete(`/api/burgers/${event.target.dataset.id}`).then(() => {
      event.target.parentNode.remove();
    });
  }
});
