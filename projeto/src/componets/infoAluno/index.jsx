import './style.css'

function InfoAluno() {

    const nome="joao  silva"
    const idade= 23
    const curso= "Desennvolvimento de sistema"


return(
    <div className='info-aluno'>
        <h2>informaçoes do aluno:</h2>
        <p>nome:{nome}</p>
        <p>idade: {idade}</p>
        <p>curso:{curso}</p>

    </div>
)
}
export default InfoAluno