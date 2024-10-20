
var repostaDoWhile = true; //resposta para isso
// Matrizes
var armazenamentoEleitor = {
    tituloEleitor: [],
    prefeitoVotado: [],
    vereadorVotado: [],
};
var armazenamentoEleitorFraude = {
    prefeitoVotadoFraude: [],
    vereadorVotadoFraude: [],
};

// Variaveis de controle
var valorRotativo = 0,
    contNulo = 0,
    vContnulo = 0,
    resposta = true,
    eleitor,
    senha;

// variaveis quantitativas prefeitos
var quantidadeDeVotos = 0,
    zeVotosReais = 0,
    anaVotosReais = 0,
    pNuloVotosFraudados = 0,
    pNuloVotosReais = 0,
    zeVotosfraudados = 0;
// Variaveis quantitativas vereador
var claudinhoVotosReais = 0,
    bochechaVotosReais = 0,
    vNuloVotosFraudados = 0,
    vNuloVotosReais = 0,
    claudinhoVotosfraudados = 0;

function verListaDeEleitores() {
    if (armazenamentoEleitor.tituloEleitor.includes(eleitor)) {
        alert("Eleitor ja cadastrado");
    } else {
        armazenamentoEleitor.tituloEleitor.push(eleitor);
        respostaDoWhile = false;
    }
}
function voto() {
    
    respostaDoWhile = true;
    let respostaWhile = true;
    while (respostaWhile == true) {
        do {
            eleitor = prompt("Digite o titulo: ");
            verListaDeEleitores();
        } while (respostaDoWhile == true);
        quantidadeDeVotos += 1;
        let opcaoVoto = prompt("Qual seu voto para prefeito: ");
        switch (opcaoVoto) {
            case "11":
                armazenamentoEleitor.prefeitoVotado.push("Zé");
                armazenamentoEleitorFraude.prefeitoVotadoFraude.push("Zé");
                zeVotosReais += 1;
                zeVotosfraudados += 1;
                respostaWhile = false;
                break;
            case "12":
                armazenamentoEleitor.prefeitoVotado.push("Ana");
                armazenamentoEleitorFraude.prefeitoVotadoFraude.push("Ana");
                anaVotosReais += 1;
                respostaWhile = false;
                break;
            case "00":
                if (contNulo == 4) {
                    armazenamentoEleitor.prefeitoVotado.push("Nulo");
                    armazenamentoEleitorFraude.prefeitoVotadoFraude.push("Zé");
                    pNuloVotosReais += 1;
                    zeVotosfraudados += 1;

                    contNulo = 0; // zera a condição de fraude
                    respostaWhile = false;
                } else {
                    armazenamentoEleitor.prefeitoVotado.push("Nulo");
                    armazenamentoEleitorFraude.prefeitoVotadoFraude.push("Nulo");
                    pNuloVotosReais += 1;
                    pNuloVotosFraudados += 1;
                    contNulo += 1;
                    respostaWhile = false;
                }
                break;
            default:
                alert("Opção inválida");
                quantidadeDeVotos -= 1;
                let ultimoEleitor = armazenamentoEleitor.tituloEleitor.pop();
                console.log("Eleitor: " + ultimoEleitor+" foi apagado");
        }
    }

    let respostaWhile2 = true;
    while (respostaWhile2 == true) {
        let opcaoVoto = prompt("Qual seu voto para vereador: ");
        switch (opcaoVoto) {
            case "11222":
                armazenamentoEleitor.vereadorVotado.push("Claudinho");
                armazenamentoEleitorFraude.vereadorVotadoFraude.push("Claudinho");
                claudinhoVotosReais += 1;
                claudinhoVotosfraudados += 1;
                respostaWhile2 = false;
                break;
            case "12222":
                armazenamentoEleitor.vereadorVotado.push("Bochecha");
                armazenamentoEleitorFraude.vereadorVotadoFraude.push("Bochecha");
                bochechaVotosReais += 1;
                respostaWhile2 = false;
                break;
            case "00000":
                if (vContnulo == 4) {
                    armazenamentoEleitor.vereadorVotado.push("Nulo");
                    armazenamentoEleitorFraude.vereadorVotadoFraude.push("Claudinho");
                    vNuloVotosReais += 1;
                    claudinhoVotosfraudados += 1;

                    vContnulo = 0; // zera a condição de fraude
                    respostaWhile2 = false;
                } else {
                    armazenamentoEleitor.vereadorVotado.push("Nulo");
                    armazenamentoEleitorFraude.vereadorVotadoFraude.push("Nulo");
                    vNuloVotosReais += 1;
                    vNuloVotosFraudados += 1;
                    vContnulo += 1;
                    respostaWhile2 = false;
                }
                break;
            default:
                alert("Opção inválida");
                console.log("Quantidade de votos: "+quantidadeDeVotos);
        }
    }
    console.log(`O eleitor ${armazenamentoEleitor.tituloEleitor[valorRotativo]} votou para prefeito: ${armazenamentoEleitor.prefeitoVotado[valorRotativo]} o voto fraudado foi ${armazenamentoEleitorFraude.prefeitoVotadoFraude[valorRotativo]}`);
console.log(`Ze: ${zeVotosReais} \nAna: ${anaVotosReais} \nNulo: ${pNuloVotosReais} \nZefraudado: ${zeVotosfraudados} \nNuloFraudado: ${pNuloVotosFraudados} \nContador Pnulo: ${contNulo} \nContador Vnulo: ${vContnulo}`);
    console.log("Eleitor "+eleitor);
    valorRotativo += 1;
}

function imprimirReal() {
    var conteudoRealLoop;
    var conteudoReal =`Quantidade de votos prefeito: ${quantidadeDeVotos} <br>Zé: ${zeVotosReais};<br>Ana: ${anaVotosReais}<br>Nulo: ${pNuloVotosReais} <br><br><br><br><br> Quantidade de votos vereador: ${quantidadeDeVotos} <br>Claudinho: ${claudinhoVotosReais};<br>Bochecha: ${bochechaVotosReais}<br>Nulo: ${vNuloVotosReais} <br><br><br><br><br>`
    

    for (let i = 0; i < quantidadeDeVotos; i++) {
        conteudoReal += `O eleitor ${armazenamentoEleitor.tituloEleitor[i]}:<br>Votou para prefeito: ${armazenamentoEleitor.prefeitoVotado[i]}<br>Votou para vereador: ${armazenamentoEleitor.vereadorVotado[i]}<br><br>`
    }

    conteudoReal +=("<br><br><br><br><br><br><br><br><br><br><br>");
    return conteudoReal;
}

function imprirmirFraude() {
    var conteudoFalso = `Quantidade de votos para prefeito: ${quantidadeDeVotos} <br>Zé: ${zeVotosfraudados};<br>Ana: ${anaVotosReais}<br>Nulo: ${pNuloVotosFraudados} <br><br><br><br><br> Quantidade de votos para vereador: ${quantidadeDeVotos} <br>Claudinho: ${claudinhoVotosfraudados};<br>Bochecha: ${bochechaVotosReais}<br>Nulo: ${vNuloVotosFraudados} <br><br><br><br><br>`

    for (let i = 0; i < quantidadeDeVotos; i++) {
        conteudoFalso += `O eleitor ${armazenamentoEleitor.tituloEleitor[i]}<br>Votou para prefeito: ${armazenamentoEleitorFraude.prefeitoVotadoFraude[i]}<br>Votou para vereador: ${armazenamentoEleitorFraude.vereadorVotadoFraude[i]}<br><br>`
    }
    return conteudoFalso;
}

function impressaoDeVotos(){
    var novaJanela = window.open(" ", "_blank");
    senha = prompt("Digite a senha: ");
    if (senha == "123") {
        var relatorioreal = imprimirReal();
        novaJanela.document.write(relatorioreal);
        novaJanela.document.write("<br>=====================================================<br>")
        //IMPRESSÃO DUPLA PORQUE EU NÃO TENHO UM BANCO DE DADOS PARA SALVAR
        var relatoriofalso = imprirmirFraude();
        novaJanela.document.write(relatoriofalso);
        resposta = false;
    } else if (senha == "321") {
        imprirmirFraude();
        resposta = false;
    } else {
        alert("Senha inválida");
    }
};


/*
while (resposta == true) {
    let escolha = parseInt(
        prompt(
            "O que deseja fazer? \n\n1. Votar\n2. Ver relação de votos"
        )
    );
    switch (escolha) {
        case 1:
            voto();
            break;
        case 2:
            senha = prompt("Digite a senha: ");
            if (senha == "123") {
                imprimirReal();
                //IMPRESSÃO DUPLA PORQUE EU NÃO TENHO UM BANCO DE DADOS PARA SALVAR
                document.write("<br>=====================================================<br>")
                imprirmirFraude();
                resposta = false;
            } else if (senha == "321") {
                imprirmirFraude();
                resposta = false;
            } else {
                alert("Senha inválida");
            }
            break;
        default:
            alert("Opção inválida");
    }
}
*/