
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


function mostrarTabuada() {
    // Solicita
    var numero = parseInt(prompt("Digite um número para ver sua tabuada:"));

    // Verifica 
    if (isNaN(numero)) {
        alert("Você não digitou um número válido.");
    } else {
        // Exibe 
        var tabuada = "";
        for (var i = 1; i <= 10; i++) {
            tabuada += numero + " x " + i + " = " + (numero * i) + "\n";
        }
        alert("Tabuada de " + numero + ":\n\n" + tabuada);
    }
}


mostrarTabuada();