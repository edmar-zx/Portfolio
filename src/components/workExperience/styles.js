import styled from "styled-components";

export const Container = styled.section`
  margin-top: 6.7rem;
  display: flex;
  flex-direction: column;
  position: relative; 
`;

export const BoxGradient = styled.div`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;

`
export const GradientImage = styled.img`
  width: 625px;
  height: 700px;
`

export const WorkExperienceSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  z-index: 1;
    
  @media (max-width: 1400px) {
    grid-template-columns: 1fr;
  }
`