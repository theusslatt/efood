import { HeroBackground } from './styles'
import logo from '../../assets/images/logo.svg'

const Hero = () => (
  <HeroBackground>
    <img src={logo} alt="efood" />
    <div>
      <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
    </div>
  </HeroBackground>
)

export default Hero
