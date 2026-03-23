function verificarAprovacao(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;

    if (media < 7) {
        console.log(`Média: ${media.toFixed(1)} - Aluno Reprovado`);
    } else {
        console.log(`Média: ${media.toFixed(1)} - Aluno Aprovado`);
    }
} 


