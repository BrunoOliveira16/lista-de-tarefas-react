import styled from 'styled-components'
import variables from '../../styles/variables'

export const S = {
  Aside: styled.aside`
    padding: 16px;
    background-color: ${variables.white3};
    height: 100vh;
  `,
  Filters: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
    margin-top: 16px;
  `,
  Field: styled.input`
    width: 100%;
    padding: 8px;
    background-color: ${variables.white};
    border-radius: 8px;
    font-weight: bold;
    color: ${variables.gray4};
    border-color: ${variables.gray4};
  `
}
