import styled from 'styled-components'

import backgroundPattern from '../../assets/images/background.svg'

export const HeaderContainer = styled.header`
  background: url(${backgroundPattern}) no-repeat center center;
  background-size: cover;
  height: 186px;
  display: flex;
  justify-content: center;

  div {
    max-width: 1024px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
