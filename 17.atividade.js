//qual seria a junçao dessa estrutura?
const listaDeAlunos=[
    {nome:"ana" ,nota:5.0},
    {nome:"bruno", nota:7.0},
    {nome:"carla" ,nota:10},
    {nome:"andrea" ,nota:6.0},
    {nome:"marta" ,nota:4.0}
    
];
console.log("encontre a aluna marta e mostre o nome e a media dela") 
const nomeEncontrar=listaDeAlunos.find(u => u.nome=="marta")
console.log(nomeEncontrar)
console.log(`nome:${nomeEncontrar.nome}\n nota ${nomeEncontrar.nota}`)

console.log("mostre a media geral da turma") 
const notas=listaDeAlunos.map(u => u.nota)
notas.forEach(nota=> console.log(`nota${nota}`))


console.log("mostre o nome e a nota dos alunos com nota abaixo de 7.0") 
const alunos=listaDeAlunos.filter(u => u.nota<7 );
alunos.forEach(aluno=>{
    console.log(`nome:${aluno.nome}\nnota:${aluno.nota}`);
});

console.log("mostre apenas o nome dos alunos com nota maior ou igual 7.0") 
const notaAluno=listaDeAlunos.filter(u=> u.nota >7)
notaAluno.forEach(notaAluno=>{
    console.log(`nome:${notaAluno.nome}\n nota : ${notaAluno.nota}`)
})
