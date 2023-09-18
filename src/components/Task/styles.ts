import styled from 'styled-components'

export const S = {
  Card: styled.div`
    background-color: #fcfcfc;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 16px;
    margin-bottom: 32px;
    border-radius: 16px;
  `,
  Title: styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  `,
  Tag: styled.span`
    padding: 4px 8px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    background-color: #e1a32a;
    border-radius: 8px;
    margin-right: 16px;
    display: inline-block;
  `,
  Description: styled.textarea`
    color: #8b8b8b;
    font-size: 14px;
    line-height: 24px;
    font-family: 'Roboto Mono', monospace;
    display: block;
    width: 100%;
    margin-top: 16px;
    margin-bottom: 16px;
    resize: none;
    border: none;
    background-color: transparent;
  `,
  ActionBar: styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 16px;
  `,
  Button: styled.button`
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    background-color: #2f3640;
    border-radius: 8px;
    margin-right: 8px;
  `
}
