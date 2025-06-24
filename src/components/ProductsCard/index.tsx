import { Card, Description, Title } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const ProductsCard = ({ image, title, description }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <button>Adicionar ao carrinho</button>
  </Card>
)

export default ProductsCard
