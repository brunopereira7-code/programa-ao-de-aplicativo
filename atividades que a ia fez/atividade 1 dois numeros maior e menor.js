function calcularDoisNumeros(n1, n2) {
    let soma = n1 + n2;
    let media = soma / 2;
    let produto = n1 * n2;
    let maior, menor;

    // Estrutura de condição
    if (n1 > n2) {
        maior = n1;
        menor = n2;
    } else {
        maior = n2;
        menor = n1;
    }

    console.log(`Soma: ${soma}, Média: ${media}, Produto: ${produto}`);
    console.log(`Maior: ${maior}, Menor: ${menor}`);
}