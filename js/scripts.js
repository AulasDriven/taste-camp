const receitas = [{
  titulo: "Ovo frito",
  ingredientes: "Ovo, óleo e sal",
  preparo: "Oléo da frigideira e fogo baixo no fogão. Quebra o ovo na manhazinha e taca na frigideira. Joga um salzinho pra dar um gostinho top e espera um pouquinho até fritar."
}];

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

  if(titulo && ingredientes && preparo) {
    const novaReceita = { titulo: titulo, ingredientes: ingredientes, preparo: preparo };
    receitas.push(novaReceita);
    renderizarReceitasMenu();
  } else {
    alert("Precisa preencher tudo bonitinho!"); 
  }

}

function adicionarReceitaPagina() {
  paginaAdicionar.classList.remove('escondido');
  paginaVerReceita.classList.add('escondido');
}

function mostrarReceitaPagina() {
  paginaAdicionar.classList.add('escondido');
  paginaVerReceita.classList.remove('escondido');
}

renderizarReceitasMenu();
renderizarDetalhesReceita(0);