import styled from "styled-components";

export const Container = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "reverse",
})`
  display: flex;
  gap: 2rem;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

  @media (max-width: 1400px) {
    flex-direction: column;
  }
`;

export const ProjectContent = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "reverse",
})`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 2rem;
    width: 50%;
    align-items: ${({ reverse }) => (reverse ? "flex-end" : "flex-start")};
   
    @media (max-width: 1400px) {
        width: 100%;
    }
`;

export const BoxText = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProjectTag = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #9857D3;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;

export const ProjectTitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 2rem;
    color: #CCD6F6;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const BoxDescription = styled.div`
    background: radial-gradient(circle at center, rgba(0, 0, 0, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%);
    backdrop-filter: blur(30px);
    border-radius: 12px;
    padding: 2rem;
    width: 113%;

    @media (max-width: 1400px) {
        width: 100%;
        padding: 1.5rem;
    }

    @media (max-width: 480px) {
        padding: 1rem;
    }
`;

export const ProjectDescription = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: #CCD6F6;
    font-size: 1.2rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const BoxIcons = styled.div`
    display: flex;
    gap: 1.5rem;

    @media (max-width: 480px) {
        gap: 1rem;
    }
`;

export const Icon = styled.img`
    width: 2rem;
    height: 2rem;
    object-fit: contain;

    @media (max-width: 480px) {
        width: 1.5rem;
        height: 1.5rem;
    }
`;

export const BoxImage = styled.div`
    background-color: #2B0B3A;
    width: 50%;
    border-radius: 10px;
    cursor: pointer;

    @media (max-width: 1400px) {
        width: 100%;
    }
`;

export const ImageProject = styled.img.withConfig({
    shouldForwardProp: (prop) => prop !== "reverse",
})`
    padding-top: 3rem;
    padding-left: ${({ reverse }) => (reverse ? "0" : "3rem")};
    padding-right: ${({ reverse }) => (reverse ? "3rem" : "0")};
    width: 100%;
    height: auto;
    border-radius: 10px;

    @media (max-width: 768px) {
        padding-top: 1.5rem;
        padding-left: ${({ reverse }) => (reverse ? "0" : "1.5rem")};
        padding-right: ${({ reverse }) => (reverse ? "1.5rem" : "0")};
    }

    @media (max-width: 480px) {
        padding: 1rem;
    }
`;

export const BoxGradients = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "gradients",
})`
  position: relative;
  top: -150px;
  left: ${({ gradients }) => (gradients ? "-800px" : "-400px")};
  z-index: -1;

  @media (max-width: 1400px) {
    top: -550px;
    left: ${({ gradients }) => (gradients ? "-100px" : "-200px")};
  }

  @media (max-width: 768px) {
    top: -550px;
    left: ${({ gradients }) => (gradients ? "-150px" : "-300px")};
  }
`;

export const Gradient1 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 642px;
  height: 720px;
  z-index: 1;
`
export const Gradient2 = styled.img`
  position: absolute;
  top: 0;
  left: 226px;
  width: 625px;
  height: 700px;
  z-index: 2;
`

export const Gradient3 = styled.img`
  position: absolute;
  top: 0;
  left: 226px;
  width: 625px;
  height: 700px;
  z-index: 2;
`
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
    position: relative;
    max-width: 90%;
    max-height: 90%;
    transform: scale(1.15);
    transition: transform 0.5s ease;
    &:hover {
        transform: scale(1.60);
    }

    @media (max-width: 1024px) {
     transform: scale(1);
        &:hover {
             transform: scale(1.15);
        }
    }
    
    @media (max-width: 768px) {
     transform: scale(0.8);
        &:hover {
            transform: scale(1);
        }
    }
`;

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  display: block;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  width: 30px;
  height: 30px;
  background-color: rgba(0,0,0,0.5);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);  
  }
`;