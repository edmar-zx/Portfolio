import styled from "styled-components";

export const Container = styled.section`
    margin-top: 10rem;

    @media (max-width: 768px) {
        margin-top: 5rem;
        padding: 0 1rem;
    }
`;

export const ProjectCard = styled.div`
    display: flex;
    gap: 2rem;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

export const ProjectContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 2rem;
    width: 50%;

    @media (max-width: 1024px) {
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

    @media (max-width: 1024px) {
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

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const ImageProject = styled.img`
    padding-top: 3rem;
    padding-left: 3rem;
    width: 100%;
    height: auto;
    border-radius: 10px;

    @media (max-width: 768px) {
        padding-top: 1.5rem;
        padding-left: 1.5rem;
    }

    @media (max-width: 480px) {
        padding: 1rem;
    }
`;
