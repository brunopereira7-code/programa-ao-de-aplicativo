//vetores 
const lista_De_Nomes=['marta','jose','maria'] 

console.log("exibindo todos os elementos") 
console.log(lista_De_Nomes)

//posiçao em computaçao começa com 0

console.log("\nExibindo apenas o primeiro elemento:")
console.log(lista_De_Nomes[0]) 

console.log("\nAdiconar um elemento:")
lista_De_Nomes.push("marilia")
console.log(lista_De_Nomes) 

//removendo no indice 1,remover 
console.log("\nRemovendo um elemento")
lista_De_Nomes.splice(2,1)
console.log(lista_De_Nomes) 

lista_De_Nomes.splice(1,1) 
console.log(lista_De_Nomes) 

console.log("\nremovendo apenas o ultimo elemento") 
lista_De_Nomes.pop()
console.log(lista_De_Nomes)

console.log("\nremovendo apena o primeiro elemento") 
lista_De_Nomes.shift()
console.log(lista_De_Nomes)

