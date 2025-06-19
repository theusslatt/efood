class Restaurant {
  id: number
  image: string
  title: string
  rating: string
  category: string[]
  description: string

  constructor(
    id: number,
    image: string,
    title: string,
    rating: string,
    category: string[],
    description: string
  ) {
    this.id = id
    this.image = image
    this.title = title
    this.rating = rating
    this.category = category
    this.description = description
  }
}

export default Restaurant
