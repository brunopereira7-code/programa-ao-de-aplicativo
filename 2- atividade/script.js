// 1. Leitura do valor do input
function lerValorDoInput() {
    const input = document.getElementById("numero");
    return input.value.trim();
}

// 2. Validação do valor
function valorEhValido(valor) {
    // Retorna verdadeiro se o valor NÃO for vazio E for um número válido
    return valor !== "" && !isNaN(valor);
}

// 3. Conversão para número
function converterParaNumero(valor) {
    return parseInt(valor, 10);
}

// 4. Limpeza do resultado
function limparResultado() {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";
}

// 5. Exibição de mensagem de erro
function mostrarMensagemErro(mensagem) {
    const resultadoDiv = document.getElementById("resultado");
    // Usamos um estilo em vermelho só para dar um charme no erro!
    resultadoDiv.innerHTML = `<p style="color: red;">❌ ${mensagem}</p>`;
}

// 6. Adição do título da tabuada
function adicionarTituloTabuada(numero) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML += `<h2>🔢 Tabuada do número ${numero}</h2>`;
}

// 7. Adição de cada linha da tabuada
function adicionarLinhaTabuada(numero, multiplicador) {
    const resultadoDiv = document.getElementById("resultado");
    const resultado = numero * multiplicador;
    resultadoDiv.innerHTML += `<p>${numero} x ${multiplicador} = <strong>${resultado}</strong></p>`;
}

// 8. Função principal que orquestra tudo (O Maestro!)
function gerarTabuada() {
    // Passo A: Limpa a tela de cálculos anteriores
    limparResultado();

    // Passo B: Pega o que o usuário digitou
    const valor = lerValorDoInput();

    // Passo C: Valida. Se der erro, avisa e para o código (Freio de mão/Return)
    if (!valorEhValido(valor)) {
        mostrarMensagemErro("Por favor, digite um número válido!");
        return; 
    }

    // Passo D: Se chegou aqui, o valor é bom. Vamos converter para Matemática.
    const numero = converterParaNumero(valor);

    // Passo E: Começa a desenhar na tela
    adicionarTituloTabuada(numero);

    // Passo F: O Inspetor vai do 1 ao 10 montando as linhas
    for (let i = 1; i <= 10; i++) {
        adicionarLinhaTabuada(numero, i);
    }
}

// ==========================================
// LIGAÇÃO COM O BOTÃO (O "Ouvinte" de eventos)
// Isso deve ficar solto no final do arquivo, rodando apenas uma vez.
// ==========================================
const botaoGerar = document.getElementById("btngerar");
botaoGerar.addEventListener("click", gerarTabuada);