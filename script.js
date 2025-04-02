function onClick() {
    document.getElementById("button").onclick = function () {
        let idade = prompt("Quantos anos você tem?");

        if (idade < 18) {
            alert("Hmm... Você é menor de idade! Infelizmente não pode jogar este jogo.");
            return; // Para sair da função se o jogador for menor de idade
        }

        let escolhaJogador = prompt("Faça a sua escolha! 1- Pedra, 2 - Papel ou 3 - Tesoura.");
        let escolhaComputador = Math.floor(Math.random() * 3) + 1;

        if (escolhaJogador == escolhaComputador) {
            alert("Empate!!");
        } else if (escolhaJogador == 1) {
            if (escolhaComputador == 2) {
                alert("Você perdeu! O computador escolheu papel.");
            } else { // escolhaComputador == 3
                alert("Você venceu! O computador escolheu tesoura.");
            }
        } else if (escolhaJogador == 2) {
            if (escolhaComputador == 1) {
                alert("Você ganhou! O computador escolheu pedra.");
            } else { // escolhaComputador == 3
                alert("Você perdeu! O computador escolheu tesoura.");
            }
        } else if (escolhaJogador == 3) {
            if (escolhaComputador == 1) {
                alert("Você perdeu! O computador escolheu pedra.");
            } else { // escolhaComputador == 2
                alert("Você venceu! O computador escolheu papel.");
            }
        } else {
            alert("Escolha inválida! Por favor, escolha 1, 2 ou 3.");
        }
    }
}