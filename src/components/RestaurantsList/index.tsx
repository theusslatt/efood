import Restaurant, { Restaurant2 } from '../Restaurant'
import { Container, List } from './styles'

const RestaurantsList = () => (
  <Container>
    <List>
      <Restaurant />
      <Restaurant2 />
      <Restaurant2 />
      <Restaurant2 />
      <Restaurant2 />
      <Restaurant2 />
    </List>
  </Container>
)

export default RestaurantsList
