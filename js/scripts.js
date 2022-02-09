let receitas = []; // quero do servidor

// requisição
const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/tastecamp/receitas");
promise.then(promessaCumprida);

function promessaCumprida(resposta) {
  console.log(resposta);// receitas do servidor
  receitas = resposta.data;
  renderizarReceitasMenu();
  renderizarDetalhesReceita(0);
}

const paginaAdicionar = document.querySelector('.pagina.adicionar-receita');
const paginaVerReceita = document.querySelector('.pagina.receita');

function renderizarReceitasMenu() {
  const ulReceitas = document.querySelector(".receitas");
  ulReceitas.innerHTML = "";
  for (let i = 0; i < receitas.length; i++) {
    ulReceitas.innerHTML += `
        <li onClick='renderizarDetalhesReceita(${i})'>
            <ion-icon name="fast-food-outline"></ion-icon>
            ${receitas[i].titulo}
        </li>   
    `;
  }
}

function renderizarDetalhesReceita(indice) {  
  mostrarReceitaPagina();
  const tituloHTML = document.querySelector('.receita .titulo');
  const ingredientesHTML = document.querySelector('.receita .ingredientes .destaque');
  const modoPreparoHTML = document.querySelector('.receita .modo-de-preparo .destaque');

  tituloHTML.innerHTML = receitas[indice].titulo;
  ingredientesHTML.innerHTML = receitas[indice].ingredientes;
  modoPreparoHTML.innerHTML = receitas[indice].preparo;
}

function adicionarReceita() {
  const titulo = document.querySelector(".nome-receita").value;
  const ingredientes = document.querySelector(".ingredientes-receita").value;
  const preparo = document.querySelector(".modo-preparo-receita").value;

  if(titulo && ingredientes && preparo) { // estão preenchidos bonitinho?
    const novaReceita = { 
      preparo: preparo, 
      titulo: titulo, 
      ingredientes: ingredientes 
    };

    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/tastecamp/receitas", novaReceita);

    promise.then(promessaReceitaNovaCumprida); // feliz
    promise.catch(promessaReceitaNovaFalhou); // infeliz
    
    receitas.push(novaReceita);
    renderizarReceitasMenu();
  } else {
    alert("Precisa preencher tudo bonitinho!"); 
  }

}

function promessaReceitaNovaFalhou(erro) {
  alert("Vish, falhou a parada! Tente novamente!");
  console.log(erro.response);
}

function promessaReceitaNovaCumprida(resposta) {
  console.log(resposta);
}

function adicionarReceitaPagina() {
  paginaAdicionar.classList.remove('escondido');
  paginaVerReceita.classList.add('escondido');
}

function mostrarReceitaPagina() {
  paginaAdicionar.classList.add('escondido');
  paginaVerReceita.classList.remove('escondido');
}