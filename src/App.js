import React, { useEffect, useState } from 'react'
import Mensagem from './components/Mensagem'
import CrudUsuarios from './components/CrudUsuarios';

export default function App() {

  const nomes = ["joao henrique" , "bolsonaro" , "thal" , "resenha" , "fimose" , "pitoco" , "gu" ]

  const [contador, setContador ] = useState(0);
//funciona no mounting
  useEffect( () => {
   console.log("useEffect SEM dependencia.")
  }, [] );
//funciona no updating
  useEffect( () => {
  console.log("useEffect com dependencia", contador)
  }, [contador]  )

  useEffect( () => {
  return () => console.log("desmontado")
  }, [] ) 

  return (
    <div>

      <CrudUsuarios />
      <p>Teste React na Unifei</p>
      <Mensagem />
      <button onClick={() => setContador(contador+1)}>Clique aqui + </button>

      

    {nomes.map( (nome) => {
    return (<p>{nome}</p>)
     }) 
    }

    </div>
  )
}
