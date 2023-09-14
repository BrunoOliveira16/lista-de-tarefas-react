import styled from 'styled-components'

export const S = {
  Aside: styled.aside`
    padding: 16px;
    background-color: #eee;
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
    background-color: #fff;
    border-radius: 8px;
    font-weight: bold;
    color: #666666;
    border-color: #666666;
  `
}
