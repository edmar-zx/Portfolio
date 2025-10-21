'use client';
import { styled, createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: #11071F;
    color: #333;
  }

  h1, h2, h3 {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Text = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  text-align: center;
  margin-bottom: 10px;
`;

const BaseText = styled.p`
  font-weight: 400;
  color: #fff;
  text-align: start;
  font-family: 'Preahvihear', sans-serif;
`;

const typing = keyframes`
  from {
    width: 0ch;
  }
  to {
    width: 100%;
  }
`;

export const TextHeading1 = styled(BaseText).attrs({ as: "h1" })`
  font-size: 48px;
  line-height: 1.267;
  letter-spacing: 0.96px;
  overflow: hidden;
  white-space: nowrap;
  animation: ${typing} 5s steps(100) 1 forwards;

  br {
    display: inline;
  }

  @media (max-width: 1280px) {
    font-size: 40px;
  }

  @media (max-width: 1024px) {
    font-size: 40px;
    text-align: center;
    width: 100%;
    
    br {
      display: none;
    }
  }

  @media (max-width: 768px) {
    font-size: 32px;
      white-space: normal;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  
  }
`;

export const TextHeading2 = styled(BaseText).attrs({ as: "h2" })`
  font-size: 40px;
  @media (max-width: 1024px) {
    font-size: 36px;
  }
`;

export const TextBodyLarge = styled(BaseText)`
  font-size: 24px;
  @media (max-width: 1024px) {
    font-size: 20px;
    text-align: center;
  }
`

 export const TextBodyMedium = styled(BaseText)`
  font-size: 20px;

  @media (max-width: 1024px) {
    text-align: center;
    font-size: 16px;
  }
`;

export const TextBodySmall = styled(BaseText)`
  font-size: 16px;

  @media (max-width: 1024px) {
    font-size: 14px;
    text-align: center;
  }
`

export const TextCaption = styled(BaseText)`
  font-size: 12px;
`;

export const Highlight = styled.span`
  color: #7127BA;
`;

export default GlobalStyle;