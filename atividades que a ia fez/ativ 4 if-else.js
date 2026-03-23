function calcularMacas(quantidade) {
    let valorTotal = 0;

    if (quantidade < 12) {
        valorTotal = quantidade * 1.30;
    } else {
        valorTotal = quantidade * 1.00;
    }

    console.log(`O valor total da compra é: R$ ${valorTotal.toFixed(2)}`);
}