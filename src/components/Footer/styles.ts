import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  height: 298px;
  background-color: ${cores.rosaClaro};
  text-align: center;
  padding: 40px 0;

  ul {
    display: flex;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 80px;

    li {
      margin-right: 8px;
    }
  }

  p {
    width: 480px;
    margin: 0 auto;
    font-size: 10px;
  }
`
