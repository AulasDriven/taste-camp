const receitas = [{
    titulo: "Ovo frito", ingredientes: "Ovo, óleo e sal", preparo: "Frita o ovo ae"
}];

// Populando menu
function renderizarReceitas() {
    const ulReceitas = document.querySelector(".receitas");
    ulReceitas.innerHTML = "";

    for(let i = 0; i < receitas.length; i++) {
        ulReceitas.innerHTML += `
            <li>
                <ion-icon name="fast-food-outline"></ion-icon>
                ${receitas[i].titulo}
            </li>   
        `;
    }
}

function adicionarReceita() {
    const titulo = document.querySelector(".nome-receita").value;
    const ingredientes = document.querySelector(".ingredientes-receita").value;
    const preparo = document.querySelector(".modo-preparo-receita").value;

    const novaReceita = { titulo: titulo, ingredientes: ingredientes, preparo: preparo };
    receitas.push(novaReceita);
    renderizarReceitas();
}

renderizarReceitas();