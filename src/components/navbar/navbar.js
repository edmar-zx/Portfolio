import React from 'react';
import { Container, SplitNavbar, SplitNavbarLeft, SplitNavbarRight, TextContainer, TextNavbar } from './navbar.styled';

export default function Navbar() {
    return (
        <Container>
            <SplitNavbarLeft>
                <TextNavbar>oi</TextNavbar>
            </SplitNavbarLeft>
            <SplitNavbarLeft>
                  <TextContainer>
                    <TextNavbar>Home</TextNavbar>
                    <TextNavbar>About</TextNavbar>
                    <TextNavbar>Lab</TextNavbar>
                </TextContainer>
            </SplitNavbarLeft>

        </Container>
    )
}