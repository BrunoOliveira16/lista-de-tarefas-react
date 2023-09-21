import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variables from '../../styles/variables'

export const S = {
  Circle: styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    position: fixed;
    bottom: 40px;
    right: 40px;

    font-size: 40px;
    text-decoration: none;
    color: ${variables.white};
    background-color: ${variables.green};
    border-radius: 50%;
  `
}
