import './style.css' 

function Mensagem() { 
    return(
        // Comando HTML. id é pra javascript, class é pra css
        <div className='mensagem'>
            <h1>Componentes</h1> 
            <p>estes é um componente com mensagem simples</p>


            <div className='mensagem2'> 
                <h2>componentes 2</h2> 
                <p>segundo mensagem</p>

            </div>


        </div>

        
    )
    
}

export default Mensagem