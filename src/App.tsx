import Titulo from './Components/Title/Index'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import Sobre from './containers/Sobre/index'
import Projetos from './containers/Projetos'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
