import styled from 'styled-components'
import { cores } from '../../styles'

import backgroundPattern from '../../assets/images/background.svg'

export const HeroBackground = styled.section`
  background: url(${backgroundPattern}) no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 384px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  img {
    margin-bottom: 140px;
  }

  h1 {
    color: ${cores.rosa};
    text-align: center;
    font-size: 36px;
    font-weight: 900;
    max-width: 540px;
  }
`
