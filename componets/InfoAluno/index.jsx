import './style.css'

function InfoAluno() { 
    const nome ="joao silva" 
    const idade = 23 
    const curso ="desesenvolvimento de sistema"

    return(
        

        <div className="card-marvel"> 
            <div className="card-header">
                <h2>🛡️ Arquivo S.H.I.E.L.D.</h2> 
            </div>
    
            <div className="card-body">
                <p><strong>Codinome:</strong> {nome}</p> 
                <p><strong>Nível (Idade):</strong> {idade}</p> 
                <p><strong>Especialidade:</strong> {curso}</p> 
            </div>
        </div>
    );
}
        
    


export default InfoAluno