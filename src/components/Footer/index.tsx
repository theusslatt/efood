import { FooterContainer } from './styles'
import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <FooterContainer>
    <img src={logo} alt="Efood" />
    <ul>
      <li>
        <a href="#">
          <img src={instagram} alt="Instagram" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={facebook} alt="Facebook" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={twitter} alt="Twitter" />
        </a>
      </li>
    </ul>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </FooterContainer>
)

export default Footer
