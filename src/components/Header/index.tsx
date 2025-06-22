import { HeaderContainer } from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderContainer>
    <div>
      <h3>Restaurantes</h3>
      <img src={logo} alt="Efood" />
      <h3> 0 produto(s) no carrinho</h3>
    </div>
  </HeaderContainer>
)

export default Header
