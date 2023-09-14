import styled from 'styled-components'
import { Props } from '.'

export const S = {
  Card: styled.div<Props>`
    padding: 8px;
    border: 1px solid ${(props) => (props.active ? '#1E90FF' : '#a1a1a1')};
    background-color: ${(props) => (props.active ? '#FFF' : '#fcfcfc')};
    color: ${(props) => (props.active ? '#1E90FF' : '#5e5e5e')};
    border-radius: 8px;
  `,
  Counter: styled.span`
    font-size: 24px;
    font-weight: bold;
    display: block;
  `,
  Label: styled.span`
    font-size: 14px;
  `
}
