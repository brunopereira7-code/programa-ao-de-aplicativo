//exemplo com vetores de nomes
const listaDeNomes=["ana","maria","joana"]

// exemplo com vetor de numeros 
const listaDeNumeros=[1,2,3,4,5]

// vetor de objetos 


const listaDeUsuarios=[
    {nome:"ana",idade:25},
    {nome:"maria",idade:10},
    {nome:"paulo",idade:45}

]
// forEach é uma funçao de laço de repetiçao

console.log("\nexibindo todos os usuarios do vetor")
listaDeUsuarios.forEach(usuario =>{ 
    console.log(`${usuario.nome} tem ${usuario.idade} anos`)
    console.log("Senai")
})

//antigo
console.log("\nexibindo todos os usuarios do vetor")
for (let i = 0; i < listaDeUsuarios.length; i++) {
    console.log(`${listaDeUsuarios[i].nome} tem ${listaDeUsuarios[i].idade} anos `)
    
}


//use as {} caso precise de mais de uma linha
console.log("\nfiltrando maiores de 18 anos")
const maioridade=listaDeUsuarios.filter(usuario=> usuario.idade >= 18)
maioridade.forEach(usuario=>
    console.log(`${usuario.nome} tem ${usuario.idade}`)
) 




console.log("\nfiltrando menores de 18anos")
const menoridade=listaDeUsuarios.filter(usuario =>  usuario.idade <=18)
menoridade.forEach(usuario =>
    console.log(`${usuario.nome} tem ${usuario.idade}`)
) 


console.log("\nfiltrando apenas numeros pares") 
const pares=listaDeUsuarios.filter(n => n % 2 == 0) 
console.log(pares) 

console.log("\nfiltrando os nomes com foach") 
listaDeUsuarios.forEach(usuario =>{
    console.log(`${usuario.nome}`)
    

}) 
// tiver mais de uma palavra em si a primeira é maiscula.style: camel case

console.log("\nlista de usuarios,mostrando apenas nomes") 
const nomes= listaDeNomes.map(u => u.nome) 
nomes.forEach(nome=> console.log(`nome: ${nome}`)) 
                                            // u => seria o que?
console.log("\nlista de usuarios,encontre um usuario") 
const usuarioEncontrado=listaDeUsuarios.find(u => u.nome =="ana") 
console.log(usuarioEncontrado)
console.log(`nome: ${usuarioEncontrado.nome}\nidade:${usuarioEncontrado.idade}`) 

console.log("\nlista de usuarios,encontre um usuario com idade de 45 anos ") 
const usuarioIdade=listaDeUsuarios.find(u => u.idade===45)
console.log(usuarioIdade)
console.log(`nome ${usuarioIdade.nome}\nidade ${usuarioIdade.idade}`) 

//quando tem duas variaveis precisa mas duas aspas
console.log("\nlista de usuarios somando todas as idades ") 
const somaIdades=listaDeUsuarios.reduce((total,usuario)=> total + usuario.idade,0)
console.log(somaIdades) 


// function reduce(total,usuario) { 
// }




