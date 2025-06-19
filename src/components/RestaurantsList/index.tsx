import restaurant from '../../models/Restaurant'
import RestaurantCard from '../RestaurantCard'
import { Container, List } from './styles'

type Props = {
  restaurants: restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <Container>
    <List>
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          image={restaurant.image}
          title={restaurant.title}
          rating={restaurant.rating}
          category={restaurant.category}
          description={restaurant.description}
        />
      ))}
    </List>
  </Container>
)

export default RestaurantsList
