import Avatar from '../../Components/Avatar'
import Paragrafo from '../../Components/Paragrafo/Index'
import Titulo from '../../Components/Title/Index'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={20}>Jéssica N Thuller</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          callmejeeh
        </Paragrafo>
        <Descricao fontSize={12}>UI/UX Designer</Descricao>
        <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
