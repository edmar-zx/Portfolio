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
  padding: 1rem 2rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: #4f228d;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  @media (max-width: 1024px) {
    height: auto;
    flex-direction: column;
    padding: 2rem 1.5rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

export const WorkInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const WorkBoxTexts = styled.div`
  margin-left: 24px;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

export const WorkImage = styled.img`
  width: 120px;
  height: 115px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 90px;
    height: 85px;
  }

  @media (max-width: 480px) {
    width: 70px;
    height: 65px;
  }
`;

export const WorkTitle = styled.h3`
  font-size: 24px;
  color: #fff;
  font-family: var(--font-poppins);

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const WorkSubtitle = styled.p`
  font-family: var(--font-poppins);
  margin-top: 10px;
  font-size: 10px;
  color: #fff;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 9px;
  }

  @media (max-width: 480px) {
    font-size: 8px;
  }
`;

export const WorkButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background: #38126d;
  color: white;
  border: 1px solid #693b93;
  border-radius: 10px;
  cursor: pointer;
  font-size: 10px;
  transition: all 0.3s ease;

  &:hover {
    background: #4f228d;
  }

  @media (max-width: 768px) {
    font-size: 9px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 8px;
    padding: 7px 14px;
  }
`;