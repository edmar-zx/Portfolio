import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background: linear-gradient(
    90deg,
    #130428 7%,
    #251043 34%,
    #38126d 57%,
    #261045 85%,
    #190634 100%
  );
  height: 192px;
  border-radius: 5px 5px 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: #4F228D; 
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
`;


export const WorkInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
`
export const WorkBoxTexts = styled.div`
   margin-left: 24px;
`

export const WorkImage = styled.img`
  width: 120px;
  height: 115px;

`;

export const WorkTitle = styled.h3`
  font-size: 24px;
  color: #fff;
  font-family: var(--font-poppins); 
`;

export const WorkSubtitle = styled.p`
  font-family: var(--font-poppins);
  margin-top: 10px;
  font-size: 10px;
  color: #fff;
  white-space: pre-line;
`;
export const WorkButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background: #38126d;
  color: white;
  border: 1px solid #693B93;
  border-radius: 10px;
  cursor: pointer;
  font-size: 10px;
`;