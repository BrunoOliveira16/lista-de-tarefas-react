import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'
import { Button } from '../components/Task/styles'

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
`

export const MainContainer = styled.main`
  height: 100vh;
  overflow-y: scroll;
  padding: 0 40px;
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

export const SaveButton = styled(Button)`
  background-color: ${variables.green};
`

export default GlobalStyle
