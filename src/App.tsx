import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'
import Rotas from './routes'

import Footer from './components/Footer'
import Hero from './components/Hero'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Hero />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
