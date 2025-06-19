import Footer from './components/Footer'
import Hero from './components/Hero'
import RestaurantsList from './components/RestaurantsList'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Hero />
      <RestaurantsList />
      <Footer />
    </>
  )
}

export default App
