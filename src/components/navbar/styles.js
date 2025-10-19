import styled from "styled-components";

export const Header = styled.div`
    background-color: rgba(26, 11, 46, 1);
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    transition: transform 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;

    &.hidden {
        transform: translateY(-100%);
    }

    &.visible {
        transform: translateY(0);
    }
`;

export const Container = styled.div`
    width: 70%;
    display: flex;
    padding: 40px 0;
 
`;

export const TextNavbar = styled.p`
  color: #FFF;
  font-family: 'Plus Jakarta Sans', sans-serif;;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

export const SplitNavbarRight = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SplitNavbarLeft = styled.nav`
    width: 50%;
    display: flex;
`

export const TextContainer = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    list-style: none;
`
export const Icon = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 12px;
`;