function gerarTabuada(){
    const numeroInput=document.getElementById("numeroInput");
    let numero=parseInt(numeroInput.value);

/* ---------------------------------------------------------------------------------------------------------------------- */
    const resultadoDiv=document.getElementById("resultadoTabuada");
    resultadoDiv.innerHTML="";
    
/* ---------------------------------------------------------------------------------------------------------------------- */

    if(isNaN(numero) || numero === null || numero ===""){
        resultadoDiv.innerHTML="<p>por favor digite um numero valido</p>"
        return;


    }
/* ---------------------------------------------------------------------------------------------------------------------- */
    //adicionar titulo na tabuada
    resultadoDiv.innerHTML +=`<h2>tabuada do numero ${numero}</h2>`;
    
/* ---------------------------------------------------------------------------------------------------------------------- */

    //laço de repetiçao pra gerar tabuada
    for (let i = 1; i <= 10; i++) {
        let resultado= numero * i;
        resultadoDiv.innerHTML += `<p>${numero} x ${i}= ${resultado}</p>` ;

        
    }

}

/* ---------------------------------------------------------------------------------------------------------------------- */
const botaoGerar=document.getElementById("btngerar");
botaoGerar.addEventListener("click",gerarTabuada);
