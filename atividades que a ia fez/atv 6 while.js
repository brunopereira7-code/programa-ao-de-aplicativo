function calcularNotasComValidacao() {
    let notas = []; // Criamos um Array (lista) vazia para guardar as 3 notas
    
    // Repetimos 3 vezes para pegar as 3 notas
    for (let i = 0; i < 3; i++) {
        let notaValida = false;
        let nota;

        // LAÇO DE REPETIÇÃO: Enquanto a nota não for válida, prende o usuário aqui
        while (notaValida === false) {
            // Pede a nota (o parseFloat transforma o texto digitado em número decimal)
            nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));

            if (nota >= 0 && nota <= 10) {
                notaValida = true; // Quebra o laço!
            } else {
                alert("Nota inválida! Deve ser entre 0 e 10. Tente novamente.");
            }
        }
        notas.push(nota); // Guarda a nota na nossa lista (Array)
    }

    // Calcula a média usando a nossa lista
    let media = (notas[0] + notas[1] + notas[2]) / 3;

    // Condição final
    if (media >= 7) {
        console.log(`Média ${media.toFixed(1)}: Aprovado`);
    } else if (media >= 5 && media < 7) {
        console.log(`Média ${media.toFixed(1)}: Recuperação`);
    } else {
        console.log(`Média ${media.toFixed(1)}: Reprovado`);
    }
}