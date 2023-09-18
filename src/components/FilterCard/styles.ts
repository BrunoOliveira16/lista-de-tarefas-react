import styled from 'styled-components'
import variables from '../../styles/variables'
import { Props } from '.'

type PropsOnlyActive = Omit<Props, 'counter' | 'label'>

export const S = {
  Card: styled.div<PropsOnlyActive>`
    padding: 8px;
    border: 1px solid
      ${(props) => (props.active ? `${variables.blue}` : `${variables.gray6}`)};
    background-color: ${(props) =>
      props.active ? `${variables.white}` : `${variables.white2}`};
    color: ${(props) =>
      props.active ? `${variables.blue}` : `${variables.gray5}`};
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
