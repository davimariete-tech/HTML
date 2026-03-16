function gerartabuada() {
    // 1. Obtendo o número do input
    const numeroInput = document.getElementById("numeroinput");
    // Correção: O correto é parseInt ou Number, e o nome era numeroInput
    let numero = parseInt(numeroInput.value);

    // 2. Elemento onde o resultado será exibido
    const resultadoDiv = document.getElementById("resultadotabuada");
    resultadoDiv.innerHTML = ""; // Limpa o resultado anterior

    // 3. Verificação de erro
    if (isNaN(numero)) {
        resultadoDiv.innerHTML = "<p>Por favor, digite um número válido.</p>";
        return; 
    }

    // 4. Adicionar título para a tabuada
    // Correção: Use crases `` para usar o ${numero}
    resultadoDiv.innerHTML += `<h2>Tabuada do número ${numero}</h2>`;

    // 5. Laço de repetição (O coração do código)
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = <strong>${resultado}</strong></p>`;
    }
}

// 6. Event Listener (O gatilho)
const botaoGerar = document.getElementById("btngerar");
// Correção: O nome da função deve ser igual ao declarado lá em cima
botaoGerar.addEventListener("click", gerartabuada);