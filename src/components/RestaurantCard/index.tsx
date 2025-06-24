import { Link } from 'react-router-dom'

import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag'
import { Card, Description, Infos, Rating, Title } from './styles'

type Props = {
  image: string
  title: string
  rating: string
  category: string[]
  description: string
}

const Restaurant = ({ image, title, rating, category, description }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {category.map((category) => (
        <Tag key={category}>{category}</Tag>
      ))}
    </Infos>
    <div>
      <Title>Hioki Sushi</Title>
      <Rating>
        <span>{rating}</span>
        <img src={estrela} alt="Estrela" />
      </Rating>
    </div>
    <Description>{description}</Description>
    <Link to="/perfil">
      <button>Saiba mais</button>
    </Link>
  </Card>
)

export default Restaurant
