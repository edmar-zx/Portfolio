import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  margin-top: 6.7rem;
`;

export const Title = styled.h1`
  color: #000;
  font-family: Arial, sans-serif;
  text-align: center;
  font-size: 24px;
`;

export const BoxProfile = styled.div`
  display: flex;
`;

export const ProfileImage = styled.img`
  width: 385px;
  height: 431px;
  
`

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  left: -40px;
`;

export const BoxDown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
 
`
export const BoxTop = styled.div`
  position: relative;
  left: -20px;
  margin-top: 20px; 

`

export const Highlight = styled.span`
  color: #7127BA;
`;

const BaseText = styled.p`
  font-weight: 400;
  color: #fff;
  text-align: start;
  font-family: 'Preahvihear', sans-serif;
`;

export const IntroText = styled(BaseText)`
  font-size: 20px;
`;

export const HeroTitle = styled(BaseText).attrs({ as: "h1" })`
  font-size: 48px;
`;

export const CaptionText = styled(BaseText)`
  font-size: 12px;
`;