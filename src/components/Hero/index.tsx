import { Link } from 'react-router-dom'
import { HeroBackground } from './styles'
import logo from '../../assets/images/logo.svg'

const Hero = () => (
  <HeroBackground>
    <Link to="/">
      <img src={logo} alt="efood" />
    </Link>
    <div>
      <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
    </div>
  </HeroBackground>
)

export default Hero
