import { ThemeProvider } from 'styled-components'
import Titulo from './Components/Title/Index'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import Sobre from './containers/Sobre/index'
import Projetos from './containers/Projetos'
import temaLight from './Themes/Light'
import temaDark from './Themes/Dark'
import { useState } from 'react'

function App() {
  const [temTemaDark, settemTemaDark] = useState(false)

  function trocaTema() {
    settemTemaDark(!temTemaDark)
  }

  return (
    <ThemeProvider theme={temTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
