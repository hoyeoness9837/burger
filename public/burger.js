document.getElementById('fe-addburger').addEventListener('click', (event) => {
  event.preventDefault();
  axios
    .post('/api/burgers', {
      burger_name: document.getElementById('fe-burgername').value,
      devoured: 0,
    })
    .then(({ data }) => {
      let burgerElem = document.createElement('li');
      burgerElem.innerHTML = `
${document.getElementById('fe-burgername').value}
<button class="devourBurger" data-id="${data.insertId}">Devour it !</button>`;
      document.getElementById('fe-burgers').append(burgerElem);
    });
});

document.addEventListener('click', (event) => {
  if (event.target.className === 'devourBurger') {
    axios
      .put(`/api/burgers/${event.target.dataset.id}`, { devoured: 1 })
      .then(() => {
        let devourElem = document.createElement('li');
        devourElem.innerHTML = `${event.target.value}`;
        document.getElementById('fe-devoured').append(devourElem);
        event.target.parentNode.remove();
      });
  }
});
