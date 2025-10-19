import React, { useEffect, useState } from 'react';
import { Container, SplitNavbarLeft, SplitNavbarRight, TextContainer, TextNavbar, Header, Icon } from './styles';

export default function Navbar() {

    const[showNavbar, setShowNavbar] =  useState(true);
    const[lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if(window.scrollY > lastScrollY) {
            setShowNavbar(false);
        }
        else {
            setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY])


    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <Header className={showNavbar ? 'active': 'hidden'}>
            <Container>
                <SplitNavbarLeft>
                    <Icon src='/Logo.svg' />
                </SplitNavbarLeft>
                <SplitNavbarRight>
                    <TextContainer>
                        <TextNavbar><a onClick={() => scrollToSection('home')}>Home</a></TextNavbar>
                        <TextNavbar><a onClick={() => scrollToSection('about')}>About</a></TextNavbar>
                        <TextNavbar><a onClick={() => scrollToSection('lab')}>Lab</a></TextNavbar>
                    </TextContainer>
                </SplitNavbarRight>
            </Container>
        </Header>
    )
}