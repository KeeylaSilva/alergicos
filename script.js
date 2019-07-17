let cardDeCarne = document.querySelector('#Carnes');
let cardDeGraos = document.querySelector('#Graos');
let cardTemperos = document.querySelector('#Temperos');
let cardMedicamentos = document.querySelector('#Medicamentos');
let cardOcular = document.querySelector('#Ocular');
let cardRespiratorios = document.querySelector('#Respiratorios');

fetch('http://localhost:3000/alergias')

.then(response =>{

    return response.json()
    
}
 ).then((alergias)=>{
   console.log(alergias)
    for(let i = 0; i < alergias.length; i++){
        switch(alergias[i].tipo){
            case 'Carnes':
            let liCarnes = document.createElement('li');
            liCarnes.innerHTML = alergias[i].descricao
            cardDeCarne.appendChild(liCarnes);
            break;
            case 'Grãos':
            let liGraos = document.createElement('li');
            liGraos.innerHTML = alergias[i].descricao
            cardDeGraos.appendChild(liGraos);
            break;
            case 'Temperos':
              let liTemperos = document.createElement('li');
              liTemperos.innerHTML = alergias[i].descricao
              cardTemperos.appendChild(liTemperos);
              break;
              case 'Respiratórios':
                let liRespiratorios = document.createElement('li');
                liRespiratorios.innerHTML = alergias[i].descricao
                cardRespiratorios.appendChild(liRespiratorios);
                break;
                case 'Medicamentos':
                  let liMedicamentos = document.createElement('li')
                  liMedicamentos.innerHTML = alergias[i].descricao
                  cardMedicamentos.appendChild(liMedicamentos);
                  break;





        }

    }

}
 )


// const container = document.querySelector('.row align-items-stretch');
// fetch('http://localhost:3000/alergias')
//   .then((response) =>{
//     return response.json();
//   })
//   .then((alergias) =>{
    
//     alergias.forEach(tipo => {
//       const mediaItem = document.getElement('li');
//       mediaItem.setAttribute('class', 'unit-4 d-block');
//       mediaItem.innerHTML = `
//       <div>
//                 <h3>${tipo.nome}</h3>
//                 <ul>
//                   <li><${tipo.descricao}/li>
//                 </ul>`

//         container.appendChild(mediaItem);
//     }
//     )
//   }
//   )
//   .catch((erro)=>{
//     console.log(erro)
//   })