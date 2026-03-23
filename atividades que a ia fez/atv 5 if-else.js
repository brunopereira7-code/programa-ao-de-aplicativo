function verificarAposentadoria(codigo, anoNascimento, tempoTrabalho) {
    let anoAtual = 2026; 
    let idade = anoAtual - anoNascimento;

    console.log(`Empregado: ${codigo}, Idade: ${idade}, Tempo de Trabalho: ${tempoTrabalho}`);

    // O símbolo || significa "OU"
    if (idade >= 65 || tempoTrabalho >= 30) {
        console.log("Requerer aposentadoria");
    } else {
        console.log("Não requerer aposentadoria");
    }
}