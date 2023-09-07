
// informações
var autor = "Adriano de Sena Mendonça";
var palavraChave = "JavaScript";
var descricao = "Atividades sobre JavaScript";
var tituloPagina = "JavaScript";

// Imprimindo as informações
console.log("Autor: " + autor);
console.log("Palavra-chave: " + palavraChave);
console.log("Descrição: " + descricao);
console.log("Título da Página: " + tituloPagina);


function verificarNumero() {
    // Solicita ao usuário que insira um número inteiro
    var numero = parseInt(prompt("Digite um número inteiro:"));

    // Verifica se o número é positivo, negativo ou zero
    if (isNaN(numero)) {
        alert("Você não digitou um número válido.");
    } else if (numero > 0) {
        alert("O número " + numero + " é positivo.");
    } else if (numero < 0) {
        alert("O número " + numero + " é negativo.");
    } else {
        alert("O número " + numero + " é igual a zero.");
    }
}

// Chame a função para iniciar a verificação
verificarNumero();