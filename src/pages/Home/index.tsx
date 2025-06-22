import RestaurantsList from '../../components/RestaurantsList'
import Restaurant from '../../models/Restaurant'

import hiokiSushi from '../../assets/images/hiokiSushi.png'
import laDolceVitaTrattoriaki from '../../assets/images/laDolceVitaTrattoria.png'
import Hero from '../../components/Hero'

const catalogo: Restaurant[] = [
  {
    id: 1,
    image: hiokiSushi,
    title: 'Hioki Sushi',
    rating: '4.9',
    category: ['Destaque da Semana', 'Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. \n Experimente o Japão sem sair do lar com nosso delivery! '
  },
  {
    id: 2,
    image: laDolceVitaTrattoriaki,
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 2,
    image: laDolceVitaTrattoriaki,
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 2,
    image: laDolceVitaTrattoriaki,
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 2,
    image: laDolceVitaTrattoriaki,
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 2,
    image: laDolceVitaTrattoriaki,
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => (
  <>
    <Hero />
    <RestaurantsList restaurants={catalogo} />
  </>
)

export default Home
