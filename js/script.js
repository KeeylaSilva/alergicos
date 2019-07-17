const container = document.querySelector('.row align-items-stretch');
fetch('http://localhost:3000/alergias')
  .then((response) =>{
    return response.json();
  })
  .then((alergias) =>{
    alergias.forEach(tipo => {
      const mediaItem = document.getElement('li');
      appendChild.

      mediaItem.setAttribute('class', 'unit-4 d-block');
      mediaItem.innerHTML = `
      <div>
                <h3>${tipo.nome}</h3>
                <ul>
                  <li><${tipo.descricao}/li>
                </ul>`

        container.appendChild(mediaItem);
    }
    )
  }
  )
  .catch((erro)=>{
    console.log(erro)
  })