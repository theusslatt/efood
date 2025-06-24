import product from '../../models/Product'
import ProductsCard from '../ProductsCard'
import { Container, List } from './styles'

type Props = {
  products: product[]
}

const ProductsList = ({ products }: Props) => (
  <Container>
    <List>
      {products.map((product) => (
        <ProductsCard
          key={product.id}
          title={product.title}
          image={product.image}
          description={product.description}
        />
      ))}
    </List>
  </Container>
)

export default ProductsList
