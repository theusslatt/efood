import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};
  font-size: 12px;
  padding: 6px 10px;
  display: inline-block;
`
