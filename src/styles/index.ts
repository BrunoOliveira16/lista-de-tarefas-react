import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        list-style: none;
    }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;

  @media screen and (max-width: 765px) {
    display: block;
  }
`

export const MainContainer = styled.main`
  height: 100vh;
  overflow-y: scroll;
  padding: 0 40px;

  @media screen and (max-width: 765px) {
    width: 100%;
    height: auto;
    padding: 16px;
  }
`

export const Title = styled.h2`
  display: block;
  margin: 40px 0;
  font-size: 18px;
  font-weight: bold;
`

export const Field = styled.input`
  width: 100%;
  padding: 8px;
  background-color: ${variables.white};
  border-radius: 8px;
  font-weight: bold;
  color: ${variables.gray4};
  border-color: ${variables.gray4};
`
export const Button = styled.button`
  color: ${variables.white};
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variables.gray3};
  border-radius: 8px;
  margin-right: 8px;
`

export const SaveButton = styled(Button)`
  background-color: ${variables.green};
`

export default GlobalStyle
