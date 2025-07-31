import { Link } from 'react-router-dom'
import { HeaderContainer } from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderContainer>
    <div>
      <h3>
        <Link to="/">Restaurantes</Link>
      </h3>
      <Link to="/">
        <img src={logo} alt="Efood" />
      </Link>
      <h3>0 produto(s) no carrinho</h3>
    </div>
  </HeaderContainer>
)

export default Header
