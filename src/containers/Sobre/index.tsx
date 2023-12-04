import Titulo from '../../Components/Title/Index'
import Paragrafo from '../../Components/Paragrafo/Index'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil deleniti
      adipisci beatae, veritatis iste dolor obcaecati quod repudiandae officia
      perspiciatis magni optio corporis tempore laborum autem architecto itaque
      porro qui!
    </Paragrafo>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=callmejeeh&show_icons=true&theme=bear&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=callmejeeh&langs_count=16&layout=compact&theme=bear" />
    </GitHubSecao>
  </section>
)

export default Sobre
