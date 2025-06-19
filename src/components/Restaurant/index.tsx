import hiokiSushi from '../../assets/images/hiokiSushi.png'
import laDolceVitaTrattoriaki from '../../assets/images/laDolceVitaTrattoria.png'
import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'
import { Card, Description, Infos, Rating, Title } from './styles'

// type Props = {
//   image: string
//   title: string
//   category: string
//   rating: string
//   highlight: boolean
//   description: string
// }

// {
//   image,
//   title,
//   category,
//   rating,
//   highlight,
//   description
// }

const Restaurant = () => (
  <Card>
    <img src={hiokiSushi} alt="Hioki Sushi" />
    <Infos>
      <Tag>Destaque da Semana</Tag>
      <Tag>Japonesa</Tag>
    </Infos>
    <div>
      <Title>Hioki Sushi</Title>
      <Rating>
        <span>4.9</span>
        <img src={estrela} alt="Estrela" />
      </Rating>
    </div>
    <Description>
      Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
      frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
      rápida, embalagens cuidadosas e qualidade garantida. <br /> Experimente o
      Japão sem sair do lar com nosso delivery!
    </Description>
    <button>Saiba mais</button>
  </Card>
)

export const Restaurant2 = () => (
  <Card>
    <img src={laDolceVitaTrattoriaki} alt="La Dolce Vita Trattoria" />
    <Infos>
      <Tag>Italiana</Tag>
    </Infos>
    <div>
      <Title>La Dolce Vita Trattoria</Title>
      <Rating>
        <span>4.6</span>
        <img src={estrela} alt="Estrela" />
      </Rating>
    </div>
    <Description>
      A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
      Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo
      no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor
      inesquecível. Peça já!
    </Description>
    <button>Saiba mais</button>
  </Card>
)

export default Restaurant
