function Filme(titulo, ano) {
    this.titulo = titulo;
    this.ano = ano;
}

let filmesParaAssistir = [];
let filmesAssistidos = [];

function adicionarFilme() {
    const titulo = prompt("Digite o título do filme:");
    const ano = parseInt(prompt("Digite o ano de lançamento:"));
    filmesParaAssistir.push(new Filme(titulo, ano));
    console.log("Filme adicionado com sucesso!");
}

function ordenarLista(criterio) {
    filmesParaAssistir.sort((a, b) => {
        if (criterio === 'titulo') {
            return a.titulo.localeCompare(b.titulo);
        } else if (criterio === 'ano') {
            return a.ano - b.ano;
        }
    });
    console.log("Lista ordenada por", criterio);
}

function pesquisarFilme() {
    const titulo = prompt("Digite o título do filme para pesquisar:");
    const filmeEncontrado = filmesParaAssistir.find(filme => filme.titulo === titulo);
    if (filmeEncontrado) {
        console.log("O filme", filmeEncontrado.titulo, "está na lista.");
    } else {
        console.log("O filme não foi encontrado na lista.");
    }
}

function marcarComoAssistido() {
    const titulo = prompt("Digite o título do filme para marcar como assistido:");
    const indice = filmesParaAssistir.findIndex(filme => filme.titulo === titulo);
    if (indice !== -1) {
        const filmeAssistido = filmesParaAssistir.splice(indice, 1)[0];
        filmesAssistidos.push(filmeAssistido);
        console.log("Filme", titulo, "marcado como assistido.");
    } else {
        console.log("Filme não encontrado na lista.");
    }
}



function removerFilme() {
    const titulo = prompt("Digite o título do filme para remover:");
    const indice = filmesParaAssistir.findIndex(filme => filme.titulo === titulo);
    if (indice !== -1) {
        filmesParaAssistir.splice(indice, 1);
        console.log("Filme", titulo, "removido da lista.");
    } else {
        console.log("Filme não encontrado na lista.");
    }
}


function exibirListas() {
    console.log("Filmes para assistir:");
    filmesParaAssistir.forEach(filme => {
        console.log("- ", filme.titulo, "(", filme.ano, ")");
    });

    console.log("\nFilmes assistidos:");
    filmesAssistidos.forEach(filme => {
        console.log("- ", filme.titulo, "(", filme.ano, ")");
    });
}

function menu() {
    let opcao;
    do {
        console.log("----- Gerenciador de Filmes -----");
        console.log("1. Adicionar filme");
        console.log("2. Ordenar lista");
        console.log("3. Pesquisar filme");
        console.log("4. Marcar como assistido");
        console.log("5. Remover filme");
        console.log("6. Exibir listas");
        console.log("0. Sair");

        opcao = parseInt(prompt("Escolha uma opção:"));

        switch (opcao) {
            case 1:
                adicionarFilme();
                break;
            case 2:
                const criterio = prompt("Ordenar por título (t) ou ano (a)?");
                ordenarLista(criterio);
                break;
            case 3:
                pesquisarFilme();
                break;
            case 4:
                marcarComoAssistido();
                break;
            case 5:
                removerFilme();
                break;
            case 6:
                exibirListas();
                break;
            default:
                if (opcao !== 0) {
                    console.log("Opção inválida.");
                }
        }
    } while (opcao !== 0);
}

menu();
