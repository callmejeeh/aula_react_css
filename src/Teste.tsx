import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size? ${(props) => props.fontSize || '20px'}
  `

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;
`

function Teste() {
  return (
    <div>
      Olá
      <Botao principal>Enviar</Botao>
      <Botao principal={false}>Cancelar</Botao>
      <BotaoPerigo principal>Não clique aqui</BotaoPerigo>
    </div>
  )
}

export default Teste
