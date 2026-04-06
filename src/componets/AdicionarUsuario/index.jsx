import { useState } from 'react'
import './style.css' 

export default function AdicionarUsuario() { 
    const [nome,setNome] = useState('') 
    const [email,setEmail] = useState('') 
    const [listaDeUsuario,setListaDeUsuarios] = useState([]) 

    const handlerAdicionarUsuario = (event) => {
        event.preventDefault() 

        if(nome && email){
            setListaDeUsuarios([...listaDeUsuario,{nome,email}]) 
            setNome('')
            setEmail('') 
        }
    } 

    return(
        <div className='formulario'> 
            <h2>Adicionar Usuario</h2> 
            <form onSubmit={handlerAdicionarUsuario}>
                {/* Campo de Nome (corrigido para setNome) */}
                <input
                 type="text" 
                 placeholder='Nome'
                 value={nome}
                 onChange={(e) => setNome(e.target.value)}
                /> 

                {/* Campo de Email Novo */}
                <input
                 type="email" 
                 placeholder='E-mail'
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                /> 

                <button type='submit'>Adicionar</button>
            </form> 
            <hr /> 

            <h2>Usuarios Adicionados</h2> 
            <ul>
                {listaDeUsuario.map((usuario,index) =>(
                    <li key={index}> 
                        {usuario.nome} - {usuario.email} 
                    </li>  
                ))}
            </ul>
        </div>
    )
}