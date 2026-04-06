import { useState } from 'react'
import AdicionarUsuario  from './componets/AdicionarUsuario' 
import Footer  from './componets/Footer' 
import Header from './componets/Header'
import './App.css'

function App() {
  return (
    <>
      <div className='app'> 
        <Header/>
          <main>
            <AdicionarUsuario/>
          </main>
        <Footer />


      </div>

      

    </>
  )
}

export default App
