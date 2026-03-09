// novos recursos ES6 
// estudar isso ES6

//vetor numeros 
const lista_numeros=[1,2,3,4,5]

console.log("exibindo numeros do vetor") 
console.log(lista_numeros)

console.log("\nmultiplicando numero do vetor:")
const dobrados= lista_numeros.map(n => n * 2)
console.log(dobrados) 
                                // essas duas funçoes tem o n => n o que muda é o que vem depois
console.log("\nfiltrar numeros pares do vetor:") 
const pares =lista_numeros.filter(n => n % 2 == 0) 
console.log(pares) 

console.log("\nsomando todos os numeros do vetor:") 
const soma=lista_numeros.reduce((soma,atual)=> soma + atual,20)
console.log(soma) 









