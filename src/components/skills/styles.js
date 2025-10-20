import styled from "styled-components";

export const Container = styled.section`
    margin-top: 10rem;
`

export const BoxText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;

    @media (max-width: 1024px) {
        margin-bottom: 2rem;
        gap: 2rem;
    }
`

export const BoxSkills = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`
export const ImageBox = styled.div`
    display: flex;
    justify-content: center;
`

export const ImageSkills = styled.img`
   width: 895px;
   height: 563px;

    @media (max-width: 1024px) {
        width: 795px;
        height: 443px;
    }

    @media (max-width: 800px) {
        width: 495px;
        height: 263px;
    }
`