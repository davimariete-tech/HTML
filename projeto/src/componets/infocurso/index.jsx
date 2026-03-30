import { useState } from 'react'
import './style.css'

function InfoCurso(){
    const[nome, setNome]= useState("programas de aplicativos")
    const[cargaHoraria, setcargahoraria]= useState(90)
    const[Local,stLocal]=useState("senai")


return (
    <div className='info-curso'>
        <h2>Dados do curso:</h2>
        <p>Nome:{nome}</p>
        <p>carga horaria: {cargaHoraria}</p>
        <p>Local:{Local}</p>
</div>
)


}

export default InfoCurso