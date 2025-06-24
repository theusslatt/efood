import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  max-width: 320px;
  background-color: ${cores.rosa};
  padding: 8px;
  color: ${cores.rosaClaro};

  button {
    width: 304px;
    padding: 4px;
    background-color: ${cores.rosaClaro};
    color: ${cores.rosa};
    border: none;
    cursor: pointer;
    font-weight: 700;
    margin-top: 8px;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 900px;
  margin-top: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 8px;
  line-height: 22px;
`
