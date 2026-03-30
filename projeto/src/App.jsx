
import './App.css'
import InfoAluno from './componets/infoAluno'
import InfoCurso from './componets/infocurso'
import Mensagem from './componets/Mensagens'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>bem vindo ao meu projeto</h1>
     <Mensagem/>
     <InfoCurso/>
     <InfoAluno/>
    </>
  )
}

export default App
