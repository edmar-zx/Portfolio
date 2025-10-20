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
 
    @media (max-width: 768px) {
        justify-content: space-between;
        align-items: center;
    }
`;

export const TextNavbar = styled.p`
    color: #FFF;
    font-family: 'Plus Jakarta Sans', sans-serif;;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        color: #ccc;
    }
`;

export const SplitNavbarRight = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        display: none;
    }
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


export const HamburgerButton = styled.button`
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 101;

    @media (max-width: 768px) {
        display: flex;
    }

    span {
        width: 100%;
        height: 3px;
        background: #FFF;
        border-radius: 2px;
    }
`;

export const MobileMenu = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== '$isOpen',
})`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(26, 11, 46, 0.98);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 99;
    transition: transform 0.5s ease-in-out;

    @media (max-width: 768px) {
        display: flex;
        transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    }
`;

export const MobileMenuItem = styled.div`
    margin: 20px 0;
    
    a {
        color: #FFF;
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 24px;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            color: #ccc;
        }
    }
`;