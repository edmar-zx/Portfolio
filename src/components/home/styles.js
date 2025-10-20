import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
`;

export const BoxProfile = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media(max-width: 1024px) {
      flex-direction: column;
      align-items: center;
    }
`;

export const ProfileImage = styled.img`
  width: 385px;
  height: 431px;
`;

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  left: -40px;

  @media(max-width: 1024px) {
      left: 0;
      margin-top: 2rem;
      align-items: center;
    }
`;

export const BoxDown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;

  @media(max-width: 1024px) {
      align-items: center;
      gap: 2rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
`
export const BoxTop = styled.div`
  position: relative;
  left: -20px;
  margin-top: 20px; 

  @media(max-width: 1024px) {
      left: 0;
    }
`;

export const BoxAbout = styled.div`
  display: flex;
  flex-direction: column;

  @media(max-width: 1024px) {
    gap: 1rem;
  }
`;

export const FacebookHighlight = styled.span`
  color: #1877f2; 
`;

export const FacebookIcone = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 8px;
`;

export const DescriptionBox = styled.div`
  margin-top: 6rem;
`;