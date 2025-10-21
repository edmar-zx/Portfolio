import React from 'react';
import { Container, SplitNavbarLeft, SplitNavbarRight, TextContainer, TextNavbar, Header, Icon } from './styles';

export default function Navbar() {
    return (
        <Header>
            <Container>
                <SplitNavbarLeft>
                    <Icon src='/Logo.svg'/>
                </SplitNavbarLeft>
                <SplitNavbarRight>
                    <TextContainer>
                        <TextNavbar><a>Home</a></TextNavbar>
                        <TextNavbar><a>About</a></TextNavbar>
                        <TextNavbar><a>Lab</a></TextNavbar>
                    </TextContainer>
                </SplitNavbarRight>
            </Container>
        </Header>
    )
}